import classes from './ModalWindow.module.css'
import { Fragment } from 'react'
import  ReactDOM  from 'react-dom'

const Backdrop = (props) => {
	return <div className={classes.backdrop} />
}

const ContentOfModal = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.modalContent}>{props.children}</div>
		</div>
	)
}
const portalElement = document.getElementById('backdrop-root')
const modalElement = document.getElementById('modal-root')
const ModalWindow = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				portalElement,
			)}
			{ReactDOM.createPortal(
				<ContentOfModal className={classes.modalContent}>
					{props.children}
				</ContentOfModal>,
				modalElement,
			)}
		</Fragment>
	)
}
export default ModalWindow
