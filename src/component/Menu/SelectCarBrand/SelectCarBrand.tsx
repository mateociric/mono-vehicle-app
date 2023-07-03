function SelectCarBrand(props: { updatedOptionList: string[] }) {

    return (
        <select name="" id="">
            {props.updatedOptionList.map((el, index) => {
                return <option key={index}>{el}</option>
            })}
        </select>
    )
}

export default SelectCarBrand;