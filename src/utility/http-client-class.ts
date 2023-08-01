import axios from "axios";
import TCar from "model/model-car";

class HttpClient {
    private _baseUrl: string;
    constructor(baseUrl: string) {
        this._baseUrl = baseUrl;
    }
    async GET(setCarListFromDatabase: Function, mStoreSetIsDatabaseErrorGET: Function) {
        try {
            const res = await axios.get(`${this._baseUrl}carList.json`);
            const data = await res.data;
            await setCarListFromDatabase(Object.values(data));
        } catch(error) {
            mStoreSetIsDatabaseErrorGET(true);
        }
    }
    async POST(newCar: TCar, mStoreSetIsDatabaseErrorPOST: Function) {
        await axios.post(`${this._baseUrl}carList.json`, newCar).catch(() => mStoreSetIsDatabaseErrorPOST(true));
    }
    async PUT(carInfoId: number, updatedCar: TCar, mStoreSetIsDatabaseErrorPUT: Function, isError = true) {
        await axios.put(`${this._baseUrl}carList/${carInfoId}.json`, updatedCar).catch(() => mStoreSetIsDatabaseErrorPUT(isError));
    }
    async DELETE(carInfoId: number, mStoreSetIsDatabaseErrorDELETE: Function) {
        await axios.delete(`${this._baseUrl}carList/${carInfoId}.json`).catch(() => mStoreSetIsDatabaseErrorDELETE(true));
    }
}

export default HttpClient;