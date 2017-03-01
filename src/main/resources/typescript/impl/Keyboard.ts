class Keyboard extends Input {

    private readonly keys: 'zsxdcvgbhnjmq2w3er5t6y7ui9o0p';
    private readonly velocity: number = Notes.defaultVelocity;
    private readonly channel: number = 1;

    constructor() {
        super('keyboard');

        window.onkeydown = evt => this.send({
            type: 'start',
            pitch: this.forKey(evt.which),
            velocity: this.velocity,
            channel: this.channel
        });
        window.onkeyup = evt => this.send({
            type: 'stop',
            pitch: this.forKey(evt.which)
        });
    }

    private forKey(n: number): Pitch {
        return Notes.forNumber(n);
    }

} 