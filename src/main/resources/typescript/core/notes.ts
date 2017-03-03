abstract class Notes {

    static readonly defaultVelocity = 0.5;

    static asNumber(p: Pitch): number {
        return (p.octave - 4) * 12 + p.class;
    }

    static forNumber(n: number): Pitch {
        return new Pitch(Math.floor(n / 12 + 4), (n % 12 + 12) % 12);
    }

    static frequency(p: Pitch) {
        return Math.pow(2, (Notes.asNumber(p) - 49) / 12) * 440;
    }

}
