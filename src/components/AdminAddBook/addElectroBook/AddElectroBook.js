import classes from './AddElectroBook.module.css'
import Input from '../../ReusebleInput/InputForAddBook/Input'
import WrapperOfForms from '../../Wrapper/WrapperOfAdminAddBook/WrapperOfForm'
const ElectroBook = () => {
	return (
		<WrapperOfForms>
			<div>
				<label className={classes.sideLabel}>
					<span>Название книги</span>
					<Input
						type='text'
						placeholder='Напишите полное название книги'
					/>
				</label>
				<label className={classes.sideLabel}>
					<span>ФИО автора</span>
					<Input type='text' placeholder='Напишите ФИО автора' />
				</label>
				<label className={classes.sideLabel}>
					<span>Выберите жанр</span>
					<select
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
						type='text'
						placeholder='Напишите название издательства'
					/>
				</label>
				<label className={classes.sideLabel}>
					<span> О книге</span>
					<textarea
						placeholder='Напишите о книге'
						maxLength='1234'
					></textarea>
					<p>0/1234</p>
				</label>
				<label className={classes.sideLabel}>
					<span>Фрагмент книги</span>
					<textarea
						placeholder='Напишите фрагмент книги'
						maxLength='1234'
					></textarea>
					<p>0/9234</p>
				</label>
				<button className={classes.buttonForAdminPage}>Отправить</button>
			</div>
			<div className={classes.containerOfSideBox}>
				<div className={classes.leftSideBox}>
					<label className={classes.leftSideInputLabel}>
						<span>Язык</span>
						<select className={classes.select} required>
							<option value='' disabled hidden>
								Русский
							</option>
							<option value='grapefruit'>Литература</option>
							<option value='lime'>роман</option>
							<option value='coconut'>стихи</option>
							<option value='mango'>Трагедия</option>
						</select>
					</label>
					<label className={classes.leftSideInputLabel}>
						<span>Объем</span>
						<Input type='number' placeholder='стр.' />
					</label>
					<label className={classes.leftSideInputLabel}>
						<span>Стоимость</span>
						<Input type='number' placeholder='сом' />
					</label>
					<p className={classes.uploadFragment}>Загрузите книгу</p>
					<label className={classes.customsForAudio}>
						<p className={classes.uploadImg}>
							Загрузите PDF
							<Input
								type='file'
								accept='application/pdf,application/vnd.ms-excel'
							/>
						</p>
					</label>
				</div>
				<div className={classes.rigthSideOfBox}>
					<label className={classes.rigthSideOfLabel}>
						<span>Год выпуска</span>
						<Input
							type='year'
							maxLength='4'
							step='1'
							placeholder='гг'
						/>
					</label>
					<label className={classes.bestseller}>
						<Input type='checkbox' />
						<span>Бестселлер</span>
					</label>
					<label className={classes.rigthSideOfLabel}>
						<span>Скидка</span>
						<Input type='number' placeholder='%' />
					</label>
				</div>
			</div>
		</WrapperOfForms>
	)
}

export default ElectroBook
