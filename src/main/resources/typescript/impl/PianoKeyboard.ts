
const blackKeyHeightRatio = 0.6;
const blackKeyWidthRatio = 0.45; //  0.58;

class PianoKeyboard extends Input implements Output {

    private readonly dim: Dimensions;
    private readonly paper: Snap.Paper;

    private readonly keyLength: number;
    private readonly firstKey: number;
    private readonly whiteKeyWidth: number;
    private readonly blackKeyWidth: number;

    private readonly keysPainted: Array<Snap.Element> = [];

    constructor(dim: Dimensions, first: Pitch, last: Pitch) {
        super('pianoKeyboard');

        this.dim = dim;
        this.paper = Snap(dim.width, dim.height);

        this.firstKey = Notes.asNumber(first) - (first.isDiatonic() ? 0 : 1);
        let lastKey = Notes.asNumber(last) + (last.isDiatonic() ? 0 : 1);



        this.keyLength = Notes.asNumber(last) - Notes.asNumber(first) + 1;

        this.whiteKeyWidth = Math.trunc(dim.width / this.keyLength);
        this.blackKeyWidth = this.whiteKeyWidth * blackKeyWidthRatio;

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
        let attrs = { fill: '#fff', stroke: '#000', strokeWidth: 1 };
        for (let key = 0; key < this.keyLength; key++) {
            let start = key * this.whiteKeyWidth;
            let rect = this.paper.rect(start, 0, this.whiteKeyWidth, this.dim.height);
            rect.attr(attrs);
            this.keysPainted.push(rect);
            rect.data('key', key);

            rect.click((event: MouseEvent) => {
                this.send({
                    type: 'start',
                    pitch: Notes.forNumber(key + this.firstKey),
                    velocity: event.y / this.dim.height,
                    channel: 1
                });
            });
        }

        attrs = { fill: '#000', stroke: '#000', strokeWidth: 1 };
        for (let key = 1; key < this.keyLength; key++) {
            let start = key * this.whiteKeyWidth - 0.5 * this.blackKeyWidth;
            let rect = this.paper.rect(start, 0, this.blackKeyWidth, this.dim.height * blackKeyHeightRatio);
            rect.attr(attrs);
            this.keysPainted.push(rect);
        }
    }

    private drawPressed(p: Pitch, color: string) {
        let n = Notes.asNumber(p) - this.firstKey;
        let key = this.keysPainted[n];
        key.attr({ fill: color });
    }

}