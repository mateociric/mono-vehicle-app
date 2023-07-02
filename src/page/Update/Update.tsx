import 'page/Update/Update.scss';

function Update() {

    return (
        <div className='update'>
            <section className='type'>
                <p>Car type</p>
                <input type="text" />
                <button>Add</button>
                <button>Remove</button>
            </section>
            <section className='model'>
                <p>Car model</p>
                <input type="text" />
                <button>Add</button>
                <button>Remove</button>
            </section>
        </div>
    )
}

export default Update;