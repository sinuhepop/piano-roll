abstract class Input {

    readonly id: string;
    onStart: ((p: Pitch, velocity: number) => any) | null;
    onStop: ((p: Pitch) => any) | null;

    constructor(id: string) {
        this.id = id;
    }

    protected start(p: Pitch, velocity: number) {
        if (this.onStart != null) {
            this.onStart(p, velocity);
        }
    }

    protected stop(p: Pitch) {
        if (this.onStop != null) {
            this.onStop(p);
        }
    }

}