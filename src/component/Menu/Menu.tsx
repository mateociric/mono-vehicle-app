import 'component/Menu/Menu.scss'

function Menu() {
    return (
        <>
            <div className='menu'>

                <section className='menu__title'>
                    <p>MENU</p>
                </section>

                <section className='menu__search'>
                    <label>search vehicle</label>
                    <input type="text" />
                </section>

                <section className='menu__sort'>
                    <label>sort vehicle</label>
                    <select name="" id="">
                        <option value="id">sort by ID</option>
                        <option value="type">sort by TYPE</option>
                        <option value="name">sort by NAME</option>
                    </select>
                </section>

                <section className='menu__add'>
                    <label>add vehicle</label>
                    <select name="" id="">
                        <option value="Porsche">Porsche</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="BMW">BMW</option>
                    </select>
                    <select name="" id="">
                        <option value="Porsche">Taycan</option>
                        <option value="Porsche">Panamera</option>
                        <option value="Mercedes-Benz">S-Class</option>
                        <option value="Mercedes-Benz">EQS</option>
                        <option value="BMW">7 Series</option>
                        <option value="BMW">8 Series</option>
                    </select>
                    <button>add vehicle</button>
                </section>
            </div>
        </>
    )
}

export default Menu;