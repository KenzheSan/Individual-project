import classes from './ClientRegistration.module.css'
import AuthButton from '../../ReusebleInput/ReusableButton/AuthButton'
import InputField from '../../ReusebleInput/ReusableLabel/InputField'
import eye from '../../../assets/img/eye.png'
import { useForm } from 'react-hook-form'

const ClientRegistration = () => {
	const {register,handleSubmit ,formState: {errors,isValid},} = useForm({mode: 'onChange'})

	const onSubmitClientSignUp = (data) => {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmitClientSignUp)}>
			<InputField
				type='name'
				placeholder='Напишите ваше имя'
				label='Ваше имя'
				{...register('name',{required: true, min: 2})}
			/>
			<InputField
				type='email'
				placeholder='Напишите ваш email'
				label='Email'
				{...register('email',{required: true, pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
			/>
			<div className={classes.forAbsolute}>
				<InputField
					type='password'
					placeholder='Напишите пароль'
					label='Пароль'
					autoComplete='off'
					{...register('password',{required: true ,minLength: 5})}
				/>
                	<img className={classes.pngOfPassword} src={eye} alt='' />
				<InputField
					type='password'
					placeholder='Подтвердите пароль'
					label='Подтвердите пароль'
					autoComplete="off"
					{...register('isconfirmpassword',{required: true})}
				/>
                	<img className={classes.pngOfPassword} src={eye} alt='' />
			</div>
			{errors.name && <p className={classes.message}>Забыли заполнить имя </p>}
			{errors.email && <p className={classes.message}>Введите коррекный Email</p>}
			{errors.password && <p className={classes.message}>Длина пароля должна быть не менее 5 символов</p>}
			{errors.isconfirmpassword && <p className={classes.message}>Пороли не совподают</p>}
			<div className={classes.subscribe}>
				<input type='checkbox' className={classes.subscribeInput} {...register('subscribe')}/>
				<p>Подпишитесь на рассылку, чтобы получать новости от eBook </p>
			</div>
			
			<AuthButton type='submit'disabled={!isValid} >Создать аккаунт</AuthButton>
		</form>
	)
}

export default ClientRegistration
