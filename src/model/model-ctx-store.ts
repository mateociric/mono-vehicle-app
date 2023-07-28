import TCar from "./model-car";

type TCtxValues = {
    val: {
        carBrandList: string[],
        carModelList: string[][],
        carBrandSelectVal: number,
        carModelSelectVal: number,
        carList: TCar[],
        typeOfSort: string,
        searchCarInputVal: string,
        appIsRunFirstTime: boolean,
        isCarCardFailedToDeleteFromDatabase: boolean,
    },
    func: {
        setCarBrandList: Function,
        setCarModelList: Function,
        setCarBrandSelectVal: Function,
        setCarModelSelectVal: Function,
        setTypeOfSort: Function,
        setSearchCarInputVal: Function,
        setCarList: Function,
        setAppIsRunFirstTime: Function,
        setIsCarCardFailedToDeleteFromDatabase: Function,
    },
}

export default TCtxValues;