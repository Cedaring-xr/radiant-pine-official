'use client'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useLayoutEffect } from 'react'
import AccordionTemplate from '@/components/Accordion'

function FAQpage() {
	gsap.registerPlugin(ScrollTrigger)
	useLayoutEffect(() => {
		gsap.to('.glass', {
			y: 1800,
			ease: 'none',
			scrollTrigger: {
				trigger: '#faq-container',
				scrub: true,
				start: 'top top'
			}
		})
	}, [])
	return (
		<div id="faq-container" className="bg-[#0b0d15] overflow-hidden">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/8a.png'})` }}
				className="bg-cover bg-fixed  relative z-20"
			>
				<div id="main-box" className="h-[800px] flex justify-center items-center overflow-hidden">
					<div className="w-[90%] md:w-[60%] h-[150px] md:h-[200px] glass rounded-2xl flex justify-center items-center">
						<h1 className="headline-font text-4xl blue p-2">Frequently Asked Questions</h1>
					</div>
				</div>
			</div>
			<div className="pt-12 text-white">
				<h1 className="text-sm md:text-base serif-font flex justify-center p-6 md:px-24">
					*Feel free to email me if you have any other specific questions or need clarification on any
					concepts of website creation.
				</h1>
				<AccordionTemplate></AccordionTemplate>
			</div>
		</div>
	)
}

export default FAQpage
