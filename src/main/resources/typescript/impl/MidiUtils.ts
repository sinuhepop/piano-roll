/// <reference path="../ext/webmidi.d.ts" />

class MidiMessage {
    command: number;
    channel: number;
    type: number;
    note: number;
    velocity: number;
}

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

    static createInput(id: string, n: number) {
        return new MidiInput(id, this.inputs[n]);
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



class MidiInput extends Input {

    private readonly input: WebMidi.MIDIInput;

    constructor(id: string, input: WebMidi.MIDIInput) {
        super(id);
        this.input = input;

        this.input.onmidimessage = evt => {
            var m = MidiUtils.decode(evt.data);
            var pitch = MidiUtils.toPitch(m.note);
            console.log(evt.data, m, pitch, Notes.toString(pitch));
            if (m.type == 128 || (m.type == 144 && m.velocity == 0)) {
                this.send({
                    type: 'stop',
                    pitch: pitch
                });
            } else if (m.type == 144) {
                this.send({
                    type: 'start',
                    pitch: pitch,
                    velocity: m.velocity / 127,
                    channel: 1
                });
            }
        }
    }
}

class MidiOutput extends Output {

    private readonly output: WebMidi.MIDIOutput;

    constructor(id: string, output: WebMidi.MIDIOutput) {
        super(id);
        this.output = output;
    }

    start(p: Pitch, velocity: number) {
        this.output.send(MidiUtils.encode({ //
            command: 9, //
            channel: 0, //
            type: 144, //
            note: MidiUtils.fromPitch(p), // 
            velocity: Math.trunc(velocity * 127) // 
        }));
    }

    stop(p: Pitch) {
        this.output.send(MidiUtils.encode({ //
            command: 9, //
            channel: 0, //
            type: 144, //
            note: MidiUtils.fromPitch(p), // 
            velocity: 0
        }));
    }

    receive(m: Message) {
        switch (m.type) {
            case 'start': return this.output.send(MidiUtils.encode({ //
                command: 9, //
                channel: 0, //
                type: 144, //
                note: MidiUtils.fromPitch(m.pitch), // 
                velocity: Math.trunc(m.velocity * 127) // 
            }));
            case 'stop': return this.output.send(MidiUtils.encode({ //
                command: 9,
                channel: 0,
                type: 144,
                note: MidiUtils.fromPitch(m.pitch),
                velocity: 0
            }));
        }
    }

}