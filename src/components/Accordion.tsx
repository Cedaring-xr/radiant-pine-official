import React, { useState } from 'react'
import CenteredHighlight from './CenteredHighlight'
import { MdDoubleArrow } from 'react-icons/md'

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

export default function AccordionTemplate() {
	const [accordionOpen, setAccordionOpen] = useState(false)
	const [accordion2Open, setAccordion2Open] = useState(false)
	const [accordion3Open, setAccordion3Open] = useState(false)
	const [accordion4Open, setAccordion4Open] = useState(false)

	return (
		<Accordion className="bg-[#0b0d15] px-6 md:px-12 py-20" allowZeroExpanded allowMultipleExpanded>
			<AccordionItem>
				<AccordionItemHeading className="p-6">
					<AccordionItemButton className="serif-font text-white">
						<div className="flex justify-start mt-12 relative z-20 py-8 md:py-12 px-8 md:px-16">
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute -top-2 left-5"></div>
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute top-0 left-3"></div>
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute top-2 left-1"></div>
							<h2 className="serif-font text-white md:text-xl">New Website Creation</h2>
							<MdDoubleArrow
								className={`text-5xl sm:mx-4 -mt-4 text-[#c523a8] ${
									accordionOpen ? 'rotate-90' : 'rotate-0'
								}`}
								onClick={() => {
									setAccordionOpen(!accordionOpen)
								}}
							/>
						</div>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="md:mx-16 max-w-[1200px]">
					<h4 className="question">What is a CMS?</h4>
					<p>
						CMS stands for Content Management System. Essentially a CMS is a platform for building and
						managing websites. Some of the most common CMS are WordPress, Squarespace, Wix, Weblfow.
					</p>
					<h4 className="question">What hosting options are available for websites?</h4>
					<p>There are many hosting options that vary in what they offer</p>
					<h4 className="question">How much should you be paying for a new website?</h4>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos et corrupti magni, culpa sit illo.
					</p>
					<h4 className="question">Should you hire a designer/developer to build your website?</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a aspernatur quas eos maxime
						voluptatem possimus aliquid quasi autem modi.
					</p>
					<h4 className="question">Should you manage and update your website by yourself?</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi odio corrupti fugiat
						atque sequi odit natus, asperiores accusantium assumenda.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem className="bg-[#0b0d15]">
				<AccordionItemHeading className="p-6">
					<AccordionItemButton className="serif-font text-white bg-[#0b0d15]">
						<div className="flex justify-start mt-12 relative z-20 py-6 md:py-12 px-8 md:px-16">
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute -top-2 left-5"></div>
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute top-0 left-3"></div>
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute top-2 left-1"></div>
							<h2 className="serif-font text-white md:text-xl">Website Rework and Updates</h2>
							<MdDoubleArrow
								className={`text-5xl sm:mx-4 -mt-4 text-[#c523a8] ${
									accordion2Open ? 'rotate-90' : 'rotate-0'
								}`}
								onClick={() => {
									setAccordion2Open(!accordion2Open)
								}}
							/>
						</div>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="md:mx-16 max-w-[1200px]">
					<h4 className="question">How to assess if your website needs updates or improvements</h4>
					<p>
						In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum
						tempor laboris sed adipisicing eu esse duis nulla non.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem className="bg-[#0b0d15]">
				<AccordionItemHeading className="p-6">
					<AccordionItemButton className="serif-font text-white bg-[#0b0d15]">
						<div className="flex justify-start mt-12 relative z-20 py-6 md:py-12 px-8 md:px-16">
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute -top-2 left-5"></div>
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute top-0 left-3"></div>
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute top-2 left-1"></div>
							<h2 className="serif-font text-white md:text-xl">Website Hosting and Domains</h2>
							<MdDoubleArrow
								className={`text-5xl sm:mx-4 -mt-4 text-[#c523a8] ${
									accordion3Open ? 'rotate-90' : 'rotate-0'
								}`}
								onClick={() => {
									setAccordion3Open(!accordion3Open)
								}}
							/>
						</div>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="md:mx-16 max-w-[1200px]">
					<h4 className="question">How much should a domain name cost?</h4>
					<p>
						In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum
						tempor laboris sed adipisicing eu esse duis nulla non.
					</p>
					<h4 className="question">
						If I buy a domain from one company do I have to build my website from them also?
					</h4>
					<p>Short answer is no. </p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem className="bg-[#0b0d15]">
				<AccordionItemHeading className="p-6">
					<AccordionItemButton className="serif-font text-white bg-[#0b0d15]">
						<div className="flex justify-start mt-12 relative z-20 py-8 md:py-12 px-8 md:px-16">
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute -top-2 left-5"></div>
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute top-0 left-3"></div>
							<div className="border-2 border-[#c524a8] rounded-3xl h-[100px] w-[95%] lg:w-[46%] absolute top-2 left-1"></div>
							<h2 className="serif-font text-white md:text-xl">Marketing and Search Engines</h2>
							<MdDoubleArrow
								className={`text-5xl sm:mx-4 -mt-4 text-[#c523a8] ${
									accordion4Open ? 'rotate-90' : 'rotate-0'
								}`}
								onClick={() => {
									setAccordion4Open(!accordion4Open)
								}}
							/>
						</div>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="md:mx-16 max-w-[1200px]">
					<h4 className="question">What is SEO?</h4>
					<p>
						In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum
						tempor laboris sed adipisicing eu esse duis nulla non.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	)
}
