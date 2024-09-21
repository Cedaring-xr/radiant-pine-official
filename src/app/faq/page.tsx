'use client'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useLayoutEffect } from 'react'
import AccordionTemplate from '@/components/Accordion'
import { MdDoubleArrow } from 'react-icons/md'

function FAQpage() {
	gsap.registerPlugin(ScrollTrigger)
	ScrollTrigger.config({ ignoreMobileResize: true })
	useLayoutEffect(() => {
		gsap.to('.glass', {
			y: 800,
			ease: 'power1',
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
				style={{ backgroundImage: `url(${'/images/8a.webp'})` }}
				className="bg-cover bg-fixed  absolute z-20 h-[700px] w-full"
			>
				<div id="main-box" className="h-[700px] flex justify-center items-center overflow-hidden">
					<div className="w-[90%] md:w-[60%] h-[150px] md:h-[200px] glass rounded-2xl flex flex-col justify-center items-center">
						<h1 className="headline-font text-4xl blue p-2">Frequently Asked Questions</h1>
						<MdDoubleArrow className={`text-4xl sm:mx-4 text-[#c524a8] rotate-90 mt-4`} />
					</div>
				</div>
			</div>
			<div id="spacer" className="w-full h-[700px]"></div>
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
