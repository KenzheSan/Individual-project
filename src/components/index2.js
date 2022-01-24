import { useEffect} from 'react'
import useHttp from './use-http'
import { getAllQuotes } from './api'
const GetImages = () => {
	const { sendRequest, status, data, error } = useHttp(getAllQuotes, true)
	useEffect(() => {
		sendRequest()
	}, [sendRequest])
	if (status === 'pending') {
		return <div>loading...</div>
	}
	if (error) {
		return <div>error...</div>
	}
	if (status === 'completed' && (!data || data.length === 0)) {
		return <p>Emty data</p>
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
	let content = data.map((item) => {
		return (
			<div key={item.id}>
                <span>{item.baseImage}</span>
			</div>
		)
	})


	return <div></div>
}

export default GetImages
