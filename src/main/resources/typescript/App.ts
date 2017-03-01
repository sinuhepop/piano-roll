document.addEventListener('DOMContentLoaded', function() {
    MidiUtils.initialize().then(() => {

        let connector = new Connector();



        var output = new PianoKeyboard({ width: 1232, height: 200 }, Notes.fromString('A1'), Notes.fromString('C9'));
        connector.addOutput(output);


        if (MidiUtils.inputs.length > 0) {
            var input = MidiUtils.createInput('defaultMidi', 0);
            connector.addInput(input);
        }
        window['output'] = output;
        window['piano'] = MidiUtils.createOutput('piano', 0);
    });
});