import { TCar } from "model/model-car";
import { updateCarToDatabase } from "./databse-func";

export function updateCar(
    carBrandList: string[],
    carBrandSelectedVal: number,
    carModelList: string[][],
    carModelSelectVal: number,
    carImageInputVal: string,
    id: number,
    carList: TCar[],
    setCarList: Function,
    setModalIsVisibleForDatabaseError: Function) {
    const updatedCar: TCar = {
        carBrand: carBrandList[carBrandSelectedVal],
        carModel: carModelList[carBrandSelectedVal][carModelSelectVal],
        carImage: carImageInputVal,
        id,
    }
    const updatedArr = carList.map((el) => {
        if (el.id === id) {
            el = updatedCar;
        }
        return el;
    });
    setCarList(updatedArr);
    updateCarToDatabase(id, updatedCar, setModalIsVisibleForDatabaseError);
}