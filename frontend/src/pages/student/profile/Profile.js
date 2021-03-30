import React from 'react';
import "./style/courses.css"
import Loading from "../../../pages/stubs/Loading";
import stub from "../../stubs/img/toBeDeveloped.png"
import {withTranslation} from "react-i18next";
import Image from "../../../components/image/Image";

class StudentCourses extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            error: null,
            isLoaded: true,
        };
    }

    render() {
        const { t } = this.props;
        const {error, isLoaded} = this.state;
        if (error) {
            return <div>{t('catalog.util.error')} {error.message}</div>;
        } else if (!isLoaded) {
            return <Loading/>;
        } else {
            return (
                <div className="container">
                    <Image className="picture img-circle" alt="" src={stub} size={{width: "400px", height: "400px"}}/>
                </div>
            );
        }
    }
}

export default withTranslation()(StudentCourses);
