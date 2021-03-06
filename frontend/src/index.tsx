import {Suspense} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./app";
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {I18nextProvider} from "react-i18next";
import i18n from "./settings/localization/i18n";
import LoadingFallback from "./pages/stubs/LoadingFallback";

ReactDOM.render((
    <Suspense fallback={LoadingFallback}>
        <I18nextProvider i18n={i18n}>
            <App/>
        </I18nextProvider>
    </Suspense>

), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
