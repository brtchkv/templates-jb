import React, {useState} from 'react';
import "../../pages/public/login/styles/Auth.css"
import {ImageStyled, ImageContainer} from "./styles/styles"

interface dimensions {
    height: number,
    width: number
}
function Image(props) {
    const [dimensions, setDimensions] = useState<dimensions>();

    const onImgLoad = ({target: img}) => {
        setDimensions({
            height: img.naturalHeight,
            width: img.naturalWidth
        });
    }

    return (
        <ImageContainer size={props.size || dimensions}>
            <ImageStyled src={props.src} size={props.size || dimensions} onLoad={onImgLoad} className={`${props.className}`} recolor={props.recolor} invert={props.invert}/>
        </ImageContainer>
    );
}

export default Image;
