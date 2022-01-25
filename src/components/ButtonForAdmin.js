import classes from './ButtonForAdmin.module.css'
import { forwardRef } from 'react'

const ButtonForAdmin = forwardRef((props,ref)=> {
    return (
        <button className={`${classes.buttonForAdmin} ${props.className}`} {...props} ref={ref}>{props.children}</button>
    )
})

export default ButtonForAdmin