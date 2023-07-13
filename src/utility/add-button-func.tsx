import { TCar } from "model/model-car"

export function addNewCar(
    carBrandList: string[],
    carBrandSelectedVal: number,
    carModelList: string[][],
    carModelSelectVal: number,
    carList: TCar[],
    addNewCarToCarList: Function,) {
    const newCar: TCar = {
        carBrand: carBrandList[carBrandSelectedVal],
        carModel: carModelList[carBrandSelectedVal][carModelSelectVal],
        carImage: '',
        id: !carList.length ? 1 : carList[carList.length - 1].id + 1,
    }
    addNewCarToCarList(newCar);
}

export function updateCarCard(
    carBrandList: string[],
    carBrandSelectedVal: number,
    carModelList: string[][],
    carModelSelectVal: number,
    carImageInputVal: string,
    id: number,
    carList: TCar[],
    updateCarToCarList: Function) {
    const updateCar: TCar = {
        carBrand: carBrandList[carBrandSelectedVal],
        carModel: carModelList[carBrandSelectedVal][carModelSelectVal],
        carImage: carImageInputVal,
        id,
    }
    const newArr = carList.map((el) => {
        if (el.id === id) {
            el = updateCar;
        }
        return el;
    })
    updateCarToCarList(newArr);
}
