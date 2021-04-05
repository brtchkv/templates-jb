import "./styles/stubs.css"
import {useTranslation} from "react-i18next";
import {ErrNotFound, Icon, NotFoundWrapper} from "./styles/stubs";

function PageNotFound() {
    const {t} = useTranslation();

    return (
            <NotFoundWrapper className="mainbox">
                <ErrNotFound className="err">4</ErrNotFound>
                <Icon className="far fa-question-circle fa-spin"/>
                <ErrNotFound className="err2">4</ErrNotFound>
                <div className="msg">
                    {t('util.pageNotFound')}
                </div>
            </NotFoundWrapper>
    );
}

export default PageNotFound;
