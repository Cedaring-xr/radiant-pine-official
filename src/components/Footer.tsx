import React from 'react'
import ContactForm from '@/components/ContactForm'

function Footer() {
	return (
		<div className="bg-stone-800 text-white p-12 pb-2">
			<h4>Footer area</h4>
			<div id="form-wrapper" className="w-[50%]">
				<ContactForm></ContactForm>
			</div>
			<div className="flex justify-between p-4">
				<span>About this site</span>
				<span>Copywrite 2024</span>
				<span>Social Icons</span>
			</div>
		</div>
	)
}

export default Footer
