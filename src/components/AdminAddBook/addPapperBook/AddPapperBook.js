import classes from './AddPapperBook.module.css'
import { useForm } from 'react-hook-form'
import Input from '../../ReusebleInput/InputForAddBook/Input'
import WrapperOfForms from '../../Wrapper/WrapperOfAdminAddBook/WrapperOfForm'

const Papperbook = (props) => {
	const { onSubmit } = props

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onTouched' })

	const submitHandler = (event) => {
		event.preventDefault()

		handleSubmit(onSubmit)
	}

	return (
		<WrapperOfForms>
			<div className={classes.rightSection} onSubmit={submitHandler}>
				<label className={classes.sideLabel}>
					<span>Название книги</span>
					<Input
						{...register('nameOfBook', {
							required: true,
							min: 1,
						})}
						type='text'
						placeholder='Напишите полное название книги'
						className={
							errors.nameOfBook ? classes.hasError : classes.noError
						}
					/>
				</label>
				<label className={classes.sideLabel}>
					<span>ФИО автора</span>
					<Input
						type='text'
						placeholder='Напишите ФИО автора'
						className={errors.FIO ? classes.hasError : classes.noError}
						{...register('FIO', {
							required: true,
						})}
					/>
				</label>
				<label className={classes.sideLabel}>
					<span>Выберите жанр</span>
					<select
						{...register('janr', { required: true })}
						required
						defaultValue='Литература, роман, стихи...'
						className={classes.select}
					>
						<option
							value='Литература, роман, стихи...'
							disabled
							hidden
						>
							Литература, роман, стихи...
						</option>
						<option value='grapefruit'>Литература</option>
						<option value='lime'>роман</option>
						<option value='coconut'>стихи</option>
						<option value='mango'>Трагедия</option>
					</select>
				</label>
				<label className={classes.sideLabel}>
					<span>Издательство</span>
					<Input
						{...register('izdatelstvo', {
							required: true,
							minLength: 3,
						})}
						type='text'
						placeholder='Напишите название издательства'
						className={
							errors.izdatelstvo ? classes.hasError : classes.noError
						}
					/>
				</label>
				<label className={classes.sideLabel}>
					<span>О книге</span>
					<textarea
						{...register('aboutBook', { required: true })}
						placeholder='Напишите о книге'
						minLength='10'
						className={
							errors.aboutBook ? classes.hasError : classes.noError
						}
					></textarea>
					<p>0/1234</p>
				</label>
				<label className={classes.sideLabel}>
					<span>Фрагмент книги</span>
					<textarea
						{...register('fragment')}
						placeholder='Напишите фрагмент книги'
						maxLength='1234'
					></textarea>
					<p>0/9234</p>
				</label>
				<button className={classes.buttonForAdminPage}>Отправить</button>
			</div>
			<div className={classes.leftSection}>
				<div className={classes.settingOfBook}>
					<label className={classes.rigthLabel}>
						<span>Язык</span>
						<select
							{...register('lang')}
							className={classes.select}
							required
						>
							<option value='' disabled hidden>
								Русский
							</option>
							<option value='grapefruit'>Русский</option>
							<option value='lime'>English</option>
							<option value='coconut'>Türkçe</option>
							<option value='mango'>Français</option>
						</select>
					</label>
					<label className={classes.rigthLabel}>
						<span>Объем</span>
						<Input
							{...register('obyom')}
							type='number'
							placeholder='стр.'
						/>
					</label>
					<label className={classes.rigthLabel}>
						<span>Стоимость</span>
						<Input
							{...register('qurent')}
							type='number'
							placeholder='сом'
						/>
					</label>
					<label className={classes.bestseller}>
						<Input {...register('best')} type='checkbox' />
						<span>Бестселлер</span>
					</label>
				</div>
				<div className={classes.settingOfPrice}>
					<label className={classes.rigthLabel}>
						<span> Год выпуска</span>
						<Input
							{...register('year')}
							type='year'
							maxLength='4'
							step='1'
							placeholder='гг'
						/>
					</label>
					<label className={classes.rigthLabel}>
						<span>Кол-во книг</span>
						<Input
							{...register('how')}
							type='number'
							placeholder='шт.'
						/>
					</label>
					<label className={classes.rigthLabel}>
						<span>Скидка</span>
						<Input
							{...register('discount')}
							type='number'
							placeholder='%'
						/>
					</label>
				
				</div>
			</div>
		</WrapperOfForms>
	)
}
export default Papperbook
