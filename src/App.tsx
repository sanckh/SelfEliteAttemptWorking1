import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import MainPage from './Pages/MainPage';
import {useAuthState} from "react-firebase-hooks/auth";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import 'bootstrap/dist/css/bootstrap.min.css'
/* Theme variables */
import './Theme/variables.css';
import {PropsWithChildren} from "react";
import {Provider} from "react-redux";
import * as path from "path";
import {store} from "./State/store";

const App: React.FC = (props) => {
  return (
      <Provider store={store}>
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          {/*<Menu disabled={true}/>*/}
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Home" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <MainPage />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
      </Provider>
  );
};

export default App;
