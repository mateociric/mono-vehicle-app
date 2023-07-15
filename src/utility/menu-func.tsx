import { TCar } from "model/model-car"

export function addCarToCarList(
    carBrandList: string[],
    carBrandSelectedVal: number,
    carModelList: string[][],
    carModelSelectVal: number,
    carList: TCar[],
    setCarList: Function,) {
    const newCar: TCar = {
        carBrand: carBrandList[carBrandSelectedVal],
        carModel: carModelList[carBrandSelectedVal][carModelSelectVal],
        carImage: '',
        id: !carList.length ? 1 : carList[carList.length - 1].id + 1,
    }
    setCarList((prevState: TCar[]) => {
        return [...prevState, newCar];
    })
}

export function searchCar(event: React.KeyboardEvent, setSearchCarInputVal: Function) {
    //removing white spaces
    (event.target as HTMLInputElement).value = (event.target as HTMLInputElement).value.replace(/^[ \t]+|[ \t]+$/gm, "");
    setSearchCarInputVal((event.target as HTMLInputElement).value);
}