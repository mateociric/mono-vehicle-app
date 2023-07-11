import React, { useContext } from 'react'
import 'page/Homepage/Homepage.scss';
import CarCard from 'component/CarCard/CarCard';
import ctxStoreValues from 'store/store-context';
import Car from 'model/model-car';
import { TCar } from 'model/model-car';

function Homepage() {

    const ctxStoreVal = useContext(ctxStoreValues);
    const carList = ctxStoreVal.values.carList.map((el: TCar) => {
        return <CarCard
        carInfo={new Car(el)}
        key={el.id} />
    });

    return (
        <div className="grid">
            {carList}
        </div>
    )
}

export default Homepage;