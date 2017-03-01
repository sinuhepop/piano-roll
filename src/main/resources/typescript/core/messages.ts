type Message =
    {
        type: 'start',
        pitch: Pitch,
        channel: number,
        velocity: number
    } | {
        type: 'stop',
        pitch: Pitch
    };