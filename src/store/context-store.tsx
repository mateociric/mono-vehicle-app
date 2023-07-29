import React from 'react';
import mainStore from "store/main-store";

export const contextStore = React.createContext(mainStore);

function ContextProvider(props: { children: React.ReactNode }) {

    return (
        <>
            <contextStore.Provider value={mainStore}>
                {props.children}
            </contextStore.Provider >
        </>
    )
}

export default ContextProvider;