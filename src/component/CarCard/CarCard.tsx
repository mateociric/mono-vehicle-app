/* default-image used from - https://www.pexels.com/search/car/ - */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'component/CarCard/CarCard.scss';
import { TCar } from 'model/model-car';
import defaultImage from 'image/default-image.jpg'

function CarCard(props: { carInfo: TCar }) {
    const [imageIsVisible, setImageIsVisible] = useState<boolean>(true);
    const navigateToUpdateCarCard = useNavigate();

    return (
        <div onClick={() => navigateToUpdateCarCard(`/UpdateCarCard/${props.carInfo.id}`)} className='car-card'>
            <div className='car-card__id'>
                <p>{props.carInfo.id}</p>
            </div>
            <img
                onError={() => setImageIsVisible(false)}
                src={imageIsVisible ? props.carInfo.carImage : defaultImage}
                alt={`${props.carInfo.carBrand} ${props.carInfo.carModel}`}
                className='car-card__image' />
            <section className='car-card__details'>
                <p>{props.carInfo.carBrand}</p>
                <p>{props.carInfo.carModel}</p>
            </section>
        </div>
    )
}

export default CarCard;