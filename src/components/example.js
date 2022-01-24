import classes from './example.module.css'
import { useForm } from 'react-hook-form'



const Example = () => {

    const {register ,handleSubmit,formState: errors} = useForm({mode: 'onTouched'})
    const onSumbitHandler = (data) => {
        console.log(data);
    }

	return (
		<div>
			<form action='' className={classes.form} onSubmit={handleSubmit(onSumbitHandler)}>
				<h1 className={classes.form__title}>Sign Up</h1>
				<p className={classes.form__description}>
					Login here using your username(email) and password
				</p>
				<div className={classes.form__group}>
					<input
                    {...register('userName',{required: true , minLength: 1})}
						type='text'
						id='userName'
						className={` ${
							 errors.userName
								? classes.form__input__red
								: classes.form__input
						}`}
						placeholder=' '
					/>
					<label htmlFor='userName' className={classes.form__label}>
						Username
					</label>
				</div>
				<div className={classes.form__group}>
					<input
                    {...register('email',{required: true , minLength: 1})}
						type='text'
						id='email'
						className={`${classes.form__input} ${
							errors.email
								? classes.form__input__red
								: classes.form__input
						}`}
						placeholder=' '
					/>
					<label htmlFor='email' className={classes.form__label}>
						Email Adress
					</label>
				</div>
				<div className={classes.form__group}>
					<input
                    {...register('password',{required: true , minLength: 1})}
						type='password'
						id='password'
						className={` ${
							errors.password
								? classes.form__input__red
								: classes.form__input
						}`}
					/>
					<label htmlFor='password' className={classes.form__label}>
						Password
					</label>
				</div>
				<button type='submit' className={classes.form__button}>
					Log In
				</button>
			</form>
		</div>
	)
}

export default Example
