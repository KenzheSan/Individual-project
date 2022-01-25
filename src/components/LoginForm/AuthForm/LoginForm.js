import ClientRegistration from '../ClientRegistration/ClientRegistration'
import SignIn from '../SignIn/SignIn'
import VendorRegistration from '../VendorRegistration/VendorRegistration'
import classes from './LoginForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { signUpActions } from '../../../store/Redusers/store'
const AuthForm = () => {

	const {isLogin,isUser,isVendor} = useSelector(state => state.isSignUp)

	const dispatch = useDispatch()

	const isLoginChangeHandler = () => {
		dispatch(signUpActions.isLogin())
	}
	const isUserChangeHandler = () => {
		dispatch(signUpActions.isUser())
	}

	const isVendorChangeHandler = () => {
		dispatch(signUpActions.isVendor())
	}
	return (
		<section className={classes.authformbox}>
			<div className={classes.authbuttons}>
				<button
					className={`${isLogin ? classes.active : classes.loginBtn}`}
					onClick={isLoginChangeHandler}
				>
					Войти
				</button>
				<button
					className={`${
						isVendor || isUser ? classes.active : classes.loginBtn
					}`}
					onClick={isUserChangeHandler}
				>
					Регистрация
				</button>
			</div>
			{isLogin && <SignIn />}
			{isUser && (
				<>
					<ClientRegistration />
					<button className={classes.sallerOnEbook} onClick={isVendorChangeHandler}>
						Стать продавцом на eBook
					</button>
				</>
			)}
			{isVendor && <VendorRegistration />}
		</section>
	)
}

export default AuthForm
