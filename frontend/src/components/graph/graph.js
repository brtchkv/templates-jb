import React from 'react';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc'
import {GraphWrapper, GraphWrapperDiv} from "./style/graphStyle";


dayjs.extend(localizedFormat);
dayjs.extend(utc)

const Graph = (props) => {
    return (
        <>
            {props.data.map((row, index) =>
                <GraphWrapperDiv key={index}>
                    <h3 style={{textAlign: "center"}}>{row.name}</h3>
                    <GraphWrapper>
                        <ResponsiveContainer width="90%" height="100%">
                            <BarChart data={row.data}>
                                <XAxis dataKey="timestamp"
                                       tickFormatter={timeStr => dayjs(timeStr).utc().format('MMM D')}/>
                                <YAxis/>
                                <Tooltip labelFormatter={timeStr => dayjs(timeStr).utc().format('lll')}/>
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
