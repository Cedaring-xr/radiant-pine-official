import Button from '@/components/Button'
import Image from 'next/image'
import Parallax from '@/components/Parallax'
import ExampleComponent from '@/components/TypingImport'
import Three from '@/components/Three'
import SideSectionLarge from '@/components/SideSectionLarge'
import SideSectionSmall from '@/components/SideSectionSmall'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Three></Three>
			{/* <div className="h-[300px] overflow-hidden mt-24 p-24 border-2 border-red-600">
				<Parallax></Parallax>
			</div> */}
			<div className="h-[300px]">
				<ExampleComponent></ExampleComponent>
			</div>
			<div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-24 mb-20 flex">
				<Button></Button>
				<Button></Button>
				<Button></Button>
			</div>
			<div className="w-full">
				<SideSectionLarge />
				<div className="h-[500px]"></div>
				<SideSectionSmall />
			</div>
		</main>
	)
}
