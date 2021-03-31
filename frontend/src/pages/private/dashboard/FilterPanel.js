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

    const sortMethod = [
        {value: "day", label: t('dashboard.filterPanel.filterSelector.sorting.options.day')},
        {value: "week", label: t('dashboard.filterPanel.filterSelector.sorting.options.week')},
        {value: "month", label: t('dashboard.filterPanel.filterSelector.sorting.options.month')},
        {value: "quarter", label: t('dashboard.filterPanel.filterSelector.sorting.options.quarter')},
        {value: "year", label: t('dashboard.filterPanel.filterSelector.sorting.options.year')},
        {value: "all", label: t('dashboard.filterPanel.filterSelector.sorting.options.all')}
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
                            sortMethod.map(function (sort) {
                                return <option key={sort.value} value={sort.value}>{sort.label}</option>
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
                    {t('util.noServerConnection')}
                </Alert>
            }
        </form>
    );
}

export default FilterPanel;
