
class PianoKeyboardCanvas extends Output {

    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    private readonly keys: number;
    private readonly first: number;
    private readonly whiteKeyWidth: number;


    constructor(width: number, height: number, first: Pitch, last: Pitch) {
        super('pianoKeyboard');
        this.first = Notes.asNumber(first);
        this.keys = Notes.asNumber(last) - Notes.asNumber(first) + 1;
        this.whiteKeyWidth = Math.trunc(width / this.keys);

        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.border = '3px solid';
        this.ctx = this.canvas.getContext('2d') !;
        this.drawKeys();
        document.body.appendChild(this.canvas);

        this.canvas.onclick = evt => console.log(evt)
    }

    start(pitch: Pitch) {
        this.drawPressed(pitch, 'red');
    }

    stop(pitch: Pitch) {
        this.drawPressed(pitch, 'white');
    }

    private drawKeys() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'black';
        for (var key = 0; key < this.keys; key++) {
            var start = key * this.whiteKeyWidth;
            this.ctx.rect(start, 0, this.whiteKeyWidth, this.canvas.height);
            console.log(key, this.whiteKeyWidth, this.keys * this.whiteKeyWidth);
        }
        this.ctx.stroke();
    }

    private drawPressed(p: Pitch, color: string) {
        let n = Notes.asNumber(p) - this.first;
        let center = (n + 0.5) * this.whiteKeyWidth;
        this.ctx.beginPath();
        this.ctx.lineWidth = 0;
        this.ctx.arc(center, this.canvas.height * 0.8, this.whiteKeyWidth * 0.3, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

}