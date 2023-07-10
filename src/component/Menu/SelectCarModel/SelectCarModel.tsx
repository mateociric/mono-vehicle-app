function SelectCarModel(props: { value: number, updatedOptionList: string[], setCarModelSelectVal: Function }) {

    return (
        <select value={props.value} onChange={(event: any) => { props.setCarModelSelectVal(event.target.value) }}>
            {props.updatedOptionList.map((el, index) => {
                return <option value={index} key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarModel;