import {
    blackTheme
} from "../constants/colors";

export const theme = {
    header: {
        background: blackTheme.mainColor,
        color: blackTheme.mainColorText,
        link : {
            color: blackTheme.mainColorText,
            hover : {
                color: blackTheme.mainColorTextDark
            }
        },
        authButton: {
            background: blackTheme.mainColorBright,
            hover: {
                color: blackTheme.mainColorText,
                background: blackTheme.mainColorLighter
            }
        },
        mainMenu: {
            background: blackTheme.mainColor,
            color: blackTheme.mainColorText,
            button: {
                background: blackTheme.mainColor,
                color: blackTheme.mainColorText,
                border: blackTheme.mainColor,
                enabled: {
                    hover: {
                        background: blackTheme.mainColorLighter,
                        border: blackTheme.mainColorLighter
                    }
                }
            },
            primeItem : {
                color: blackTheme.mainColorText,
                icon : {
                    color: blackTheme.mainColorText
                },
                hover : {
                    background: blackTheme.mainColorLighter,
                    border: blackTheme.mainColorLighter
                },
                overlay: {
                    border: blackTheme.mainColorLighter
                }
            }
        }, 
        bvi: {
            background: blackTheme.mainColorLighter,
            color: blackTheme.mainColorText,
            border: blackTheme.mainColorLighter,
            button : {
                color: blackTheme.mainColorText,
                background: blackTheme.mainColorBright,
                border: blackTheme.mainColorBright,
                reset : {
                    color: blackTheme.mainColorText
                },
                focus : {
                    color: blackTheme.mainColorText,
                    background: blackTheme.mainColor,
                    border: blackTheme.mainColor
                },
                hover : {
                    color: blackTheme.mainColorText,
                    background: blackTheme.mainColor,
                    border: blackTheme.mainColor
                },
                active : {
                    color: blackTheme.mainColorText,
                    background: blackTheme.mainColor,
                    border: blackTheme.mainColor
                },
                grayscale : {
                    background: blackTheme.mainColorBright
                },
                imgOn : {

                },
                imgOff : {

                },
                seperator : {
                    border: blackTheme.mainColorBright
                }
            }
        }
    },
    loader: {
        color: blackTheme.loaderColor
    },
    main: {
        link: {
            color: blackTheme.mainColorText,
            hover: {
                color: blackTheme.mainColorTextDark
            }
        },
        catalog: {
            background: blackTheme.mainColor,
            dataTable: {
                color: blackTheme.mainColorText
            },
            graph: {
                color: blackTheme.mainColorText
            }
        },
        button: {
            background: blackTheme.mainColorBright,
            border: blackTheme.mainColorBright,
            color: blackTheme.mainColorText,
            focus: {
                color: blackTheme.mainColorText,
                background: blackTheme.mainColorLighter,
                border: blackTheme.mainColorLighter
            },
            hover: {
                color: blackTheme.mainColorText,
                background: blackTheme.mainColorLighter,
                border: blackTheme.mainColorLighter
            },
            active: {
                color: blackTheme.mainColorText,
                background: blackTheme.mainColorLighter,
                border: blackTheme.mainColorLighter,
                hover: {
                    color: blackTheme.mainColorText,
                    background: blackTheme.mainColorLighter,
                    border: blackTheme.mainColorLighter
                },
                focus: {
                    color: blackTheme.mainColorText,
                    background: blackTheme.mainColorLighter,
                    border: blackTheme.mainColorLighter
                }
            }
        },
        filterPanel: {
            background: blackTheme.mainColorLighter,
            color: blackTheme.mainColorText,
            title: {
                color: blackTheme.mainColorTextDark
            },
            selector: {
                color: blackTheme.mainColorText,
                background: blackTheme.mainColorBright,
                border: blackTheme.mainColorBright
            },
            label: {
                color: blackTheme.mainColorText
            },
            button: {
                color: blackTheme.mainColorText,
                hover: {
                    color: blackTheme.mainColor
                }
            }
        },
        authentication: {
            background: blackTheme.mainColorLighter,
            border: blackTheme.mainColorBright,
            label: {
                color: blackTheme.mainColorTextDark
            },
            button: {
                hover:{
                    background: blackTheme.mainColor,
                    border: blackTheme.mainColor
                }
            },
            tabs: {
                color: blackTheme.mainColorText,
                background: blackTheme.mainColorBright,
                active: {
                    background: blackTheme.mainColorDarker
                }
            }
        }
    },
    footer: {
        background: blackTheme.mainColorLighter,
        color: blackTheme.mainColorTextDark,
        links: {
            color: blackTheme.mainColorTextDark
        }
    }
}
