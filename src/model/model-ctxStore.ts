type TCtxValues = {
    values: {
        carBrandList: string[],
        carModelList: string[][],
        carBrandSelectVal: number,
        carModelSelectVal: number,
    },
    func: {
        addCarBrand: Function,
        removeCarBrand: Function,
        setCarBrandSelectVal: Function,
        addCarModel: Function,
        removeCarModel: Function,
        setCarModelSelectVal: Function,
    },
}

export default TCtxValues;