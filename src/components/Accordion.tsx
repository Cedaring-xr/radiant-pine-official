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
								className={`text-5xl sm:mx-4 -mt-4 text-cyan-400 ${
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
					<p>
						There are many hosting options that vary in what they offer. Some try to bundle domains,
						hosting, and build tools together in order to streamline the process. This is not always the
						best idea. I prefer hosting options that allow for the most flexibility. These are often cheaper
						as they do not lock you into extra tools that are not used.
					</p>
					<h4 className="question">How much should you be paying for a new website?</h4>
					<p>
						Website prices vary quite a lot. Average prices end up around $20 - $50 per month. Extra
						features and support options can quickly raise prices.
					</p>
					<h4 className="question">Should you hire a designer/developer to build your website?</h4>
					<p>
						If you have the budget and do not want to be as involved with a website then yes hiring a
						developer is a good idea. You will get a more professional experience and end result.
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
								className={`text-5xl sm:mx-4 -mt-4 text-cyan-400 ${
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
						Through thoroughly testing the website. If you do not know where things are broken or what
						content is wrong then you will not know if you need updates.
					</p>
					<h4 className="question">How often should a website be updated?</h4>
					<p>
						It mostly depends on the type of website. Ones that have an event schedule or time based content
						will need updates more frequently. Even static website should be updated about twice a year.
						This ensures that the content is accurate as well as helps search engines to rank higher.
					</p>
					<h4 className="question">How can I change website themes?</h4>
					<p>
						Website builder themes are pre-built layouts that provide a structure for adding in your own
						content. Most of the time themes can not be interchanged without making lots of other changes.
						It is fine to try out theme changes if you can revert easily.
					</p>
					<h4 className="question">In what case would a website need to be re-built?</h4>
					<p>
						A website re-build is a lengthy process. Most of the time it is better to try and improve a
						current version. If the website was built incorrectly the first time or becomes hard to manage
						without breaking then a re-build could be considered.
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
								className={`text-5xl sm:mx-4 -mt-4 text-cyan-400 ${
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
						Domain names are pretty much the same price no matter where you buy them from. $15 - $20 per
						year is standard. It is generally not a good idea to buy an expensive domain name. Try to find
						one that matches your business name for the base price.
					</p>
					<h4 className="question">
						If I buy a domain from one company do I have to build my website from them also?
					</h4>
					<p>
						Short answer is no. Most domain registration companies will let you use the domain name with a
						variety of website hosting platforms.
					</p>
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
								className={`text-5xl sm:mx-4 -mt-4 text-cyan-400 ${
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
						SEO stands for search engine optimization. This refers to how a website is listed when users
						perform searches through Google or other search engines.
					</p>
					<h4 className="question">How can I improve SEO for my website?</h4>
					<p>
						SEO stands for search engine optimization. This refers to how a website is listed when users
						perform searches through Google or other search engines.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	)
}
