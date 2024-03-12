/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube028: THREE.Mesh
    Cube028_1: THREE.Mesh
    Cube028_2: THREE.Mesh
    Cube028_3: THREE.Mesh
    Cube028_4: THREE.Mesh
    Cube028_5: THREE.Mesh
    Cube028_6: THREE.Mesh
  }
  materials: {
    ['Crystal 10']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    ['Car Paint 9.001']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Crystal 3']: THREE.MeshStandardMaterial
    ['Car Paint 9.002']: THREE.MeshStandardMaterial
  }
}

export function Chest(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/chest.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.026, 0.018]} rotation={[-0.227, 0, 0]} scale={1.004}>
        <mesh castShadow receiveShadow geometry={nodes.Cube028.geometry} material={materials['Crystal 10']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_1.geometry} material={materials['Material.006']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_2.geometry} material={materials['Material.016']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_3.geometry} material={materials['Car Paint 9.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_4.geometry} material={materials['Material.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_5.geometry} material={materials['Crystal 3']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_6.geometry} material={materials['Car Paint 9.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/chest.glb')
