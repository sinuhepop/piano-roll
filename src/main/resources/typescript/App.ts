document.addEventListener('DOMContentLoaded', function() {
    MidiUtils.initialize().then(() => {
        var output = new PianoKeyboard(1232, 150, Notes.fromString('A1'), Notes.fromString('C9'));
        if (MidiUtils.inputs.length > 0) {
            var input = MidiUtils.createInput('defaultMidi', 0);
        }
        window['output'] = output;
        window['piano'] = MidiUtils.createOutput('piano', 0);
    });
});