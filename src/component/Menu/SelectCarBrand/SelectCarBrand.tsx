function SelectCarBrand(props: { value: number, updatedOptionList: string[], setCarBrandSelectVal: Function, currLocation: string }) {

    return (
        <select
            onChange={(event: React.ChangeEvent) => { props.setCarBrandSelectVal((event.target as HTMLSelectElement).value) }}
            id='car-brand-select'
            value={props.value}
            disabled={props.currLocation !== '/Help' ? false : true}>
            {props.updatedOptionList.map((el, index) => {
                return <option value={index} key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarBrand;