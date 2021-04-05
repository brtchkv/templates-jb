import "./styles/stubs.css"
import {Icon} from "./styles/stubs";
import {GlobalStyles} from "../../core-styles/global";
import {ThemeProvider} from "styled-components";
import {useTheme} from "../../core-styles/theme/useTheme";

function LoadingFallback() {
    const [theme, setTheme] = useTheme();
    const themeController = {
        theme: theme,
        setTheme: setTheme
    };
    return (
        <ThemeProvider theme={themeController.theme}>
            <>
                <GlobalStyles/>
                <div className="plp-theme">
                    <div className="mainbox">
                        <Icon className="far pi pi-spinner fa-spin stub-spinner" style={{"fontSize": "5em"}}/>
                    </div>
                </div>
            </>
        </ThemeProvider>
    );
}

export default LoadingFallback;
