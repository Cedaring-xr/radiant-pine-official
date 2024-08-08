import SideSectionLeft from '@/components/SideSectionLeft'
import SideSectionRight from '@/components/SideSectionRight'
import React from 'react'
import TextBox from '@/components/TextBox'

function About() {
	return (
		<div id="about-mainContainer">
			{/* import hero main section */}
			{/* about my development history

		about my hobbies and dog
			
		about the location that I work in */}
			<div className="h-[800px]"></div>
			<div>
				<SideSectionLeft text="My background is in Web application development and quality assurance testing"></SideSectionLeft>
				<TextBox text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></TextBox>
				<SideSectionRight text="hello"></SideSectionRight>
				<SideSectionLeft text="hello"></SideSectionLeft>
				<SideSectionRight text="hello"></SideSectionRight>
			</div>
		</div>
	)
}

export default About
