import { TCar } from "model/model-car";

function updateCarCard(
    carBrandList: string[],
    carBrandSelectedVal: number,
    carModelList: string[][],
    carModelSelectVal: number,
    carImageInputVal: string,
    id: number,
    carList: TCar[],
    setCarList: Function) {
    const updateCar: TCar = {
        carBrand: carBrandList[carBrandSelectedVal],
        carModel: carModelList[carBrandSelectedVal][carModelSelectVal],
        carImage: carImageInputVal,
        id,
    }
    const updatedArr = carList.map((el) => {
        if (el.id === id) {
            el = updateCar;
        }
        return el;
    })
    setCarList(updatedArr);
}

export default updateCarCard;
