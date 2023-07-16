import { TCar } from "model/model-car";

export function deleteCarFromCarList(
    setCarList: Function,
    carList: TCar[],
    carInfoId: number) {
    setCarList(carList.filter((el: TCar) => {
        return el.id !== carInfoId;
    }));
}

