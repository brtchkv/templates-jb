import {useEffect, useState} from 'react';
import {handleTextSelected} from "./speechSynthesis";

export const useSpeech = () => {
    const [speechSynthesisVolume, setSpeechSynthesisVolume] = useState(false);
    const [speechSynthesis, setSpeechSynthesis] = useState(false);

    const speechController = {
        speechSynthesis: speechSynthesis,
        setSpeechSynthesis: setSpeechSynthesis,
        speechSynthesisVolume: speechSynthesisVolume,
        setSpeechSynthesisVolume: setSpeechSynthesisVolume
    };

    useEffect(() => {
        const localBvi = window.localStorage.getItem('bvi-speech');
        localBvi && setSpeechSynthesisVolume(JSON.parse(localBvi));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('bvi-speech', JSON.stringify(speechSynthesisVolume))
        console.log("saved")
    }, [speechSynthesisVolume]);

    useEffect(() => {
        window.localStorage.setItem('bvi-speech', JSON.stringify(speechSynthesisVolume))
        console.log("saved")
        if (!speechSynthesisVolume) {
            window.removeEventListener('mouseup', handleTextSelected);
        } else {
            window.addEventListener('mouseup', handleTextSelected);
        }
        return () => {
            window.removeEventListener('mouseup', handleTextSelected);
        };
    }, [speechSynthesisVolume]);


    return [speechController]
};
