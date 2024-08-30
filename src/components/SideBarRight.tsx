import * as React from 'react'
import { SVGProps } from 'react'

type SideBarProps = {
	text: string
}

const SideBarRight: React.FC<SideBarProps> = ({ text }) => (
	<div className="relative z-20 flex justify-end">
		<div id="svg-accent-container" className="flex min-w-[400px] max-w-[1000px] z-20 -mr-6  overflow-hidden">
			<svg xmlns="http://www.w3.org/2000/svg" width={1213.424} height={474.845} viewBox="0 0 321.052 125.636">
				<path
					d="M53.834 116.36h271.311c3.606 0 6.51-6.908 6.51-15.489v-83.04c0-8.58-2.904-15.495-6.51-15.489L15.461 2.9c-2.622.07-14.108 4.807-7.752 20.493l31.393 77.48c4.483 11.066 8.813 15.487 14.732 15.487z"
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
					d="M53.834 116.36h271.311c3.606 0 6.51-6.908 6.51-15.489v-83.04c0-8.58-2.904-15.495-6.51-15.489L15.461 2.9c-2.622.07-14.108 4.807-7.752 20.493l31.393 77.48c4.483 11.066 8.813 15.487 14.732 15.487z"
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
					d="m48.522 123.168 304.414-1.237c3.46-.014 6.336-6.43 6.246-14.413V30.236c0-7.985-2.786-14.432-6.246-14.414L11.71 17.576c-2.515.065-13.535 4.474-7.437 19.073l30.117 72.105c4.301 10.3 8.455 14.437 14.133 14.414z"
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
		<div className="absolute top-[40%] md:top-[33%] right-0 z-30 flex justify-end max-w-[75%]">
			<p className="text-white  md:text-xl serif-font max-w-[800px] mr-4">{text}</p>
			{/* <button className="z-30">
					<a href="/about">
						<HiArrowCircleRight className="text-2xl fill-cyan-400 m-6" />
					</a>
				</button> */}
		</div>
	</div>
)
export default SideBarRight
