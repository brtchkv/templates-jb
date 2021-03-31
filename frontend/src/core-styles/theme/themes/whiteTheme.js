import {
    whiteTheme
} from "../constants/colors";

export const theme = {
    header: {
        background: whiteTheme.mainColor,
        color: whiteTheme.mainColorText,
        link : {
            color: whiteTheme.mainColorText,
            hover : {
                color: whiteTheme.mainColorTextDark
            }
        },
        authButton: {
            background: whiteTheme.mainColor,
            hover: {
                color: whiteTheme.mainColorText,
                background: whiteTheme.mainColorLighter
            }
        },
        mainMenu: {
            background: whiteTheme.mainColor,
            color: whiteTheme.mainColorText,
            button: {
                background: whiteTheme.mainColor,
                color: whiteTheme.mainColorText,
                border: whiteTheme.mainColor,
                enabled: {
                    hover: {
                        background: whiteTheme.mainColorLighter,
                        border: whiteTheme.mainColorLighter
                    }
                }
            },
            primeItem : {
                color: whiteTheme.mainColorText,
                icon : {
                    color: whiteTheme.mainColorText
                },
                hover : {
                    background: whiteTheme.mainColorLighter,
                    border: whiteTheme.mainColorLighter
                },
                overlay: {
                    border: whiteTheme.mainColorLighter
                }
            }
        }, 
        bvi: {
            background: whiteTheme.mainColorLighter,
            color: whiteTheme.mainColorText,
            border: whiteTheme.mainColorDarker,
            button : {
                color: whiteTheme.mainColorText,
                background: whiteTheme.mainColor,
                border: whiteTheme.mainColorDarker,
                reset : {
                    color: whiteTheme.mainColorText
                },
                focus : {
                    color: whiteTheme.mainColorText,
                    background: whiteTheme.mainColor,
                    border: whiteTheme.mainColor
                },
                hover : {
                    color: whiteTheme.mainColorText,
                    background: whiteTheme.mainColor,
                    border: whiteTheme.mainColor
                },
                active : {
                    color: whiteTheme.mainColorText,
                    background: whiteTheme.mainColor,
                    border: whiteTheme.mainColorDarker
                },
                grayscale : {
                    background: whiteTheme.mainColorBright
                },
                imgOn : {

                },
                imgOff : {

                },
                seperator : {
                    border: whiteTheme.mainColorBright
                }
            }
        }
    },
    main: {
        link: {
            color: whiteTheme.mainColorText,
            hover: {
                color: whiteTheme.mainColorTextDark
            }
        },
        catalog: {
            background: whiteTheme.mainColor,
            dataTable: {
                color: whiteTheme.mainColorText
            },
            graph: {
                color: whiteTheme.mainColorText
            }
        },
        button: {
            background: whiteTheme.mainColor,
            border: whiteTheme.mainColorBright,
            color: whiteTheme.mainColorText,
            focus: {
                color: whiteTheme.mainColorText,
                background: whiteTheme.mainColorLighter,
                border: whiteTheme.mainColorLighter
            },
            hover: {
                color: whiteTheme.mainColorText,
                background: whiteTheme.mainColor,
                border: whiteTheme.mainColorLighter
            },
            active: {
                color: whiteTheme.mainColorText,
                background: whiteTheme.mainColorLighter,
                border: whiteTheme.mainColorLighter,
                hover: {
                    color: whiteTheme.mainColorText,
                    background: whiteTheme.mainColorLighter,
                    border: whiteTheme.mainColorLighter
                },
                focus: {
                    color: whiteTheme.mainColorText,
                    background: whiteTheme.mainColorLighter,
                    border: whiteTheme.mainColorLighter
                }
            }
        },
        filterPanel: {
            background: whiteTheme.mainColor,
            color: whiteTheme.mainColorText,
            title: {
                color: whiteTheme.mainColorTextDark
            },
            selector: {
                color: whiteTheme.mainColorText,
                background: whiteTheme.mainColor,
                border: whiteTheme.mainColorDarker
            },
            label: {
                color: whiteTheme.mainColorText
            }
        },
        authentication: {
            background: whiteTheme.mainColorLighter,
            border: whiteTheme.mainColorBright,
            label: {
                color: whiteTheme.mainColorTextDark
            },
            button: {
                hover:{
                    background: whiteTheme.mainColor,
                    border: whiteTheme.mainColor
                }
            },
            tabs: {
                color: whiteTheme.mainColorText,
                background: whiteTheme.mainColorBright,
                active: {
                    background: whiteTheme.mainColorDarker
                }
            }
        }
    },
    footer: {
        background: whiteTheme.mainColorLighter,
        color: whiteTheme.mainColorTextDark,
        links: {
            color: whiteTheme.mainColorTextDark
        }
    }
}
