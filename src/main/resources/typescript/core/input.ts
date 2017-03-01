abstract class Input {

    readonly id: string;
    onSend: ((m: Message) => any) | null;

    constructor(id: string) {
        this.id = id;
    }

    protected send(m: Message) {
        if (this.onSend != null) {
            this.onSend(m);
        }
    }

}