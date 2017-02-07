type WaveType = 'sine' | 'square' | 'sawtooth' | 'triangle';


class Oscillator implements Output {

    private readonly osc: OscillatorNode;
    id: 'oscillator';

    constructor(type: WaveType) {
        var ctx = new AudioContext();
        this.osc = ctx.createOscillator();
        this.osc.type = type;
        this.osc.connect(ctx.destination);
    }

    start(pitch: Pitch) {
        this.osc.frequency.value = Notes.frequency(pitch);
        this.osc.start();
    }

    stop(pitch: Pitch) {
        this.osc.stop();
    }

}