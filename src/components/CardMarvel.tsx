import React , { useState, useEffect }from 'react';
import {
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
} from '@ionic/react';

import axios from 'axios';
import moment from 'moment';
import CryptoJS from 'crypto-js';

// Que datos va a necesitar el componente y su tipo.
type CardProps = {
    idMarvel: string,
}


export interface IHeroe {}

const CardMarvel: React.FC<CardProps> = (props) => {

    const [heroe, setHeroe] = useState<IHeroe | any>({});
    const [heroeImage, setHeroeImage] = useState<IHeroe | any>({});
    const [cargando, guardarCargando] = useState(false);

    const getCharacterInfo = async () =>{
        guardarCargando(true);
        console.log(props.idMarvel);
        // si no hay props.idMarvel no ejecutar
        if(props.idMarvel === '') return;
        const URI = '/v1/public/characters';
        const url = `https://gateway.marvel.com${URI}/${props.idMarvel}`;
        const timeStamp = moment().unix();

        const queryParams = {
            ts: timeStamp,
            apikey: 'e250641ee1d462b8a2a5d68ad58e5869',
            hash: CryptoJS.MD5(timeStamp + 'dda24246421a52feec1dfc5c5db3b66a7b673bdd' + 'e250641ee1d462b8a2a5d68ad58e5869').toString(CryptoJS.enc.Hex)
        };
        const resultado = await axios.get(url, { params: queryParams })

        console.log(resultado.data.data.results[0]);
        

            guardarCargando(false);
            setHeroe(resultado.data.data.results[0]);
            setHeroeImage(resultado.data.data.results[0].thumbnail.path +'/standard_fantastic.'+resultado.data.data.results[0].thumbnail.extension);
        }
        // De forma similar a componentDidMount y componentDidUpdate
        useEffect(() => {
            getCharacterInfo();
        }, [props.idMarvel]);

    return(
        <IonCard key={props.idMarvel}>
				<img src={heroeImage} alt={heroe.name} />
            <IonCardHeader>
                <IonCardTitle>{heroe.name}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {heroe.description}
            </IonCardContent>
        </IonCard>
    )
}

export default CardMarvel;