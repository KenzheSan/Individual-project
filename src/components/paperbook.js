import css from './paperbooks.module.css'
import { useForm } from 'react-hook-form'
import WrapperOfForms from './WrapperOfForm'
import Input from './Input'


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
			<div className={css.rightSection} onSubmit={submitHandler}>
				<label className={css.sideLabel}>
					<span>Название книги</span>
					<Input
						{...register('nameOfBook', {
							required: true,
							min: 1,
						})}
						type='text'
						placeholder='Напишите полное название книги'
						className={
							errors.nameOfBook ? css.hasError : css.noError
						}
					/>
				</label>
				<label className={css.sideLabel}>
					<span>ФИО автора</span>
					<Input
						type='text'
						placeholder='Напишите ФИО автора'
						className={errors.FIO ? css.hasError : css.noError}
						{...register('FIO', {
							required: true,
						})}
					/>
				</label>
				<label className={css.sideLabel}>
					<span>Выберите жанр</span>
					<select
						{...register('janr', { required: true })}
						required
						defaultValue='Литература, роман, стихи...'
						className={css.select}
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
				<label className={css.sideLabel}>
					<span>Издательство</span>
					<Input
						{...register('izdatelstvo', {
							required: true,
							minLength: 3,
						})}
						type='text'
						placeholder='Напишите название издательства'
						className={
							errors.izdatelstvo ? css.hasError : css.noError
						}
					/>
				</label>
				<label className={css.sideLabel}>
					<span>О книге</span>
					<textarea
						{...register('aboutBook', { required: true })}
						placeholder='Напишите о книге'
						minLength='10'
						className={
							errors.aboutBook ? css.hasError : css.noError
						}
					></textarea>
					<p>0/1234</p>
				</label>
				<label className={css.sideLabel}>
					<span>Фрагмент книги</span>
					<textarea
						{...register('fragment')}
						placeholder='Напишите фрагмент книги'
						maxLength='1234'
					></textarea>
					<p>0/9234</p>
				</label>
				<button className={css.buttonForAdminPage}>Отправить</button>
			</div>
			<div className={css.leftSection}>
				<div className={css.settingOfBook}>
					<label className={css.rigthLabel}>
						<span>Язык</span>
						<select
							{...register('lang')}
							className={css.select}
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
					<label className={css.rigthLabel}>
						<span>Объем</span>
						<Input
							{...register('obyom')}
							type='number'
							placeholder='стр.'
						/>
					</label>
					<label className={css.rigthLabel}>
						<span>Стоимость</span>
						<Input
							{...register('qurent')}
							type='number'
							placeholder='сом'
						/>
					</label>
					<label className={css.bestseller}>
						<Input {...register('best')} type='checkbox' />
						<span>Бестселлер</span>
					</label>
				</div>
				<div className={css.settingOfPrice}>
					<label className={css.rigthLabel}>
						<span> Год выпуска</span>
						<Input
							{...register('year')}
							type='year'
							maxLength='4'
							step='1'
							placeholder='гг'
						/>
					</label>
					<label className={css.rigthLabel}>
						<span>Кол-во книг</span>
						<Input
							{...register('how')}
							type='number'
							placeholder='шт.'
						/>
					</label>
					<label className={css.rigthLabel}>
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
