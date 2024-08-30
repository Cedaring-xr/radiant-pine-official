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
			<div className="flex flex-col lg:flex-row md:flex-row justify-between lg:px-12">
				<div className="column-item lg:px-8">
					<h3 className="headline-font text-2xl text-cyan-400 py-4">Website Testing</h3>
					<p>
						Do you know what issues your website has and how to prioritize fixing them. Most web designers
						and CMS programs have no focus on thourghly testing their sites.
					</p>
					<div className="w-[130px] text-black relative float-end mr-24 mt-6">
						<Button text="More" destination="/services#testing-section"></Button>
					</div>
				</div>
				<div className="column-item lg:px-8">
					<h3 className="headline-font text-2xl text-cyan-400 py-4">Updates and monderizations</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sequi omnis in quos nesciunt
						consectetur officia dolorum tenetur corporis nisi.
					</p>
					<div className="w-[130px] text-black relative float-end mr-24 mt-6">
						<Button text="More" destination="/services#updates-section"></Button>
					</div>
				</div>
				<div className="column-item lg:px-8">
					<h3 className="headline-font text-2xl text-cyan-400 py-4">Initial Guidance</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sequi omnis in quos nesciunt
						consectetur officia dolorum tenetur corporis nisi.
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
