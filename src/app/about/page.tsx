import SideSectionLeft from '@/components/SideSectionLeft'
import SideSectionRight from '@/components/SideSectionRight'
import React from 'react'
import TextBox from '@/components/TextBox'
import GlassHero from '@/components/GlassHero'
import SideBarRight from '@/components/SideBarRight'
import SideBarLeft from '@/components/SideBarLeft'

function About() {
	return (
		<div id="about-mainContainer" className="bg-[#0b0d15]">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/6.png'})` }}
				className="bg-cover bg-no-repeat bg-fixed"
			>
				<div className="h-[800px] flex justify-center items-center">
					<GlassHero text="About US"></GlassHero>
				</div>
			</div>
			<div className="pt-24 text-white h-[1600px] overflow-hidden">
				<SideBarRight text="I have a professional background in Quality Assurance Engineering."></SideBarRight>
				<SideBarLeft text="I love building websites and solving UI/UX issues"></SideBarLeft>
			</div>
		</div>
	)
}

export default About
