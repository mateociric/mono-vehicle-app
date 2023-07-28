import { action, makeObservable, observable } from 'mobx';
import TCar from 'model/model-car';

class MainStore {
    carBrandList: string[] = ['Mercedes-Benz', 'BMW'];
    carBrandSelectVal: number = 0;
    carModelList: string[][] = [['S Class'], ['X1']];
    carModelSelectVal: number = 0;
    carList: TCar[] = [];
    typeOfSort: 'id' | 'carBrand' | 'carModel' = 'id';
    searchCarInputVal: string = '';
    appIsRunFirstTime: boolean = true;
    isCarCardFailedToDeleteFromDatabase: boolean = false;
    constructor() {
        makeObservable(this, {
            carBrandList: observable,
            addCarBrand: action,
            deleteCarBrand: action,
            carBrandSelectVal: observable,
            setCarBrandSelectVal: action,
            carModelList: observable,
            addCarModel: action,
            deleteCarModel: action,
            carModelSelectVal: observable,
            setCarModelSelectVal: action,
            carList: observable,
            addCarToCarList: action,
            deleteCarFromCarList: action,
            updateCarInCarList: action,
            typeOfSort: observable,
            setTypeOfSort: action,
            searchCarInputVal: observable,
            setSearchCarInputVal: action,
        });
    }
    addCarBrand(inputValue: string) {
        const carBrandIsAlreadyExist = this.carBrandList.some((el) => {
            return el.toLowerCase() === inputValue.toLowerCase();
        });
        if (!carBrandIsAlreadyExist) {
            this.carBrandList.push(inputValue);
            //when the car brand list is updated, update the car model list for []
            this.carModelList.push([]);
            this.setCarBrandSelectVal(this.carBrandList.length);
        }
    }
    deleteCarBrand(inputValue: string) {
        if (this.carBrandList.length > 1) {
            this.carBrandList.filter((el) => {
                return el.toLowerCase() !== inputValue.toLowerCase();
            });
            // when the car brand is deleted belonging model list also must be deleted
            const indexOfDeletedCarBrandItem = this.carBrandList.map((el) => {
                return el.toLowerCase();
            }).indexOf(inputValue.toLowerCase());
            this.carModelList.filter((el, index) => {
                return index !== indexOfDeletedCarBrandItem
            });
            this.setCarBrandSelectVal(this.carBrandList.length - 1);
        }
    }
    setCarBrandSelectVal(newValue: number) {
        this.carBrandSelectVal = newValue;
    }
    addCarModel(inputValue: string) {
        const carModelIsAlreadyExist = this.carModelList[this.carBrandSelectVal].some((el) => {
            return el.toLowerCase() === inputValue.toLowerCase();
        });
        if (!carModelIsAlreadyExist) {
            //!!!always to make a copy of an array, not reference (newCarModelLis = carModelList)
            this.carModelList[this.carBrandSelectVal].push(inputValue);
            this.setCarModelSelectVal(this.carModelList[this.carBrandSelectVal].length - 1);
        }
    }
    deleteCarModel(inputValue: string) {
        //first update a single carModelList then assign carModel 2D ArrayList
        this.carModelList[this.carBrandSelectVal] = this.carModelList[this.carBrandSelectVal].filter((el) => {
            return el.toLowerCase() !== inputValue.toLowerCase();
        });
        this.setCarModelSelectVal(this.carModelList[this.carBrandSelectVal].length - 1);
    }
    setCarModelSelectVal(newValue: number) {
        this.carModelSelectVal = newValue;
    }
    addCarToCarList(setModalIsVisibleForDatabaseError: Function) {
        if (this.carModelList[this.carBrandSelectVal].length) {
            const newCar: TCar = {
                carBrand: this.carBrandList[this.carBrandSelectVal],
                carModel: this.carModelList[this.carBrandSelectVal][this.carModelSelectVal],
                carImage: '',
                id: !this.carList.length ? 1 : this.carList[this.carList.length - 1].id + 1,
            }
            this.carList.push(newCar);
            //addCarToDatabase(newCar, setModalIsVisibleForDatabaseError);
        }
    }
    deleteCarFromCarList(carInfoId: number) {
        this.carList.filter((el: TCar) => {
            return el.id !== carInfoId;
        });
    }
    updateCarInCarList(carImageInputVal: string, id: number, setModalIsVisibleForDatabaseError: Function) {
        const updatedCar: TCar = {
            carBrand: this.carBrandList[this.carBrandSelectVal],
            carModel: this.carModelList[this.carBrandSelectVal][this.carModelSelectVal],
            carImage: carImageInputVal,
            id,
        }
        this.carList.map((el) => {
            if (el.id === id) {
                el = updatedCar;
            }
            return el;
        });
        //updateCarToDatabase(id, updatedCar, setModalIsVisibleForDatabaseError);
    }
    setTypeOfSort(newValue: 'id' | 'carBrand' | 'carModel') {
        this.typeOfSort = newValue;
    }
    setSearchCarInputVal(newValue: string) {
        this.searchCarInputVal = newValue;
    }
    setAppIsRunFirstTime(newValue: boolean) {
        this.appIsRunFirstTime = newValue;
    }
    setIsCarCardFailedToDeleteFromDatabase(newValue: boolean) {
        this.isCarCardFailedToDeleteFromDatabase = newValue;
    }
}

const mainStore = MainStore
export default mainStore