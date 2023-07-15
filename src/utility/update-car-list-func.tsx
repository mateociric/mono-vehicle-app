export function addCarBrand(
    inputValue: string,
    carBrandList: string[],
    setCarBrandList: Function,
    setCarModelList: Function,
    setCarBrandSelectVal: Function) {
    const carBrandIsAlreadyExist = carBrandList.some((el) => {
        return el.toLowerCase() === inputValue.toLowerCase();
    });
    if (!carBrandIsAlreadyExist) {
        setCarBrandList((prevState: string[]) => {
            return [...prevState, inputValue]
        });
        //when new car brand created update <option> for new car model
        setCarModelList((prevState: string[]) => {
            return [...prevState, []]
        });
        setCarBrandSelectVal(carBrandList.length);
    }
}

export function deleteCarBrand(
    inputValue: string,
    carBrandList: string[],
    carModelList: string[][],
    setCarModelList: Function,
    setCarBrandList: Function,
    setCarBrandSelectVal: Function) {
    if (carBrandList.length > 1) {
        const removedCarBrend = carBrandList.filter((el) => {
            return el.toLowerCase() !== inputValue.toLowerCase();
        });
        const indexToBeRemovedCarModel = carBrandList.indexOf(inputValue);
        const removedCarModel = carModelList.filter((el, index) => {
            return index !== indexToBeRemovedCarModel
        });
        setCarModelList(removedCarModel);
        setCarBrandList(removedCarBrend);
        setCarBrandSelectVal(0);
    }
}

export function addCarModel(
    inputValue: string,
    carModelList: string[][],
    carBrandSelectVal: number,
    setCarModelList: Function,
    setCarModelSelectVal: Function) {
    const carModelIsAlreadyExist = carModelList[carBrandSelectVal].some((el) => {
        return el.toLowerCase() === inputValue.toLowerCase();
    });
    if (!carModelIsAlreadyExist) {
        //!!!always to make copy of array, not refernce (newCarModelLis = carModelList)
        const newCarModelList = carModelList.map((el) => { return el });
        newCarModelList[carBrandSelectVal] = [...newCarModelList[carBrandSelectVal], inputValue]
        setCarModelList(newCarModelList)
        setCarModelSelectVal(carModelList[carBrandSelectVal].length)
    }
}

export function deleteCarModel(
    inputValue: string,
    carModelList: string[][],
    carBrandSelectVal: number,
    setCarModelList: Function,
    setCarModelSelectVal: Function) {
    const removedCarModel = carModelList[carBrandSelectVal].filter((el) => {
        return el.toLowerCase() !== inputValue.toLowerCase();
    });
    const newCarModelLsit = carModelList.map((el) => { return el });
    newCarModelLsit[carBrandSelectVal] = removedCarModel;
    setCarModelList(newCarModelLsit);
    setCarModelSelectVal(0);
}