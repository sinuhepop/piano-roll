const englishNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const latinNames = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];
const diatonic = [0, 2, 4, 5, 7, 9, 11];

/*
enum Accidental {
    Natural, Sharp, Flat
}

enum DurationType {
    Real, Sheet
}
*/

class Pitch {

    readonly octave: number;
    readonly class: number;

    constructor(octave: number, clss: number) {
        this.octave = octave;
        this.class = clss;
    }

    toString() {
        return englishNames[this.class] + this.octave;
    }

    isDiatonic() {
        return diatonic.indexOf(this.class) > -1
    }

    static fromString(s: string) {
        var octave = parseInt(s.substring(s.length - 1));
        var clss = englishNames.indexOf(s.substring(0, s.length - 1));
        return new Pitch(octave, clss);
    }
}

/*
class Note {
    pitch: Pitch;
    velocity: number;
    duration: number | null;
}
*/

type Dimensions = { width: number, height: number };




