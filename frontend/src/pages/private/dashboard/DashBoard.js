import React, {useContext, useEffect, useState} from "react";
import './styles/dashBoard.css';
import Loading from "../../stubs/Loading";
import * as API from '../../../service/api/serviceAPI.ts';
import FilterPanel from "./FilterPanel";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Trans, useTranslation} from 'react-i18next'
import {FilterPanelContainerStyled} from "./styles/filterPanel";
import {AnchorContainerStyled, FirstTr, NoDataLabel, Table, Td} from "./styles/dashBoard";
import _ from "lodash";
import dayjs from 'dayjs';
import {userContext} from "../../../settings/user/userContext";

function DashBoard() {
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [filterOption, setFilterOption] = useState("week");
    const [startDate, setStartDate] = useState(dayjs().toISOString());
    const {t, i18n} = useTranslation();
    const context = useContext(userContext);

    useEffect(() => {
        API.getFilteredStatData(context.user, filterOption, startDate)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(true);
                }
            )
    }, [filterOption]);

    useEffect(() => {
        API.getAllStatDataCount(context.user)
            .then(
                (result) => {
                    setCount(parseInt(result))
                },
                (error) => {
                    setIsLoaded(true);
                    setError(true);
                }
            )
    }, []);

    const setFilteredData = (value, filter) => {
        setItems(value)
        setFilterOption(filter);
    };

    if (error) {
        return <div>{t('util.error')}: {error.message}</div>;
    } else if (!isLoaded) {
        return <Loading/>;
    } else {
        let localizedFormat = require('dayjs/plugin/localizedFormat')
        dayjs.extend(localizedFormat)
        return (
            <>
                <div id="top-of-catalog"/>
                <FilterPanelContainerStyled className="search-tools">
                    <div className="container">
                        <div className="row d-flex flex-row justify-content-between">
                            <h2 className="title">
                                От {dayjs(startDate).locale(i18n.language).format('LL')} &nbsp;
                                <span className="comment">
                                    до {dayjs(startDate).add(1, filterOption).subtract(1, 'day').locale(i18n.language).format('LL')}
                                </span>
                            </h2>

                            <h2 className="title">
                                <Trans
                                    i18nKey="dashboard.filterPanel.totalCourses"
                                    values={{count: items ? items.length : 0, total: count}}
                                    components={{1: <span className="comment"/>}}
                                />
                            </h2>
                        </div>
                        <div className="row">
                            <FilterPanel setFilteredData={setFilteredData} className="col-12"/>
                        </div>
                    </div>
                </FilterPanelContainerStyled>
                <div className="container courses-container cols-4">
                    {(items > 0) ?
                        <Table>
                            <tbody>
                            <FirstTr>
                                <Td>{t('dashboard.table.product')}</Td>
                                <Td>{t('dashboard.table.minUsage')}</Td>
                                <Td>{t('dashboard.table.maxUsage')}</Td>
                                <Td>{t('dashboard.table.averageUsage')}</Td>
                            </FirstTr>
                            {items.map((element, index) =>
                                <tr key={index}>
                                    <Td>{element.name}</Td>
                                    <Td>{_.size(element.data) !== 0 ? _.minBy(element.data, 'usage').usage : 0}</Td>
                                    <Td>{_.size(element.data) !== 0 ? _.maxBy(element.data, 'usage').usage : 0}</Td>
                                    <Td>{_.size(element.data) !== 0 ? parseInt(_.meanBy(element.data, 'usage')) : 0} </Td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                        :
                        <NoDataLabel className="title">
                            {t('dashboard.table.noRecords')}
                        </NoDataLabel>
                    }
                </div>
                {(items > 0) ?
                    <div className="scroll-btn-container">
                        <AnchorContainerStyled>
                            <AnchorLink href="#top-of-catalog" offset='130'
                                        className="scroll-to-btn">{t('dashboard.pagination.up')}</AnchorLink>
                        </AnchorContainerStyled>
                    </div>
                    : <></>
                }
            </>
        );
    }
}

export default DashBoard;

