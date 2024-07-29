import Button from '@/components/Button'
import TypingText from '@/components/TypingText'
import Image from 'next/image'
import Parallax from '@/components/Parallax'
import ExampleComponent from '@/components/TypingImport'
import Three from '@/components/Three'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-24">
				<Button></Button>
			</div>
			<div id="main-title">
				<h1>Website Consultant</h1>
			</div>
			<Three></Three>
			<TypingText></TypingText>
			{/* <div className="h-[300px] overflow-hidden mt-24 p-24 border-2 border-red-600">
				<Parallax></Parallax>
			</div> */}
			<div className="h-{500px] bg-slate-300">
				<ExampleComponent></ExampleComponent>
			</div>
		</main>
	)
}
