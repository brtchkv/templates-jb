import "./styles/stubs.css"
import {Icon} from "./styles/loading";

function LoadingFallback() {
    return (
        <div className="mainbox">
            <Icon className="far pi pi-spinner fa-spin stub-spinner" style={{"fontSize": "5em"}}/>
        </div>
    );
}

export default LoadingFallback;
