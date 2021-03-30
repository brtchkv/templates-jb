import React from 'react';
import {getPrivateCourses, getAllStatData} from "../../../service/api/serviceAPI.ts";
import "./style/courses.css"
import {userContext} from "../../../settings/user/userContext.ts";
import Loading from "../../../pages/stubs/Loading";
import _ from "lodash";
import {withTranslation} from "react-i18next";
import Image from "../../../components/image/Image";

class Courses extends React.Component {
    static contextType = userContext;

    constructor(props, context) {
        super(props, context);
        this.state = {
            error: null,
            isLoaded: false,
            courses: [],
            count: 2,
            start: 0,
            fullListOfData: false, //TODO: доделать, чтобы сервер возвращал размер массива всех курсов для декремента
        };

        getAllStatData(this.context.user).then(
            response => {
                this.setState({
                    isLoaded: true,
                    data: response
                });

                let ideaData = _.map(response, (el) => {
                    return {usage: _.parseInt(el.idea), timestamp: el.timeStamp}
                });
                let webStormData = _.map(response, (el) => {
                    return {usage: _.parseInt(el.webStorm), timestamp: el.timeStamp}
                });
                let goLandData = _.map(response, (el) => {
                    return {usage: _.parseInt(el.goLand), timestamp: el.timeStamp}
                });

                console.log("ideaData", ideaData);
                console.log("webstormData", webStormData);
                console.log("golandData", goLandData);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render() {
        const {t} = this.props;
        const {error, isLoaded, courses} = this.state;
        if (error) {
            return <div>{t('util.error')}: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loading/>;
        } else {
            return (
                <div className="container">
                    <div className="background-poster background-poster--user"/>
                    <div className="row personal-info-box">
                        <div className="col-md-8 col-sm-6">
                            <div className="personal-info">
                                <userContext.Consumer>
                                    {(value) => (
                                        <h1>{value.user.role}</h1>
                                    )}
                                </userContext.Consumer>
                                {/*<ul className="list-inline list-unstyled">*/}
                                {/*    <li>*/}
                                {/*        {finishedCoursesCount} {this.getRightCourseNaming(finishedCoursesCount)} <span>вы прошли</span>*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        на {activeCoursesCount} {this.getRightCourseNaming(activeCoursesCount)} <span>вы записаны</span>*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                        <div className="col-md-4  col-sm-6 hidden-xs text-center">
                            <Image className="picture img-circle" alt=""
                                   src="https://www.myfamily.it/content/images/thumbs/0026948_akita-inu-dog-tag.jpeg"
                                   size={{width: "133px", height: "133px"}}/>
                        </div>
                    </div>
                    {/*<h2>*/}
                    {/*    {t('profileStudent.totalNumberOfCourses', {count: courses.length})}*/}
                    {/*</h2>*/}
                    {/*<TabView>*/}
                    {/*    <TabPanel header={`${t('profileStudent.subscription.active')} — ${activeCoursesCount}`}>*/}
                    {/*        {courses.map(item => (*/}
                    {/*            item.active && <CourseCard removeCourse={this.removeCourse} key={item.course.code}*/}
                    {/*                                       course={item.course}/>*/}
                    {/*        ))*/}
                    {/*        }*/}
                    {/*    </TabPanel>*/}
                    {/*    <TabPanel header={`${t('profileStudent.subscription.finished')} — ${finishedCoursesCount}`}>*/}
                    {/*        {courses.map(item => (*/}
                    {/*            !item.active && <CourseCard removeCourse={this.removeCourse} key={item.course.code}*/}
                    {/*                                        course={item.course}/>*/}
                    {/*        ))*/}
                    {/*        }*/}
                    {/*    </TabPanel>*/}
                    {/*</TabView>*/}

                </div>
            );
        }
    }
}

export default withTranslation()(Courses);
