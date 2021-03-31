import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import "./styles/filterPanel.css"
import * as API from "../../../service/api/serviceAPI.ts";
import Alert from "react-bootstrap/Alert";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {OrderLabelStyled, SelectorStyled} from "./styles/filterPanel";

function FilterPanel(props) {
    const {t, i18n} = useTranslation();

    const {register, handleSubmit} = useForm({
            mode: 'onChange'
        }
    );
    const [visibleAlert, setVisibleAlert] = useState(false);

    //TODO: серварная подгрузка опций фильтров

    const uniList = [
        {value: "-1", label: t('dashboard.filterPanel.filterSelector.allUni')},
        {value: "1", label: "ИТМО"},
        {value: "3", label: "Тюменский индустриальный университет"},
        {value: "2", label: "Уральский университет"}
    ];
    const sortMethod = [
        {value: "all", label: t('dashboard.filterPanel.filterSelector.sorting.options.default')},
        {value: "dateFromNew", label: t('dashboard.filterPanel.filterSelector.sorting.options.durationStart')},
        {value: "dateFromOld", label: t('dashboard.filterPanel.filterSelector.sorting.options.durationEnd')},
        {value: "nameStart", label: t('dashboard.filterPanel.filterSelector.sorting.options.nameStart')},
        {value: "nameEnd", label: t('dashboard.filterPanel.filterSelector.sorting.options.nameEnd')},
        {value: "newFirst", label: t('dashboard.filterPanel.filterSelector.sorting.options.newFirst')}
    ];
    const groupList = [
        {value: "-1", label: t('dashboard.filterPanel.filterSelector.allProg')},
        {value: "3", label: "Физика и астрономия"},
        {value: "5", label: "Техника и технологии строительства"},
    ];

    const courseStatus = [
        {value: "all", label: t('dashboard.filterPanel.filterSelector.courseStatus.all')},
        {value: "started", label: t('dashboard.filterPanel.filterSelector.courseStatus.started')},
        {value: "scheduled", label: t('dashboard.filterPanel.filterSelector.courseStatus.scheduled')},
        {value: "current", label: t('dashboard.filterPanel.filterSelector.courseStatus.current')},
        {value: "archived", label: t('dashboard.filterPanel.filterSelector.courseStatus.archived')}
    ];

    const showAlert = () => {
        setVisibleAlert(true, () => {
            window.setTimeout(() => {
                setVisibleAlert(false);
            }, 4000)
        });
    };

    const onSubmit = (preferences) => {
        // API.filterCoursesBy(preferences)
        //     .then(
        //         (response) => {
        //             console.log(response);
        //             props.setFilteredData(response, preferences);
        //         })
        //     .catch(function (error) {
        //         console.log(error);
        //         showAlert()
        //     });
    };

    return (
        <form onChange={handleSubmit(onSubmit)}>
            <div className="course-filters">
                <div className="course-filter">
                    <Form.Control
                        name="uniFilter" as={SelectorStyled} ref={register({type: 'custom'})}
                        className="plp-selector" custom
                    >
                        {
                            uniList.map(function (uni) {
                                return <option key={uni.value} value={uni.value}>{uni.label}</option>
                            })
                        }
                    </Form.Control>
                </div>
                <div className="course-filter">
                    <Form.Control
                        name="groupFilter" as={SelectorStyled} ref={register({type: 'custom'})}
                        className="plp-selector" custom
                    >
                        {
                            groupList.map(function (group) {
                                return <option key={group.value} value={group.value}>{group.label}</option>
                            })
                        }
                    </Form.Control>
                </div>
                <div className="course-filter">
                    <Form.Control
                        name="courseStatusFilter" as={SelectorStyled} ref={register}
                        className="plp-selector" custom
                    >
                        {
                            courseStatus.map(function (status) {
                                return <option key={status.value} value={status.value}>{status.label}</option>
                            })
                        }
                    </Form.Control>
                </div>
            </div>
            <div className="results-view-settings">
                <div className="ordering">
                    <OrderLabelStyled className="sort-label">{t('dashboard.filterPanel.filterSelector.sorting.title')}:</OrderLabelStyled>
                    <Form.Control
                        name="sortMethodFilter" as={SelectorStyled}
                        className="plp-selector" ref={register} custom
                    >
                        {
                            sortMethod.map(function (method) {
                                return <option key={method.value} value={method.value}>{method.label}</option>
                            })
                        }
                    </Form.Control>
                </div>
            </div>
            {
                visibleAlert &&
                <Alert variant="warning">
                    Нет соединения с сервером
                </Alert>
            }
        </form>
    );
}

export default FilterPanel;
