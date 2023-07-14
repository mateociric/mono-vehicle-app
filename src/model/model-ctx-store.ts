import { TCar } from "./model-car";

type TCtxValues = {
    val: {
        carBrandList: string[],
        carModelList: string[][],
        carBrandSelectVal: number,
        carModelSelectVal: number,
        carList: TCar[],
        typeOfSort: string,
        searchCarInputVal: string,
    },
    func: {
        addCarBrand: Function,
        removeCarBrand: Function,
        setCarBrandSelectVal: Function,
        addCarModel: Function,
        removeCarModel: Function,
        setCarModelSelectVal: Function,
        addNewCarToCarList: Function,
        setTypeOfSort: Function,
        setSearchCarInputVal: Function,
        updateCarToCarList: Function,
        deleteCarFromCarList: Function,
    },
}

export default TCtxValues;