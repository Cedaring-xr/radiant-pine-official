import React from 'react'
import Button from './Button'
import { HiArrowCircleRight } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'

function ColumnSections() {
	return (
		<div className="bg-[#0b0d15] w-full min-h-[600px] text-white mt-12">
			<div id="line-break" className="w-full flex justify-center">
				<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="" />
				<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[200px]">Services</h3>
				<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="scale-x-[-1]" />
			</div>
			<div className="flex flex-col md:mx-16 lg:mx-0 lg:flex-row justify-between lg:px-12">
				<div className="column-item lg:px-8 lg:w-[30%]">
					<h3 className="headline-font text-2xl text-cyan-400 py-4">Website Testing</h3>
					<p>
						Without proper testing, websites can look incomplete or unprofessional. Testing showcases what
						pain points exist on a website and how to improve them. Testing for responsiveness across many
						different devices, browsers, and layouts can make the difference between an easily readable
						website and layouts cutting off texts and buttons. Without knowing what to improve, your website
						might look unprofessional without you realizing it.
					</p>
					<div className="w-[130px] text-black relative float-end mr-24 mt-6">
						<Button text="More" destination="/services#testing-section"></Button>
					</div>
				</div>
				<div className="column-item lg:px-8 lg:w-[30%]">
					<h3 className="headline-font text-2xl text-cyan-400 py-4">Updates and monderizations</h3>
					<p>
						Website updates are enevitible. Having a set process and knowing where and how to update
						information and design is important. Having someone to quickly go in and make changes can save
						you a lot of time and headache.
					</p>
					<div className="w-[130px] text-black relative float-end mr-24 mt-6">
						<Button text="More" destination="/services#updates-section"></Button>
					</div>
				</div>
				<div className="column-item lg:px-8 lg:w-[30%]">
					<h3 className="headline-font text-2xl text-cyan-400 py-4">Initial Guidance</h3>
					<p>
						Need to setup a website for the first time, but not sure how to do it right. I can help guide
						you through the process making it as easy as possible while avoiding time costly mistakes.
						Ultimately you own your website and content, I am just here to assist you through the process.
					</p>
					<div className="w-[130px] text-black relative float-end mr-24 mt-6">
						<Button text="More" destination="/services#guidance-section"></Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ColumnSections
