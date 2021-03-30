import React, {Dispatch, SetStateAction} from 'react';
import {theme} from "../theme/themes/defaultTheme"
export interface Theme {
    fontSize: string,
    fontKerning: string,
    fontInterval: string,
    fontSerif: string,
    images: string,
    kerning: boolean,
    themeName: string,
    styles: object
}

export interface ThemeContext {
    theme: {
        fontSize: string,
        fontKerning: string,
        fontInterval: string,
        fontSerif: string,
        images: string,
        kerning: boolean,
        themeName: string,
        styles: object
    },
    setTheme: Dispatch<SetStateAction<Theme>>
}

export const themeDefaults = {
    fontSize: "16px",
    fontKerning: "normal",
    fontInterval: "1.5",
    fontSerif: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
    images: "on",
    kerning: false,
    themeName: "default",
    styles: theme
}

export const themeContext = React.createContext<ThemeContext>({
    theme: {
        fontSize: "16px",
        fontKerning: "normal",
        fontInterval: "1.5",
        fontSerif: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
        images: "on",
        kerning: false,
        themeName: "default",
        styles: theme
    },
    setTheme: () => {
    }
});
