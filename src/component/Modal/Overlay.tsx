import 'component/Modal/Overlay.scss';


function Overlay(props: { onClick: Function, message: string, hasButtonNO: boolean }) {

    return (
        <div className='overlay flex-column'>
            <p className='overlay__message'>{props.message}</p>
            <section className='overlay__button'>
                <button onClick={() => props.onClick(true)}>Yes</button>
                {props.hasButtonNO && <button onClick={() => props.onClick(false)}>No</button>}
            </section>
        </div>
    )
}

export default Overlay;