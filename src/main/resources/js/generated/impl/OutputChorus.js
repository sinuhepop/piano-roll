class OutputChorus extends Output {
    constructor(id, output, delay, decay, times) {
        super(id);
        this.output = output;
        this.delay = delay;
        this.decay = decay;
        this.times = times;
    }
    start(pitch, velocity) {
        for (var i = 0; i < this.times; i++) {
            velocity *= this.decay;
            setTimeout(() => this.output.start(pitch, velocity, this.delay * (i + 1)));
        }
    }
    stop(pitch) {
        setTimeout(() => this.output.stop(pitch), this.delay * (this.times + 1));
    }
    receive(m) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0cHV0Q2hvcnVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHlwZXNjcmlwdC9pbXBsL091dHB1dENob3J1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBbUIsU0FBUSxNQUFNO0lBTzdCLFlBQVksRUFBRSxFQUFFLE1BQWMsRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLEtBQWE7UUFDdkUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFZLEVBQUUsUUFBUTtRQUN4QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QixVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLENBQUM7SUFFTCxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQVk7UUFDYixVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBVTtRQUNkLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2IsS0FBSyxPQUFPO2dCQUNSLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQzFCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNsQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDdkIsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgT3V0cHV0Q2hvcnVzIGV4dGVuZHMgT3V0cHV0IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3V0cHV0OiBhbnk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWxheTogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVjYXk6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpbWVzOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZCwgb3V0cHV0OiBPdXRwdXQsIGRlbGF5OiBudW1iZXIsIGRlY2F5OiBudW1iZXIsIHRpbWVzOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoaWQpO1xuICAgICAgICB0aGlzLm91dHB1dCA9IG91dHB1dDtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLmRlY2F5ID0gZGVjYXk7XG4gICAgICAgIHRoaXMudGltZXMgPSB0aW1lcztcbiAgICB9XG5cbiAgICBzdGFydChwaXRjaDogUGl0Y2gsIHZlbG9jaXR5KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50aW1lczsgaSsrKSB7XG4gICAgICAgICAgICB2ZWxvY2l0eSAqPSB0aGlzLmRlY2F5O1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm91dHB1dC5zdGFydChwaXRjaCwgdmVsb2NpdHksIHRoaXMuZGVsYXkgKiAoaSArIDEpKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0b3AocGl0Y2g6IFBpdGNoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vdXRwdXQuc3RvcChwaXRjaCksIHRoaXMuZGVsYXkgKiAodGhpcy50aW1lcyArIDEpKTtcbiAgICB9XG5cbiAgICByZWNlaXZlKG06IE1lc3NhZ2UpIHtcbiAgICAgICAgc3dpdGNoIChtLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSBtLnZlbG9jaXR5O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50aW1lczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5ICo9IHRoaXMuZGVjYXk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vdXRwdXQuc3RhcnQobS5waXRjaCwgdmVsb2NpdHksIHRoaXMuZGVsYXkgKiAoaSArIDEpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RvcCc6XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm91dHB1dC5zdG9wKG0ucGl0Y2gpLCB0aGlzLmRlbGF5ICogKHRoaXMudGltZXMgKyAxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=