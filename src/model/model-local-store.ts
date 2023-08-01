type TLocalStore = {
    carCardStore: {
        urlImageExists: boolean,
        setUrlImageExists: Function,
    },
    menuStore: {
        searchCar: Function,
    },
    homepageStore: {
        getSortedCarCard: Function,
        getSearchedCarCard: Function,
    },
    updateCarCardStore: {
        carImageInputVal: string,
        setCarImageInputVal: Function,
    },
    updateCarList: {
        isCarBrandSwitched: boolean,
        setIsCarBrandSwitched: Function,
        inputValue: string,
        setInputValue: Function,
        checkInputValue: Function
    },
    modal: {
        isModalOpen: boolean,
        setIsModalOpen: Function,
    },
}

export default TLocalStore;