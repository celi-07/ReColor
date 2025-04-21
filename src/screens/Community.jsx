import React from 'react'
import Header from '../components/Header'

import Potato from '../assets/icon/ic_potato.svg'
import InteractiveButton from '../elements/InteractiveButton'
import SectionCommunity1 from '../components/SectionCommunity1'
import Footer from '../components/Footer'

const Community = ({ width }) => {
  const handleProgress = () => {
    // TODO: Implement handleProgress
    console.log('progress')
  }

  return (
    <div className='bg-lightPink'>
      <Header 
        width={width}
        isHome={false}
        imgHover={Potato}
        imgNotHover={Potato}
        title={(
          <h1 className=
            {`
              font-maurenTrial text-turqoise
              ${width < 500 ? 'text-[20px]' : width < 700 ? 'text-[40px]' : width < 768 ? 'text-[56px]' : width < 1150 ? 'text-[64px]' : width < 1300 ? 'text-[80px]' : 'text-[112px]'}
            `}
          >
            join our amazing discussions
          </h1>
        )}
        text={`Be part of a vibrant community of eco-conscious creators who share their experiences, ideas, and tips on using natural dyes. Whether you're a beginner or an expert, our discussions are the perfect place to exchange knowledge, ask questions, and inspire one another!`}
        child={(
          <InteractiveButton
            handlePress={handleProgress}
            text='SEE YOUR PROGRESS'
            className={width < 650 ? 'w-[160px] bg-turqoise' : 'w-[240px] bg-turqoise'}
            textStyle={width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'}
          />
        )}
        firstWidth='w-[150px]'
        secondWidth='w-[70px]'
        lastWidth='w-[60px]'
      />

      <SectionCommunity1 width={width}/>

      <Footer width={width} />
    </div>
  )
}

export default Community