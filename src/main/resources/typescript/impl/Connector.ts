class Connector {

    protected readonly inputs: Input[] = [];
    protected readonly outputs: Output[] = [];

    addInput(i: Input) {
        this.inputs.push(i);
        i.onSend = (m: Message) => {
            this.outputs.forEach(o => {
                if (o.id != i.id) {
                    o.receive(m);
                }
            });
        }
    }

    addOutput(o: Output) {
        this.outputs.push(o);
    }

}