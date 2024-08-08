import React from 'react'
import ContactForm from '@/components/ContactForm'
import { SlSocialGoogle } from 'react-icons/sl'

function Footer() {
	return (
		<>
			<div className="bg-[#3d3d3d] text-white p-2 pb-16">
				<h4 className="flex justify-center p-4">Send me a message for a free consultation call</h4>
				<div id="form-wrapper" className="w-full max-w-[600px] mx-auto">
					<ContactForm></ContactForm>
				</div>
			</div>
			<div className="flex justify-between p-2 bg-[#121313] text-white headline-font text-xs md:text-base">
				<span className="hover:text-[#c524a8]">
					<a href="/website">About this site</a>
				</span>
				<span>Radiant Pine &copy; 2024</span>
				<div id="social-icons" className="text-pink-400 text-xl">
					<SlSocialGoogle />
				</div>
			</div>
		</>
	)
}

export default Footer
