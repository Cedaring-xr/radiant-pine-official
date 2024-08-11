'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import Parallax from '@/components/Parallax'
import TypingText from '@/components/TypingImport'
import Three from '@/components/Three'
import SideSectionRight from '@/components/SideSectionRight'
import SideSectionSmallLeft from '@/components/SideSectionSmallLeft'
import SideSectionLeft from '@/components/SideSectionLeft'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import SVGcircuit from '@/components/SVGcircuit'
import SVGcircuit2 from '@/components/SVGcircuit2'
import ColumnSections from '@/components/ColumnSections'

export default function Home() {
	// useLayoutEffect(() => {
	// 	gsap.from('.test-svg', { duration: 5, drawSVG: 0 })
	// }, [])

	return (
		<main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#0b0d15]">
			<div
				id="image-container"
				style={{ backgroundImage: `url(${'/images/mtnBackground.png'})` }}
				className="w-screen absolute h-[897px] bg-cover"
			></div>
			<div className="z-20 flex flex-col md:flex-row">
				<div className="w-screen md:w-[50%] border-2 border-red-500">
					<Three></Three>
				</div>
				<div className=" serif-font p-4 w-full max-w-[700px] flex items-center border-2 border-green-500">
					<TypingText></TypingText>
				</div>
			</div>

			<div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-24 mb-20 flex">
				<Button text="test" destination="/services"></Button>
			</div>
			{/* <div className="h-[300px] overflow-hidden mt-24 p-24 border-2 border-red-600">
				<Parallax></Parallax>
			</div> */}
			<div className="w-full relative">
				<div className="h-[300px]"></div>
				<SideSectionRight text="Find out if we are a good fit for working with you." />
				<SideSectionLeft text="Hire someone with a deep passion for websites and quality." />
				<SideSectionSmallLeft text="call now" />
				<div id="circuit-svg-container" className="absolute z-10 top-0 flex flex-col w-full ml-4 mr-4 pt-0">
					<div className="relative left-0 justify-start w-[50%]">
						<SVGcircuit />
					</div>
					<div className="relative right-0 flex justify-end">
						<SVGcircuit2 />
					</div>
				</div>
			</div>
			<ColumnSections></ColumnSections>
		</main>
	)
}
