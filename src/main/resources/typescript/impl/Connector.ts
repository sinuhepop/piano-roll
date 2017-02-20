class Connector {

    protected readonly inputs: Input[];
    protected readonly outputs: Output[];


    addInput(i: Input) {
        this.inputs.push(i);
        i.onStart = (p: Pitch, velocity: number) => {
            this.outputs.forEach(o => {
                if (o.id != i.id) {
                    o.start(p, velocity)
                }
            });
        }
        i.onStop = (p: Pitch) => {
            this.outputs.forEach(o => {
                if (o.id != i.id) {
                    o.stop(p)
                }
            });
        }
    }

    addOutput(o: Output) {
        this.outputs.push(o);
    }

}