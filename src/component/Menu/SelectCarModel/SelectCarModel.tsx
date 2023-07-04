function SelectCarModel(props: { updatedOptionList: string[] }) {

    return (
        <select>
            {props.updatedOptionList.map((el, index) => {
                return <option key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarModel;