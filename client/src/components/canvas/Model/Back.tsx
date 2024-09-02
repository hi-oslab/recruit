import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'

export const Back = (props) => {
  const { nodes } = useGLTF('/glb/3d.glb')

  const pinkMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xff8ffb, // 연한 핑크색
    metalness: 0.5, // 약간의 금속성
    roughness: 0.2, // 낮은 거칠기, 매끄러운 표면
    clearcoat: 1, // 최대한의 광택
    clearcoatRoughness: 0, // 광택의 거칠기는 최소화
    transmission: 0.5, // 약간의 투명도
    opacity: 0.8, // 불투명도 설정
    transparent: true, // 투명도 활성화
    ior: 1.4, // 굴절률
    reflectivity: 0.5, // 반사 정도
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mball004.geometry}
        material={pinkMaterial}
        position={[-1.28103375, -1.68179321, 0.12121442]}
        rotation={[0, 0, -0.07225402]}
        scale={[3.23965049, 3.23965049, 0.66116172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mball003.geometry}
        material={pinkMaterial}
        position={[1.08007944, -0.00608444, 0.14534239]}
        scale={[4.89993715, 4.89993715, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mball002.geometry}
        material={pinkMaterial}
        position={[0.99454951, -0.00608444, 0.14534239]}
        scale={[4.89993715, 4.89993715, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mball.geometry}
        material={pinkMaterial}
        position={[1.08007944, -0.00608444, 0.14534239]}
        scale={[4.89993715, 4.89993715, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mball001.geometry}
        material={pinkMaterial}
        position={[0.17296743, -2.90839005, 7.97920036]}
        rotation={[Math.PI, -9e-8, 3.06933865]}
        scale={[3.4705472, 3.4705472, 0.66116166]}
      />
    </group>
  )
}

useGLTF.preload('/glb/3d.glb')
