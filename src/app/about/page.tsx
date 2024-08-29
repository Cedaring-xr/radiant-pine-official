import SideSectionLeft from '@/components/SideSectionLeft'
import SideSectionRight from '@/components/SideSectionRight'
import React from 'react'
import TextBox from '@/components/TextBox'
import GlassHero from '@/components/GlassHero'

function About() {
	return (
		<div id="about-mainContainer" className="bg-[#0b0d15]">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/6.png'})` }}
				className="bg-cover bg-  md:bg-contain bg-no-repeat bg-fixed"
			>
				<div className="h-[800px] flex justify-center items-center">
					<GlassHero text="About Radiant Pine LLC"></GlassHero>
				</div>
			</div>
			<div className="pt-24 text-white">
				<SideSectionLeft text="My background is in Web application development and quality assurance testing"></SideSectionLeft>
				<TextBox text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></TextBox>
				<SideSectionRight text="I live on the Western Slope of Colorado"></SideSectionRight>
				<TextBox text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></TextBox>
				<SideSectionLeft text="hello"></SideSectionLeft>
				<SideSectionRight text="hello"></SideSectionRight>
			</div>
		</div>
	)
}

export default About
