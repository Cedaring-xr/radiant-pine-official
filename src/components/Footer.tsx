import React from 'react'
import ContactForm from '@/components/ContactForm'
import { SlSocialGoogle } from 'react-icons/sl'

function Footer() {
	return (
		<div className="bg-[#0b0d15]">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/blueBorderCropped.png'})` }}
				className="w-screen bg-cover"
			>
				<div className="text-white pb-16 pt-[300px]">
					<h4 className="flex justify-center p-4 headline-font md:text-2xl">
						Send me a message for a free consultation call
					</h4>
					<div
						id="form-wrapper"
						className="w-[95%] max-w-[600px] mx-auto p-6 bg-stone-900 bg-opacity-90 rounded-xl"
					>
						<ContactForm></ContactForm>
					</div>
				</div>
				<div className="w-full overflow-hidden flex justify-between p-2 text-white headline-font text-xs md:text-base">
					<span className="hover:text-[#c524a8]">
						<a href="/website">About this site</a>
					</span>
					<span>Radiant Pine &copy; 2024</span>
					<div id="social-icons" className="text-pink-400 text-xl">
						<SlSocialGoogle />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
