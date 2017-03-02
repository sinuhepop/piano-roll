class Logger extends Output {

    constructor() {
        super('logger');
    }

    receive(m: Message) {
        console.log(Notes.toString(m.pitch), m);
    }

}