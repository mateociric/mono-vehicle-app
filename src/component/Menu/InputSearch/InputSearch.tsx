function InputSearch(props: { searchCar: Function, setSearchCarInputVal: Function, currLocation: string }) {

    return (
        <input
            onKeyUp={(event: React.KeyboardEvent) => props.searchCar(event, props.setSearchCarInputVal)}
            id='search-input'
            type="text"
            placeholder='eneter car brand & car name'
            disabled={props.currLocation === '/' ? false : true}
        />
    )
}

export default InputSearch;
