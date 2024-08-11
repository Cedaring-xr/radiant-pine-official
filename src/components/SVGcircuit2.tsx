import * as React from 'react'
import { SVGProps } from 'react'

const SVGcircuit2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={367.355}
		height={570.22}
		viewBox="0 0 203.029 256.704"
		{...props}
	>
		<defs>
			<radialGradient
				xlinkHref="#a"
				id="b"
				cx={330.546}
				cy={645.989}
				r={12.381}
				fx={330.546}
				fy={645.989}
				gradientTransform="matrix(-.26458 0 0 -.26458 277.492 425.236)"
				gradientUnits="userSpaceOnUse"
			/>
			<radialGradient
				xlinkHref="#a"
				id="c"
				cx={330.546}
				cy={645.989}
				r={12.381}
				fx={330.546}
				fy={645.989}
				gradientTransform="matrix(.26458 0 0 .26458 37.387 41.252)"
				gradientUnits="userSpaceOnUse"
			/>
			<linearGradient id="a">
				<stop
					offset={0}
					style={{
						stopColor: '#e5e5e5',
						stopOpacity: 1
					}}
				/>
				<stop
					offset={1}
					style={{
						stopColor: '#5c3a3a',
						stopOpacity: 1
					}}
				/>
			</linearGradient>
		</defs>
		<path
			d="m207.494 22.077-1.73 1.73-17-17 1.73-1.73zM66.146 22.077l1.73 1.73 17-17-1.73-1.73zM188.765 198.37l1.73 1.73 17-17-1.73-1.73z"
			style={{
				fill: '#89f7fe',
				stroke: '#000',
				strokeWidth: 0.264999
			}}
			transform="translate(-6.652 -2.89)"
		/>
		<path
			d="M191.211 252.045h-2.446v-53.674h2.446zM190.495 5.077v2.447H136.82V5.077zM136.82 5.077v2.447H83.145V5.077zM207.494 183.1h-2.446v-53.674h2.446zM207.494 129.426h-2.446V75.752h2.446zM207.494 75.752h-2.446V22.077h2.446z"
			style={{
				fill: '#89f7fe',
				stroke: '#000',
				strokeWidth: 0.25
			}}
			transform="translate(-6.652 -2.89)"
		/>
		<path
			d="M123.668 214.443h2.447v53.674h-2.447z"
			style={{
				fill: '#89f7fe',
				stroke: '#000',
				strokeWidth: 0.25
			}}
			transform="rotate(-90 -31.154 175.74)"
		/>
		<path
			d="M124.844 209.02a3.15 3.15 0 0 0-3.15 3.15 3.15 3.15 0 0 0 3.15 3.15 3.15 3.15 0 0 0 3.15-3.15 3.15 3.15 0 0 0-3.15-3.15zm-.016 1.32a1.783 1.783 0 0 1 1.783 1.783 1.783 1.783 0 0 1-1.783 1.782 1.783 1.783 0 0 1-1.783-1.782 1.783 1.783 0 0 1 1.783-1.783z"
			style={{
				fill: 'url(#c)',
				fillOpacity: 1,
				stroke: '#000',
				strokeWidth: 0.252,
				strokeMiterlimit: 4,
				strokeDasharray: 'none'
			}}
			transform="rotate(-90 -31.154 175.74)"
		/>
	</svg>
)
export default SVGcircuit2
