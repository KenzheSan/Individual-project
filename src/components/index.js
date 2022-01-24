// import useFetch from "./useHttp"
import { useState } from 'react'
import { addQuote } from './api'
import './index.css'
import useHttp from './use-http'
import GetImages from './index2'

const Example = () => {
	const [baseImage, setBaseImage] = useState('')

	const uploadImage = async (e) => {
		const file = e.target.files[0]
		const base64 = await convertBase64(file)
		setBaseImage(base64)
	}
	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader()
			fileReader.readAsDataURL(file)

			fileReader.onload = () => {
				resolve(fileReader.result)
			}

			fileReader.onerror = (error) => {
				reject(error)
			}
		})
	}

	
	const { sendRequest, status } = useHttp(addQuote)
	const [image, setImage] = useState('')
	const [image2, setImage2] = useState('')
	const [image3, setImage3] = useState('')
	console.log(image);
	const addQuoteHandler = (e) => {
		e.preventDefault()
		let books = {
			baseImage
		}
		sendRequest(books)
		console.log(status)
		console.log(books)
	}

	return (
		<div>
			<input type='file' accept="image/png, image/gif, image/jpeg" onChange={(e) => setImage(e.target.files[0])} />
			<input type='file' accept="image/png, image/gif, image/jpeg" onChange={(e) => setImage2(e.target.files[0])} />
			<input type='file'accept="image/png, image/gif, image/jpeg" onChange={(e) => setImage3(e.target.files[0])} />
			<input type='file' onChange={(e) => uploadImage(e)} />

			<button onClick={addQuoteHandler}>Add</button>
			<img style={{width: '100px'}} src={image ? URL.createObjectURL(image): null} alt=''/>
			<img style={{width: '100px'}} src={image2 ? URL.createObjectURL(image2): null} alt=''/>
			<img style={{width: '100px'}} src={image3 ? URL.createObjectURL(image3): null} alt=''/>
			<img src={baseImage} height='200px' alt='' />
			<GetImages/>
		</div>
	)
}

export default Example
