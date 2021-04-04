import {useState} from 'react';
import "../../pages/public/login/styles/Auth.css"
import {ImageStyled, ImageContainer} from "./styles/styles"

interface dimensions {
    height?: string,
    width?: string
}

interface ImageProps {
    size?: dimensions,
    src: any,
    className?: string,
    recolor?: boolean,
    invert?: boolean
}

interface SizedEvent {
    target: {
        img: {
            naturalHeight: number,
            naturalWidth: number
        }
    }
}

function isSizedEvent(e: any): e is SizedEvent {
    return (e && e.width !== undefined && e.height !== undefined);
}

function Image(props: ImageProps) {
    const [dimensions, setDimensions] = useState<dimensions>();

    const onImgLoad = (e: any) => {
        if (isSizedEvent(e)) {
            setDimensions({
                height: e.target.img.naturalHeight.toString(),
                width: e.target.img.naturalWidth.toString()
            });
        }
    }

    return (
        <ImageContainer>
            <ImageStyled src={props.src} size={props.size || dimensions} onLoad={onImgLoad} className={`${props.className}`}
                         recolor={props.recolor ? props.recolor : false} invert={props.invert ? props.invert : false}/>
        </ImageContainer>
    );
}


export default Image;
