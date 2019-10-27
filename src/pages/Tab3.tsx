import React from 'react';
import { IonSlides, IonSlide, IonContent, IonHeader,IonToolbar, IonPage, IonTitle,IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/react';
import './Tab3.css';
import CardMarvel from '../components/CardMarvel';

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
	initialSlide: 1,
	speed: 400
};

const Tab3Page: React.FC = () => {
	return (
	<IonPage>
		<IonContent>
			<IonSlides pager={true} options={slideOpts}>
				<IonSlide>
					<img src="https://img-cdn.hipertextual.com/files/2019/09/hipertextual-marvel-celebra-ochenta-anos-vida-todo-alto-2019244748.jpg?strip=all&lossy=1&quality=57&resize=960%2C640&ssl=1" alt="Slide 1"/>
					<h2>What is Ionic Pro?</h2>
					<p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
				</IonSlide>
				<IonSlide>
					<img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/09/personajes-marvel.jpg" alt="Slide 2"/>
					<h2>What is Ionic Pro?</h2>
					<p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
				</IonSlide>
				<IonSlide>
					<img src="https://topesdegama.com/app/uploads/2019/03/Disney.jpg" alt="Slide 1"/>
					<h2>What is Ionic Pro?</h2>
					<p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
				</IonSlide>
			</IonSlides>
			<CardMarvel idMarvel="1009610" />

			<CardMarvel idMarvel="1009220" />

			<CardMarvel idMarvel="1009368" />

		</IonContent>
	</IonPage>
	)
};

export default Tab3Page;
