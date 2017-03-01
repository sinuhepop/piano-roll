abstract class Output {

    readonly id: string;

    constructor(id) {
        this.id = id;
    }

    abstract receive(m: Message): void;

}