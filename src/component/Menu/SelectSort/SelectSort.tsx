function SelectSort(props: { setTypeOfSort: Function }) {

    return (
        <select onChange={(event) => { props.setTypeOfSort(event.target.value) }}>
            <option value="id">sort by ID</option>
            <option value="carBrand">sort by BRAND</option>
            <option value="carModel">sort by MODEL</option>
        </select >
    )
}

export default SelectSort;