abstract class Output {

    readonly id: string;

    constructor(id) {
        this.id = id;
    }

    abstract start(p: Pitch, velocity: number): void;
    abstract stop(p: Pitch): void;

}