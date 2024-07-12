import React from 'react'
import Link from 'next/link'

function Button() {
	return (
		<div id="button-wrapper" className="button-wrap-shadow">
			<div className="button-gradient button-clip button-shadow p-1">
				<div className="button-clip bg-slate-200 p-8 h-10 items-center flex hover:m-[1px]">
					<Link href="" className="bold text-2xl">
						Button example
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Button
