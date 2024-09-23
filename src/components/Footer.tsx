import React from 'react'
import ContactForm from '@/components/ContactForm'
import { SlSocialGoogle } from 'react-icons/sl'

function Footer() {
	return (
		<div className="bg-[#0b0d15] z-30 relative">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/blueBorder16-9.webp'})` }}
				className="bg-cover"
			>
				<div className="text-white pb-16 pt-[200px]">
					<h4 className="flex justify-center p-2 headline-font md:text-xl bg-stone-900 bg-opacity-95 w-[95%] max-w-[600px] mx-auto rounded-xl rounded-b-none">
						Send me a message to set up a free consultation meeting
					</h4>
					<div
						id="form-wrapper"
						className="w-[95%] max-w-[600px] mx-auto p-6 bg-stone-900 bg-opacity-95 rounded-xl rounded-t-none"
					>
						<ContactForm></ContactForm>
					</div>
				</div>
				<div className="w-full overflow-hidden flex justify-between p-2 pb-0 text-white headline-font text-xs md:text-base">
					<span className="hover:text-[#c524a8]">
						<a href=""></a>
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
