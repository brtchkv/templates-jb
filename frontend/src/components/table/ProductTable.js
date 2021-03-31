import React from 'react';
import _ from 'lodash';
import {useTranslation} from "react-i18next";
import {FirstTr, Table, Td} from "./style/productTableStyle";

const ProductTable = (props) => {
  const {t} = useTranslation();
  return(
      <Table>
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
  )
}

export default ProductTable;
