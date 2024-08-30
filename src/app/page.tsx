'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import Parallax from '@/components/Parallax'
import TypingText from '@/components/TypingImport'
import Three from '@/components/Three'
import SideSectionRight from '@/components/SideSectionRight'
import SideSectionSmallLeft from '@/components/SideSectionSmallLeft'
import SideSectionLeft from '@/components/SideSectionLeft'
import SVGcircuit from '@/components/SVGcircuit'
import SVGcircuit2 from '@/components/SVGcircuit2'
import ColumnSections from '@/components/ColumnSections'
import CenteredHighlight from '@/components/CenteredHighlight'
import SideBarRight from '@/components/SideBarRight'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#0b0d15]">
			<div
				id="image-container"
				style={{ backgroundImage: `url(${'/images/mtnBackground.png'})` }}
				className="w-full absolute h-[897px] bg-cover z-20"
			></div>
			<div className="z-20 flex flex-col md:flex-row mb-24">
				<div className="w-screen max-w-[50%]">
					<Three></Three>
				</div>
				<div className=" serif-font p-4 md:w-[50%] max-w-[700px] flex items-center">
					<TypingText></TypingText>
				</div>
			</div>
			<CenteredHighlight text="Independent Web development consultant" />
			<div className="w-full relative">
				<div className="h-[200px]"></div>
				<SideBarRight text="I work on websites that were not professionally developed and managed by a web design studio." />
				<div className="w-full h-[300px]"></div>
				<SideSectionLeft text="I have 10+ years developing web applications professionally. I worked as a Quality Assurance Engineer testing and doing bug investigation on web applications." />
				<SideSectionSmallLeft text="Have an idea in your head but need help on executing it" />
				<SideSectionRight text="Looking to setup a website, but not sure how to do it properly? I can guide you through the process and speed up your launch time." />
				<div className="w-full h-[400px]"></div>
				<div
					id="circuit-svg-container"
					className="absolute z-10 top-0 flex flex-col w-full pt-0 pb-12 overflow-hidden"
				>
					<div className="mr-12 mb-8 flex justify-start">
						<div className="z-0  w-screen max-w-[700px] min-w-[300px] md:ml-[2%] lg:ml-[5%] rotate-180">
							<SVGcircuit2 />
						</div>
					</div>
					<div className="relative left-0 flex justify-end mt-[30vh] md:mt-2">
						<div className="z-0 w-screen max-w-[700px] min-w-[300px] mr-2 md:mr-[2%] lg:mr-[5%]">
							<SVGcircuit2 />
						</div>
					</div>
					<div className="h-[1000px] w-[120vw] left-[10%] fixed top-[60vh] bg-[#0b0d15] -rotate-[15deg] background-shadow"></div>
				</div>
			</div>
			<div className="z-20">
				<ColumnSections></ColumnSections>
			</div>
		</main>
	)
}

// className="z-0 w-screen max-w-[600px] min-w-[300px] relative left-0 ml-2 md:ml-[10%] lg:ml-[15%]"
