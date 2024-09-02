import * as THREE from 'three'
import Scene, { Common } from '@/components/canvas/Scene'
import { OrbitControls, Box, Sphere, Stage, Float, Environment, Center } from '@react-three/drei'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Gameboy } from '@/components/canvas/Model/Gameboy'
import { Back } from '@/components/canvas/Model/Back'
import { useSpring, a } from '@react-spring/three'

export default function Page(props) {
  const router = useRouter()

  const gameboyRef = useRef(
    //@ts-ignore
    new THREE.Object3D(),
  )

  const [{ rotation }, setRotation] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 170, friction: 20 },
  }))

  const handleClick = () => {
    setRotation.start({
      rotation: [0, rotation.get()[1] + Math.PI * 2, 0],
    })
  }

  return (
    <>
      <button
        onClick={() => {
          window.open('https://hioslab.com')
        }}
        className='fixed top-0 right-0 z-20 bg-main text-white text-center text-md w-fit'>
        <span className='pl-2 text-md md:text-lg pr-1.5 flex flex-row justify-center items-center gap-1 md:hover:bg-white md:hover:text-main active:bg-white active:text-main'>
          hisoslab.com
        </span>
      </button>
      <div className='fixed z-0 top-0 left-0 w-full h-screen flex flex-col justify-center items-center'>
        <Image src='/img/background.jpeg' width={2380} height={3368} alt='background' className='h-full' />
      </div>
      <div className='fixed z-20 top-0 left-0 w-screen h-full flex flex-col justify-start items-center'>
        <Image
          src='/img/leftSide.png'
          width={2380}
          height={3368}
          alt='background'
          className='w-full transform origin-top-left scale-125'
        />
      </div>
      <div className='fixed z-20 bottom-0 right-0 w-screen h-full flex flex-col justify-end items-center'>
        <Image
          src='/img/rightSide.png'
          width={2380}
          height={3368}
          alt='background'
          className='w-full transform origin-bottom-right scale-125'
        />
      </div>
      <div className='fixed z-20 top-[2%] px-[8%] left-0 w-fit h-fit  justify-center items-center'>
        <Image src='/img/title.png' width={975} height={469} alt='logo' className='' />
      </div>
      <div className='fixed z-50 bottom-[3%] right-[5%] w-fit h-fit flex flex-col justify-end items-end space-y-1'>
        <Image src='/img/qr.png' width={50} height={50} alt='qrcode' className='w-[40%]' />
        <button
          onClick={() => {
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSdM5kV516wlmzSEtgWW1MwGuhv79R5beBnm36pdBR9ZnVOI7g/viewform',
            )
          }}
          className='bg-white border border-main px-2 py-1 text-main text-[2.5vw]  active:translate-y-2  transform transition-all shadow-btnsh active:shadow-none '>
          구글 지원 폼 바로가기
        </button>
      </div>
      <div onClick={handleClick} className='fixed z-20 w-full h-screen pointer-events-none '>
        <Scene>
          <Environment preset='sunset' />

          {/* <Perf position='bottom-right' /> */}
          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={5} />
          <Center position={[0, -0.3, 0]}>
            <Back />
          </Center>
          {/* 
          //@ts-ignore */}
          <Float
            speed={2}
            rotationIntensity={0}
            floatIntensity={0.5}
            floatingRange={[-1.0, 0.5]}
            position={[0, 0.3, 0]}
            scale={0.5}>
            {/* 
            // @ts-ignore */}
            <a.group ref={gameboyRef} rotation={rotation}>
              <Center position={[0, 0, 0]}>
                <Gameboy />
              </Center>
            </a.group>
          </Float>
        </Scene>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'RECRUIT' } }
}
