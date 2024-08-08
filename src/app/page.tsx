'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import Parallax from '@/components/Parallax'
import ExampleComponent from '@/components/TypingImport'
import Three from '@/components/Three'
import SideSectionRight from '@/components/SideSectionRight'
import SideSectionSmallLeft from '@/components/SideSectionSmallLeft'
import SideSectionLeft from '@/components/SideSectionLeft'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import SVGcircuit from '@/components/SVGcircuit'
import SVGcircuit2 from '@/components/SVGcircuit2'

export default function Home() {
	// useLayoutEffect(() => {
	// 	gsap.from('.test-svg', { duration: 5, drawSVG: 0 })
	// }, [])

	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-white overflow-hidden">
			<Three></Three>
			{/* <div className="h-[300px] overflow-hidden mt-24 p-24 border-2 border-red-600">
				<Parallax></Parallax>
			</div> */}
			<div className="h-[300px] serif-font p-4">
				<ExampleComponent></ExampleComponent>
			</div>
			<div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-24 mb-20 flex">
				<Button text="test"></Button>
			</div>
			<div className="w-full relative">
				<div className="h-[300px]"></div>
				<SideSectionRight text="Find out if we are a good fit for working with you." />
				<SideSectionLeft text="Hire someone with a deep passion for websites and quality." />
				<SideSectionSmallLeft text="call now" />
				<div id="circuit-svg-container" className="absolute z-10 top-0 flex flex-col w-full ml-4 mr-4 pt-0">
					<div className="relative left-0 justify-start">
						<SVGcircuit />
					</div>
					<div className="relative right-0 flex justify-end">
						<SVGcircuit2 />
					</div>
				</div>
			</div>
		</main>
	)
}
