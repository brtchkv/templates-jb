import styled from 'styled-components';

export const Icon = styled.i`
    color: ${({theme}) => theme.styles.loader.color};
`

export const NotFoundWrapper = styled.div`
    margin: auto;
    height: 600px;
    width: 600px;
    position: relative;
    
    && .far{
        position: absolute;
        font-size: 8.5rem;
        left: 42%;
        top: 18%;
    }
`

export const ErrNotFound = styled.div`
    color: ${({theme}) => theme.styles.loader.color};
    font-family: ${({theme}) => theme.fontSerif};
    letter-spacing: ${({theme}) => theme.fontKerning};
`