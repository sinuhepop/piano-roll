document.addEventListener('DOMContentLoaded', function() {
    MidiUtils.initialize().then(() => {

        let connector = new Connector();
        
        connector.addOutput(new Logger());

        let piano = new PianoKeyboard(
            { width: 1232, height: 200 },
            Notes.fromString('A1'),
            Notes.fromString('C9')
        );
        connector.addInput(piano);
        connector.addOutput(piano);

        if (MidiUtils.inputs.length > 0) {
            connector.addInput(MidiUtils.createInput('midi', 0));
            connector.addOutput(MidiUtils.createOutput('midi', 0));
        }
    });
});