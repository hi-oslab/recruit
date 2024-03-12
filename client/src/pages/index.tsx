import Scene, { Common } from '@/components/canvas/Scene'
import { OrbitControls, Box, Sphere, Stage, Float, Environment } from '@react-three/drei'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Page(props) {
  const router = useRouter()

  const ref = useRef()

  const [isHovered, setIsHovered] = useState(false)
  const [active, setActive] = useState(false)
  const [isGuideOpened, setIsGuideOpened] = useState(true)

  const [isInfoOpened, setIsInfoOpened] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsGuideOpened(false)
    }, 1500)
  }, [])

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
        <div className='absolute bottom-[3%] right-[5%] w-fit h-fit flex flex-col justify-end items-end space-y-1'>
          <button
            onClick={() => {
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSdM5kV516wlmzSEtgWW1MwGuhv79R5beBnm36pdBR9ZnVOI7g/viewform',
              )
            }}
            className='bg-[#000AAF] px-2 py-1 text-white text-[2.5vw] active:bg-white active:text-[#000AAF] transform transition-all animate-pulse  '>
            지원 구글 폼 바로가기
          </button>
          <Image src='/img/qr.png' width={50} height={50} alt='qrcode' className='w-[40%]' />
        </div>
      </div>
      <div className='fixed z-20 top-[2%] px-[8%] left-0 w-fit h-fit  justify-center items-center'>
        <Image src='/img/title.png' width={975} height={469} alt='logo' className='' />
      </div>
      <div className='fixed z-10 w-full h-screen pointer-events-none '>
        <Scene>
          {/* <Perf position='bottom-right' /> */}
          {/* 
          //@ts-ignore */}
          <pointLight position={[0, 1, 0]} intensity={0.5} />
          <Environment files={'/img/meadow_2_1k.hdr'} />
          {/* 
          //@ts-ignore */}
          <Float
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={0} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-1.0, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            position={[0, -0.3, 0]}></Float>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={1}
            ref={ref}
            enableDamping={true}
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={0}
            maxDistance={100}
            // minAzimuthAngle={-Math.PI / 4}
            // maxAzimuthAngle={Math.PI / 4}
            // minPolarAngle={Math.PI / 4}
            // maxPolarAngle={Math.PI / 2}
          />
        </Scene>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'RECRUIT' } }
}
