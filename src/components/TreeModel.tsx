// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'

// export function Model(props: any) {
// 	const { nodes, materials } = useGLTF('models/pine_tree.glb')

// 	return (
// 		<group {...props} dispose={null}>
// 			<mesh
// 				castShadow
// 				receiveShadow
// 				geometry={nodes.Leaves001_Leavs_0.geometry}
// 				material={materials.Leavs}
// 				rotation={[-Math.PI / 2, 0, 0]}
// 				scale={1}
// 			/>
// 			<mesh
// 				castShadow
// 				receiveShadow
// 				geometry={nodes.Trank001_Trank_0.geometry}
// 				material={materials.Trank}
// 				rotation={[-Math.PI / 2, 0, 0]}
// 				scale={1}
// 			/>
// 		</group>
// 	)
// }

// useGLTF.preload('models/pine_tree.glb')
