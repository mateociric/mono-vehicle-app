import { searchCar } from 'utility/menu-func';

function InputSearch(props: { setSearchCarInputVal: Function, currLocation: string }) {

    return (
        <input
            onKeyUp={(event: React.KeyboardEvent) => searchCar(event, props.setSearchCarInputVal)}
            id='search-input'
            type="text"
            placeholder='eneter car brand & car name'
            disabled={props.currLocation === '/' ? false : true}
        />
    )
}

export default InputSearch;
