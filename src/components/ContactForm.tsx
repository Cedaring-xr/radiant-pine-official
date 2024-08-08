'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/utils/send-email'
import Button from './Button'

export type FormData = {
	name: string
	email: string
	message: string
}

const Contact: FC = () => {
	const { register, handleSubmit } = useForm<FormData>()

	function onSubmit(data: FormData) {
		sendEmail(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-5 mt-5">
				<label htmlFor="name" className="mb-2 block text-base font-medium text-white">
					Name
				</label>
				<input
					type="text"
					placeholder="Full Name"
					className="w-full rounded-md border border-gray-300 bg-[#f7f4fb] pt-2 px-4 text-base font-medium text-gray-700 outline-none focus:border-2 focus:border-[#c524a8] focus:shadow-md"
					{...register('name', { required: true })}
				/>
			</div>
			<div className="mb-5">
				<label htmlFor="email" className="mb-2 block text-base font-medium text-white">
					Email Address
				</label>
				<input
					type="email"
					placeholder="example@domain.com"
					className="w-full rounded-md border border-gray-300 bg-[#f7f4fb] pt-2 px-4 text-base font-medium text-gray-700 outline-none focus:border-2 focus:border-[#c524a8] focus:shadow-md"
					{...register('email', { required: true })}
				/>
			</div>
			<div className="mb-5">
				<label htmlFor="message" className="mb-2 block text-base font-medium text-white">
					Message
				</label>
				<textarea
					rows={4}
					placeholder="Type your message"
					className="w-full resize-none rounded-md border border-gray-300 bg-white pt-2 px-6 text-base font-medium text-gray-700 outline-none focus:border-2 focus:border-[#c524a8] focus:shadow-md"
					{...register('message', { required: true })}
				></textarea>
			</div>
			<div>
				<button className="hover:shadow-form text-base font-semibold text-black">
					<Button text="Submit"></Button>
				</button>
			</div>
		</form>
	)
}

export default Contact
