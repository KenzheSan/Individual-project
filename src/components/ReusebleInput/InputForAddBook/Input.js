import { forwardRef } from 'react'
import classes from './Input.module.css'

const Input = forwardRef((props,ref) => {
	return (
		<input className={`${classes.input} ${props.className}`} {...props} ref={ref} />
	)
})

export default Input
