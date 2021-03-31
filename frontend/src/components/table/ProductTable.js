import React from 'react';
import _ from 'lodash';
import {useTranslation} from "react-i18next";
import {FirstTr, Table, Td} from "./style/productTableStyle";

const ProductTable = (props) => {
    const {t} = useTranslation();
    return (
        <>
            <Table className={"d-none d-md-block"}>
                <tbody>
                <FirstTr>
                    <Td>{t('dashboard.table.product')}</Td>
                    <Td>{t('dashboard.table.minUsage')}</Td>
                    <Td>{t('dashboard.table.maxUsage')}</Td>
                    <Td>{t('dashboard.table.averageUsage')}</Td>
                </FirstTr>
                {props.data.map((element, index) =>
                    <tr key={index}>
                        <Td>{element.name}</Td>
                        <Td>{_.size(element.data) !== 0 ? _.minBy(element.data, 'usage').usage : 0}</Td>
                        <Td>{_.size(element.data) !== 0 ? _.maxBy(element.data, 'usage').usage : 0}</Td>
                        <Td>{_.size(element.data) !== 0 ? parseInt(_.meanBy(element.data, 'usage')) : 0} </Td>
                    </tr>
                )}
                </tbody>
            </Table>
            <Table className={"d-md-none"}>
                <tbody>
                <FirstTr>
                    <Td>{t('dashboard.table.productMobile')}</Td>
                    {props.data.map((element, index) =>
                        <Td key={index}>{element.name}</Td>
                    )}
                    {/*<Td>{t('dashboard.table.maxUsage')}</Td>*/}
                    {/*<Td>{t('dashboard.table.averageUsage')}</Td>*/}
                </FirstTr>
                <tr>
                    <Td>{t('dashboard.table.minUsageMobile')}</Td>
                    {props.data.map((element, index) =>
                        <Td key={index}>{_.size(element.data) !== 0 ? _.minBy(element.data, 'usage').usage : 0}</Td>
                    )}
                </tr>
                <tr>
                    <Td>{t('dashboard.table.maxUsageMobile')}</Td>
                    {props.data.map((element, index) =>
                        <Td key={index}>{_.size(element.data) !== 0 ? _.maxBy(element.data, 'usage').usage : 0}</Td>
                    )}
                </tr>
                <tr>
                    <Td>{t('dashboard.table.averageUsageMobile')}</Td>
                    {props.data.map((element, index) =>
                        <Td key={index}>{_.size(element.data) !== 0 ? parseInt(_.meanBy(element.data, 'usage')) : 0} </Td>
                    )}
                </tr>
                </tbody>
            </Table>
        </>
    )
}

export default ProductTable;
