import Image from 'next/image'
import SideSectionLeft from '@/components/SideSectionLeft'
import SideSectionRight from '@/components/SideSectionRight'
import TextBox from '@/components/TextBox'
import React from 'react'
import Button from '@/components/Button'

function Examples() {
	return (
		<div id="examples-mainContainer" className="bg-[#0b0d15] w-full overflow-hidden">
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
						<div>
							<Image
								src="/images/EW1.png"
								alt=""
								width={400}
								height={400}
								className="max-w-[400px] rounded-lg"
							></Image>
						</div>
						<p className="my-4">
							Custom weather fetching application that pulls data from an api. Search based on location.
							Second part is weather based on a specified elevation within Colorado.
						</p>

						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button
								text="View"
								destination="https://dev.dr7t8my3rq95b.amplifyapp.com/"
								target="_blank"
							></Button>
						</div>
					</div>
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Coding portfolio</h3>
						<div>
							<Image
								src="/images/PortfolioSite.png"
								alt=""
								width={400}
								height={400}
								className="max-w-[400px] rounded-lg"
							></Image>
						</div>
						<p className="my-4">
							My custom coding portfolio website. Displays some of my programming related projects and
							works in progress.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="https://www.mattraydev.com/" target="_blank"></Button>
						</div>
					</div>
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Cedaring Art Showcase</h3>
						<div>
							<Image
								src="/images/Art1.png"
								alt=""
								width={400}
								height={400}
								className="max-w-[400px] rounded-lg"
							></Image>
						</div>
						<p className="my-4">
							A showcase of VR made art, and experimentation with 3D assets displayed in a website. Has
							some work in progress sections but is meant to be more just experimenting with 3D effects.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="https://cedaring.art/" target="_blank"></Button>
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
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Cedaring Discs</h3>
						<p>
							This is a mock store website that I created for myself and for demo purposes. Contains a
							store where I can sell custom artwork disc golf discs.
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
