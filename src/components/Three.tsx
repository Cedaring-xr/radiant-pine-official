'use client'

import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Model } from './TreeModel'

function Three() {
	return (
		<div className="h-[800px] w-full mt-[300px]">
			<Canvas>
				<Environment preset="forest" />
				{/* <OrbitControls /> */}
				<Model />
			</Canvas>
		</div>
	)
}

export default Three
