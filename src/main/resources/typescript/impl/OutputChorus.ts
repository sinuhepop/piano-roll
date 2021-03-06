class OutputChorus extends Output {

    private readonly output: any;
    private readonly delay: number;
    private readonly decay: number;
    private readonly times: number;

    constructor(id, output: Output, delay: number, decay: number, times: number) {
        super(id);
        this.output = output;
        this.delay = delay;
        this.decay = decay;
        this.times = times;
    }

    start(pitch: Pitch, velocity) {
        for (var i = 0; i < this.times; i++) {
            velocity *= this.decay;
            setTimeout(() => this.output.start(pitch, velocity, this.delay * (i + 1)));
        }

    }

    stop(pitch: Pitch) {
        setTimeout(() => this.output.stop(pitch), this.delay * (this.times + 1));
    }

    receive(m: Message) {
        switch (m.type) {
            case 'start':
                let velocity = m.velocity;
                for (let i = 0; i < this.times; i++) {
                    velocity *= this.decay;
                    setTimeout(() => this.output.start(m.pitch, velocity, this.delay * (i + 1)));
                }
                break;
            case 'stop':
                setTimeout(() => this.output.stop(m.pitch), this.delay * (this.times + 1));
                break;
        }
    }

}