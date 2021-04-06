import i18next from "i18next";

setTimeout(() => {
    console.log(window.speechSynthesis.getVoices());
}, 100);

function findVoice(voices, lang) {
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].lang.includes(lang)) {
            return voices[i];
        }
    }
    return null;
}

export const handleTextSelected = event => {
    if (!window.getSelection().toString()) return;
    console.log(window.getSelection().toString());
    speak(window.getSelection().toString());
};

export function speak(s) {
    let voices = window.speechSynthesis.getVoices();
    if (!window.speechSynthesis || window.speechSynthesis.getVoices().length === 0) {
        return;
    }
    let utterance = new SpeechSynthesisUtterance(s);
    if (!/[а-яА-ЯЁё]/.test(s) && i18next.languages[0] === "en" && /[0-9]/.test(s)) {
        utterance.lang = "en"
    } else if (!/[а-яА-ЯЁё]/.test(s) && !/[0-9]/.test(s)) {
        utterance.lang = "en";
    } else {
        utterance.lang = "ru"
    }
    let voice = findVoice(voices, utterance.lang);
    if (findVoice(voices, utterance.lang) != null) {
        utterance.voice = voice;
    } else {
        console.log(i18next.languages[0] === "en" ? "Your browser doesn't support "
            + utterance.lang + " speech." : "Ваш бразуер не поддерживает " + utterance.lang + " речь.")
        return;
    }
    let winNav = window.navigator;
    let vendorName = winNav.vendor;
    let isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    let isIOSChrome = winNav.userAgent.match("CriOS");
    if (isIOSChrome) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    } else if (
        vendorName === "Google Inc." &&
        isIEedge === false
    ) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    } else {
        window.speechSynthesis.speak(utterance);
    }
}
