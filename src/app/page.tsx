'use client'

import TypingText from '@/components/TypingImport'
import SVGcircuit2 from '@/components/SVGcircuit2'
import ColumnSections from '@/components/ColumnSections'
import CenteredHighlight from '@/components/CenteredHighlight'
import SideBarRight from '@/components/SideBarRight'
import SideBarLeft from '@/components/SideBarLeft'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#0b0d15]">
			<div
				id="image-container"
				style={{ backgroundImage: `url(${'/images/mtnBackground.webp'})` }}
				className="w-full absolute h-[897px] bg-cover z-20"
			></div>
			<div className="z-20 flex flex-col md:flex-row mb-24 pt-64">
				<div className=" serif-font p-4 mt-24 lg:-mt-24 lg:mr-[500px] md:w-[600px] max-w-[700px] flex items-center">
					<TypingText></TypingText>
				</div>
			</div>
			<div className="lg:h-[300px]"></div>
			<CenteredHighlight text="Freelance Web Developer and Consultant" />
			<div className="w-full relative h-[2200px]">
				<div className="sm:mt-24 lg:mt-64">
					<SideBarRight
						text="I have 10+ years of experience developing web applications professionally as a coder and test engineer."
						additionalText=" I have worked for companies of all different sizes and know how balance priorities and features."
						thirdText=" I am bringing my skillset and knowledge to freelance development."
					/>
				</div>
				<SideBarLeft
					text="This business was born out of a love for websites and a desire for building quality products."
					additionalText=" I hope help out members of the local community and small businesses."
					thirdText=" I provide an in-depth experience to ensure that you get the "
				/>
				<SideBarRight
					text="I work on all sort of different website and CMS platforms such as WordPress, Squarespace, Wix, Webflow and others."
					additionalText=" If you have built a website for your business but want additional help let me know."
					thirdText=" If you want a website re-design or migration to a different platform, then I can do that as well."
				/>
				<div className="mt-12 relative z-20 sm:mx-[4%] md:mx-[12%] lg:mx-[25%]">
					<div id="pink-box-container" className="relative flex justify-start">
						<div className="border-2 border-[#c524a8] rounded-3xl h-[480px] sm:h-[420px] md:h-[420px] lg:h-[360px] w-[95%] max-w-[850px] absolute -top-2 left-5"></div>
						<div className="border-2 border-[#c524a8] rounded-3xl h-[480px] sm:h-[420px] md:h-[420px] lg:h-[360px] w-[95%] max-w-[850px] absolute top-0 left-3"></div>
						<div className="border-2 border-[#c524a8] rounded-3xl h-[480px] sm:h-[420px] md:h-[420px] lg:h-[360px] w-[95%] max-w-[850px] absolute top-2 left-1"></div>
						<h2 className="serif-font text-white md:text-lg w-[85%] max-w-[800px] mt-8 ml-10">
							Websites are a living document that need to be updated and changed periodically. It becomes
							easy to put it off or delay making updates but this can become a serious problem if
							something breaks and you do not know how to fix it. While website builder platforms make
							things easier, 90% of users do not know how to get the most out of the platform they are
							using. Having a deep background in web development allows me to leverage the full potential
							of website builder platforms and produce a higher quality end result.
						</h2>
					</div>
				</div>
				<div
					id="circuit-svg-container"
					className="absolute z-10 top-0 flex flex-col w-full pt-0 pb-12 overflow-hidden"
				>
					<div className="mr-12 mb-8 flex justify-start">
						<div className="z-0  w-screen max-w-[700px] min-w-[300px] md:ml-[2%] lg:ml-[5%] rotate-180">
							<SVGcircuit2 />
						</div>
					</div>
					<div className="relative left-0 flex justify-end mt-6 md:mt-2">
						<div className="z-0 w-screen max-w-[700px] min-w-[300px] mr-2 md:mr-[2%] lg:mr-[5%]">
							<SVGcircuit2 />
						</div>
					</div>
					<div className="h-[800px] w-[120vw] left-[5%] fixed top-[60vh] bg-[#0b0d15] -rotate-[15deg] background-shadow"></div>
				</div>
				<div className="relative">
					<div
						id="circuit-svg-container"
						className="absolute z-10 top-0 flex flex-col w-full pt-0 pb-12 overflow-hidden"
					>
						<div className="mr-12 mb-8 flex justify-start">
							<div className="z-0  w-screen max-w-[700px] min-w-[300px] md:ml-[2%] lg:ml-[5%] rotate-180 max-h-[920px] overflow-hidden">
								<SVGcircuit2 />
							</div>
						</div>
						<div className="relative left-0 flex justify-end mt-6 md:mt-2">
							<div className="z-0 w-screen max-w-[700px] min-w-[300px] mr-2 md:mr-[2%] lg:mr-[5%]">
								<SVGcircuit2 />
							</div>
						</div>
						<div className="h-[800px] w-[120vw] left-[5%] fixed top-[60vh] bg-[#0b0d15] -rotate-[15deg] background-shadow"></div>
					</div>
				</div>
			</div>

			<div className="z-20">
				<ColumnSections></ColumnSections>
			</div>
		</main>
	)
}
