/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useLayoutEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { MdDoubleArrow } from 'react-icons/md'

function Services() {
	gsap.registerPlugin(ScrollTrigger)
	ScrollTrigger.config({ ignoreMobileResize: true })

	useLayoutEffect(() => {
		gsap.to('.glass', {
			y: 1150,
			ease: 'power1',
			scrollTrigger: {
				trigger: '#services-mainContainer',
				scrub: true,
				start: 'top top'
			}
		})
	}, [])
	return (
		<div id="services-mainContainer" className="bg-[#0b0d15] overflow-hidden">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/16a.webp'})` }}
				className="bg-cover bg-fixed relative z-20 h-[700px] w-full"
			>
				<div id="main-box" className="h-[700px] flex justify-center items-center overflow-hidden">
					<div className="w-[90%] md:w-[60%] h-[150px] md:h-[200px] glass rounded-2xl flex flex-col justify-center items-center">
						<h1 className="headline-font text-4xl blue p-2">Services</h1>
						<MdDoubleArrow className={`text-4xl sm:mx-4 text-[#c524a8] rotate-90 mt-4`} />
					</div>
				</div>
			</div>
			<div className="pt-48 text-white">
				<div id="testing-section" className="flex justify-center">
					<div className="mt-12 relative z-20 sm:mx-[4%] md:mx-[12%] lg:mx-[25%]">
						<div id="pink-box-container" className="relative flex justify-start">
							<div className="border-2 border-[#c524a8] rounded-3xl h-[150px] w-[95%] max-w-[850px] absolute -top-2 left-5"></div>
							<div className="border-2 border-[#c524a8] rounded-3xl h-[150px] w-[95%] max-w-[850px] absolute top-0 left-3"></div>
							<div className="border-2 border-[#c524a8] rounded-3xl h-[150px] w-[95%] max-w-[850px] absolute top-2 left-1"></div>
							<h2 className="serif-font text-white w-[80%] max-w-[800px] mt-8 ml-8">
								*pricing varies based on the project and time effort. I usually charge in the range of
								$35/hr
							</h2>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center items-center mb-16 mt-24 md:mt-48">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="max-h-[34px]" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[300px]">
						Website Testing
					</h3>
					<Image
						src="/images/circuitSVGsmall.png"
						alt=""
						width={264}
						height={34}
						className="scale-x-[-1] max-h-[34px]"
					/>
				</div>
				<div className="flex flex-col lg:flex-row justify-between lg:px-12">
					<div className="column-item px-2 lg:px-8">
						<h3 className="headline-font text-xl text-cyan-400 py-4">Website Audit</h3>
						<p className="max-w-[700px]">
							A detailed breakdown document on what bugs, UI/UX issues, or navigation issues you may have
							with your website. Testing across multiple browsers, screen sizes, and devices. If you have
							only viewed your website on 1 computer or phone then you might not know if it looks bad on
							other devices. Identifying potential pain points helps to avoid negative impressions on your
							business.
						</p>
					</div>
					<div className="column-item px-2 lg:px-8">
						<h3 className="headline-font text-xl text-cyan-400 py-4">Performance Testing</h3>
						<p className="max-w-[700px]">
							How does your website function under a slower connection? What order does content load in to
							the page? Do background videos load in a acceptable timeframe? Performance testing
							identifies any issues with content and layout appearing on the page. Ensuring your customers
							have a smooth and enjoyable experience navigating content on your website even on slow or
							mobile connections speeds is important.
						</p>
					</div>
					<div className="column-item px-2 lg:px-8">
						<h3 className="headline-font text-xl text-cyan-400 py-4">Accessibility Audit</h3>
						<p className="max-w-[700px]">
							Accessibility refers to the ability to navigate and use a website by persons with
							disabilities. ADA (American Disability Act) applies to online businesses as well as physical
							locations. There are various guidelines to adhering to ADA compliance when building a
							website. Websites available as public services or affiliated with city/government that are
							not accessible could be subject to legal issues down the road.
						</p>
					</div>
				</div>
				<div id="updates-section" className="w-full h-[200px]"></div>
				<div className="w-full flex justify-center items-center mb-16">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="max-h-[34px]" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[600px]">
						Updates, Improvements, Rework
					</h3>
					<Image
						src="/images/circuitSVGsmall.png"
						alt=""
						width={264}
						height={34}
						className="scale-x-[-1] max-h-[34px]"
					/>
				</div>
				<div className="flex flex-col lg:flex-row justify-between lg:px-12">
					<div className="column-item px-2 lg:px-8">
						<h3 className="headline-font text-xl text-cyan-400 py-4">Content Updates</h3>
						<p className="max-w-[700px]">
							Need some new pictures, content sections, or pages on your website? Haven't changed anything
							in years because you don't want to break something. Having someone with a broad web
							development background make it easier to make changes with peace of mind.
						</p>
					</div>
					<div className="column-item px-2 lg:px-8">
						<h3 className="headline-font text-xl text-cyan-400 py-4">Plugin Updates</h3>
						<p className="max-w-[700px]">
							WordPress websites need to be updated on a semi-frequent basis. Long outdated plugins can
							break features and become a vulnurability for hacking. Oftentimes updating plugins is simple
							and easy. Sometimes it requires a deeper knowledge about what systems are affected and how
							to recover if updates break.
						</p>
					</div>
					<div className="column-item px-2 lg:px-8">
						<h3 className="headline-font text-xl text-cyan-400 py-4">Changing themes or structure</h3>
						<p className="max-w-[700px]">
							Many CMS platforms work off of a theme framework that sets defaults for the website.
							Changing themes can often mean having to make lots of little content adjustments to match
							the new theme. Websites that have major structural changes should also be thoroughly tested
							again to ensure that everything matches up well and is working correctly.
						</p>
					</div>
				</div>
				<div id="guidance-section" className="w-full h-[200px]"></div>
				<div className="w-full flex justify-center items-center mb-16">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="max-h-[34px]" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[300px]">
						Guidance on Setup
					</h3>
					<Image
						src="/images/circuitSVGsmall.png"
						alt=""
						width={264}
						height={34}
						className="scale-x-[-1] max-h-[34px]"
					/>
				</div>
				<div className="flex flex-col lg:flex-row justify-between lg:px-12">
					<div className="column-item px-2 lg:px-8">
						<h3 className="headline-font text-xl text-cyan-400 py-4">Info static websites</h3>
						<p className="max-w-[700px]">
							Most personal and small business websites provide content about who they are and what they
							do. Often with links to contact them and reviews. This is considered a static website. There
							are no moving parts with data. Static sites are simplier to setup and manage because of
							their simplicity.
						</p>
					</div>
					<div className="column-item px-2 lg:px-8">
						<h3 className="headline-font text-xl text-cyan-400 py-4">Pros and cons of website builders</h3>
						<p className="max-w-[700px]">
							Website building platforms are not all the same. Depending on your needs, you may want to
							choose one over another. I can give you a detailed breakdown of which platform would be a
							best fit based on your priorities. Choosing the right platform will save you time and
							frustration in the long run.
						</p>
					</div>
					<div className="column-item px-2 lg:px-8">
						<h3 className="headline-font text-xl text-cyan-400 py-4">Hosting and Domain Names</h3>
						<p className="max-w-[700px]">
							There are many different hosting companies available. Website hosting options can become
							confusing when integrating different services. Deciding on what and how to host a website
							can be the difference between paying $100/mo and $15/mo.
						</p>
					</div>
				</div>
				<div id="guidance-section" className="w-full h-[300px]"></div>
			</div>
		</div>
	)
}

export default Services
