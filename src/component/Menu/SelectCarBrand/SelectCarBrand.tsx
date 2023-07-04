import React, {useState} from 'react';


function SelectCarBrand(props: { updatedOptionList: string[] }) {
    const [selectedCarBrand, setSelectedCarBrand] = useState<number>(0)

    return (
        <select value={selectedCarBrand} onChange={(event: any) => setSelectedCarBrand(event.target.value)}>
            {props.updatedOptionList.map((el, index) => {
                return <option value={index} key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarBrand;