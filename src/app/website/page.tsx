import SideBarLeft from '@/components/SideBarLeft'
import SVGcircuit from '@/components/SVGcircuit'

function Website() {
	return (
		<div id="about-mainContainer">
			<div className="h-[600px] bg-stone-800"></div>
			<div className="h-[1600px] bg-[#0b0d15] relative">
				<div className="relative left-0  mr-12 mb-8 bg-[#0b0d15">
					<SVGcircuit />
				</div>
				<div className="bg-[#0b0d15] h-[600px] fixed top-[80vh] z-50 w-full background-shadow border-2 border-red-600 -rotate-12"></div>
			</div>
			<div>
				<SideBarLeft text="This website is built using Next.js"></SideBarLeft>
			</div>
		</div>
	)
}

export default Website

//className="z-0 w-screen max-w-[800px] min-w-[300px] relative left-0 ml-2 md:ml-[10%] lg:ml-[15%]"

//className="z-0 w-screen max-w-[800px] min-w-[300px] relative left-0 mr-2 md:mr-[10%] lg:mr-[15%]"
