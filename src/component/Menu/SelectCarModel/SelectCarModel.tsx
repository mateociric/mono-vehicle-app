function SelectCarModel(props: { value: number, updatedOptionList: string[], setCarModelSelectVal: Function, currLocation: string }) {

    return (
        <select
            onChange={(event: React.ChangeEvent) => { props.setCarModelSelectVal((event.target as HTMLSelectElement).value) }}
            value={props.value}
            disabled={props.currLocation !== '/Help' ? false : true}>
            {props.updatedOptionList.map((el, index) => {
                return <option value={index} key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarModel;