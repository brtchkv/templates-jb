import React from "react";
import {Link} from 'react-router-dom'
import "./styles/stubs.css"
import {Trans, useTranslation} from "react-i18next";

function PageNotFound(props) {
    const {t, i18n} = useTranslation();

    return (
            <div className="mainbox">
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"/>
                <div className="err2">4</div>
                <div className="msg">
                    {t('util.pageNotFound')}
                </div>
            </div>
    );
}

export default PageNotFound;
