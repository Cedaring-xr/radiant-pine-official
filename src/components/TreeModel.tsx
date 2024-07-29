import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
	const { nodes, materials } = useGLTF('models/pine_tree.glb')
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Leaves001_Leavs_0.geometry}
				material={materials.Leavs}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Trank001_Trank_0.geometry}
				material={materials.Trank}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
		</group>
	)
}

useGLTF.preload('/pine_tree.glb')
