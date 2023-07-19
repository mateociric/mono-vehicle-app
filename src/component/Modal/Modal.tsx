import ReactDOM from "react-dom";
import Backdrop from 'component/Modal/Backdrop';
import Overlay from 'component/Modal/Overlay';

function Modal(props: { onClick: Function, message: string, hasButtonNO: boolean }) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById('backdrop-root') as HTMLElement)}
            {ReactDOM.createPortal(
                <Overlay
                    onClick={props.onClick}
                    message={props.message}
                    hasButtonNO={props.hasButtonNO}
                />, document.getElementById('overlay-root') as HTMLElement)}
        </>
    )
}

export default Modal;