import React, {useEffect, useState} from "react";
import './styles/catalog.css';
import Loading from "../../stubs/Loading";
import * as API from '../../../service/api/serviceAPI.ts';
import FilterPanel from "./FilterPanel";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Trans, useTranslation} from 'react-i18next'
import {FilterPanelContainerStyled} from "./styles/filterPanel";
import {AnchorContainerStyled} from "./styles/catalog";

function DashBoard() {
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [filterOption, setFilterOptions] = useState("week");
    const {t} = useTranslation();

    useEffect(() => {
        // API.fetchPageData("courses", filterOption)
        //     .then(
        //         (result) => {
        //             setIsLoaded(true);
        //             setIsLoaded(result)
        //         },
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(true);
        //         }
        //     )
    }, [filterOption]);

    const setFilteredData = (value, preferences) => {
        setItems(value)
        setFilteredData(preferences);
    };

    if (error) {
        return <div>{t('util.error')}: {error.message}</div>;
    } else if (!isLoaded) {
        return <Loading/>;
    } else {
        return (
            <>
                <div id="top-of-catalog"/>
                <FilterPanelContainerStyled className="search-tools">
                    <div className="container">
                        <h2 className="title">
                            <Trans
                                i18nKey="catalog.filterPanel.totalCourses"
                                values={{count: items.length, total: items.length}}
                                components={{1: <span className="comment"/>}}
                            />
                        </h2>
                        <FilterPanel setFilteredData={setFilteredData}/>
                    </div>
                </FilterPanelContainerStyled>
                {/*<div className="container courses-container cols-4">*/}
                {/*    {items.map(item => (*/}
                {/*        <Card key={item.code} item={item}/>*/}
                {/*    ))*/}
                {/*    }*/}
                {/*</div>*/}
                <div className="scroll-btn-container">
                    <AnchorContainerStyled>
                        <AnchorLink href="#top-of-catalog" offset='130'
                                    className="scroll-to-btn">{t('dashboard.pagination.up')}</AnchorLink>
                    </AnchorContainerStyled>
                </div>
            </>
        );
    }
}

export default DashBoard;

