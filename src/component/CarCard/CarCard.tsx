import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import 'component/CarCard/CarCard.scss';
import Modal from 'component/Modal/Modal';
import { observer, useLocalObservable } from 'mobx-react';
import { contextStore } from 'store/context-store';
import localStore from 'store/localStore';
import TCar from 'model/model-car';
import HttpClient from 'utility/http-client-class';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
/* default-image used from - https://www.pexels.com/search/car/ - */
import defaultImage from 'image/default-image.jpg';

function CarCard(props: { carInfo: TCar }) {
    const mainStore = useContext(contextStore);
    const lStore = useLocalObservable(() => localStore);
    const httpClient = new HttpClient('https://mono-vehicle-app-default-rtdb.firebaseio.com/');
    const navigateToUpdateCarCard = useNavigate();
    function deleteCarHandler(isYesClicked: boolean) {
        if (isYesClicked) {
            mainStore.deleteCarFromCarList(props.carInfo.id);
            httpClient.DELETE(props.carInfo.id, mainStore.setIsDatabaseErrorDELETE);
            lStore.modal.setIsModalOpen(false);
        } else {
            lStore.modal.setIsModalOpen(false);
        }
    }

    return (
        <>
            {lStore.modal.isModalOpen &&
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
                        onError={() => lStore.carCardStore.setUrlImageExists(false)}
                        src={lStore.carCardStore.urlImageExists ? props.carInfo.carImage : defaultImage}
                        alt={`${props.carInfo.carBrand} - ${props.carInfo.carModel}`}
                    />
                    <section className='flex-column'>
                        <p>{props.carInfo.carBrand}</p>
                        <p>{props.carInfo.carModel}</p>
                        <FontAwesomeIcon
                            onClick={(event: React.MouseEvent) => {
                                event.stopPropagation();
                                lStore.modal.setIsModalOpen(true);
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

export default observer(CarCard);