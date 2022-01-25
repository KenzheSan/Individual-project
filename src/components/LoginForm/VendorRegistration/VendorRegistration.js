import AuthButton from '../../ReusebleInput/ReusableButton/AuthButton'
import InputField from '../../ReusebleInput/ReusableLabel/InputField'
import classes from './VendorRegistration.module.css'
import { useForm } from 'react-hook-form'
import isEye from '../../../assets/img/isEye.png'
import eye from '../../../assets/img/eye.png'
import { useState } from 'react'


const VendorRegistration = () => {
	const {register,handleSubmit ,formState: {errors,isValid},watch} = useForm({mode: 'onChange'})
	const isSamePassword = watch('password')
	const onSubmitClientSignUp = (data) => {
		console.log(data);
	}
	
	const [isPasswordShown, setIsPasswordShown] = useState(false)
	
	const [isConfirmPasswordShown, setisConfirmPasswordShown] = useState(false)

	const togglePassword = () => {
		setIsPasswordShown(!isPasswordShown)
	}
	const toggleisConfirmPasswordShown = () => {
		setisConfirmPasswordShown(!isConfirmPasswordShown)
	}
	return (
		<form className={classes.form} onSubmit={handleSubmit(onSubmitClientSignUp)}>
			<InputField
				type='text'
				placeholder='Напишите ваше имя'
				label='Ваше имя'
				{...register('name',{required: true, min: 2})}
			/>
			<InputField
				type='text'
				placeholder='Напишите вашу фамилию'
				label='Ваша фамилия'
				{...register('surname',{required: true,min: 2})}
			/>
			<InputField
				type='tel'
				placeholder='+996 (_ _ _) _ _  _ _  _ _'
				label='Номер вашего телефона'
				onFocus={(e) => (e.target.value = '+996')}
				{...register('phone',{required: true,maxLength: 13})}
			/>
			<InputField
				type='email'
				placeholder='Напишите ваш email'
				label='Email'
				{...register('email',{required: true, pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
			/>
			<div className={classes.forAbsolute}>
				<InputField
					type={isPasswordShown ? 'text' : 'password'}
					placeholder='Напишите пароль'
					label='Пароль'
					autoComplete='off'
					{...register('password',{required: true ,minLength: 5})}
				/>
				<img className={classes.pngOfPassword} src={isPasswordShown ? eye : isEye} alt='' onClick={togglePassword}/>

				<InputField
					type={isConfirmPasswordShown ? 'text' : 'password'}
					placeholder='Подтвердите пароль'
					label='Подтвердите пароль'
					autoComplete='off'
					{...register('isconfirmpassword',{required: true,validate:value => value === isSamePassword})}
				/>
				<img className={classes.pngOfPassword} src={isConfirmPasswordShown ? eye : isEye} alt='' onClick={toggleisConfirmPasswordShown}/>
			</div>
			{errors.name && <p className={classes.message}>Забыли заполнить имя </p>}
			{errors.email && <p className={classes.message}>Введите коррекный Email</p>}
			{errors.password && <p className={classes.message}>Длина пароля должна быть не менее 5 символов</p>}
			{errors.isconfirmpassword && <p className={classes.message}>Пороли не совподают</p>}
			{errors.phone && <p className={classes.message}>Введите корретный номер</p>}
			{errors.surname && <p className={classes.message}>Забыли заполнить фамилию</p>}
			<AuthButton type='submit' disabled={!isValid}>Создать аккаунт</AuthButton>
		</form>
	)
}

export default VendorRegistration
