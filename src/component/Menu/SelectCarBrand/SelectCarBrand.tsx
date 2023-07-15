function SelectCarBrand(props: { value: number, updatedOptionList: string[], setCarBrandSelectVal: Function }) {

    return (
        <select
            onChange={(event: any) => { props.setCarBrandSelectVal(event.target.value) }}
            id='car-brand-select'
            value={props.value}>
            {props.updatedOptionList.map((el, index) => {
                return <option value={index} key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarBrand;