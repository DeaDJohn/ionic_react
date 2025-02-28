import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apps, planet, book } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Details from './pages/Details';

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

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route path="/home" component={Tab3} exact={true} />
					<Route path="/heroes" component={Tab2} exact={true} />
					<Route path="/heroes/details" component={Details} />
					<Route path="/tab1" component={Tab1} />
					<Route path="/" render={() => <Redirect to="/home" />} exact={true} />
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="tab3" href="/home">
						<IonIcon icon={planet} />
						<IonLabel>Home</IonLabel>
					</IonTabButton>
					<IonTabButton tab="tab2" href="/heroes">
						<IonIcon icon={apps} />
						<IonLabel>Heroes</IonLabel>
					</IonTabButton>
					<IonTabButton tab="tab1" href="/tab1">
						<IonIcon icon={book} />
						<IonLabel>Info ionic</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default App;
