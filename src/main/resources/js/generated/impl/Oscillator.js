class Oscillator extends Output {
    constructor(type) {
        super('oscillator');
        var ctx = new AudioContext();
        this.osc = ctx.createOscillator();
        this.osc.type = type;
        this.osc.connect(ctx.destination);
    }
    start(pitch, velocity) {
        this.osc.frequency.value = Notes.frequency(pitch);
        this.osc.start();
    }
    stop(pitch) {
        this.osc.stop();
    }
    receive(m) {
        switch (m.type) {
            case 'start':
                this.osc.frequency.value = Notes.frequency(m.pitch);
                this.osc.start();
                break;
            case 'stop':
                this.osc.stop();
                break;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3NjaWxsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3R5cGVzY3JpcHQvaW1wbC9Pc2NpbGxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLGdCQUFpQixTQUFRLE1BQU07SUFJM0IsWUFBWSxJQUFjO1FBQ3RCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQVksRUFBRSxRQUFnQjtRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBWTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFVO1FBQ2QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDYixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQixLQUFLLENBQUM7WUFDVixLQUFLLE1BQU07Z0JBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDekIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgV2F2ZVR5cGUgPSAnc2luZScgfCAnc3F1YXJlJyB8ICdzYXd0b290aCcgfCAndHJpYW5nbGUnO1xuXG5jbGFzcyBPc2NpbGxhdG9yIGV4dGVuZHMgT3V0cHV0IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3NjOiBPc2NpbGxhdG9yTm9kZTtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IFdhdmVUeXBlKSB7XG4gICAgICAgIHN1cGVyKCdvc2NpbGxhdG9yJyk7XG4gICAgICAgIHZhciBjdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMub3NjID0gY3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAgICAgdGhpcy5vc2MudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMub3NjLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKTtcbiAgICB9XG5cbiAgICBzdGFydChwaXRjaDogUGl0Y2gsIHZlbG9jaXR5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5vc2MuZnJlcXVlbmN5LnZhbHVlID0gTm90ZXMuZnJlcXVlbmN5KHBpdGNoKTtcbiAgICAgICAgdGhpcy5vc2Muc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdG9wKHBpdGNoOiBQaXRjaCkge1xuICAgICAgICB0aGlzLm9zYy5zdG9wKCk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZShtOiBNZXNzYWdlKSB7XG4gICAgICAgIHN3aXRjaCAobS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vc2MuZnJlcXVlbmN5LnZhbHVlID0gTm90ZXMuZnJlcXVlbmN5KG0ucGl0Y2gpO1xuICAgICAgICAgICAgICAgIHRoaXMub3NjLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdG9wJzogdGhpcy5vc2Muc3RvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19