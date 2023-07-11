export type TCar = {
    carBrand: string;
    carModel: string;
    carImage: string;
    id: number;
}

class Car {
    carBrand: string;
    carModel: string;
    carImage: string;
    id: number;

    constructor(carInfo: TCar) {
        this.carBrand = carInfo.carBrand;
        this.carModel = carInfo.carModel;
        this.carImage = carInfo.carImage;
        this.id = carInfo.id;
    }
}

export default Car;