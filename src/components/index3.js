import { Fragment, useState } from 'react'
import AudioBook from './Audiobook'
import ElectroBook from './ElectroBook'
import Papperbook from './paperbook'
import css from './index.module.css'

const NewPage = () => {
	
	const [book, setBook] = useState(false)
	const [audio, setAudio] = useState(false)
	const [electro, setElectro] = useState(true)

	const [png, setImage] = useState(null)
	const [png2, setImage2] = useState(null)
	const [png3, setImage3] = useState(null)

	const isAudioChangeHandler = () => {
		setBook(false)
		setElectro(false)
		setAudio(true)
	}
	const isElectroBookChangeHandler = () => {
		setBook(false)
		setElectro(true)
		setAudio(false)
	}
	const isBookChangeHandler = () => {
		setBook(true)
		setElectro(false)
		setAudio(false)
	}


	const onPaperBookSubmit = (data) => {
		console.log(data)
	}
	
	return (
		<main className={css.adminBlog}>
			<form>
				<p className={css.uploadthreeBooks}>Загрузите 3 фото *</p>
				<section className={css.uploadImageSection}>
					<div className={css.imageblog}>
						<div className={css.labelBlog}>
							<label className={css.custom}>
								<>
									{png === null ? (
										<>
											<input
												type='file'
												alt=''
												id='canvasElem'
												accept='image/png, image/gif, image/jpeg'
												onChange={(e) =>
													setImage(e.target.files[0])
												}
											/>
											<span className={css.span}>
												Нажмите на иконку чтобы
												загрузить или перетащите фото
											</span>
										</>
									) : (
										<img
											className={css.uploadedBook}
											src={
												png
													? URL.createObjectURL(png)
													: null
											}
											alt=''
										/>
									)}
								</>
							</label>
							<p className={css.mainImage}>Главное фото</p>
						</div>
						<div className={css.labelBlog}>
							<label className={css.custom}>
								<>
									{png2 === null ? (
										<>
											<input
												type='file'
												alt=''
												id='canvasElem'
												accept='image/png, image/gif, image/jpeg'
												onChange={(e) =>
													setImage2(e.target.files[0])
												}
											/>
											<span className={css.span}>
												Нажмите на иконку чтобы
												загрузить или перетащите фото
											</span>
										</>
									) : (
										<img
											className={css.uploadedBook}
											src={
												png2
													? URL.createObjectURL(png2)
													: null
											}
											alt=''
										/>
									)}
								</>
							</label>
							<p className={css.mainImage}>2</p>
						</div>
						<div className={css.labelBlog}>
							<label className={css.custom}>
								<>
									{png3 === null ? (
										<>
											<input
												type='file'
												alt=''
												id='canvasElem'
												accept='image/png, image/gif, image/jpeg'
												onChange={(e) =>
													setImage3(e.target.files[0])
												}
											/>
											<span className={css.span}>
												Нажмите на иконку чтобы
												загрузить или перетащите фото
											</span>
										</>
									) : (
										<img
											className={css.uploadedBook}
											src={
												png3
													? URL.createObjectURL(png3)
													: null
											}
											alt=''
										/>
									)}
								</>
							</label>
							<p className={css.mainImage}>3</p>
						</div>
					</div>
					<div className={css.imageUploadRules}>
						<div className={css.rullsTextContent}>
							<p className={css.publication}>
								Публикации с качественными фото получают{' '}
								<br></br>
								больше откликов!
							</p>
							<p className={css.imagesMustBe}>
								Фотографии должны быть:
							</p>
							<ul>
								<li>
									<span>
										Фон должен быть нейтральным, без теней,
										рисунков, посторонних объектов или
										засветов
									</span>
								</li>
								<li>
									<span>
										Фото обязательно должно быть цветным
									</span>
								</li>
								<li>
									<span>Фото </span>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className={css.changeTypeofBook}>
					<h2 className={css.type}>Тип</h2>
					<div className={css.changeFormSection}>
						<label className={css.checkbox}>
							<input
								type='radio'
								name='type'
								defaultChecked={book}
								defaultValue={book}
								onChange={isBookChangeHandler}
								className={css.radioBtn}
							/>
							Бумажная
						</label>
						<label className={css.checkbox}>
							<input
								type='radio'
								name='type'
								onChange={isAudioChangeHandler}
								defaultChecked={audio}
								defaultValue={audio}
							/>
							Аудиокнига
						</label>
						<label className={css.checkbox}>
							<input
								type='radio'
								name='type'
								onChange={isElectroBookChangeHandler}
								defaultChecked={electro}
								defaultValue={electro}
							/>
							Электонная Книга
						</label>
					</div>
				</section>
				<section>
					{book && <Papperbook onSubmit={onPaperBookSubmit} />}
					{audio && <AudioBook />}
					{electro && <ElectroBook />}
				</section>
			</form>
		</main>
	)
}

export default NewPage
