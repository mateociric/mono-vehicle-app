function SelectCarBrand(props: { value: number, updatedOptionList: string[], setCarBrandSelectVal: Function }) {

    return (
        <select
            onChange={(event: React.ChangeEvent) => { props.setCarBrandSelectVal((event.target as HTMLSelectElement).value) }}
            id='car-brand-select'
            value={props.value}>
            {props.updatedOptionList.map((el, index) => {
                return <option value={index} key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarBrand;