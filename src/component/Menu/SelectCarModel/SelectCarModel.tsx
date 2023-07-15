function SelectCarModel(props: { value: number, updatedOptionList: string[], setCarModelSelectVal: Function }) {

    return (
        <select
            onChange={(event: any) => { props.setCarModelSelectVal(event.target.value) }}>
            value={props.value}
            {props.updatedOptionList.map((el, index) => {
                return <option value={index} key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarModel;