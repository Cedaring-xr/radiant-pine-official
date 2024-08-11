import React from 'react'
import Button from './Button'
import { HiArrowCircleRight } from 'react-icons/hi'

function ColumnSections() {
	return (
		<div className="bg-[#0b0d15] w-full min-h-[600px] text-white mt-12">
			<div id="line-break">
				<span className="text-white w-full px-12 mx-auto text-4xl">-------- Services ------</span>
			</div>
			<div className="flex flex-col md:flex-row md:flex-col-3 justify-between">
				<div className="column-item">
					<h3 className="uppercase headline-font text-xl text-[#89f7fe] py-4">Website Testing</h3>
					<p>
						Do you know what issues your website has and how to prioritize fixing them. Most web designers
						and CMS programs have no focus on thourghly testing their sites.
					</p>
					<div className="w-[130px] text-black relative float-end mr-24 mt-6">
						<Button text="More" destination="/services"></Button>
					</div>
				</div>
				<div className="column-item">
					<h3 className="uppercase headline-font text-xl text-[#89f7fe] py-4">Updates and monderizations</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sequi omnis in quos nesciunt
						consectetur officia dolorum tenetur corporis nisi.
					</p>
					<div className="w-[130px] text-black relative float-end mr-24 mt-6">
						<Button text="More" destination="/services"></Button>
					</div>
				</div>
				<div className="column-item">
					<h3 className="uppercase headline-font text-xl text-[#89f7fe] py-4">Expert advice</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sequi omnis in quos nesciunt
						consectetur officia dolorum tenetur corporis nisi.
					</p>
					<div className="w-[130px] text-black relative float-end mr-24 mt-6">
						<Button text="More" destination="/services"></Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ColumnSections
