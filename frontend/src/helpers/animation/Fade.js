import React, { useEffect, useState } from "react";
import "./fade.css"

const Fade = ({ show, children }) => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show) setRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setRender(false);
    };

    return (
        shouldRender && (
            <div className={`mx-auto ${show ? "fadeIn" : "fadeOut"}`}
                onAnimationEnd={onAnimationEnd}
            >
                {children}
            </div>
        )
    );
};

export default Fade;
