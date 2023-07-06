type TCtxValues = {
    values: {
        carBrand: string[],
        carModel: string[][],
        selectedCarBrand: number,
    },
    func: {
        addCarBrand: Function,
        removeCarBrand: Function,
        setSelectedCarBrand: Function,
    },
}

export default TCtxValues;