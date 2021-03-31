import {
    blackTheme,
    mainTheme
} from "../constants/colors";

export const theme = {
    header: {
        background: mainTheme.mainColor,
        color: mainTheme.mainColorText,
        link : {
            color: mainTheme.mainColorText,
            hover : {
                color: mainTheme.mainColorTextDark
            }
        },
        authButton: {
            background: mainTheme.mainColorBright,
            hover: {
                color: mainTheme.mainColorText,
                background: mainTheme.mainColorLighter
            }
        },
        mainMenu: {
            background: mainTheme.mainColor,
            color: mainTheme.mainColorText,
            button: {
                background: mainTheme.mainColor,
                color: mainTheme.mainColorText,
                border: mainTheme.mainColor,
                enabled: {
                    hover: {
                        background: mainTheme.mainColorLighter,
                        border: mainTheme.mainColorLighter
                    }
                }
            },
            primeItem : {
                color: mainTheme.mainColorText,
                icon : {
                    color: mainTheme.mainColorText
                },
                hover : {
                    background: mainTheme.mainColorLighter,
                    border: mainTheme.mainColorLighter
                },
                overlay: {
                    border: mainTheme.mainColorLighter
                }
            }
        }, 
        bvi: {
            background: mainTheme.mainColorLighter,
            color: mainTheme.mainColorText,
            border: mainTheme.mainColorLighter,
            button : {
                color: mainTheme.mainColorText,
                background: mainTheme.mainColorBright,
                border: mainTheme.mainColorBright,
                reset : {
                    color: mainTheme.mainColorText
                },
                focus : {
                    color: mainTheme.mainColorText,
                    background: mainTheme.mainColor,
                    border: mainTheme.mainColor
                },
                hover : {
                    color: mainTheme.mainColorText,
                    background: mainTheme.mainColor,
                    border: mainTheme.mainColor
                },
                active : {
                    color: mainTheme.mainColorText,
                    background: mainTheme.mainColor,
                    border: mainTheme.mainColor
                },
                grayscale : {
                    background: mainTheme.mainColorBright
                },
                imgOn : {

                },
                imgOff : {

                },
                seperator : {
                    border: mainTheme.mainColorBright
                }
            }
        }
    },
    main: {
        link: {
            color: mainTheme.mainColorText,
            hover: {
                color: mainTheme.mainColorTextDark
            }
        },
        catalog: {
            background: mainTheme.mainColorBright,
            dataTable: {
                color: mainTheme.mainColorText
            },
            graph: {
                color: mainTheme.mainColorText
            }
        },
        button: {
            background: mainTheme.mainColorBright,
            border: mainTheme.dashBoardBorders,
            color: mainTheme.mainColorText,
            focus: {
                color: mainTheme.mainColorText,
                background: mainTheme.mainColorLighter,
                border: mainTheme.mainColorLighter
            },
            hover: {
                color: mainTheme.mainColorText,
                background: mainTheme.mainColorLighter,
                border: mainTheme.mainColorLighter
            },
            active: {
                color: mainTheme.mainColorText,
                background: mainTheme.mainColorLighter,
                border: mainTheme.mainColorLighter,
                hover: {
                    color: mainTheme.mainColorText,
                    background: mainTheme.mainColorLighter,
                    border: mainTheme.mainColorLighter
                },
                focus: {
                    color: mainTheme.mainColorText,
                    background: mainTheme.mainColorLighter,
                    border: mainTheme.mainColorLighter
                }
            }
        },
        filterPanel: {
            background: mainTheme.mainColorLighter,
            color: mainTheme.mainColorText,
            title: {
                color: mainTheme.mainColorTextDark
            },
            selector: {
                color: mainTheme.mainColorText,
                background: mainTheme.mainColorBright,
                border: mainTheme.mainColorBright
            },
            label: {
                color: mainTheme.mainColorText
            }
        },
        authentication: {
            background: mainTheme.mainColorLighter,
            boxShadow: "none",
            border: mainTheme.mainColorBright,
            label: {
                color: mainTheme.mainColorTextDark
            },
            button: {
                hover:{
                    background: mainTheme.mainColorButtons,
                    border: mainTheme.mainColor
                }
            },
            tabs: {
                color: mainTheme.mainColorText,
                background: mainTheme.mainColorButtons,
                active: {
                    background: mainTheme.mainColorDarker
                }
            }
        }
    }
}
