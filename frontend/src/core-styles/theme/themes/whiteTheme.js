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
            background: whiteTheme.mainColor
        },
        courseCard: {
            boxShadow: "none",
            border: `1px solid ${whiteTheme.mainColorDarker}`,
            background: whiteTheme.mainColor,
            color: whiteTheme.mainColorText,
            button: {
                background: whiteTheme.mainColorBright,
                color: whiteTheme.mainColorText,
                icon: {
                    color: whiteTheme.mainColorText
                },
                hover: {
                    background: whiteTheme.mainColorLighter
                }
            },
            newCourseLabel: {
                background: whiteTheme.mainColor,
                color: whiteTheme.mainColorText
            },
            date: {
                color: whiteTheme.mainColorText
            },
            duration: {
                color: whiteTheme.mainColorText
            },
            status: {
                color: whiteTheme.mainColorTextDark
            },
            label: {
                color: whiteTheme.mainColorText,
                background: whiteTheme.mainColor
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
        courseHeader: {
            color: whiteTheme.mainColorText,
            label: {
                color: whiteTheme.mainColorTextDark
            },
            color: whiteTheme.mainColorText,
            link: {
                color: whiteTheme.mainColorTextDark,
                hover: {
                    color: whiteTheme.mainColorText
                }
            },
            title: {
                color: whiteTheme.mainColorText
            },
            button: {
                color: whiteTheme.mainColorText,
                background: whiteTheme.mainColor,
                border: whiteTheme.mainColorBright,
                focus: {
                    color: whiteTheme.mainColorText,
                    background: whiteTheme.mainColor,
                    border: whiteTheme.mainColor
                },
                hover: {
                    color: whiteTheme.mainColorText,
                    background: whiteTheme.mainColor,
                    border: whiteTheme.mainColor
                }
            },
            dropdown: {
                color: whiteTheme.mainColorText,
                border: whiteTheme.mainColorBright,
                background: whiteTheme.mainColor,
                item: {
                    background: whiteTheme.mainColor,
                    color: whiteTheme.mainColorText,
                    border: whiteTheme.mainColorBright,
                    hover: {
                        background: "#d9d9d9",
                        color: whiteTheme.mainColorText,
                        border: whiteTheme.mainColorDarker
                    }
                }
            }
        },
        courseDetails: {
            color: whiteTheme.mainColorText,
            label: {
                color: whiteTheme.mainColorTextDark
            },
            tabs: {
                color: whiteTheme.mainColorText,
                background: whiteTheme.mainColor,
                tabView : {
                    seperator: {
                        borderBottom: whiteTheme.mainColorBright
                    },
                    title: {
                        background: whiteTheme.mainColor,
                        color: whiteTheme.mainColorText,
                        hover: {
                            background: whiteTheme.mainColor,
                            color: whiteTheme.mainColorText
                        },
                        highlighted: {
                            background: whiteTheme.mainColor,
                            color: whiteTheme.mainColorText,
                            hover: {
                                background: whiteTheme.mainColor,
                                color: whiteTheme.mainColorText
                            },
                            after: {
                                background: whiteTheme.mainColorText
                            }
                        },
                        active: {
                            background: whiteTheme.mainColor
                        }
                    }
                }
            },
            universityPanel: {
                border: whiteTheme.mainColorDarker,
                color: whiteTheme.mainColorText
            },
            icon: {
                color: whiteTheme.mainColorText
            },
            link: {
                color: whiteTheme.mainColorTextDark,
                hover: {
                    color: whiteTheme.mainColorText
                }
            }
        },
        menu: {
            color: whiteTheme.mainColorText,
            borderLeft: whiteTheme.mainColorText,
            active: {
                color: whiteTheme.mainColorText,
                borderLeft: whiteTheme.mainColorText
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