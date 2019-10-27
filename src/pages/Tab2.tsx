import React , { useState, useEffect }from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardMarvel from '../components/CardMarvel';

import axios from 'axios';
import moment from 'moment';
import CryptoJS from 'crypto-js';

export interface IHeroes {}
const Tab2: React.FC = () => {

	const [heroes, setHeroes] = useState<any>([]);
	const [currentPage, setSurrentPage] = useState<number>(0);
	const [cargando, guardarCargando] = useState(false);

	const getCharacters = async (currentPage : number) =>{
        guardarCargando(true);
        console.log(currentPage);
        // si no hay props.idMarvel no ejecutar
        const offset = (currentPage > 1) ? 21 * currentPage : 0;
        const URI = '/v1/public/characters';
        const url = `https://gateway.marvel.com${URI}`;
        const timeStamp = moment().unix();

        const queryParams = {
            ts: timeStamp,
            apikey: 'e250641ee1d462b8a2a5d68ad58e5869',
			hash: CryptoJS.MD5(timeStamp + 'dda24246421a52feec1dfc5c5db3b66a7b673bdd' + 'e250641ee1d462b8a2a5d68ad58e5869').toString(CryptoJS.enc.Hex),
			limit: 21,
        offset: offset
        };
        const resultado = await axios.get(url, { params: queryParams })

        console.log(resultado.data.data.results);
        
		setHeroes(resultado.data.data.results);
		guardarCargando(false);
	}

	useEffect(() => {
		getCharacters(currentPage);
		console.log(heroes);
	}, [currentPage]);
		
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Heroes Marvel</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					{
						heroes.map( (heroe : any) => {
							return(
								<CardMarvel key={heroe.id} idMarvel={heroe.id} />

							)

						})
					}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Tab2;