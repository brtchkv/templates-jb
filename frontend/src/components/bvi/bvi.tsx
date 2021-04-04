import {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {speak} from "../../helpers/bvi/speechSynthesis";
import {BviButtonResetStyled, BviPanelStyled, BviSeparatorStyled, BviButtonStyled} from "./styles/bvi";
import {theme as themeDefault} from "../../core-styles/theme/themes/defaultTheme"
import {theme as themeDark} from "../../core-styles/theme/themes/darkTheme"
import {theme as themeWhite} from "../../core-styles/theme/themes/whiteTheme"

interface BviProps {
    showToggler: any,
    speechController: any,
    themeController: any
}

function Bvi(props: BviProps) {
    const {t} = useTranslation();
    const [additionalSettings, setAdditionalSettings] = useState(false);
    const [resetImageAnimation, setResetImageAnimation] = useState(false);
    const [resetBackgroundAnimation, setResetBackgroundAnimation] = useState(false);
    const [resetFontAnimation, setResetFontAnimation] = useState(false);
    const [resetKerningAnimation, setResetKerningAnimation] = useState(false);
    const [resetSerifAnimation, setResetSerifAnimation] = useState(false);
    const [resetIntervalAnimation, setResetIntervalAnimation] = useState(false);
    let theme = props.themeController.theme;
    let speechController = props.speechController;

    function setBlackBackground() {
        props.themeController.setTheme(
            {
                ...theme,
                styles: themeDark,
                themeName: "dark"
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.themeIsX', {theme: t('bvi.whiteOnBlack')}))
        }
    }

    function setDefaultBackground() {
        props.themeController.setTheme(
            {
                ...theme,
                styles: themeDefault,
                themeName: "default"
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.resetTheme'))
        }
    }

    function setWhiteBackground() {
        props.themeController.setTheme(
            {
                ...theme,
                styles: themeWhite,
                themeName: "white"
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.themeIsX', {theme: t('bvi.blackOnWhite')}));
        }
    }


    function setFontSize14() {
        props.themeController.setTheme(
            {
                ...theme,
                fontSize: '14px'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.fontSizeIsX', {size: 14}))
        }
    }

    function setFontSize16() {
        props.themeController.setTheme(
            {
                ...theme,
                fontSize: '16px'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.fontSizeIsX', {size: 16}))
        }
    }

    function setFontSize18() {
        props.themeController.setTheme(
            {
                ...theme,
                fontSize: '18px'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.fontSizeIsX', {size: 18}))
        }
    }

    function setFontSize20() {
        props.themeController.setTheme(
            {
                ...theme,
                fontSize: '20px'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.fontSizeIsX', {size: 20}))
        }
    }

    function setFontSize23() {
        props.themeController.setTheme(
            {
                ...theme,
                fontSize: '23px'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.fontSizeIsX', {size: 23}))
        }
    }

    function setImageOff() {
        props.themeController.setTheme(
            {
                ...theme,
                images: 'off'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.img') + " " + t('bvi.offForSpeech'))
        }
    }

    function setImageOn() {
        props.themeController.setTheme(
            {
                ...theme,
                images: 'on'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.img') + " " + t('bvi.onForSpeech'))
        }
    }

    function setImageGrayScale() {
        props.themeController.setTheme(
            {
                ...theme,
                images: 'grayscale'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.img') + " " + t('bvi.bWForSpeech'))
        }
    }

    function showAdditionalSettings() {
        setAdditionalSettings(!additionalSettings);
        if (speechController.speechSynthesisVolume) {
            if (!additionalSettings) {
                speak(t('bvi.additionalSettingsOn'))
            } else {
                speak(t('bvi.additionalSettingsOff'))
            }
        }
    }

    function setKerningStandard() {
        props.themeController.setTheme(
            {
                ...theme,
                fontKerning: 'normal'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.letterSpacing') + " " + t('bvi.standard'))
        }
    }

    function setKerningMedium() {
        props.themeController.setTheme(
            {
                ...theme,
                fontKerning: '2px'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.letterSpacing') + " " + t('bvi.medium'))
        }
    }

    function setKerningBig() {
        props.themeController.setTheme(
            {
                ...theme,
                fontKerning: '5px'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.letterSpacing') + " " + t('bvi.big'))
        }
    }

    function setIntervalStandard() {
        props.themeController.setTheme(
            {
                ...theme,
                fontInterval: '1.5'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.letterInterval') + " " + t('bvi.standard'))
        }
    }

    function setIntervalMedium() {
        props.themeController.setTheme(
            {
                ...theme,
                fontInterval: '2'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.letterInterval') + " " + t('bvi.medium'))
        }
    }

    function setIntervalBig() {
        props.themeController.setTheme(
            {
                ...theme,
                fontInterval: '3'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.letterInterval') + " " + t('bvi.big'))
        }
    }

    function setSerifOff() {
        props.themeController.setTheme(
            {
                ...theme,
                fontSerif: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.serifMenu') + " " + t('bvi.withoutSerif'))
        }
    }

    function setSerifOn() {
        props.themeController.setTheme(
            {
                ...theme,
                fontSerif: '"Times New roman", serif'
            }
        )
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.serifMenu') + " " + t('bvi.withSerif'))
        }
    }

    function toggleSpeech() {
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.turnOffSpeech'))
        } else {
            speak(t('bvi.turnOnSpeech'))
        }
        speechController.setSpeechSynthesisVolume(!speechController.speechSynthesisVolume);
    }

    useEffect(() => {
        if (!speechController.speechSynthesis) {
            const localBvi = window.localStorage.getItem('bvi-speech');
            localBvi ? speechController.setSpeechSynthesisVolume(JSON.parse(localBvi)) : speechController.setSpeechSynthesisVolume(true);
            speechController.setSpeechSynthesis(true);
            if (speechController.speechSynthesisVolume) {
                speak(t('bvi.bvi'))
            }
        }
        if (speechController.speechSynthesisVolume) {
            speak(t('bvi.bviOpened'))
        }
    }, []);

    return (
        <div className="bvi-panel-menu">
            <div className="bvi-panel-container">
                <div className="bvi-panel-row">
                    <div className="bvi-panel-col-xs-12 bvi-panel-col-md-12 bvi-panel-col-lg-12 bvi-padding">
                        <BviPanelStyled className="bvi-panel-menu-bg">
                            <div className="bvi-panel-row">
                                <div
                                    className="bvi-panel-col-xs-12 bvi-panel-col-sm-6 bvi-panel-col-md-3 bvi-panel-col-lg-3">
                                    <div className="bvi-panel-menu-block">
                                        <div className="bvi-panel-title">
                                            {t('bvi.fontSize')}
                                            <BviButtonResetStyled
                                                className={`btn-reset ${theme.fontSize === '16px' ? `active` : ``} ${resetFontAnimation ? `rotating` : ``}`}
                                                title={t('bvi.reset')}
                                                onClick={() => {
                                                    setFontSize16();
                                                    setResetFontAnimation(true)
                                                }}
                                                onAnimationEnd={() => {
                                                    setResetFontAnimation(false)
                                                }}
                                            ><i className="pi pi-undo"></i>
                                            </BviButtonResetStyled>
                                        </div>
                                        <div className="bvi-panel-btn-group" role="group"
                                             aria-label={t('bvi.fontSize')}>
                                            <BviButtonStyled
                                                id="bvi-panel-font-size-14" onClick={setFontSize14}
                                                className={`bvi-panel-btn bvi-panel-btn-default bvi-panel-font-size-14 ${theme.fontSize === "14px" ? `active` : ``}`}
                                                title={t('bvi.fontSizeIsX', {size: "14"})}>А
                                            </BviButtonStyled>
                                            <BviButtonStyled
                                                id="bvi-panel-font-size-16" onClick={setFontSize16}
                                                className={`bvi-panel-btn bvi-panel-btn-default bvi-panel-font-size-16 ${theme.fontSize === "16px" ? `active` : ``}`}
                                                title={t('bvi.fontSizeIsX', {size: "16"})}>А
                                            </BviButtonStyled>
                                            <BviButtonStyled
                                                id="bvi-panel-font-size-18" onClick={setFontSize18}
                                                className={`bvi-panel-btn bvi-panel-btn-default bvi-panel-font-size-18 ${theme.fontSize === "18px" ? `active` : ``}`}
                                                title={t('bvi.fontSizeIsX', {size: "18"})}>А
                                            </BviButtonStyled>
                                            <BviButtonStyled
                                                id="bvi-panel-font-size-20" onClick={setFontSize20}
                                                className={`bvi-panel-btn bvi-panel-btn-default bvi-panel-font-size-20 ${theme.fontSize === "20px" ? `active` : ``}`}
                                                title={t('bvi.fontSizeIsX', {size: "20"})}>А
                                            </BviButtonStyled>
                                            <BviButtonStyled
                                                id="bvi-panel-font-size-23" onClick={setFontSize23}
                                                className={`bvi-panel-btn bvi-panel-btn-default bvi-panel-font-size-23 ${theme.fontSize === "23px" ? `active` : ``}`}
                                                title={t('bvi.fontSizeIsX', {size: "23"})}>А
                                            </BviButtonStyled>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bvi-panel-col-xs-12 bvi-panel-col-sm-6 bvi-panel-col-md-3 bvi-panel-col-lg-3">
                                    <div className="bvi-panel-menu-block">
                                        <div className="bvi-panel-title">
                                            {t('bvi.theme')}
                                            <BviButtonResetStyled
                                                className={`btn-reset ${theme.backgroundColor === '#E2E2E2' ? `active` : ``} ${resetBackgroundAnimation ? `rotating` : ``}`}
                                                onClick={() => {
                                                    setDefaultBackground();
                                                    setResetBackgroundAnimation(true)
                                                }}
                                                onAnimationEnd={() => {
                                                    setResetBackgroundAnimation(false)
                                                }}
                                                title={t('bvi.reset')}><i className="pi pi-undo"></i>
                                            </BviButtonResetStyled>
                                        </div>
                                        <div className="bvi-panel-btn-group bvi-panel-bg-color" role="group"
                                             aria-label={t('bvi.theme')}>
                                            <button id="bvi-panel-bg-white" onClick={setWhiteBackground}
                                                    className={`bvi-panel-btn bvi-panel-btn-black-white ${theme.themeName === 'white' ? `active` : ``}`}
                                                    title={t('bvi.themeIsX', {theme: t('bvi.blackOnWhite')})}>{t('bvi.colorStub')}
                                            </button>
                                            <button id="bvi-panel-bg-black" onClick={setBlackBackground}
                                                    className={`bvi-panel-btn bvi-panel-btn-white-black ${theme.themeName === 'black' ? `active` : ``}`}
                                                    title={t('bvi.themeIsX', {theme: t('bvi.whiteOnBlack')})}>{t('bvi.colorStub')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bvi-panel-col-xs-12 bvi-panel-col-sm-6 bvi-panel-col-md-3 bvi-panel-col-lg-3">
                                    <div className="bvi-panel-menu-block bvi-panel-menu-bottom-block">
                                        <div className="bvi-panel-title">
                                            {t('bvi.img')}
                                            <BviButtonResetStyled onClick={() => {
                                                setImageOn();
                                                setResetImageAnimation(true)
                                            }}
                                                    onAnimationEnd={() => {
                                                        setResetImageAnimation(false)
                                                    }}
                                                    className={`btn-reset ${theme.images === 'on' ? `active` : ``} ${resetImageAnimation ? `rotating` : ``}`}
                                                    title={t('bvi.reset')}><i className="pi pi-undo"></i>
                                            </BviButtonResetStyled>
                                        </div>
                                        <div className="bvi-panel-btn-group" role="group" aria-label={t('bvi.img')}>
                                            <BviButtonStyled
                                                id="bvi-panel-img-grayScale" onClick={setImageGrayScale}
                                                className={`bvi-panel-btn bvi-panel-btn-default btn-grayscale ${theme.images === 'grayscale' ? `active` : ``}`}
                                            ><i
                                                className="bvi-panel-glyphicon bvi-panel-glyphicon-picture"
                                            /> {t('bvi.bW')}
                                            </BviButtonStyled>
                                            <BviButtonStyled id="bvi-panel-img-on" onClick={setImageOn}
                                                    className={`bvi-panel-btn bvi-panel-btn-default btn-image-on ${theme.images === 'on' ? `active` : ``}`}
                                            ><i
                                                className="bvi-panel-glyphicon bvi-panel-glyphicon-ok-circle"
                                            /> {t('bvi.on')}
                                            </BviButtonStyled>
                                            <BviButtonStyled id="bvi-panel-img-off" onClick={setImageOff}
                                                    className={`bvi-panel-btn bvi-panel-btn-default btn-image-off ${theme.images === 'off' ? `active` : ``}`}
                                            ><i
                                                className="bvi-panel-glyphicon bvi-panel-glyphicon-remove-circle"
                                            /> {t('bvi.off')}
                                            </BviButtonStyled>
                                        </div>
                                    </div>
                                </div>
                                <button id="bvi-panel-close"
                                        className="bvi-panel-btn bvi-panel-btn-default bvi-panel-close far fa-times-circle close-icon"
                                        title={t('bvi.close')} onClick={props.showToggler}>
                                </button>
                                <div
                                    className="bvi-panel-col-xs-12 bvi-panel-col-sm-6 bvi-panel-col-md-3 bvi-panel-col-lg-3">
                                    <div className="bvi-panel-menu-block bvi-panel-menu-bottom-block">
                                        <div className="bvi-panel-title">{t('bvi.additional')}</div>
                                        <div className="bvi-additional-buttons">
                                            <div className="bvi-panel-btn-toolbar" role="toolbar" aria-label="...">
                                                <BviButtonStyled
                                                    id="bvi-panel-play-off" onClick={toggleSpeech}
                                                    className={`bvi-panel-btn bvi-panel-btn-default bvi-panel-glyphicon
                                                    ${!speechController.speechSynthesisVolume ? ` bvi-panel-glyphicon-volume-up`
                                                        : `bvi-panel-glyphicon-volume-off`}`}
                                                    title={` ${speechController.speechSynthesisVolume ? t('bvi.turnOnSpeech')
                                                        : t('bvi.turnOffSpeech')}`}><span/>
                                                </BviButtonStyled>
                                            </div>
                                            <div className="bvi-panel-btn-group" role="group"
                                                 aria-label={t('bvi.additional')}>
                                                <BviButtonStyled id="bvi-panel-settings" onClick={showAdditionalSettings}
                                                        className={`bvi-panel-btn bvi-panel-btn-default
                                                    ${additionalSettings ? `active`
                                                            : ``}`}
                                                        title={t('bvi.settings')}>
                                                    <i className={`bvi-panel-glyphicon bvi-panel-glyphicon-cog
                                                    ${additionalSettings ? `rotatingCog`
                                                        : ``}`}><span>{t('bvi.settings')}</span></i>
                                                </BviButtonStyled>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                additionalSettings &&
                                <div className="bvi-panel-row">
                                    <div
                                        className="bvi-panel-col-xs-12 bvi-panel-col-sm-12 bvi-panel-col-md-12 bvi-panel-col-lg-12">
                                        <div className="bvi-panel-row">
                                            <div className="bvi-panel-settings">
                                                <BviSeparatorStyled/>
                                                <div
                                                    className="bvi-panel-col-xs-12 bvi-panel-col-sm-6 bvi-panel-col-md-4 bvi-panel-col-lg-4">
                                                    <div className="bvi-panel-title">
                                                        {t('bvi.letterSpacing')}
                                                        <BviButtonResetStyled
                                                            className={`btn-reset ${theme.fontSize === '16px' ? `active` : ``} ${resetKerningAnimation ? `rotating` : ``}`}
                                                            title={t('bvi.reset')}
                                                            onClick={() => {
                                                                setKerningStandard();
                                                                setResetKerningAnimation(true)
                                                            }}
                                                            onAnimationEnd={() => {
                                                                setResetKerningAnimation(false)
                                                            }}
                                                        ><i className="pi pi-undo"></i>
                                                        </BviButtonResetStyled>
                                                    </div>
                                                    <div className="bvi-panel-btn-group" role="group"
                                                         aria-label={t('bvi.letterSpacing')}>
                                                        <BviButtonStyled id="bvi-panel-letter-spacing-normal"
                                                                onClick={setKerningStandard}
                                                                className={`bvi-panel-btn bvi-panel-btn-default ${theme.fontKerning === 'normal' ? `active` : ``}`}
                                                        >{t('bvi.standard')}
                                                        </BviButtonStyled>
                                                        <BviButtonStyled
                                                            id="bvi-panel-letter-spacing-average"
                                                            onClick={setKerningMedium}
                                                            className={`bvi-panel-btn bvi-panel-btn-default ${theme.fontKerning === '2px' ? `active` : ``}`}>{t('bvi.medium')}
                                                        </BviButtonStyled>
                                                        <BviButtonStyled
                                                            id="bvi-panel-letter-spacing-big" onClick={setKerningBig}
                                                            className={`bvi-panel-btn bvi-panel-btn-default ${theme.fontKerning === '5px' ? `active` : ``}`}>{t('bvi.big')}
                                                        </BviButtonStyled>
                                                    </div>
                                                </div>
                                                <div
                                                    className="bvi-panel-col-xs-12 bvi-panel-col-sm-6 bvi-panel-col-md-4 bvi-panel-col-lg-4">
                                                    <div className="bvi-panel-title">
                                                        {t('bvi.letterInterval')}
                                                        <BviButtonResetStyled
                                                            className={`btn-reset ${theme.fontSize === '16px' ? `active` : ``} ${resetIntervalAnimation ? `rotating` : ``}`}
                                                            title={t('bvi.reset')}
                                                            onClick={() => {
                                                                setIntervalStandard();
                                                                setResetIntervalAnimation(true)
                                                            }}
                                                            onAnimationEnd={() => {
                                                                setResetIntervalAnimation(false)
                                                            }}
                                                        ><i className="pi pi-undo"></i>
                                                        </BviButtonResetStyled>
                                                    </div>
                                                    <div className="bvi-panel-btn-group" role="group"
                                                         aria-label={t('bvi.letterInterval')}>
                                                        <BviButtonStyled onClick={setIntervalStandard}
                                                                id="bvi-panel-line-height-normal"
                                                                className={`bvi-panel-btn bvi-panel-btn-default ${theme.fontInterval === '1.5' ? `active` : ``}`}>
                                                            {t('bvi.standard')}
                                                        </BviButtonStyled>
                                                        <BviButtonStyled
                                                            id="bvi-panel-line-height-average"
                                                            onClick={setIntervalMedium}
                                                            className={`bvi-panel-btn bvi-panel-btn-default ${theme.fontInterval === '2' ? `active` : ``}`}>
                                                            {t('bvi.medium')}
                                                        </BviButtonStyled>
                                                        <BviButtonStyled
                                                            id="bvi-panel-line-height-big" onClick={setIntervalBig}
                                                            className={`bvi-panel-btn bvi-panel-btn-default ${theme.fontInterval === '3' ? `active` : ``}`}>
                                                            {t('bvi.big')}
                                                        </BviButtonStyled>
                                                    </div>
                                                </div>
                                                <div
                                                    className="bvi-panel-col-xs-12 bvi-panel-col-sm-12 bvi-panel-col-md-4 bvi-panel-col-lg-4">
                                                    <div className="bvi-panel-title">
                                                        {t('bvi.serifMenu')}
                                                        <BviButtonResetStyled
                                                            className={`btn-reset ${theme.fontSize === '16px' ? `active` : ``} ${resetSerifAnimation ? `rotating` : ``}`}
                                                            title={t('bvi.reset')}
                                                            onClick={() => {
                                                                setSerifOff();
                                                                setResetSerifAnimation(true)
                                                            }}
                                                            onAnimationEnd={() => {
                                                                setResetSerifAnimation(false)
                                                            }}
                                                        ><i className="pi pi-undo"></i>
                                                        </BviButtonResetStyled>
                                                    </div>
                                                    <div className="bvi-panel-btn-group" role="group"
                                                         aria-label={t('bvi.serifMenu')}>
                                                        <BviButtonStyled onClick={setSerifOff}
                                                                id="bvi-panel-font-family-arial"
                                                                className={`bvi-panel-btn bvi-panel-btn-default ${theme.fontSerif === '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
                                                                    ? `active` : ``}`}>
                                                            {t('bvi.withoutSerif')}
                                                        </BviButtonStyled>
                                                        <BviButtonStyled onClick={setSerifOn}
                                                                id="bvi-panel-font-family-times-new-roman"
                                                                className={`bvi-panel-btn bvi-panel-btn-default ${theme.fontSerif === '"Times New roman", serif'
                                                                    ? `active` : ``}`}>
                                                            {t('bvi.withSerif')}
                                                        </BviButtonStyled>
                                                    </div>
                                                </div>
                                                <div
                                                    className="bvi-panel-col-xs-12 bvi-panel-col-sm-12 bvi-panel-col-md-12 bvi-panel-col-lg-12"
                                                    color="margin-top: 15px;"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </BviPanelStyled>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bvi;
