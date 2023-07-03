import React, { useState } from 'react'
import TCtxValues from 'model/model-ctxStore';

const ctxValues: TCtxValues = {
    values: {
        carBrand: ['Mercedes-Benz', 'BMW'],
    },
    func: {
        addCarBrand: () => {},
    }
}

const ctxStoreValues = React.createContext(ctxValues);

export function CtxStoreValuesProvider(props: { children: React.ReactNode }) {
    const [carBrand, modifieCarBrand] = useState<string[]>(['Mercedes-Benz', 'BMW']);

    return (
        <>
            <ctxStoreValues.Provider value={{
                values: {
                    carBrand,
                },
                //addCarBrand: ()
            }}>
                {props.children}
            </ctxStoreValues.Provider>
        </>
    )
}

export default ctxStoreValues;