type TCtxValues = {
    values: {
        carBrand: string[],
        carModel: string[][],
        selectedCarBrand: number,
        selectedCarModel: number,
    },
    func: {
        addCarBrand: Function,
        removeCarBrand: Function,
        setSelectedCarBrand: Function,
        addCarModel: Function,
        setSelectedCarModel: Function,
    },
}

export default TCtxValues;