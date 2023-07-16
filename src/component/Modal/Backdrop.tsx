import 'component/Modal/Backdrop.scss';

function Backdrop(props: {onClick: Function}) {
    return <div onClick={() => props.onClick(false)} className='backdrop'></div>
}

export default Backdrop;