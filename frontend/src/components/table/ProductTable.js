import React from 'react';
import _ from 'lodash';
import {FirstTr, Table} from "../../pages/private/dashboard/styles/dashBoard";

const ProductTable = (props) => {
  return(
    <Table>
      <tbody>
        <FirstTr>
          <Td>Product</Td>
          <Td>Min Usage</Td>
          <Td>Max Usage</Td>
          <Td>Average Usage</Td>
        </FirstTr>
        {props.data.map((element, index) =>
          <tr key={index}>
            <Td>{element.name}</Td>
            <Td>{ _.size(element.data)!==0?_.minBy(element.data, 'usage').usage:0}</Td>
            <Td>{ _.size(element.data)!==0?_.maxBy(element.data, 'usage').usage:0}</Td>
            <Td>{_.size(element.data)!==0?parseInt(_.meanBy(element.data, 'usage')):0} </Td>
          </tr>
        )} 
      </tbody>
    </Table>
  )
}

export default ProductTable;
