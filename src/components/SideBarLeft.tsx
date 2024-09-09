import * as React from 'react'
import { SVGProps } from 'react'

type SideBarProps = {
	text: string
	additionalText?: string
	thirdText?: string
}

const SideBarLeft: React.FC<SideBarProps> = ({ text, additionalText, thirdText }) => (
	<div className="relative z-20 flex justify-start">
		<div id="svg-accent-container" className="flex min-w-[300px] max-w-[750px] z-20 -ml-6  overflow-hidden">
			<svg xmlns="http://www.w3.org/2000/svg" width={1216.813} height={275.412} viewBox="0 0 321.948 125.786">
				<path
					d="M267.968 116.36H-3.343c-3.607 0-6.51-6.908-6.51-15.489v-83.04c0-8.58 2.903-15.495 6.51-15.489L306.34 2.9c2.621.07 14.108 4.807 7.752 20.493l-31.393 77.48c-4.484 11.066-8.813 15.487-14.732 15.487z"
					style={{
						fill: '#3d3d3d',
						fillOpacity: 0.962704,
						stroke: '#3d3d3d',
						strokeWidth: 0.684861,
						strokeMiterlimit: 4,
						strokeDasharray: 'none',
						strokeOpacity: 0.594406
					}}
				/>
				<path
					d="M267.968 116.36H-3.343c-3.607 0-6.51-6.908-6.51-15.489v-83.04c0-8.58 2.903-15.495 6.51-15.489L306.34 2.9c2.621.07 14.108 4.807 7.752 20.493l-31.393 77.48c-4.484 11.066-8.813 15.487-14.732 15.487z"
					style={{
						fill: '#3d3d3d',
						fillOpacity: 0.962704,
						stroke: 'none',
						strokeWidth: 0.323671,
						strokeMiterlimit: 4,
						strokeDasharray: 'none',
						strokeOpacity: 1
					}}
				/>
				<path
					d="m273.28 123.168-304.415-1.237c-3.46-.014-6.335-6.43-6.245-14.413V30.236c0-7.985 2.785-14.432 6.245-14.414l341.228 1.754c2.515.065 13.534 4.474 7.437 19.073l-30.117 72.105c-4.302 10.3-8.455 14.437-14.134 14.414z"
					style={{
						fill: 'none',
						fillOpacity: 1,
						stroke: '#cd30b9',
						strokeWidth: 1.236,
						strokeMiterlimit: 4,
						strokeDasharray: 'none',
						strokeOpacity: 1
					}}
				/>
			</svg>
		</div>
		<div className="absolute top-[36%] sm:top-[33%] md:top-[25%] left-0 z-30 flex justify-start max-w-[85%]">
			<p className="text-white  md:text-xl serif-font max-w-[600px] ml-4">
				{text}
				<span className="invisible sm:visible">{additionalText}</span>
				<span className="invisible md:visible">{thirdText}</span>
			</p>
		</div>
	</div>
)
export default SideBarLeft
