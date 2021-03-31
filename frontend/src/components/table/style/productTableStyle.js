import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin: 10px 0;
  border: 1px solid ${({theme}) => theme.styles.main.button.border};
  color: ${({theme}) => theme.styles.main.catalog.dataTable.color};
  border-collapse: collapse;
`;
export const Td = styled.td`
  padding: 5px;
  border-left: 1px solid ${({theme}) => theme.styles.main.button.border};
  color: ${({theme}) => theme.styles.main.catalog.dataTable.color};
  text-align: center;
`;

export const FirstTr = styled.tr`
  background: ${({theme}) => theme.styles.main.filterPanel.background};
  color: ${({theme}) => theme.styles.main.catalog.dataTable.color};
`;

