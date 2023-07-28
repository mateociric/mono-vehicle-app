import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import 'component/CarCard/CarCard.scss';
import Modal from 'component/Modal/Modal';
import ctxStoreValues from 'store/store-context';
import TCar from 'model/model-car';
import { deleteCarFromCarList } from 'utility/car-card-func';
import { deleteCarFromDatabase } from 'utility/databse-func';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
/* default-image used from - https://www.pexels.com/search/car/ - */
import defaultImage from 'image/default-image.jpg';

function CarCard(props: { carInfo: TCar }) {
    const [carImageIsVisible, setCarImageIsVisible] = useState<boolean>(true);
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const cSV = useContext(ctxStoreValues);
    const navigateToUpdateCarCard = useNavigate();

    function deleteCarHandler(isYesClicked: boolean) {
        if (isYesClicked) {
            deleteCarFromCarList(cSV.func.setCarList, cSV.val.carList, props.carInfo.id);
            deleteCarFromDatabase(props.carInfo.id, cSV.func.setIsCarCardFailedToDeleteFromDatabase);
            setModalIsVisible(false);
        } else {
            setModalIsVisible(false);
        }
    }

    return (
        <>
            {modalIsVisible &&
                <Modal
                    onClick={deleteCarHandler}
                    message='Are you sure that you want delete this card?'
                    hasButtonNO={true}
                />}
            <div
                onClick={() => navigateToUpdateCarCard(`/UpdateCarCard/${props.carInfo.id}`)}
                className='car-card flex-column'
            >

                <div className='car-card__id flex-row'>
                    <p>{props.carInfo.id}</p>
                </div>

                <div className='car-card__image'>
                    <img
                        onError={() => setCarImageIsVisible(false)}
                        src={carImageIsVisible ? props.carInfo.carImage : defaultImage}
                        alt={`${props.carInfo.carBrand} - ${props.carInfo.carModel}`}
                    />

                    <section className='flex-column'>
                        <p>{props.carInfo.carBrand}</p>
                        <p>{props.carInfo.carModel}</p>
                        <FontAwesomeIcon
                            onClick={(event: React.MouseEvent) => {
                                event.stopPropagation();
                                setModalIsVisible(true);
                            }}
                            icon={faTrash}
                            size='3x'
                            className='iconTrash'
                        />
                    </section>
                </div>
            </div>
        </>
    )
}

export default CarCard;