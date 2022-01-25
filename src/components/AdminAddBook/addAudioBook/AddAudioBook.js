import classes from './AddAudioBook.module.css'
import WrapperOfForms from '../../Wrapper/WrapperOfAdminAddBook/WrapperOfForm'
import Input from '../../ReusebleInput/InputForAddBook/Input'
const AudioBook = () => {
	return (
		<WrapperOfForms>
			<section className={classes.rightSection}>
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
					<span>О книге</span>
					<textarea
						placeholder='Напишите о книге'
						maxLength='1234'
					></textarea>
					<p>0/1234</p>
				</label>
			</section>
			<section className={classes.leftSection}>
				<section className={classes.settingOfBook}>
					<label className={classes.rigthLabel}>
						<span>Язык</span>
						<select className={classes.select} required>
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
						<span>Длительность</span>
						<Input
							onFocus={(e) => (e.target.type = 'time')}
							className={classes.inputOfTime}
							step='1'
							placeholder='___ ч ___ мин ___ сек'
						/>
					</label>
					<label className={classes.rigthLabel}>
						<span>Стоимость</span>
						<Input type='number' placeholder='сом' />
					</label>
				</section>
				<section className={classes.rightSectionControl}>
					<label className={classes.rigthLabel}>
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
					<label className={classes.rigthLabel}>
						<span>Скидка</span>
						<Input
							type='number'
							placeholder='%'
						/>
					</label>
					<div className={classes.uploadImageBox}>
						<p className={classes.uploadFragment}>
							Загрузите фрагмент аудиозаписи
						</p>
						<label className={classes.customsForAudio}>
							<p className={classes.uploadImg}>
								Загрузите аудиозапись
								<Input type='file' accept='audio/mp3' />
							</p>
						</label>
						<p className={classes.uploadFullAudio}>
							Загрузите аудиозапись
						</p>
						<label className={classes.customsForAudio}>
							<p className={classes.uploadImg}>
								Загрузите аудиозапись
								<Input type='file' accept='audio/mp3' />
							</p>
						</label>
						<button className={classes.buttonForAdminPage}>Отправить</button>
					</div>
				</section>
			</section>
		</WrapperOfForms>
	)
}

export default AudioBook
