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
	ScrollTrigger.config({ ignoreMobileResize: true })
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
		<main id="examples-mainContainer" className="bg-[#0b0d15] overflow-hidden">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/5a.webp'})` }}
				className="bg-cover absolute z-20 h-[700px] w-full"
			>
				<div id="main-box" className="h-[700px] flex justify-center items-center overflow-hidden">
					<div className="w-[90%] md:w-[60%] h-[150px] md:h-[200px] glass rounded-2xl flex flex-col justify-center items-center">
						<h1 className="headline-font text-4xl blue p-2">Sample Work</h1>
						<MdDoubleArrow className={`text-4xl sm:mx-4 text-[#c524a8] rotate-90 mt-4`} />
					</div>
				</div>
			</div>
			<div id="spacer" className="w-full h-[700px]"></div>
			<div className="pt-24 text-white z-20">
				<div className="w-full h-[200px]"></div>
				<div className="w-full h-[200px]"></div>
				<div id="line-break" className="w-full flex justify-center items-center mb-16">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="max-h-[34px]" />
					<h2 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[400px]">
						Website Feedback & Updates
					</h2>
					<Image
						src="/images/circuitSVGsmall.png"
						alt=""
						width={264}
						height={34}
						className="scale-x-[-1] max-h-[34px]"
					/>
				</div>
				<div className="fgrid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
					<div className="grid-item lg:px-8 mb-12">
						<p className="max-w-[800px]">
							Most of the work that I do is more website audit, testing, and feedback. As such I feel less
							confident posting websites that I did not fully create. Here is a small handful of ones that
							I have done testing and other work on. The following images are of the feedback documents
							that I gave to each company.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4">
					<div className="grid-item lg:px-8 mb-6">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Able Excavation</h3>
						<div className="flex gap-2">
							<Image
								src="/images/ableEx1.png"
								alt=""
								width={320}
								height={300}
								className="max-w-[320px] rounded-xl"
							></Image>
							<Image
								src="/images/ableEx2.png"
								alt=""
								width={320}
								height={300}
								className="max-w-[320px] rounded-xl"
							></Image>
						</div>
						<p className="my-4 max-w-[400px]">
							Able Excavation is a local Construction and dirt work company. They have a pretty basic
							website built with wordpress. I have managed all of the plugins and theme for their site and
							also given a lot of testing feedback on functionality and layout sizing.
						</p>
					</div>
					<div className="grid-item lg:px-8 mb-6">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Maven Construction</h3>
						<div className="flex gap-2">
							<Image
								src="/images/maven2.png"
								alt=""
								width={320}
								height={300}
								className="max-w-[320px] rounded-xl"
							></Image>
							<Image
								src="/images/maven3.png"
								alt=""
								width={320}
								height={300}
								className="max-w-[320px] rounded-xl"
							></Image>
						</div>
						<p className="my-4 max-w-[400px]">
							Maven Construction is another local construction management company. Their website is built
							using another type of CMS program. I did a full website audit and gave a bunch of feedback
							on general structure, common flows through pages, and some minor oddities.
						</p>
					</div>
				</div>
				<div className="w-full h-[200px]"></div>
				<div id="line-break" className="w-full flex justify-center items-center mb-16">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="max-h-[34px]" />
					<h2 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[400px]">
						WordPress Websites
					</h2>
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
					<h2 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[400px]">
						Custom Built Sites
					</h2>
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
								destination="https://staging.d18q2isx69j0by.amplifyapp.com/"
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
							<Button
								text="View"
								destination="https://d2ubvddn7k4zah.cloudfront.net/"
								target="_blank"
							></Button>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Examples
