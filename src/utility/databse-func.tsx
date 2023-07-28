import axios from "axios";
import TCar from "model/model-car";

const url = 'http://localhost:4000/carList';

export async function addCarToDatabase(newCar: TCar, setModalIsVisibleForDatabaseError: Function) {
    await axios.post(url, newCar).catch(() => setModalIsVisibleForDatabaseError(true));
}
export async function deleteCarFromDatabase(carId: number, setIsCarCardFailedToDeleteFromDatabase: Function) {
    await axios.delete(`${url}/${carId}`).catch(() => { setIsCarCardFailedToDeleteFromDatabase(true) });
}
export async function updateCarToDatabase(carId: number, updatedCar: TCar, setModalIsVisibleForDatabaseError: Function) {
    await axios.put(`${url}/${carId}`, updatedCar).catch(() => { setModalIsVisibleForDatabaseError(true) });
}
export async function getCarListFromDatabase(setCarList: Function, setModalIsVisibleForDatabaseError: Function) {
    await axios.get(url).then((res) => setCarList(res.data)).catch(() => { setModalIsVisibleForDatabaseError(true) });
}