import { Fragment, useState } from 'react'
import AudioBook from '../addAudioBook/AddAudioBook'
import ElectroBook from '../addElectroBook/AddElectroBook'
import Papperbook from '../addPapperBook/AddPapperBook'
import classes from './AddBookForm.module.css'

const AddBookForm = () => {
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
		<form>
			<main className={classes.adminBlog}>
				<p className={classes.uploadthreeBooks}>Загрузите 3 фото *</p>
				<section className={classes.uploadImageSection}>
					<div className={classes.imageblog}>
						<div className={classes.labelBlog}>
							<label className={classes.custom}>
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
											<span className={classes.span}>
												Нажмите на иконку чтобы
												загрузить или перетащите фото
											</span>
										</>
									) : (
										<img
											className={classes.uploadedBook}
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
							<p className={classes.mainImage}>Главное фото</p>
						</div>
						<div className={classes.labelBlog}>
							<label className={classes.custom}>
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
											<span className={classes.span}>
												Нажмите на иконку чтобы
												загрузить или перетащите фото
											</span>
										</>
									) : (
										<img
											className={classes.uploadedBook}
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
							<p className={classes.mainImage}>2</p>
						</div>
						<div className={classes.labelBlog}>
							<label className={classes.custom}>
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
											<span className={classes.span}>
												Нажмите на иконку чтобы
												загрузить или перетащите фото
											</span>
										</>
									) : (
										<img
											className={classes.uploadedBook}
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
							<p className={classes.mainImage}>3</p>
						</div>
					</div>
					<div className={classes.imageUploadRules}>
						<div className={classes.rullsTextContent}>
							<p className={classes.publication}>
								Публикации с качественными фото получают{' '}
								<br></br>
								больше откликов!
							</p>
							<p className={classes.imagesMustBe}>
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
				<section className={classes.changeTypeofBook}>
					<h2 className={classes.type}>Тип</h2>
					<div className={classes.changeFormSection}>
						<label className={classes.checkbox}>
							<input
								type='radio'
								name='type'
								defaultChecked={book}
								defaultValue={book}
								onChange={isBookChangeHandler}
								className={classes.radioBtn}
							/>
							Бумажная
						</label>
						<label className={classes.checkbox}>
							<input
								type='radio'
								name='type'
								onChange={isAudioChangeHandler}
								defaultChecked={audio}
								defaultValue={audio}
							/>
							Аудиокнига
						</label>
						<label className={classes.checkbox}>
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
			</main>
		</form>
	)
}

export default AddBookForm
