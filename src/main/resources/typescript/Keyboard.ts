class Kayboard implements Input {

    private keys = 'zsxdcvgbhnjmq2w3er5t6y7ui9o0p';

    id = 'keyboard';
    private output: Output;

    constructor(output: Output) {
        this.output = output;
        window.onkeydown = evt => output.start(this.forKey(evt.which));
        window.onkeyup = evt => output.stop(this.forKey(evt.which));
    }

    private forKey(n: number): Pitch {
        return Notes.forNumber(n);
    }



}