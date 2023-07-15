import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import 'component/CarCard/CarCard.scss';
import ctxStoreValues from 'store/store-context';
import { TCar } from 'model/model-car';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
/* default-image used from - https://www.pexels.com/search/car/ - */
import defaultImage from 'image/default-image.jpg';

function CarCard(props: { carInfo: TCar }) {
    const [carImageIsVisible, setCarImageIsVisible] = useState<boolean>(true);
    const cSV = useContext(ctxStoreValues);
    const navigateToUpdateCarCard = useNavigate();

    return (
        <div onClick={() => navigateToUpdateCarCard(`/UpdateCarCard/${props.carInfo.id}`)} className='car-card flex-column'>
            <div className='car-card__id flex-row'>
                <p>{props.carInfo.id}</p>
            </div>

            <img
                onError={() => setCarImageIsVisible(false)}
                src={carImageIsVisible ? props.carInfo.carImage : defaultImage}
                alt={`${props.carInfo.carBrand} ${props.carInfo.carModel}`}
                className='car-card__image' />

            <section className='car-card__details'>
                <p>{props.carInfo.carBrand}</p>
                <p>{props.carInfo.carModel}</p>
                <FontAwesomeIcon
                    onClick={(event: React.MouseEvent) => {
                        event.stopPropagation();
                        //remove CarCard
                        cSV.func.setCarList(cSV.val.carList.filter((el: TCar) => {
                            return el.id !== props.carInfo.id;
                        }));
                    }}
                    icon={faTrash}
                    size='3x'
                    className='iconTrash' />
            </section>
        </div>
    )
}

export default CarCard;