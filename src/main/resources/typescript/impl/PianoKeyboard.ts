
class PianoKeyboard extends Output {

    private readonly canvas: Snap.Paper;
    private readonly ctx: CanvasRenderingContext2D;

    private readonly keys: number;
    private readonly first: number;
    private readonly whiteKeyWidth: number;

    private readonly keysPainted: Array<Snap.Element> = [];



    constructor(width: number, height: number, first: Pitch, last: Pitch) {
        super('pianoKeyboard');

        this.first = Notes.asNumber(first);
        this.keys = Notes.asNumber(last) - Notes.asNumber(first) + 1;
        this.whiteKeyWidth = Math.trunc(width / this.keys);


        this.canvas = Snap(width, height);
        //        this.canvas.rect(10, 10, 100, 100);

        this.drawKeys();
    }

    start(pitch: Pitch) {
        this.drawPressed(pitch, 'red');
    }

    stop(pitch: Pitch) {
        this.drawPressed(pitch, 'white');
    }

    private drawKeys() {
        var attrs = { fill: '#fff', stroke: '#000', strokeWidth: 1 };
        for (let key = 0; key < this.keys; key++) {
            let start = key * this.whiteKeyWidth;
            console.log(this.canvas.getBBox());
            let rect = this.canvas.rect(start, 0, this.whiteKeyWidth, this.canvas.getBBox().height);
            rect.attr(attrs);
            this.keysPainted.push(rect);
            rect.data('key', key);

            rect.click((event: MouseEvent) => {
                
                console.log(key, event);
            });
        }
    }

    private drawPressed(p: Pitch, color: string) {
        let n = Notes.asNumber(p) - this.first;
        let key = this.keysPainted[n];
        key.attr({ fill: color });
    }

}