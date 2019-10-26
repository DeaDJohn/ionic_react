import React from 'react';
import { IonSlides, IonSlide, IonContent, IonHeader,IonToolbar, IonPage, IonTitle,IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/react';
import './Tab3.css';

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
					<img src="https://img-cdn.hipertextual.com/files/2019/09/hipertextual-marvel-celebra-ochenta-anos-vida-todo-alto-2019244748.jpg?strip=all&lossy=1&quality=57&resize=960%2C640&ssl=1" alt="Slide 1"/>
					<h2>What is Ionic Pro?</h2>
					<p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
				</IonSlide>
				<IonSlide>
					<img src="https://img-cdn.hipertextual.com/files/2019/09/hipertextual-marvel-celebra-ochenta-anos-vida-todo-alto-2019244748.jpg?strip=all&lossy=1&quality=57&resize=960%2C640&ssl=1" alt="Slide 1"/>
					<h2>What is Ionic Pro?</h2>
					<p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
				</IonSlide>
			</IonSlides>
			<IonCard>
				<img src="http://static.t13.cl/images/sizes/1200x675/1569598035-spider-man-2.jpg" />
				<IonCardHeader>
					<IonCardSubtitle>Peter Parker</IonCardSubtitle>
					<IonCardTitle>Spiderman</IonCardTitle>
				</IonCardHeader>

				<IonCardContent>
					Keep close to Nature's heart... and break clear away, once in awhile,
					and climb a mountain or spend a week in the woods. Wash your spirit clean.
				</IonCardContent>
			</IonCard>

			<IonCard>
				<img src="https://wipy.tv/wp-content/uploads/2019/08/Iron-Man-era-el-verdadero-villano-5.jpg" />
				<IonCardHeader>
					<IonCardSubtitle>Tony Stark</IonCardSubtitle>
					<IonCardTitle>Iron-man</IonCardTitle>
				</IonCardHeader>

				<IonCardContent>
					Keep close to Nature's heart... and break clear away, once in awhile,
					and climb a mountain or spend a week in the woods. Wash your spirit clean.
				</IonCardContent>
			</IonCard>

			<IonCard>
				<img src="https://img.chilango.com/2017/08/dr-strange-en-thor-ragnarok.png" />
				<IonCardHeader>
					<IonCardSubtitle>Thor</IonCardSubtitle>
					<IonCardTitle>Thor</IonCardTitle>
				</IonCardHeader>

				<IonCardContent>
					Keep close to Nature's heart... and break clear away, once in awhile,
					and climb a mountain or spend a week in the woods. Wash your spirit clean.
				</IonCardContent>
			</IonCard>
		</IonContent>
	</IonPage>
	)
};

export default Tab3Page;
