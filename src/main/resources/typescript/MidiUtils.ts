/// <reference path="ext/webmidi.d.ts" />

class MidiUtils {

    private static enabled: boolean = false;
    private static info: WebMidi.MIDIAccess;
    static outputs: Array<WebMidi.MIDIOutput>;
    static inputs: Array<WebMidi.MIDIInput>;

    static initialize() {
        return new Promise((resolve, reject) => {
            try {
                navigator.requestMIDIAccess().then(
                    x => {
                        MidiUtils.info = x;
                        MidiUtils.inputs = Array.from(x.inputs.values());
                        MidiUtils.outputs = Array.from(x.outputs.values());
                        MidiUtils.enabled = true;
                        resolve();
                    }
                );
            } catch (e) {
                MidiUtils.enabled = false;
                reject(e);
            }
        });
    };

    static decode(data: Uint8Array): MidiMessage {
        var m = new MidiMessage();
        m.command = data[0] >> 4;
        m.channel = data[0] & 0xf;
        m.type = data[0] & 0xf0;
        m.note = data[1];
        m.velocity = data[2];
        return m;
    };

    static encode(m: MidiMessage) {
        var x = (m.channel & 0xf) | (m.type & 0xf0) | (m.command << 4);
        return [x, m.note, m.velocity];
    };

    static createInput(id: string, n: number, output: Output) {
        return new MidiInput(id, this.inputs[n], output);
    }

    static createOutput(id: string, n: number) {
        return new MidiOutput(id, this.outputs[n]);
    }

    static toPitch(code: number): Pitch {
        return { octave: Math.trunc(code / 12), pitchClass: code % 12 };
    }

    static fromPitch(pitch: Pitch) {
        return pitch.octave * 12 + pitch.pitchClass;
    }

}

class MidiMessage {
    command: number;
    channel: number;
    type: number;
    note: number;
    velocity: number;
}

class MidiInput implements Input {

    readonly id;
    private readonly input: WebMidi.MIDIInput;
    private readonly output: Output;

    constructor(id: string, input: WebMidi.MIDIInput, output: Output) {

        this.id = id;
        this.input = input;
        this.output = output;

        this.input.onmidimessage = evt => {
            var m = MidiUtils.decode(evt.data);
            var pitch = MidiUtils.toPitch(m.note);
            console.log(evt.data, m, pitch, Notes.toString(pitch));
            if (m.type == 128 || (m.type == 144 && m.velocity == 0)) {
                output.stop(pitch);
            } else if (m.type == 144) {
                output.start(pitch);
            }
        }
    }
}

class MidiOutput implements Output {

    readonly id;
    private readonly output: WebMidi.MIDIOutput;

    constructor(id: string, output: WebMidi.MIDIOutput) {
        this.id = id;
        this.output = output;
    }

    start(pitch: Pitch) {
        var m: MidiMessage = { command: 9, channel: 0, type: 144, note: MidiUtils.fromPitch(pitch), velocity: 100 };
        console.log(m, pitch);
        this.output.send(MidiUtils.encode(m));
    }

    stop(pitch: Pitch) {
        var m: MidiMessage = { command: 9, channel: 0, type: 144, note: MidiUtils.fromPitch(pitch), velocity: 0 };
        this.output.send(MidiUtils.encode(m));
    }

}