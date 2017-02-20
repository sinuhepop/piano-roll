type WaveType = 'sine' | 'square' | 'sawtooth' | 'triangle';

class Oscillator extends Output {

    private readonly osc: OscillatorNode;

    constructor(type: WaveType) {
        super('oscillator');
        var ctx = new AudioContext();
        this.osc = ctx.createOscillator();
        this.osc.type = type;
        this.osc.connect(ctx.destination);
    }

    start(pitch: Pitch, velocity:number) {
        this.osc.frequency.value = Notes.frequency(pitch);
        this.osc.start();
    }

    stop(pitch: Pitch) {
        this.osc.stop();
    }

}