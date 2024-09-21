'use client'
import Image from 'next/image'
import React from 'react'
import Button from '@/components/Button'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { MdDoubleArrow } from 'react-icons/md'

function Examples() {
	gsap.registerPlugin(ScrollTrigger)
	useLayoutEffect(() => {
		gsap.to('.glass', {
			y: 1200,
			ease: 'power1',
			scrollTrigger: {
				trigger: '#examples-mainContainer',
				scrub: true,
				start: 'top top'
			}
		})
	}, [])
	return (
		<div id="examples-mainContainer" className="bg-[#0b0d15] overflow-hidden">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/5a.webp'})` }}
				className="bg-cover bg-fixed relative z-20"
			>
				<div id="main-box" className="h-[700px] flex justify-center items-center overflow-hidden">
					<div className="w-[90%] md:w-[60%] h-[150px] md:h-[200px] glass rounded-2xl flex flex-col justify-center items-center">
						<h1 className="headline-font text-4xl blue p-2">Sample Work</h1>
						<MdDoubleArrow className={`text-4xl sm:mx-4 text-[#c524a8] rotate-90 mt-4`} />
					</div>
				</div>
			</div>
			<div className="pt-24 text-white z-20">
				<div className="w-full h-[200px]"></div>
				<div id="line-break" className="w-full flex justify-center items-center mb-16">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="max-h-[34px]" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[400px]">
						Squarespace Websites
					</h3>
					<Image
						src="/images/circuitSVGsmall.png"
						alt=""
						width={264}
						height={34}
						className="scale-x-[-1] max-h-[34px]"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
					<div className="grid-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Radiant Discs</h3>
						<div>
							<Image
								src="/images/RadiantDiscs.png"
								alt=""
								width={320}
								height={300}
								className="max-w-[320px] rounded-3xl"
							></Image>
						</div>
						<p className="my-4 max-w-[400px]">
							This is a mock store website that I created for myself and for demo purposes. Contains a
							simple landing page and store where I can sell custom artwork disc golf discs. It is a fully
							functional website I use to test out and experiment with features of Squarespace.
						</p>
						<div className="w-[130px] text-black mx-auto mt-6">
							<Button text="View" destination="https://radiantdiscs.com"></Button>
						</div>
					</div>
				</div>
				<div className="w-full h-[200px]"></div>
				<div id="line-break" className="w-full flex justify-center items-center mb-16">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="max-h-[34px]" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[400px]">
						WordPress Websites
					</h3>
					<Image
						src="/images/circuitSVGsmall.png"
						alt=""
						width={264}
						height={34}
						className="scale-x-[-1] max-h-[34px]"
					/>
				</div>
				<div className="fgrid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
					<div className="grid-item lg:px-8 mb-48">
						<h3 className="headline-font text-2xl text-white py-4">Coming Soon!</h3>
						<p className="max-w-[400px]">
							I am working on building a WordPress template website to experiment with and use as
							examples.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6 invisible">
							<Button text="View" destination="/services" target="_blank"></Button>
						</div>
					</div>
				</div>
				<div id="line-break" className="w-full flex justify-center items-center mb-16">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="max-h-[34px]" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[400px]">
						Custom Built Sites
					</h3>
					<Image
						src="/images/circuitSVGsmall.png"
						alt=""
						width={264}
						height={34}
						className="scale-x-[-1] max-h-[34px]"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
					<div className="grid-item lg:px-8 mb-6">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Elevation Weather App</h3>
						<div>
							<Image
								src="/images/EW1.webp"
								alt=""
								width={320}
								height={300}
								className="max-w-[320px] rounded-3xl"
							></Image>
						</div>
						<p className="my-4 max-w-[400px]">
							Custom weather fetching application that pulls data from an API. Search based on location.
							Second part is weather based on a specified elevation within Colorado. I built this as
							practice coding with API data.
						</p>

						<div className="w-[130px] text-black mx-auto mt-6">
							<Button
								text="View"
								destination="https://dev.dr7t8my3rq95b.amplifyapp.com/"
								target="_blank"
							></Button>
						</div>
					</div>
					<div className="grid-item lg:px-8 mb-6">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Coding Portfolio</h3>
						<div>
							<Image
								src="/images/PortfolioSite.png"
								alt=""
								width={320}
								height={300}
								className="max-w-[320px] rounded-3xl"
							></Image>
						</div>
						<p className="my-4 max-w-[400px]">
							My custom coding portfolio website. Displays some of my programming related projects and
							works in progress. Also it has my resume on it.
						</p>
						<div className="w-[130px] text-black mx-auto mt-6">
							<Button text="View" destination="https://www.mattraydev.com/" target="_blank"></Button>
						</div>
					</div>
					<div className="grid-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Cedaring Art Showcase</h3>
						<div>
							<Image
								src="/images/Art1.webp"
								alt=""
								width={320}
								height={300}
								className="max-w-[320px] rounded-3xl"
							></Image>
						</div>
						<p className="my-4 max-w-[400px]">
							A showcase of VR art made by myself a couple years ago. Experimentation with 3D assets
							displayed in a website. Has some work in progress sections but is meant to be more just a
							learning experience with 3D effects.
						</p>
						<div className="w-[130px] text-black mx-auto mt-6">
							<Button text="View" destination="https://cedaring.art/" target="_blank"></Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Examples
