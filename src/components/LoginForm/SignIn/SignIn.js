import InputField from '../../ReusebleInput/ReusableLabel/InputField'
import AuthButton from '../../ReusebleInput/ReusableButton/AuthButton'
import eye from '../../../assets/img/eye.png'
import classes from './SignIn.module.css'
import { useForm } from 'react-hook-form'
const SignIn = () => {

	const {register,handleSubmit ,formState: {errors,isValid},} = useForm({mode: 'onChange'})

	const onSubmitClientSignUp = (data) => {
		console.log(data);
	}
	const signInError = errors.email || errors.password
	return (
		<form onSubmit={handleSubmit(onSubmitClientSignUp)}>
			<InputField
				type='email'
				placeholder='Напишите email'
				label='Email'
				{...register('email',{required: true, pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
			/>
			<div>
				<InputField
					type='password'
					placeholder='Напишите пароль'
					label='Password'
					autoComplete='off'
					{...register('password',{required: true ,minLength: 5})}
				/>
				<img className={classes.pngOfPassword} src={eye} alt='' />
			</div>
			{signInError && <p className={classes.message}>Неправильно указан Email и/или пароль</p>}
			<AuthButton type='submit' disabled={!isValid}>Войти</AuthButton>
		</form>
	)
}
export default SignIn
