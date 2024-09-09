import SideBarLeft from '@/components/SideBarLeft'

function Website() {
	return (
		<div id="about-mainContainer" className="h-[1200px] bg-[#0b0d15]">
			<div className="h-[800px]"></div>
			<div>
				<SideBarLeft text="This website is built using Next.js"></SideBarLeft>
			</div>
		</div>
	)
}

export default Website
