import React from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'

type SectionProps = {
	text: string
}

const SideSectionRight: React.FC<SectionProps> = ({ text }) => {
	return (
		<div className="relative z-20">
			<div id="svg-accent-container" className="flex min-w-[400px] z-20 ml-4">
				<svg
					width="1174.2257"
					height="270.42206"
					viewBox="0 0 310.68054 71.549172"
					version="1.1"
					id="svg5"
					className="relative -right-4"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs id="defs2" />
					<g id="layer1" transform="translate(-2.7522095,-4.0270068)">
						<path
							id="rect31-5"
							style={{
								fill: '#3d3d3d',
								'fill-opacity': 0.962704,
								stroke: '#3d3d3d',
								'stroke-width': 0.492335,
								'stroke-miterlimit': 4,
								'stroke-dasharray': 'none',
								'stroke-opacity': 0.594406
							}}
							d="M 51.110739,68.939296 H 300.36575 c 3.31322,0 5.98057,-3.885715 5.98057,-8.71238 V 13.514724 c 0,-4.8266646 -2.66735,-8.716024 -5.98057,-8.7123805 L 15.856923,5.115211 C 13.448647,5.1543674 2.896153,7.8192049 8.7353364,16.643356 l 28.8404566,43.58356 c 4.119423,6.225257 8.097058,8.71238 13.534946,8.71238 z"
						/>
						<path
							id="rect31"
							style={{
								fill: '#3d3d3d',
								'fill-opacity': 0.962704,
								stroke: 'none',
								'stroke-width': 0.232681,
								'stroke-miterlimit': 4,
								'stroke-dasharray': 'none',
								'stroke-opacity': 1
							}}
							d="M 51.110739,68.939296 H 300.36575 c 3.31322,0 5.98057,-3.885715 5.98057,-8.71238 V 13.514724 c 0,-4.8266646 -2.66735,-8.7160197 -5.98057,-8.7123762 L 15.856923,5.1152101 C 13.448646,5.154341 2.896153,7.8192049 8.7353345,16.643356 L 37.57579,60.226916 c 4.119426,6.225257 8.097056,8.71238 13.534949,8.71238 z"
						/>
						<path
							id="rect31-0"
							style={{
								fill: 'none',
								'fill-opacity': 1,
								stroke: '#c524a8',
								'stroke-width': 1.43186,
								'stroke-miterlimit': 4,
								'stroke-dasharray': 'none',
								'stroke-opacity': 0.85
							}}
							d="M 43.722892,74.162567 306.88314,73.448794 c 2.99097,-0.0085 5.39886,-3.710911 5.39886,-8.320398 V 20.517811 c 0,-4.609478 -2.40791,-8.330661 -5.39886,-8.320389 L 11.89816,13.209995 C 9.7241328,13.247275 0.1980657,15.792339 5.4692794,24.219475 L 31.504467,65.842169 c 3.718734,5.945173 7.309479,8.333714 12.218425,8.320398 z"
						/>
						<path
							id="rect31-0-8"
							style={{
								fill: 'none',
								'fill-opacity': 1,
								stroke: '#c54bb6',
								'stroke-width': 1.76878,
								'stroke-miterlimit': 4,
								'stroke-dasharray': 'none',
								'stroke-opacity': 0.657343
							}}
							d="M 43.722892,74.162567 306.88314,73.448794 c 2.99097,-0.0085 5.47657,-3.711543 5.39886,-8.320398 V 37.902349 29.67027 20.517811 c 0,-4.609478 -2.40791,-8.330661 -5.39886,-8.320389 L 11.89816,13.209995 C 9.7241328,13.247275 0.19806397,15.792339 5.4692794,24.219475 L 31.504467,65.842169 c 3.718734,5.945173 7.309479,8.333714 12.218425,8.320398 z"
						/>
					</g>
				</svg>
			</div>
			<div className="absolute top-[40%] left-[30%]">
				<p className="text-white  md:text-xl serif-font">{text}</p>
				<button className="z-12">
					<a href="/about">
						<HiArrowCircleRight className="text-2xl fill-[#89f7fe] -mt-4 ml-48" />
					</a>
				</button>
			</div>
		</div>
	)
}

export default SideSectionRight
