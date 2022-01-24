import css from './ElectroBook.module.css'
import WrapperOfForms from './WrapperOfForm'
import Input from './Input'
const ElectroBook = () => {
	return (
		<WrapperOfForms>
			<div>
				<label className={css.sideLabel}>
					<span>Название книги</span>
					<Input
						type='text'
						placeholder='Напишите полное название книги'
					/>
				</label>
				<label className={css.sideLabel}>
					<span>ФИО автора</span>
					<Input type='text' placeholder='Напишите ФИО автора' />
				</label>
				<label className={css.sideLabel}>
					<span>Выберите жанр</span>
					<select
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
						type='text'
						placeholder='Напишите название издательства'
					/>
				</label>
				<label className={css.sideLabel}>
					<span> О книге</span>
					<textarea
						placeholder='Напишите о книге'
						maxLength='1234'
					></textarea>
					<p>0/1234</p>
				</label>
				<label className={css.sideLabel}>
					<span>Фрагмент книги</span>
					<textarea
						placeholder='Напишите фрагмент книги'
						maxLength='1234'
					></textarea>
					<p>0/9234</p>
				</label>
			</div>
			<div className={css.containerOfSideBox}>
				<div className={css.leftSideBox}>
					<label className={css.leftSideInputLabel}>
						<span>Язык</span>
						<select className={css.select} required>
							<option value='' disabled hidden>
								Русский
							</option>
							<option value='grapefruit'>Литература</option>
							<option value='lime'>роман</option>
							<option value='coconut'>стихи</option>
							<option value='mango'>Трагедия</option>
						</select>
					</label>
					<label className={css.leftSideInputLabel}>
						<span>Объем</span>
						<Input type='number' placeholder='стр.' />
					</label>
					<label className={css.leftSideInputLabel}>
						<span>Стоимость</span>
						<Input type='number' placeholder='сом' />
					</label>
					<p className={css.uploadFragment}>Загрузите книгу</p>
					<label className={css.customsForAudio}>
						<p className={css.uploadImg}>
							Загрузите PDF
							<Input type='file' accept="application/pdf,application/vnd.ms-excel" />
						</p>
					</label>
				</div>
				<div className={css.rigthSideOfBox}>
					<label className={css.rigthSideOfLabel}>
						<span>Год выпуска</span>
						<Input
							type='year'
							maxLength='4'
							step='1'
							placeholder='гг'
						/>
					</label>
					<label className={css.bestseller}>
						<Input type='checkbox' />
						<span>Бестселлер</span>
					</label>
					<label className={css.rigthSideOfLabel}>
						<span>Скидка</span>
						<Input type='number' placeholder='%' />
					</label>
				</div>
			</div>
		</WrapperOfForms>
	)
}

export default ElectroBook
