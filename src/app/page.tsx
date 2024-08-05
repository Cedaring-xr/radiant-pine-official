import Button from '@/components/Button'
import Image from 'next/image'
import Parallax from '@/components/Parallax'
import ExampleComponent from '@/components/TypingImport'
import Three from '@/components/Three'
import SideSectionRight from '@/components/SideSectionRight'
import SideSectionSmallLeft from '@/components/SideSectionSmallLeft'
import SideSectionLeft from '@/components/SideSectionLeft'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between .near-white">
			<Three></Three>
			{/* <div className="h-[300px] overflow-hidden mt-24 p-24 border-2 border-red-600">
				<Parallax></Parallax>
			</div> */}
			<div className="h-[300px]">
				<ExampleComponent></ExampleComponent>
			</div>
			<div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-24 mb-20 flex">
				<Button></Button>
			</div>
			<div className="h-[200px]"></div>
			<div className="w-full relative">
				<SideSectionRight />
				<SideSectionLeft />
				<SideSectionSmallLeft />
				<div
					id="circuit-svg-container"
					className="absolute z-10 top-0 flex flex-col w-full ml-4 mr-4 pt-0 border-2 border-red-500"
				>
					<svg
						width="70mm"
						height="97mm"
						viewBox="0 0 210 197"
						version="1.1"
						id="svg5"
						className="z-10"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs id="defs2" />
						<g id="layer1">
							<path
								style={{
									fill: '#00f5ae',
									'fill-opacity': 1,
									stroke: '#000000',
									'stroke-width': 0.264583,
									'stroke-linecap': 'butt',
									'stroke-linejoin': 'miter',
									'stroke-opacity': 1
								}}
								d="M 6.6327163,23.945848 V 253.75451 L 36.833076,283.95488 H 100.9865 l 14.74278,-14.7428 h 79.2536 v -5.64985 H 114.92512 L 99.735593,278.75177 H 38.599275 L 12.083076,252.23556 V 24.303249 Z"
								id="path226"
							/>
							<circle
								style={{
									fill: '#00f5ae',
									'fill-opacity': 1,
									stroke: '#000000',
									'stroke-width': 0.265,
									'stroke-miterlimit': 4,
									'stroke-dasharray': 'none',
									'stroke-opacity': 1
								}}
								id="path425-7"
								cx="9.4025774"
								cy="18.227436"
								r="7.5054154"
							/>
							<circle
								style={{
									fill: '#fff',
									'fill-opacity': 1,
									stroke: '#000000',
									'stroke-width': 0.265,
									'stroke-miterlimit': 4,
									'stroke-dasharray': 'none',
									'stroke-opacity': 1
								}}
								id="path425-0-2"
								cx="9.3062963"
								cy="18.22744"
								r="5.0470109"
							/>
							<g id="g2605" transform="translate(163.9937,211.93244)">
								<circle
									style={{
										fill: '#00f5ae',
										'fill-opacity': 1,
										stroke: '#000000',
										'stroke-width': 0.265,
										'stroke-miterlimit': 4,
										'stroke-dasharray': 'none',
										'stroke-opacity': 1
									}}
									id="path425-7-9"
									cx="37.169674"
									cy="54.324909"
									r="7.5054154"
								/>
								<circle
									style={{
										fill: '#fff',
										'fill-opacity': 1,
										stroke: '#000000',
										'stroke-width': 0.265,
										'stroke-miterlimit': 4,
										'stroke-dasharray': 'none',
										'stroke-opacity': 1
									}}
									id="path425-0-2-9"
									cx="37.073395"
									cy="54.324913"
									r="5.0470109"
								/>
							</g>
						</g>
					</svg>
					<svg
						width="70mm"
						height="197mm"
						viewBox="0 0 210 197"
						version="1.1"
						id="svg5"
						className="z-10"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs id="defs2" />
						<g id="layer1">
							<path
								style={{
									fill: '#00f5ae',
									'fill-opacity': 1,
									stroke: '#000000',
									'stroke-width': 0.264583,
									'stroke-linecap': 'butt',
									'stroke-linejoin': 'miter',
									'stroke-opacity': 1
								}}
								d="M 203.93324,270.73084 V 40.922182 l -30.20036,-30.20037 h -64.15343 l -14.742779,14.7428 h -79.2536 v 5.64985 h 80.05776 l 15.189529,-15.18954 h 61.13632 l 26.5162,26.51621 V 270.37344 Z"
								id="path226"
							/>
							<circle
								style={{
									fill: '#00f5ae',
									'fill-opacity': 1,
									stroke: '#000000',
									'stroke-width': 0.265,
									'stroke-miterlimit': 4,
									'stroke-dasharray': 'none',
									'stroke-opacity': 1
								}}
								id="path425-7"
								cx="-201.16338"
								cy="-276.44925"
								r="7.5054154"
								transform="scale(-1)"
							/>
							<circle
								style={{
									fill: '#fff',
									'fill-opacity': 1,
									stroke: '#000000',
									'stroke-width': 0.265,
									'stroke-miterlimit': 4,
									'stroke-dasharray': 'none',
									'stroke-opacity': 1
								}}
								id="path425-0-2"
								cx="-201.25966"
								cy="-276.44925"
								r="5.0470109"
								transform="scale(-1)"
							/>
							<g id="g2605" transform="rotate(180,23.286126,41.372126)">
								<circle
									style={{
										fill: '#00f5ae',
										'fill-opacity': 1,
										stroke: '#000000',
										'stroke-width': 0.265,
										'stroke-miterlimit': 4,
										'stroke-dasharray': 'none',
										'stroke-opacity': 1
									}}
									id="path425-7-9"
									cx="37.169674"
									cy="54.324909"
									r="7.5054154"
								/>
								<circle
									style={{
										fill: '#fff',
										'fill-opacity': 1,
										stroke: '#000000',
										'stroke-width': 0.265,
										'stroke-miterlimit': 4,
										'stroke-dasharray': 'none',
										'stroke-opacity': 1
									}}
									id="path425-0-2-9"
									cx="37.073395"
									cy="54.324913"
									r="5.0470109"
								/>
							</g>
						</g>
					</svg>
				</div>
			</div>
		</main>
	)
}
