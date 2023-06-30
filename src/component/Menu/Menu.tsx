import 'component/Menu/Menu.scss'

function Menu() {
    return (
        <>
            <div className='menu'>
                <section>
                    <p>MENU</p>
                </section>
                <section>
                    <label>search vehicle</label>
                    <input type="text" />
                </section>
                <section>
                    <label>sort vehicle</label>
                    <input type="text" />
                </section>
                <section>
                    <label>create new vehicle</label>
                    <select name="" id="">
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="BMW">BMW</option>
                    </select>
                    <select name="" id="">
                        
                    </select>
                </section>
            </div>
        </>
    )
}

export default Menu;