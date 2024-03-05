import { Model } from '@/components/canvas/Model'
import Scene, { Common } from '@/components/canvas/Scene'
import { OrbitControls, Sphere } from '@react-three/drei'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi'
import { MotionDiv } from '@/styles/common.styles'

export default function Page(props) {
  const router = useRouter()

  const ref = useRef()

  const [isHovered, setIsHovered] = useState(false)
  const [active, setActive] = useState(false)

  const [isInfoOpened, setIsInfoOpened] = useState(false)

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
      <div className='fixed top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col gap-2 text-white text-center w-full p-4'>
        <Image src='/img/poster_title.svg' alt='logo' width={1080} height={1080} />
      </div>

      <div
        onClick={() => {
          setIsInfoOpened(!isInfoOpened)
        }}
        className={'fixed bottom-0 left-0 z-20 bg-white text-main text-center text-md w-full h-fit px-4 py-1'}
        style={{
          boxShadow: '0px -4px 4px rgba(0,0,0,0.3)',
        }}>
        <div className='text-md flex flex-row gap-2 justify-center items-center gap-1md:hover:text-white  active:text-white'>
          <span className='-ml-1'>{isInfoOpened ? <TfiAngleDown /> : <TfiAngleUp />}</span>
          <p>{!isInfoOpened ? '모집 관련 설명 보기' : '내리기'}</p>
        </div>
        <div className='mt-4'>
          <p>모집 기간: 2021. 10. 18. ~ 2021. 11. 12.</p>
          <p>모집 인원: 1명</p>
          <p>모집 대상: 프론트엔드 개발자</p>
          <p>모집 방법: 이력서 및 포트폴리오 제출</p>
        </div>
      </div>

      <div className='fixed z-0 w-full h-screen pointer-events-none'>
        <Scene>
          <directionalLight position={[0, 0, 5]} intensity={0.7} />
          <spotLight position={[50, 50, -30]} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          {/* 
          //@ts-ignore */}
          {/* <Model position={[0, -1, 0]} scale={0.6} /> */}
          <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial color='white' />
          </Sphere>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={1}
            ref={ref}
            enableDamping={true}
            enablePan={true}
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
