import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import InteractiveButton from '../elements/InteractiveButton'
import CoconutBrownHover from '../assets/icon/ic_coconut_brown.svg'
import CoconutBrown from '../assets/icon/ic_coconut2.svg'

const Shop = ({ width }) => {
  const [isHoverUsage, setIsHoverUsage] = useState(false)
  const [isHoverSource, setIsHoverSource] = useState(false)

  const handleColor = () => {
    // TODO: Implement handleColor
    console.log('color')
  }

  const handleUsage = () => {
    // TODO: Implement handleUsage
    console.log('usage')
  }

  const handleSource = () => {
    // TODO: Implement handleSource
    console.log('source')
  }

  const handleArrowDown = () => {
    // TODO: Implement handleArrowDown
    console.log('arrow down')
  }
  
  return (
    <div className="bg-lightPink">
      <Header
        width={width}
        isHome={false}
        imgHover={CoconutBrownHover}
        imgNotHover={CoconutBrown}
        title={(
          <h1 className=
            {`
              font-maurenTrial text-turqoise
              ${width < 500 ? 'text-[20px]' : width < 700 ? 'text-[40px]' : width < 768 ? 'text-[56px]' : width < 1150 ? 'text-[64px]' : width < 1300 ? 'text-[80px]' : 'text-[112px]'}
            `}
          >
            Browse all your natural dyes
          </h1>
        )}
        text={'Browse through our extensive collection of natural dyes, categorized by Color, Source, and Usage. Whether you’re looking for soft pastels, earthy tones, or bold vibrant shades, we have something for every artistic need. Each dye is carefully processed to retain its authenticity and eco-friendliness.'}
        child={(
          <div className={`flex justify-between w-[60%] gap-4`}>
            <InteractiveButton
              handlePress={handleColor}
              text='Color'
              className={width < 650 ? 'w-[80px] bg-turqoise' : 'w-[100px] bg-turqoise hover:bg-lightPink'}
              textStyle={width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'}
            />
            <InteractiveButton
              handlePress={handleUsage}
              text='Usage'
              className={`${width < 650 ? 'w-[80px]' : 'w-[100px]'} outline-orange bg-orange hover:bg-lightPink`}
              textStyle={`${width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'} ${isHoverUsage ? 'text-orange' : 'text-white'}`}
              onMouseEnter={() => setIsHoverUsage(true)}
              onMouseLeave={() => setIsHoverUsage(false)}
            />
            <InteractiveButton
              handlePress={handleSource}
              text='Source'
              className={`${width < 650 ? 'w-[80px]' : 'w-[100px]'} outline-blue bg-blue hover:bg-lightPink`}
              textStyle={`${width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'} ${isHoverSource ? 'text-blue' : 'text-white'}`}
              onMouseEnter={() => setIsHoverSource(true)}
              onMouseLeave={() => setIsHoverSource(false)}
            />
          </div>
        )}
        handleArrowDown={handleArrowDown}
      />

      {/* TODO: Create the body of the page */}

      <Footer 
        width={width}
        isWavy={false}
        bgColor='bg-blue' 
      />
    </div>
  )
}

export default Shop