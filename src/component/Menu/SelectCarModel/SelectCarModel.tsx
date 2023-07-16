function SelectCarModel(props: { value: number, updatedOptionList: string[], setCarModelSelectVal: Function }) {

    return (
        <select
            onChange={(event: React.ChangeEvent) => { props.setCarModelSelectVal((event.target as HTMLSelectElement).value) }}>
            value={props.value}
            {props.updatedOptionList.map((el, index) => {
                return <option value={index} key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarModel;