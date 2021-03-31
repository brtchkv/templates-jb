import styled from 'styled-components'

export const ImageStyled = styled.img`
  filter: ${props => getFilter(props.theme.images, props.recolor, props.theme.themeName, props.invert)};
  max-height: ${props => props.size.height};
  max-width: ${props => props.size.width};
  background-color: transparent !important;
  opacity: ${props => props.theme.images === "off" ? 0 : 1};
`

export const ImageContainer = styled.div`
  overflow: hidden;
`

function getFilter(mode, recolor, theme, invert){
    if (recolor) {
        if (!invert) {
            if (theme === "dark") return "grayscale(1)";
            else if (theme === "white") return "grayscale(1) invert(1)";
        } else {
            if (theme === "dark") return "invert(1)";
            else if (theme === "white") return "grayscale(1)";
        }
    }
    if (mode === "on"){
        return "none"
    } else if (mode === "grayscale"){
        return "url(\"data:image/svg+xml;utf8,&lt;svg xmlns=\\'http://www.w3.org/2000/svg\\'&gt;&lt;filter id=\\'grayscale\\'&gt;&lt;feColorMatrix type=\\'matrix\\' values=\\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\\'/&gt;&lt;/filter&gt;&lt;/svg&gt;.constants-grayscale\");" +
            "-webkit-filter: grayscale(100%);" +
            "-moz-filter: grayscale(100%);" +
            "-ms-filter: grayscale(100%);" +
            "-o-filter: grayscale(100%);" +
            "filter: grayscale(100%);" +
            "filter: grayscale(1);" +
            "filter: gray;"
    } else {
        return "none"
    }
}

ImageStyled.defaultProps = {
    theme: {
        images: "on"
    },
    size: {
        height: "100%",
        width: "100%"
    },
    recolor: false,
    invert: false
}

ImageContainer.defaultProps = {
    size: {
        height: "100%",
        width: "100%"
    }
}
