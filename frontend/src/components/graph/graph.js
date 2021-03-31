import React from 'react';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc'
import {GraphWrapper, GraphWrapperDiv} from "./style/graphStyle";
import {useTranslation} from "react-i18next";
require('dayjs/locale/ru')
require('dayjs/locale/en')

dayjs.extend(localizedFormat);
dayjs.extend(utc)

const Graph = (props) => {
    const {i18n} = useTranslation();
    return (
        <>
            {props.data.map((row, index) =>
                <GraphWrapperDiv key={index}>
                    <h3 style={{textAlign: "center"}}>{row.name}</h3>
                    <GraphWrapper>
                        <ResponsiveContainer width="90%" height="100%">
                            <BarChart data={row.data}>
                                <XAxis dataKey="timestamp"
                                       tickFormatter={timeStr => dayjs(timeStr).utc().locale(i18n.language).format('MMM D')}/>
                                <YAxis/>
                                <Tooltip labelFormatter={timeStr => dayjs(timeStr).utc().locale(i18n.language).format('lll')}/>
                                <Bar dataKey="usage" fill="#82ca9d"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </GraphWrapper>
                </GraphWrapperDiv>
            )}
        </>
    )
}

export default Graph
