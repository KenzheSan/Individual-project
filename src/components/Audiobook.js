import css from './Audiobook.module.css'
import WrapperOfForms from './WrapperOfForm'
import Input from './Input'
const AudioBook = () => {
	return (
		<WrapperOfForms>
			<section className={css.rightSection}>
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
					<span>О книге</span>
					<textarea
						placeholder='Напишите о книге'
						maxLength='1234'
					></textarea>
					<p>0/1234</p>
				</label>
			</section>
			<section className={css.leftSection}>
				<section className={css.settingOfBook}>
					<label className={css.rigthLabel}>
						<span>Язык</span>
						<select className={css.select} required>
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
						<span>Длительность</span>
						<Input
							onFocus={(e) => (e.target.type = 'time')}
							className={css.inputOfTime}
							step='1'
							placeholder='___ ч ___ мин ___ сек'
						/>
					</label>
					<label className={css.rigthLabel}>
						<span>Стоимость</span>
						<Input type='number' placeholder='сом' />
					</label>
				</section>
				<section className={css.rightSectionControl}>
					<label className={css.rigthLabel}>
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
					<label className={css.rigthLabel}>
						<span>Скидка</span>
						<Input
							type='number'
							placeholder='%'
						/>
					</label>
					<div className={css.uploadImageBox}>
						<p className={css.uploadFragment}>
							Загрузите фрагмент аудиозаписи
						</p>
						<label className={css.customsForAudio}>
							<p className={css.uploadImg}>
								Загрузите аудиозапись
								<Input type='file' accept='audio/mp3' />
							</p>
						</label>
						<p className={css.uploadFullAudio}>
							Загрузите аудиозапись
						</p>
						<label className={css.customsForAudio}>
							<p className={css.uploadImg}>
								Загрузите аудиозапись
								<Input type='file' accept='audio/mp3' />
							</p>
						</label>
					</div>
				</section>
			</section>
		</WrapperOfForms>
	)
}

export default AudioBook
