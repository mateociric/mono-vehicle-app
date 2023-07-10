function SelectCarBrand(props: { value: number, updatedOptionList: string[], setCarBrandSelectVal: Function }) {

    return (
        <select value={props.value} onChange={(event: any) => {props.setCarBrandSelectVal(event.target.value)}}>
            {props.updatedOptionList.map((el, index) => {
                return <option value={index} key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarBrand;