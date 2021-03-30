import {useEffect, useState} from 'react';
import {themeDefaults} from "./theme";
import {theme as themeDefault} from "../theme/themes/defaultTheme"
import {theme as themeDark} from "../theme/themes/darkTheme"
import {theme as themeWhite} from "../theme/themes/whiteTheme"


export const useTheme = () => {
    const [theme, setTheme] = useState(themeDefaults);

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            const localThemeJson = JSON.parse(localTheme);
            if (localThemeJson.themeName === "dark") {
                localThemeJson.styles = themeDark;
            } else if (localThemeJson.themeName === "white") {
                localThemeJson.styles = themeWhite;
            } else {
                localThemeJson.styles = themeDefault;
            }
            setTheme(localThemeJson);
        } 
    }, []);

    useEffect(() => {
        let localTheme = JSON.parse(JSON.stringify(theme));
        delete localTheme.styles;
        window.localStorage.setItem('theme', JSON.stringify(localTheme))
    }, [theme]);

    return [theme, setTheme]
};
