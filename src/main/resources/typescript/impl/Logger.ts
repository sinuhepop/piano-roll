class Logger extends Output {

    constructor() {
        super('logger');
    }

    receive(m: Message) {
        console.log('' + m.pitch, m);
    }

}