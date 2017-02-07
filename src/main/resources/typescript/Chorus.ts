class Chorus implements Output {

    private output: Output;
    private delay: number;

    constructor(output: Output, delay: number) {
        this.output = output;
        this.delay = delay;
    }

    id: 'chorus';

    start(pitch: Pitch) {
        setTimeout(() => {
            this.output.start(pitch);
        }, this.delay);
    };

    stop(pitch: Pitch) {
        setTimeout(() => {
            this.output.stop(pitch);
        }, this.delay);
    };


}