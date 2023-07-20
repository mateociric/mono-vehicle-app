export function checkInputValue(val: string): boolean {
    return !!(val.match(/^(?=[A-Za-z])(?!.*\s{2})[A-Za-z0-9\s-]{1,30}$/i));
}

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
        //when the car brand list is updated, update the car model list for []
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
        console.log(carBrandList, setCarModelList);
        const newCarBrandList = carBrandList.filter((el) => {
            return el.toLowerCase() !== inputValue.toLowerCase();
        });
        if (newCarBrandList.length !== carBrandList.length) {
            // when the car brand is deleted belonging model list also must be deleted
            const indexOfDeletedCarBrandItem = carBrandList.map((el) => {
                return el.toLowerCase();
            }).indexOf(inputValue.toLowerCase());
            const newCarModelList = carModelList.filter((el, index) => {
                return index !== indexOfDeletedCarBrandItem
            });
            setCarModelList(newCarModelList);
            setCarBrandList(newCarBrandList);
            setCarBrandSelectVal(newCarBrandList.length - 1);
        }
    }
}

export function addCarModel(
    inputValue: string,
    carModelList: string[][],
    carBrandSelectVal: number,
    setCarModelList: Function,
    setCarModelSelectVal: Function) {
    console.log(carModelList);
    const carModelIsAlreadyExist = carModelList[carBrandSelectVal].some((el) => {
        return el.toLowerCase() === inputValue.toLowerCase();
    });
    if (!carModelIsAlreadyExist) {
        //!!!always to make a copy of an array, not reference (newCarModelLis = carModelList)
        const newCarModelList = carModelList.map((el) => { return el });
        newCarModelList[carBrandSelectVal] = [...newCarModelList[carBrandSelectVal], inputValue];
        setCarModelList(newCarModelList);
        setCarModelSelectVal(newCarModelList[carBrandSelectVal].length - 1);
    }
}

export function deleteCarModel(
    inputValue: string,
    carModelList: string[][],
    carBrandSelectVal: number,
    setCarModelList: Function,
    setCarModelSelectVal: Function) {
    console.log(carModelList);
    //first update a single carModelList then assign carModel 2D ArrayList
    const newSingleCarModelList = carModelList[carBrandSelectVal].filter((el) => {
        return el.toLowerCase() !== inputValue.toLowerCase();
    });
    if (newSingleCarModelList.length !== carModelList[carBrandSelectVal].length) {
        const newCarModelList = carModelList.map((el) => { return el });
        newCarModelList[carBrandSelectVal] = newSingleCarModelList;
        setCarModelList(newCarModelList);
        setCarModelSelectVal(carModelList[carBrandSelectVal].length - 1);
    }
}