import React from 'react'
import Header from '../components/Header'
import ScannerSection from '../components/ScannerSection'
import Footer from '../components/Footer'

import Tomato from '../assets/icon/ic_tomato2.svg'
import TomatoHover from '../assets/icon/ic_tomato_hover.svg'
import InteractiveButton from '../elements/InteractiveButton'
import CustomBorderOrange from '../assets/icon/ic_custom_border_orange.svg'
import { useNavigate } from 'react-router-dom'

const Custom = ({ width }) => {
  const navigate = useNavigate()

  const handleCustomNow = () => {
    // TODO: Implement handleCustomNow
    console.log('custom now')
  }

  const handleCheckout = () => {
    // TODO: Implement handleCheckout
    navigate('/checkout')
  }

  return (
    <div className='bg-lightPink'>
      <Header
        width={width}
        isHome={false}
        imgHover={TomatoHover}
        imgNotHover={Tomato}
        title={(
          <h2 className=
            {`
              font-maurenTrial text-turqoise
              ${width < 500 ? 'text-[20px]' : width < 700 ? 'text-[40px]' : width < 768 ? 'text-[56px]' : width < 1150 ? 'text-[64px]' : width < 1300 ? 'text-[80px]' : 'text-[112px]'}
            `}
          >
            custom-made dyes just for you
          </h2>)}
        text='Looking for a specific hue? Our custom dye service allows you to personalize colors based on your preferences. From soft pastels to bold earth tones, we craft dyes that suit your needs while staying 100% natural and safe. Start creating today!'
        child={(
          <InteractiveButton
            handlePress={handleCustomNow}
            text='Custom Your Dye Now'
            className={width < 650 ? 'w-[160px] bg-turqoise' : 'w-[240px] bg-turqoise'}
            textStyle={width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'}
          />
        )}
        firstWidth='w-[240px]'
        secondWidth='w-[120px]'
        lastWidth='w-[100px]'
      />
      <ScannerSection
        width={width}
        baseColor="text-orange"
        hoverColor="text-white"
        textColor='text-white'
        bgColor='bg-orange'
        baseBgColor='bg-lightPink'
        hoverBgColor='bg-orange'
        outlineColor='outline-lightPink'
        focusOutline='focus:outline-orange'
        borderOutline='border-orange'
        borderImg={CustomBorderOrange}
        handleCheckout={handleCheckout}
      />
      <Footer 
        width={width} 
        isWavy={false}
        bgColor='bg-orange'
      />
    </div>
  )
}

export default Custom