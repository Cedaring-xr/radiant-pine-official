'use client'
import React from 'react'
import { useLayoutEffect } from 'react'
import SideBarRight from '@/components/SideBarRight'
import SideBarLeft from '@/components/SideBarLeft'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import CenteredHighlight from '@/components/CenteredHighlight'
import SVGcircuit2 from '@/components/SVGcircuit2'
import { MdDoubleArrow } from 'react-icons/md'

function About() {
	gsap.registerPlugin(ScrollTrigger)
	ScrollTrigger.config({ ignoreMobileResize: true })
	useLayoutEffect(() => {
		gsap.to('.glass', {
			y: 1500,
			ease: 'power1',
			scrollTrigger: {
				trigger: '#about-mainContainer',
				scrub: true,
				start: 'top top'
			}
		})
	}, [])
	return (
		<main id="about-mainContainer" className="bg-[#0b0d15] overflow-hidden">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/6a.webp'})` }}
				className="bg-cover z-20 absolute h-[700px] w-full"
			>
				<div id="main-box" className="h-[700px] flex justify-center items-center overflow-hidden">
					<div className="w-[90%] md:w-[60%] h-[120px] md:h-[200px] glass rounded-3xl flex flex-col justify-center items-center">
						<h1 className="headline-font text-4xl blue p-2">About Myself</h1>
						<MdDoubleArrow className={`text-4xl sm:mx-4 text-[#c524a8] rotate-90 mt-4`} />
					</div>
				</div>
			</div>
			<div id="spacer" className="w-full h-[700px]"></div>
			<div className="pt-12 text-white">
				<div className="max-w-[1100px] mx-auto">
					<CenteredHighlight text="Hello! My name is Matt. Radiant Pine is my personal business." />
				</div>
				<div className="w-full relative h-[3000px] overflow-hidden">
					<div className="h-[100px]"></div>
					<SideBarLeft
						text="I have a professional background as a Quality Assurance Engineer working for software companies in Colorado."
						additionalText=" I live in Montrose, CO and primarily work with local based businesses."
						thirdText=" I have spent years developing skills related to web development."
					></SideBarLeft>
					<div id="image-trio-container" className="relative m-6 w-full min-w-[350px] max-w-[900px]">
						{/* <div className="border-2 border-cyan-400 rounded-3xl absolute m-6 w-[58%] h-[87%] top-0 z-20"></div> */}
						<div className="mr-8 relative z-40">
							<Image
								src="/images/imageTrio.webp"
								alt="collection of 3 images of myself"
								width={600}
								height={500}
							></Image>
						</div>
					</div>
					<SideBarRight
						text="I have a deep passion for quality, and try to extend that as much as possible into the work that I do."
						additionalText=" Working as a QA Engineer helped me to refine a keen eye for details."
						thirdText=" I understand the more technical and intricate aspects in building websites."
					></SideBarRight>
					<div className="h-[200px] md:h-[400px]"></div>
					<SideBarLeft
						text="In my free time I enjoy outdoor activities such as rock climbing, mtn biking, and spending time with my dog Raksha."
						additionalText=" Growing up in Colorado has been amazing for spending time in nature."
						thirdText=" I try to find a good balance between computer work and outdoors."
					></SideBarLeft>
					<div className="flex w-[95%] justify-center md:justify-start relative z-20">
						<Image
							src="/images/selfWithDog.webp"
							alt="myself with my dog"
							width={300}
							height={600}
							className="rounded-3xl sm:m-4"
						></Image>
					</div>
					<div
						id="circuit-svg-container"
						className="absolute z-10 top-0 flex flex-col w-full pt-0 pb-12 overflow-hidden"
					>
						<div className="relative left-0 flex justify-end mt-6 md:mt-2">
							<div className="z-0 w-screen max-w-[700px] min-w-[300px] mr-2 md:mr-[2%] lg:mr-[5%] transform -scale-y-100 opacity-80">
								<SVGcircuit2 />
							</div>
						</div>
						<div className="mr-12 mt-16 flex justify-start">
							<div className="z-0  w-screen max-w-[700px] min-w-[300px] md:ml-[2%] lg:ml-[5%] rotate-180 transform -scale-y-100 opacity-80">
								<SVGcircuit2 />
							</div>
						</div>
						<div className="h-[300px] md:h-[500px]"></div>
						<div className="h-[800px] w-[140vw] right-[4%] fixed top-[60vh] bg-[#0b0d15] rotate-[15deg] background-shadow"></div>
						<div className="relative left-0 flex justify-end mt-6 md:mt-2">
							<div className="z-0 w-screen max-w-[700px] min-w-[300px] mr-2 md:mr-[2%] lg:mr-[5%] transform -scale-y-100 opacity-80">
								<SVGcircuit2 />
							</div>
						</div>
						<div className="mr-12 mt-16 flex justify-start">
							<div className="z-0  w-screen max-w-[700px] min-w-[300px] md:ml-[2%] lg:ml-[5%] rotate-180 transform -scale-y-100 opacity-80">
								<SVGcircuit2 />
							</div>
						</div>
						<div className="h-[800px] w-[140vw] right-[4%] fixed top-[60vh] bg-[#0b0d15] rotate-[15deg] background-shadow"></div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default About
