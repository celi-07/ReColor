import React, { useState } from 'react'
import Header from '../components/Header'
import ScannerSection from '../components/ScannerSection'
import Footer from '../components/Footer'

import Tomato from '../assets/icon/ic_tomato2.svg'
import TomatoHover from '../assets/icon/ic_tomato_hover.svg'
import InteractiveButton from '../elements/InteractiveButton'
import Ginger from '../assets/icon/ic_ginger.svg'
import CustomBorderOrange from '../assets/icon/ic_custom_border_orange.svg'
import { useNavigate } from 'react-router-dom'

const suggestions = [
  {
    title: "GALLNUT DYE",
    subtitle: "(Quercus infectoria)",
    content: "A traditional dye made from oak galls, Gallnut Dye offers rich, earthy tones that bond beautifully with natural fibers. Known for its historical use in manuscript inks, it now finds new life in textiles."
  },
  {
    title: "JULLNUT DYE",
    subtitle: "(Qarcis infectoria)",
    content: "Discover the timeless beauty of Jullnut Dye, derived from the galls of oak trees. Its deep, muted hues make it a favorite for achieving natural, vintage finishes in custom dyeing."
  },
  {
    title: "HAMNUT DYE",
    subtitle: "(Borbous infectoria)",
    content: "Hamnut Dye delivers a sophisticated gray-brown palette, perfect for designers seeking classic, organic shades. Ideal for eco-conscious creations and subtle, refined aesthetics."
  }
]

const Custom = ({ width }) => {
  const [isHovered, setIsHovered] = useState(false)

  const navigate = useNavigate()

  const handleCustomNow = () => {
    // TODO: Implement handleCustomNow
    console.log('custom now')
  }

  const handleCheckout = () => {
    // TODO: Implement handleCheckout
    navigate('/checkout')
  }

  const handleStart = () => {
    const section = document.getElementById("scannerSection")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleArrowDown = () => {
    const section = document.getElementById("scannerSection")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
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
        handleArrowDown={handleArrowDown}
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

      <div className="bg-orange p-8 text-white relative">
        {/* Similar Suggestions Section */}
        <h2 className="text-xl mb-6 font-maurenTrial">SIMILAR SUGGESTIONS</h2>
        
        <div className={`flex justify-between gap-4 ${width < 700 ? 'flex-col items-center' : 'mb-16'}`}>
          {suggestions.map((suggestion, index) => (
            <div key={index} className={`bg-white ${width < 700 ? 'w-full' : 'w-1/3'} shadow-md font-maurenTrial p-2 rounded-tl-2xl rounded-br-2xl`}>
              <h3 className="text-orange">{suggestion.title}</h3>
              <p className="text-orange text-sm mb-2">{suggestion.subtitle}</p>
              <p className="text-xs text-black leading-relaxed mb-4">{suggestion.content}</p>
              <button className="text-orange text-xs">READ MORE</button>
            </div>
          ))}
        </div>

        {width >= 950 && (
          <>
            {/* Central Content with SVG for Curved Lines */}
            <div className="relative flex justify-center mt-20 mb-20">
              <svg className="absolute w-full h-64" viewBox="0 0 800 200">
                {/* Left curved line */}
                <path 
                  d="M200,100 Q350,40 400,100" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="1"
                />
                {/* Right curved line */}
                <path 
                  d="M600,100 Q450,40 400,100" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="1"
                />
                {/* Left dot */}
                <circle cx="200" cy="100" r="5" fill="white" />
                {/* Right dot */}
                <circle cx="600" cy="100" r="5" fill="white" />
              </svg>

              {/* Left info point */}
              <div className="absolute left-16 top-24 text-right w-48">
                <h4 className="text-sm font-maurenTrial">GET ACQUAINTED WITH ANCIENT DYES</h4>
                <p className="text-xs mt-1 font-focusGrotesk">Explore the roots of color. Learn about traditional dye materials used for centuries across cultures and continents.</p>
              </div>

              {/* Central Ginger Character */}
              <div className="relative z-10 text-center">
                <img src={Ginger} alt="Ginger Character" className="w-32 h-auto mx-auto" />
                <div className="mt-4">
                  <h3 className="text-lg font-maurenTrial">BRING YOUR DYE TO LIFE</h3>
                  <p className="text-sm max-w-xs mx-auto mt-2 font-focusGrotesk">
                  Customize your perfect shade using our intuitive color selector. Mix, preview, and visualize your custom dye before you order — it's color creation made easy.
                  </p>
                  <InteractiveButton
                    text='START'
                    className={`mt-8 ${isHovered ? 'bg-orange' : 'bg-white'}`}
                    textStyle={`font-maurenTrial text-[16px] ${isHovered ? 'text-white' : 'text-orange'}`}
                    handlePress={handleStart}
                    outlineColor='outline-white'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    disableHover={true}
                  />
                </div>
              </div>

              {/* Right info point */}
              <div className="absolute right-16 top-24 text-left w-48">
                <h4 className="text-sm font-maurenTrial">GET ACQUAINTED WITH COLOR VALUES</h4>
                <p className="text-xs mt-1 font-focusGrotesk">Understand the science behind every hue. Dive into RGB, CMYK, and HEX values to get your custom color exactly right.</p>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer 
        width={width} 
        isWavy={false}
        bgColor='bg-orange'
      />
    </div>
  )
}

export default Custom