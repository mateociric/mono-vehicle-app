type TCtxValues = {
    values: {
        currCarBrendIndex: number;
        carBrand: string[],
        carModel: string[][],
    },
    func: {
        addCarBrand: Function,
        removeCarBrand: Function,
        addCarModel: Function,
        removeCarModel: Function,
    },
}

export default TCtxValues;