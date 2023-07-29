import TCar from "model/model-car";

const localStore = {
    carCardLoaclStore: {
        urlImageExists: true,
        setUrlImageExists(newState: boolean) {
            this.urlImageExists = newState;
        },
        deleteCarHandler(mainStoreDeleteCarFromCarList: Function, carInfoId: number) {
            return (isYesClicked: boolean) => {
                if (isYesClicked) {
                    mainStoreDeleteCarFromCarList(carInfoId);
                    localStore.modal.toggleModal();
                } else {
                    localStore.modal.toggleModal();
                }
            }
        }
    },
    homepageStore: {
        getSortedCarCard(carList: TCar[], typeOfSort: 'id' | 'carBrand' | 'carModel') {
            const carListSorted = carList.map((el: TCar) => {
                return el
            }).sort((a, b) => {
                if (typeOfSort === 'id') {
                    return a.id - b.id;
                } else {
                    if ((a[typeOfSort]).toLowerCase() < b[typeOfSort].toLowerCase()) { return -1; }
                    if (a[typeOfSort].toLowerCase() > b[typeOfSort].toLowerCase()) { return 1; }
                    return 0;
                }
            });

            return carListSorted;
        },
        getSearchedCarCard(carListSorted: TCar[], searchCarInputVal: string) {
            const carListFiltered = carListSorted.map((el: TCar) => {
                return el;
            }).filter((el: TCar) => {
                return (`${el.carBrand} ${el.carModel}`).toLowerCase().startsWith(searchCarInputVal.toLowerCase());
            });

            return carListFiltered;
        },
    },
    updateCarCardStore: {
        carImageInputVal: '',
        setCarImageInputVal(newState: string) {
            this.carImageInputVal = newState;
        },
    },
    updateCarList: {
        isCarBrandSwitched: true,
        setIsCarBrandSwitched(newState: boolean) {
            this.isCarBrandSwitched = newState;
        },
        inputValue: '',
        setInputValue(newState: string) {
            this.inputValue = newState;
        },
        checkInputValue(inputValue: string): boolean {
            return !!(inputValue.match(/^(?=[A-Za-z])(?!.*\s{2})[A-Za-z0-9\s-]{1,30}$/i));
        }
    },
    modal: {
        isModalOpen: false,
        toggleModal() {
            this.isModalOpen = !this.isModalOpen;
        },
        isModalOpenForDatabaseError: false,
        toggleModalDataBaseError() {
            this.isModalOpenForDatabaseError = !this.isModalOpenForDatabaseError;
        },
    },
}

export default localStore;