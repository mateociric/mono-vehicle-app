import { TCar } from "./model-car";

type TCtxValues = {
    values: {
        carBrandList: string[],
        carModelList: string[][],
        carBrandSelectVal: number,
        carModelSelectVal: number,
        carList: TCar[],
    },
    func: {
        addCarBrand: Function,
        removeCarBrand: Function,
        setCarBrandSelectVal: Function,
        addCarModel: Function,
        removeCarModel: Function,
        setCarModelSelectVal: Function,
        addCarList: Function,
    },
}

export default TCtxValues;