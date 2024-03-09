import { Foot, Model } from '@/components/canvas/Model/foot'
import Scene, { Common } from '@/components/canvas/Scene'
import { OrbitControls, Box, Sphere, Stage, Float } from '@react-three/drei'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { AiOutlineDown, AiOutlineHome, AiOutlineUp } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Arm } from '@/components/canvas/Model/arm'
import { Chest } from '@/components/canvas/Model/chest'
import { Hand } from '@/components/canvas/Model/hand'
import { Perf } from 'r3f-perf'
import { Shoulder } from '@/components/canvas/Model/shoulder'
import { Head } from '@/components/canvas/Model/head'
import { Leg } from '@/components/canvas/Model/leg'
import { Neck } from '@/components/canvas/Model/neck'
import { Wheel } from '@/components/canvas/Model/wheel'
import { Curves } from '@/components/canvas/Model/curves'

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
        <span className='pl-2 text-md md:text-lg pr-1.5 flex flex-row justify-center items-center gap-1 md:hover:bg-main md:hover:text-white active:bg-main active:text-white'>
          <AiOutlineHome /> hisoslab.com
        </span>
      </button>
      <div className='fixed top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col justify-center items-center gap-2 text-white text-center w-full p-4'>
        <Image src='/img/poster_title.svg' alt='logo' width={1080} height={1080} />
      </div>
      <div className='fixed bottom-0  text-white rotate-90 origin-bottom-right  -left-[100svh]	z-20 w-[100svh] h-fit flex justify-center '>
        <span className='ml-10 md:ml-0 px-2 leading-snug text-lg md:text-2xl '>2024.03.11 - 2024.03.15</span>
      </div>

      <div
        onClick={() => {
          setIsInfoOpened(!isInfoOpened)
        }}
        className={
          'fixed bottom-0 left-0 z-20  text-main text-center text-md w-full h-fit flex flex-col justify-start items-center cursor-pointer'
        }>
        <button
          onClick={() => {
            //after 2024.03.11
            if (new Date().getTime() < new Date('2024-03-11').getTime()) {
              alert('지원 기간이 아닙니다.\n 2024년 3월 11일부터 지원해주세요!')
            } else {
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSfLK2_O67UjSOlHz2kcY0C_W6SQToX28olenrphty55Bb2qLw/viewform?usp=sf_link',
              )
            }
          }}
          className='mb-6 relative w-48 md:w-72'>
          <span className='border border-white bg-main text-white text-center  w-full md:hover:bg-white md:hover:text-main active:bg-white active:text-main px-3 py-1.5 flex flex-row justify-center items-center gap-1 text-md md:text-lg active:translate-y-1 md:hover:translate-y-1 '>
            ☁ 2024-1 지원하기
          </span>
          <div className='absolute -bottom-1 left-0 w-full h-1 border border-white bg-white' />
        </button>
        <div
          className='w-48 md:w-72 px-4 py-1.5 flex flex-row gap-2 justify-center items-center gap-1 
        bg-white text-main text-center w-fit text-md md:text-lg md:hover:text-white  active:text-white md:hover:bg-main active:bg-main border border-white '>
          <span className='-ml-1'>{isInfoOpened ? <AiOutlineDown /> : <AiOutlineUp />}</span>
          <p>{!isInfoOpened ? '모집 관련 설명 보기' : '내리기'}</p>
        </div>
        <motion.div
          className='w-full md:w-1/2 overflow-hidden'
          animate={isInfoOpened ? { height: 'fit-content' } : { height: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}>
          <div className='p-4 flex flex-col gap-4 w-full h-full overflow-y-scroll bg-white text-md md:text-lg'>
            <InfoContainer
              title='활동내용'
              content='다양한 미디어를 활용한 인터랙티브 미디어 아트 정보 교류, 스터디 및 전시'
            />
            <InfoContainer
              title='모집대상'
              content='인터랙션을 활용한 디지털 미디어아트에 관심이 많은 재학생 및 휴학생'
            />
            <InfoContainer title='지원기간' content='2024.03.11~ 2024.03.15' />
            <InfoContainer title='지원방법' content='구글 폼 작성 및 포트폴리오 제출 면접 별도 연락 예정' />
            <ContactContainer phone='010-6485-8758' email='hi.oslab@gmail.com' instagram='opensource_lab' />
          </div>
        </motion.div>
      </div>

      <div className='fixed z-0 w-full h-screen pointer-events-none '>
        <Scene>
          <Perf position='bottom-right' />
          <ambientLight intensity={1} />
          <directionalLight position={[0, 0, 5]} intensity={0.7} />
          <spotLight position={[50, 50, -30]} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          {/* 
          //@ts-ignore */}
          <Float
            speed={5} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Arm scale={0.5} />
            <Chest scale={0.5} />
            {/* <Foot scale={0.5} /> */}
            {/* <Hand scale={0.5} /> */}
            <Shoulder scale={0.5} />
            <Head scale={0.5} />
            <Leg scale={0.5} />
            <Neck scale={0.5} />
            {/* <Wheel scale={0.5} /> */}
            <Curves scale={0.5} />
          </Float>
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

function InfoContainer({ title, content }) {
  return (
    <div className='flex flex-col gap-1 justify-start items-start text-left break-keep'>
      <span className='font-bold'>☻ {title}</span>
      <p className=''> {content}</p>
    </div>
  )
}
function ContactContainer({ phone, email, instagram }) {
  return (
    <div className='my-2 flex flex-col gap-2'>
      <a
        href={`tel:${phone}`}
        className='flex flex-row items-center justify-start text-left gap-2 break-keep md:hover:text-white md:hover:bg-main active:bg-main active:text-white'>
        <span className='font-bold'>전화번호</span>
        <p className='underline'> {phone}</p>
      </a>
      <a
        href={`mailto:${email}`}
        className='flex flex-row items-center justify-start text-left gap-2 break-keep md:hover:text-white md:hover:bg-main active:bg-main active:text-white'>
        <span className='font-bold'>이메일</span>
        <p className='underline'> {email}</p>
      </a>
      <a
        href={`https://www.instagram.com/${instagram}`}
        className='flex flex-row items-center justify-start text-left gap-2 break-keep md:hover:text-white md:hover:bg-main active:bg-main active:text-white'>
        <span className='font-bold'>인스타그램</span>
        <p className='underline'>@{instagram}</p>
      </a>
    </div>
  )
}

export async function getStaticProps() {
  return { props: { title: 'RECRUIT' } }
}
