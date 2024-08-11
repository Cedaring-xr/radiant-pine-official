import SideSectionLeft from '@/components/SideSectionLeft'
import SideSectionRight from '@/components/SideSectionRight'
import TextBox from '@/components/TextBox'
import React from 'react'

function Examples() {
	return (
		<div id="examples-mainContainer" className="bg-[#0b0d15]">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/goldLights.png'})` }}
				className="w-screen bg-cover"
			>
				<div className="h-[800px] flex justify-center items-center">
					<div className="w-[30%] h-[200px] glass rounded-xl flex justify-center items-center">
						<h1 className="headline-font text-4xl blue ">Example Work</h1>
					</div>
				</div>
			</div>
			<div className="pt-24 text-white">
				<SideSectionLeft text="My background is in Web application development and quality assurance testing"></SideSectionLeft>
				<TextBox text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></TextBox>
				<SideSectionRight text="hello"></SideSectionRight>
				<SideSectionLeft text="hello"></SideSectionLeft>
				<SideSectionRight text="hello"></SideSectionRight>
			</div>
		</div>
	)
}

export default Examples
