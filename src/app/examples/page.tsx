import Image from 'next/image'
import SideSectionLeft from '@/components/SideSectionLeft'
import SideSectionRight from '@/components/SideSectionRight'
import TextBox from '@/components/TextBox'
import React from 'react'
import Button from '@/components/Button'

function Examples() {
	return (
		<div id="examples-mainContainer" className="bg-[#0b0d15]">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/5.png'})` }}
				className="w-screen bg-cover bg-fixed"
			>
				<div className="h-[800px] flex justify-center items-center">
					<div className="w-[30%] h-[200px] glass rounded-2xl flex justify-center items-center">
						<h1 className="headline-font text-4xl blue ">Example Work</h1>
					</div>
				</div>
			</div>
			<div className="pt-24 text-white">
				<div id="line-break" className="w-full flex justify-center mb-24">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[400px]">
						Custom built sites
					</h3>
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="scale-x-[-1]" />
				</div>
				<div className="flex flex-col lg:flex-row md:flex-row justify-between lg:px-12">
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Elevation weather app</h3>
						<p>
							Do you know what issues your website has and how to prioritize fixing them. Most web
							designers and CMS programs have no focus on thourghly testing their sites.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="/services"></Button>
						</div>
					</div>
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Coding portfolio</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sequi omnis in quos
							nesciunt consectetur officia dolorum tenetur corporis nisi.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="/services"></Button>
						</div>
					</div>
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Cedaring Art Showcase</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sequi omnis in quos
							nesciunt consectetur officia dolorum tenetur corporis nisi.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="/services"></Button>
						</div>
					</div>
				</div>
				<div className="w-full h-[200px]"></div>
				<div id="line-break" className="w-full flex justify-center">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[400px]">
						Squarespace websites
					</h3>
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="scale-x-[-1]" />
				</div>
				<div className="flex flex-col lg:flex-row md:flex-row justify-between lg:px-12">
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Elevation weather app</h3>
						<p>
							Do you know what issues your website has and how to prioritize fixing them. Most web
							designers and CMS programs have no focus on thourghly testing their sites.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="/services"></Button>
						</div>
					</div>
					<div className="column-item lg:px-8 invisible">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Coding portfolio</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sequi omnis in quos
							nesciunt consectetur officia dolorum tenetur corporis nisi.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="/services"></Button>
						</div>
					</div>
					<div className="column-item lg:px-8 invisible">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Cedaring Art Showcase</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sequi omnis in quos
							nesciunt consectetur officia dolorum tenetur corporis nisi.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="/services"></Button>
						</div>
					</div>
				</div>
				<div className="w-full h-[200px]"></div>
				<div id="line-break" className="w-full flex justify-center">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[400px]">
						WordPress websites
					</h3>
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="scale-x-[-1]" />
				</div>
				<div className="flex flex-col lg:flex-row md:flex-row justify-between lg:px-12">
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Elevation weather app</h3>
						<p>
							Do you know what issues your website has and how to prioritize fixing them. Most web
							designers and CMS programs have no focus on thourghly testing their sites.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="/services"></Button>
						</div>
					</div>
					<div className="column-item lg:px-8 invisible">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Coding portfolio</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sequi omnis in quos
							nesciunt consectetur officia dolorum tenetur corporis nisi.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="/services"></Button>
						</div>
					</div>
					<div className="column-item lg:px-8 invisible">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Cedaring Art Showcase</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sequi omnis in quos
							nesciunt consectetur officia dolorum tenetur corporis nisi.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="/services"></Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Examples
