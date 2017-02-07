enum PitchClass {
    C, Cs, D, Ds, E, F, Fs, G, Gs, A, As, B
}

enum Accidental {
    Natural, Sharp, Flat
}

enum DurationType {
    Real, Sheet
}

class Pitch {
    pitchClass: PitchClass;
    octave: number;
}

class Note {
    pitch: Pitch;
    duration: number;
}

abstract class Notes {

    private static latinNames = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];


    static latinName(p: PitchClass): string {
        return Notes.latinNames[p];
    }

    static asNumber(p: Pitch): number {
        return (p.octave - 4) * 12 + p.pitchClass;
    }

    static forNumber(n: number): Pitch {
        return { octave: n / 12 + 4, pitchClass: n % 12 }
    }

    static frequency(p: Pitch) {
        return Math.pow(2, (Notes.asNumber(p) - 49) / 12) * 440;
    }

    static toString(p: Pitch) {
        return PitchClass[p.pitchClass].replace('s', '#') + p.octave;
    }

    static fromString(s: string) {
        var p = new Pitch();
        p.octave = parseInt(s.substring(s.length - 1));
        p.pitchClass = PitchClass[s.substring(0, s.length - 1).replace('#', 's')];
        return p;
    }

}
