class Keyboard extends Input {

    private keys = 'zsxdcvgbhnjmq2w3er5t6y7ui9o0p';

    constructor() {
        super('keyboard');
        window.onkeydown = evt => this.start(this.forKey(evt.which), Notes.defaultVelocity);
        window.onkeyup = evt => this.stop(this.forKey(evt.which));
    }

    private forKey(n: number): Pitch {
        return Notes.forNumber(n);
    }

} 