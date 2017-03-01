
class PianoKeyboard extends Output {

    private readonly dim: Dimensions;
    private readonly canvas: Snap.Paper;


    private readonly keyLength: number;
    private readonly firstKey: number;
    private readonly whiteKeyWidth: number;
    private readonly blackKeyWidth: number;

    private readonly keysPainted: Array<Snap.Element> = [];



    constructor(dim: Dimensions, first: Pitch, last: Pitch) {
        super('pianoKeyboard');

        this.dim = dim;
        this.canvas = Snap(dim.width, dim.height);


        this.firstKey = Notes.asNumber(first);
        this.keyLength = Notes.asNumber(last) - Notes.asNumber(first) + 1;

        this.whiteKeyWidth = Math.trunc(dim.width / this.keyLength);
        this.blackKeyWidth = this.whiteKeyWidth * 0.7;

        this.drawKeys();
    }

    receive(m: Message) {
        switch (m.type) {
            case 'start': return this.drawPressed(m.pitch, 'red');
            case 'stop': return this.drawPressed(m.pitch, 'white');
        }
    }

    stop(pitch: Pitch) {
        this.drawPressed(pitch, 'white');
    }

    private drawKeys() {
        var attrs = { fill: '#fff', stroke: '#000', strokeWidth: 1 };
        for (let key = 0; key < this.keyLength; key++) {
            let start = key * this.whiteKeyWidth;
            let rect = this.canvas.rect(start, 0, this.whiteKeyWidth, this.dim.height);
            rect.attr(attrs);
            this.keysPainted.push(rect);
            rect.data('key', key);



            //            rect.click((event: MouseEvent) => {
            //                
            //                console.log(key, event);
            //            });
        }
    }

    private drawPressed(p: Pitch, color: string) {
        let n = Notes.asNumber(p) - this.firstKey;
        let key = this.keysPainted[n];
        key.attr({ fill: color });
    }

}