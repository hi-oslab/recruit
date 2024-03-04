import { Model } from '@/components/canvas/Model'
import Scene, { Common } from '@/components/canvas/Scene'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { AiOutlineHome } from 'react-icons/ai'

export default function Page(props) {
  const router = useRouter()

  const ref = useRef()

  const [isHovered, setIsHovered] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          window.open('https://hioslab.com')
        }}
        className='fixed top-0 right-0 z-20 bg-white text-main text-center text-md w-fit'>
        <span className='px-2 flex flex-row justify-center items-center gap-1 md:hover:bg-main md:hover:text-white active:bg-main active:text-white'>
          hisoslab.com
        </span>
      </button>
      <div className='fixed top-10 left-1/2 -translate-x-1/2 z-20 flex flex-col gap-2 text-white text-center w-full'>
        <p className='leading-none font-light '>Hongik univ. Interactive media art crew</p>
        <h1 className='leading-none text-5xl '>OPEN SOURCE LAB</h1>
        <h3 className='h-fit leading-none text-2xl '>2024-1 RECRUIT</h3>
      </div>

      <div className='fixed bottom-0 left-0 z-20 '>
        <span>활동내용</span>
      </div>

      <div className='fixed z-0 w-full h-screen pointer-events-none'>
        <Scene>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 0, 5]} intensity={0.7} />
          <spotLight position={[50, 50, -30]} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          {/* 
          //@ts-ignore */}
          <Model position={[0, -1, 0]} scale={0.6} />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -1.5, 0]}
            opacity={0.5}
            width={10}
            height={10}
            blur={1}
            far={1}
          />
          <OrbitControls
            ref={ref}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={0}
            maxDistance={100}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Scene>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'RECRUIT' } }
}
