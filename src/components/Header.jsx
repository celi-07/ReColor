import React, { useEffect, useState } from 'react'
import './components.css'
import Navbar from '../elements/Navbar'
import ArrowDown from '../assets/icon/ic_arrow_down.svg'
import HamburgerIconTurqoise from '../assets/icon/ic_hamburger_icon_turqoise.svg'

const Header = ({
  isHome = false,
  imgNotHover = '',
  imgHover = '',
  title = null,
  subtitle = null,
  text = '',
  child = null,
  width,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [openBurger, setOpenBurger] = useState(false)

  const handleArrowDown = () => {
    console.log("Arrow Down")
  }

  return (
    <header className=
      {`
        header flex flex-col justify-between pb-4 pt-8 relative
        ${width < 500 ? 'px-8' : 'px-16 h-[630px]'}
      `}
    >
      <div className=
        {`
          flex flex-col justify-between
          ${ width < 500 ? 'flex-1 min-h-[280px]' : width < 700 ? 'flex-1 pb-8' : ''}
        `}
      >
        <div>
          <div>
            <div className='flex justify-between items-center'>
              <h1 className=
                {`
                  font-maurenTrial text-turqoise
                  ${width < 500 ? 'text-[20px]' : width < 700 ? 'text-[40px]' : width < 768 ? 'text-[56px]' : width < 1150 ? 'text-[64px]' : width < 1300 ? 'text-[80px]' : 'text-[112px]'}
                `}
              >
                {title}
              </h1>
              {width < 700 && 
                <button onClick={() => setOpenBurger(!openBurger)} className='relative'>
                  <img src={HamburgerIconTurqoise} alt="Hamburger Icon" className={width < 500 ? 'w-6 h-6' : `w-8 h-8`} />
                  {openBurger && (
                    <div className='absolute top-5 right-0 bg-lightPink p-4 rounded-lg shadow-white shadow-md'>
                      <Navbar 
                        isHome={true}
                        isColumn={true}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} 
                        className='flex flex-col items-end'
                      />
                    </div>
                  )}
                </button>
              }
            </div>
            <h2 className=
              {`
                font-maurenTrial text-turqoise
                ${width < 500 ? 'text-[16px]' : width < 700 ? 'text-[20px]' : width < 1150 ? 'text-[24px]' : 'text-[30px]'}
              `}
            >
              {subtitle}
            </h2>
            <p className=
              {`
                font-focus text-[16px] text-turqoise py-[18px] text-justify
                ${width < 500 ? '!text-[12px]' : width < 900 ? 'w-[100%]' : width < 1150 ? 'w-[50%]' : 'w-[60%]'}
              `}
            >
              {text}
            </p>
          </div>
        </div>
        {child}
      </div>

      {width > 700 && (
        <div className='flex justify-between items-center'>
          <Navbar 
            isHome={isHome}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} 
          />
          <button onClick={() => handleArrowDown()}>
            <img src={ArrowDown} alt="Arrow Down" className='w-8 h-8' />
          </button>
        </div>
      )}
      
      <img src={imgHover} alt="Watermelon" 
        className=
        {`
          absolute top-[32%] right-[8%]
          ${width < 400 ? 'w-[80px] top-[75%] right-[5%]' : width < 500 ? 'w-[100px] top-[70%] right-[5%]' : width < 700 ? 'w-[200px] top-[420px] right-[5%]' : width < 900 ? 'w-[200px] top-[420px] right-[90px]' : 'top-[32%] right-[8%] '}
          ${isHovered ? 'opacity-100' : 'opacity-0'} transition duration-500
        `} 
      />
      <img src={imgNotHover} alt="Watermelon" 
        className=
        {`
          absolute
          ${width < 400 ? 'w-[80px] top-[75%] right-[5%]' : width < 500 ? 'w-[100px] top-[70%] right-[5%]' : width < 700 ? 'w-[200px] top-[420px] right-[5%]' : width < 900 ? 'w-[200px] top-[420px] right-[90px]' : 'top-[32%] right-[8%] '}
          ${isHovered ? 'opacity-0' : 'opacity-100'} transition duration-500
        `} 
      />
    </header>
  )
}

export default Header