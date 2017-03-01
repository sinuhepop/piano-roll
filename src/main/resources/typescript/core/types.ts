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
    velocity: number;
    duration: number | null;
}

type Dimensions = { width: number, height: number };


