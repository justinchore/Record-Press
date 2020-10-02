export const PAUSE = "PAUSE"
export const PLAY = "PLAY"
export const TRACK_SET = 'TRACK_SET';

export const playTrack = () => {
    return {
        type: PLAY,
    }
};

export const pauseTrack = () => {
    return {
        type: PAUSE,
    }
};

export const trackSet = (track) => ({
    type: TRACK_SET,
    track
});

