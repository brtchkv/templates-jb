import {useContext, useEffect, useState} from "react";
import './styles/dashBoard.css';
import Loading from "../../stubs/Loading";
import * as API from '../../../service/api/serviceAPI';
import FilterPanel from "../../../components/filterPanel/FilterPanel";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Trans, useTranslation} from 'react-i18next'
import {FilterPanelContainerStyled} from "../../../components/filterPanel/styles/filterPanel";
import {AnchorContainerStyled, NoDataLabel} from "./styles/dashBoard";
import _ from "lodash";
import dayjs from 'dayjs';
import {userContext} from "../../../settings/user/userContext";
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import Graph from "../../../components/graph/graph";
import ProductTable from "../../../components/table/ProductTable";
import {getEndRange} from "../../../helpers/date";
import {checkLocalStorage} from "../../../helpers/user";

require('dayjs/locale/ru')
require('dayjs/locale/en')

interface AppData {
    usage: number,
    timestamp: string
}

interface ItemsI {
    data: Array<{
        usage: number,
        timestamp: string
    }>,
    name: string
}

interface EnumItemsI extends Array<ItemsI> {
}

function DashBoard() {
    dayjs.extend(quarterOfYear)
    dayjs.extend(localizedFormat)
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<EnumItemsI>([]);
    const [count, setCount] = useState(0);
    const [maxRecords, setMaxRecords] = useState(0);
    const [filterOption, setFilterOption] = useState("day");
    const [startDate, setStartDate] = useState(dayjs().startOf("month"));
    const {t, i18n} = useTranslation();
    const context = useContext(userContext);

    useEffect(() => {
        API.getFilteredStatData(context, filterOption, startDate.toISOString())
            .then(
                (response) => {
                    setIsLoaded(true);
                    let ideaData: AppData[] = _.map(response.data, (row) => {
                        return {usage: _.parseInt(row.idea), timestamp: row.timeStamp}
                    });
                    let webStormData: AppData[] = _.map(response.data, (row) => {
                        return {usage: _.parseInt(row.webStorm), timestamp: row.timeStamp}
                    });
                    let goLandData: AppData[] = _.map(response.data, (row) => {
                        return {usage: _.parseInt(row.goLand), timestamp: row.timeStamp}
                    });
                    setItems([
                        {data: ideaData, name: "IntelliJ IDEA"},
                        {data: webStormData, name: "WebStorm"},
                        {data: goLandData, name: "GoLand"}
                    ]);
                    setCount(_.size(response.data));
                },
                (error) => {
                    if (error.response.status === 403) {
                        API.logOut();
                        context.setUser(checkLocalStorage());
                    }
                    console.error(error);
                    setIsLoaded(true);
                    setError(true);
                }
            )
        API.getAllStatDataCount(context)
            .then(
                (response) => {
                    setMaxRecords(parseInt(response.data));
                },
                (error) => {
                    if (error.response.status === 403) {
                        API.logOut();
                        context.setUser(checkLocalStorage());
                    }
                    console.error(error);
                    setIsLoaded(true);
                    setError(true);
                }
            )
    }, [filterOption, startDate]);


    const setFilteredData = (date: dayjs.Dayjs, filterOption: string) => {
        setStartDate(date);
        setFilterOption(filterOption);
    };

    if (error) {
        return (
            <div className="container cols-4">
                <NoDataLabel className="title">
                    {t('dashboard.toast.errorGettingData')}
                </NoDataLabel>
            </div>
        );
    } else if (!isLoaded) {
        return <Loading/>;
    } else {
        return (
            <>
                <div id="top-of-dashboard"/>
                <FilterPanelContainerStyled className="search-tools">
                    <div className="container">
                        <div className="row d-flex flex-row justify-content-between">
                            <h2 className="title">
                                <Trans
                                    i18nKey="dashboard.filterPanel.dateRange"
                                    values={{
                                        start: startDate.locale(i18n.language).format('LL'),
                                        end: getEndRange(startDate, filterOption, i18n)
                                    }}
                                    components={{1: <span className="comment"/>}}
                                />
                            </h2>

                            <h2 className="title">
                                <Trans
                                    i18nKey="dashboard.filterPanel.totalStats"
                                    values={{count: count, total: maxRecords}}
                                    components={{1: <span className="comment"/>}}
                                />
                            </h2>
                        </div>
                        <div className="row">
                            <FilterPanel setFilteredData={setFilteredData} className="col-12" startDate={startDate}
                                         filterOption={filterOption}/>
                        </div>
                    </div>
                </FilterPanelContainerStyled>
                <div className="container courses-container cols-4">
                    {(count > 0) ?
                        <>
                            <ProductTable data={items}/>
                            <Graph data={items}/>
                        </>
                        :
                        <NoDataLabel className="title">
                            {t('dashboard.table.noRecords')}
                        </NoDataLabel>
                    }
                </div>
                {(count > 0) &&
                    <div className="scroll-btn-container">
                        <AnchorContainerStyled>
                            <AnchorLink href="#top-of-dashboard" offset='130'
                                        className="scroll-to-btn">{t('dashboard.pagination.up')}</AnchorLink>
                        </AnchorContainerStyled>
                    </div>
                }
            </>
        );
    }
}

export default DashBoard;

