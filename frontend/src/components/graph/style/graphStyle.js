import styled from 'styled-components';

export const GraphWrapper = styled.div`
  height: 300px;
  & .recharts-responsive-container {
    margin: auto;
  }
  @media (max-width: 768px) and (min-width: 401px){
    height: 200px;
  }
  @media (max-width: 400px){
    height: 140px;
  }
`;

export const GraphWrapperDiv = styled.div`
  width: 100%;
`;
