import styled from 'styled-components';

export const Table = styled.table`
  width:700px;
  margin: 10px 0;
  border:1px solid black;
  border-collapse: collapse;
  @media (max-width: 768px) {
    width:100%;
  }
`;
export const Td = styled.td`
  padding: 5px;
  border-left:1px solid black;
`;

export const FirstTr = styled.tr`
  background-color: #80808052;
`;

