
const blackKeyHeightRatio = 0.6;
const blackKeyWidthRatio = 0.45; //  0.58;
const blackKeyShifts = ['-', 1, '-', 2, '-', '-', 4, '-', 5, '-', 6, '-'];

class PianoKeyboard extends Input implements Output {

    private readonly size: Size;
    private readonly paper: Snap.Paper;

    private readonly firstKey: number;
    private readonly whiteKeysNumber: number;

    private readonly whiteKeyWidth: number;
    private readonly blackKeyWidth: number;

    private readonly keysPainted: Array<Snap.Element> = [];

    constructor(size: Size, first: Pitch, last: Pitch) {
        super('pianoKeyboard');

        this.size = size;
        this.paper = Snap(size.width, size.height);

        this.firstKey = Notes.asNumber(first) - (first.isDiatonic() ? 0 : 1);
        let lastKey = Notes.asNumber(last) + (last.isDiatonic() ? 0 : 1);

        let whites = 0;
        for (let i = this.firstKey; i <= lastKey; i++) {
            whites += Notes.forNumber(i).isDiatonic() ? 1 : 0;
        }

        this.whiteKeyWidth = Math.trunc(size.width / whites);
        this.blackKeyWidth = this.whiteKeyWidth * blackKeyWidthRatio;



        // Paint

        let whiteAttrs = { fill: '#fff', stroke: '#000', strokeWidth: 1 };
        let blackAttrs = { fill: '#000', stroke: '#000', strokeWidth: 1 };

        for (let keyNumber = 0; keyNumber < whites; keyNumber++) {

            //            let start = key * this.whiteKeyWidth;
            //            let rect = this.paper.rect(start, 0, this.whiteKeyWidth, this.size.height);
            //            rect.attr(attrs);
            //            this.keysPainted.push(rect);
            //            rect.data('key', key);
            //
            //            rect.click((event: MouseEvent) => {
            //                this.send({
            //                    type: 'start',
            //                    pitch: Notes.forNumber(key + this.firstKey),
            //                    velocity: event.y / this.size.height,
            //                    channel: 1
            //                });
            //            });
        }
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

    private drawPressed(p: Pitch, color: string) {
        let n = Notes.asNumber(p) - this.firstKey;
        let key = this.keysPainted[n];
        key.attr({ fill: color });
    }

}