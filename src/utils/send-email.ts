import { FormData } from '@/components/ContactForm'

export function sendEmail(data: FormData) {
	const apiEndpoint = '/api/email'

	fetch(apiEndpoint, {
		method: 'POST',
		body: JSON.stringify(data)
	})
		.then((res) => res.json())
		.then((response) => {
			console.log(response.message)
		})
		.catch((err) => {
			console.log('Sorry an Error occured ' + err)
		})
}
