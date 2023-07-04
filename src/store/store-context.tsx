import React, { useState } from 'react'
import TCtxValues from 'model/model-ctxStore';

const ctxValues: TCtxValues = {
    values: {
        currCarBrendIndex: 0,
        carBrand: ['Mercedes-Benz', 'BMW'],
        carModel: [['MB1, MB2'], ['BMW1', 'BMW2']],
    },
    func: {
        addCarBrand: () => { },
        removeCarBrand: () => { },
        addCarModel: () => { },
        removeCarModel: () => { },
    }
}

const ctxStoreValues = React.createContext(ctxValues);

export function CtxStoreValuesProvider(props: { children: React.ReactNode }) {
    const [carBrand, modifieCarBrand] = useState<string[]>(['Mercedes-Benz', 'BMW']);
    const [carModel, modifieCarModel] = useState<string[][]>([['MB1, MB2'], ['BMW1', 'BMW2']]);

    return (
        <>
            <ctxStoreValues.Provider value={{
                values: {
                    currCarBrendIndex: 0,
                    carBrand,
                    carModel,
                },
                func: {
                    addCarBrand: (carBrandInputValue: string) => {
                        const carBrandIsAlreadyExist = carBrand.some((el) => {
                            return el.toLowerCase() === carBrandInputValue.toLowerCase();
                        });
                        if (!carBrandIsAlreadyExist) {
                            modifieCarBrand((prevState) => {
                                return [...prevState, carBrandInputValue]
                            });
                            //later to display modal
                        }
                    },
                    removeCarBrand: (carBrandInputValue: string) => {
                        if (carBrand.length > 1) {
                            const removedCarBrend = carBrand.filter((el) => {
                                return el.toLowerCase() !== carBrandInputValue.toLowerCase();
                            })
                            modifieCarBrand(removedCarBrend);
                        }
                        //later to display modal
                    },
                    addCarModel: () => { },
                    removeCarModel: () => { },

                }
            }}>
                {props.children}
            </ctxStoreValues.Provider>
        </>
    )
}

export default ctxStoreValues;