import React, { useState } from 'react'
import NumberData from '../elements/NumberData'
import CustomBorderTurqoise from '../assets/icon/ic_custom_border_turqoise.svg'
import ScannerSection from './ScannerSection'
import CastaneaSativa from '../assets/icon/ic_castanea_sativa.svg'
import AlkannetTinctoria from '../assets/icon/ic_alkannet_tinctoria.svg'
import DactylopiusCoccus from '../assets/icon/ic_dactylopius_coccus.svg'
import CaesalpiniaSappan from '../assets/icon/ic_caesalpinia_sappan.svg'
import AnthemisTinctoria from '../assets/icon/ic_anthemis_tinctoria.svg'
import AcaciaCatechu from '../assets/icon/ic_acacia_catechu.svg'
import RhamnusSaxatilis from '../assets/icon/ic_rhamnus_saxatilis.svg'
import ArrowDown from '../assets/icon/ic_arrow_down.svg'

const SectionHome3 = ({ width, handleCheckout = () => {} }) => {
  const [i, setI] = useState(0)
  const [direction, setDirection] = useState('right')

  const modelStyle = {
    position: 'relative',
    width: width - 64,
    height: width < 730 ? '400px' : '750px',
  }

  const getStyleForSlot = (slot) => {
    const containerWidth = width - 64 
    const centerPoint = containerWidth / 2
    const baseTransition = 'all 0.5s ease'
    switch (slot) {
      case 0:
        return { position: 'absolute', top: '0px', left: `${centerPoint - 256}px`, transition: baseTransition }
      case 1:
        return { position: 'absolute', top: '0px', left: `${centerPoint}px`, transition: baseTransition }
      case 2:
        return { position: 'absolute', top: '150px', left: `${centerPoint + (centerPoint / 6)}px`, transition: baseTransition }
      case 3:
        return { position: 'absolute', top: '350px', left: `${centerPoint + (centerPoint / 3)}px`, transition: baseTransition }
      case 4:
        return { position: 'absolute', top: '500px', left: `${centerPoint - 128}px`, transition: baseTransition }
      case 5:
        return { position: 'absolute', top: '350px', left: `${centerPoint - (centerPoint / 3) - 256}px`, transition: baseTransition }
      case 6:
        return { position: 'absolute', top: '150px', left: `${centerPoint - (centerPoint / 6) - 256}px`, transition: baseTransition }
      default:
        return {}
    }
  }

  const getStyleForSlotSmall = (slot) => {
    const containerWidth = width - 64
    const centerPoint = containerWidth / 2
    const baseTransition = 'all 0.5s ease'
    if (slot === 0) {
      return {
        position: 'absolute',
        top: '40px',
        left: `${centerPoint - 128}px`,
        opacity: 1,
        transition: baseTransition,
        zIndex: 1,
      }
    }

    if (direction === 'right') {
      // The next item (slot === 1) starts off to the left, fades in
      if (slot === 1) {
        return {
          position: 'absolute',
          top: '40px',
          left: `${centerPoint - 128 - 128}px`, // off-screen to left
          opacity: 0,
          transition: baseTransition,
          zIndex: 0,
        }
      }
      if (slot === arr.length - 1) {
        return {
          position: 'absolute',
          top: '40px',
          left: `${centerPoint}px`, // off-screen to right
          opacity: 0,
          transition: baseTransition,
          zIndex: 0,
        }
      }
    }

    if (direction === 'left') {
      // The new item (slot === arr.length - 1) starts off to the right, fades in
      if (slot === arr.length - 1) {
        return {
          position: 'absolute',
          top: '40px',
          left: `${centerPoint}px`, // off-screen to right
          opacity: 0,
          transition: baseTransition,
          zIndex: 0,
        }
      }
      // The previous active item (now slot === 1) moves to the left, fades out
      if (slot === 1) {
        return {
          position: 'absolute',
          top: '40px',
          left: `${centerPoint - 128 - 128}px`, // off-screen to left
          opacity: 0,
          transition: baseTransition,
          zIndex: 0,
        }
      }
    }

    return {
      position: 'absolute',
      top: '40px',
      left: `${centerPoint - 128}px`,
      opacity: 0,
      transition: baseTransition,
      zIndex: 0,
    }
  }

  const arr = [
    {
      index: 0,
      imgSrc: CastaneaSativa,
      name: 'Chest Nut Dye',
      description: 'Chestnut dye is a rich, warm brown color derived from the husks of chestnuts.',
      price: '50.000,00'
    },
    {
      index: 1,
      imgSrc: AlkannetTinctoria,
      name: 'Alkanet Dye',
      description: 'Alkanet dye is a deep, vibrant purple color extracted from the roots of the alkanet plant.',
      price: '50.000,00'
    },
    {
      index: 2,
      imgSrc: DactylopiusCoccus,
      name: 'Cochineal Dye',
      description: 'Cochineal dye is a bright, intense red color made from the crushed bodies of the cochineal insect.',
      price: '50.000,00'
    },
    {
      index: 3,
      imgSrc: CaesalpiniaSappan,
      name: 'SappanWood Dye',
      description: 'Sappanwood dye is a bright, reddish-pink color made from the heartwood of the sappanwood tree.',
      price: '50.000,00'
    },
    {
      index: 4,
      imgSrc: AnthemisTinctoria,
      name: 'Chamomile Dye',
      description: 'Chamomile dye is a soft, delicate yellow color derived from the flowers of the chamomile plant.',
      price: '50.000,00'
    },
    {
      index: 5,
      imgSrc: AcaciaCatechu,
      name: 'Gutch Extract Dye',
      description: 'Gutch Extract dye is a rich, dark brown color extracted from the heartwood of the acacia catechu tree.',
      price: '50.000,00'
    },
    {
      index: 6,
      imgSrc: RhamnusSaxatilis,
      name: 'Buckthorn Dye',
      description: 'Buckthorn dye is a vibrant, light yellow color made from the berries of the buckthorn plant.',
      price: '50.000,00'
    },
  ]

  const handleI = (current, num) => {
    const newIndex = (current + num) % arr.length
    return newIndex < 0 ? newIndex + arr.length : newIndex
  }

  const handlePrev = () => {
    setI(handleI(i, 1))
    setDirection('left')
  }

  const handleNext = () => {
    setI(handleI(i, -1))
    setDirection('right')
  }

  return (
    <div className={`overflow-hidden bg-lightPink`} id="section3">
      <div className={`flex ${width < 1180 ? 'justify-center' : 'justify-between'} flex-wrap px-16 py-12`}>
        <NumberData
          numberString="1"
          title={<h2 className="font-maurenTrial text-turqoise text-[24px]">Take a picture of the desired color</h2>}
          text="Take a picture of the desired colorSnap a photo of any color that inspires you – from nature, fabrics, or everyday objects. Our system will analyze the shade to create a matching natural dye formula just for you!"
        />
        <NumberData
          numberString="2"
          title={<h2 className="font-maurenTrial text-turqoise text-[24px]">let <span className="text-orange">Recolor</span> do the magic</h2>}
          text="Our advanced AI-powered tool will process your selected color and generate a customized natural dye formula using sustainable ingredients, ensuring an eco-friendly and vibrant result."
        />
        <NumberData
          numberString="3"
          title={<h2 className="font-maurenTrial text-turqoise text-[24px]">receive your formula</h2>}
          text="Get your unique dye formula with step-by-step instructions on how to mix and apply it. Experiment with different materials and enjoy the beauty of natural coloring!"
        />
      </div>

      <ScannerSection
        width={width}
        baseColor="text-white"
        hoverColor="text-turqoise"
        baseBgColor='bg-turqoise'
        hoverBgColor='bg-lightPink'
        outlineColor = 'outline-turqoise'
        borderImg={CustomBorderTurqoise}
        handleCheckout={handleCheckout}
      />

      <div className="flex flex-col items-center relative p-16">
        <h2 className={`font-maurenTrial text-turqoise text-[30px] ${width < 730 ? 'text-center' : 'text-left'}`}>our selection of natural dyes</h2>
        <p className={`font-focus text-[16px] text-turqoise text-center ${width < 730 ? 'mb-0' : '-mb-16'}`}>
          Explore our premium collection of natural dyes, sustainably sourced from plants, trees, and minerals. Each dye is carefully selected to provide vibrant, long-lasting color while being eco-friendly and non-toxic. Whether you're dyeing fabric, paper, or crafts, our natural dyes offer a unique and beautiful touch.
        </p>

        <div 
          className={`flex flex-col ${width < 730 ? 'items-center justify-end w-full' : 'items-center justify-center'}`} 
          style={modelStyle}
        >
          {/* Action Button  */}
          <div className='w-[300px]'>
            <h2 className="font-maurenTrial text-turqoise text-[28px] text-center">{arr[i].name}</h2>
            <p className={`font-focus text-turqoise text-[16px] text-center pb-4`}>{arr[i].description}</p>
            <div className="flex items-center justify-between w-full">
              <div onClick={handlePrev} className='h-full'>
                <img src={ArrowDown} alt="Prev" className="w-4 h-4 rotate-90" />
              </div>
              <p className={`font-focusItalic text-turqoise text-[16px] text-center`}>Price: {arr[i].price}</p>
              <div onClick={handleNext} className='h-full'>
                <img src={ArrowDown} alt="Next" className="w-4 h-4 -rotate-90" />
              </div>
            </div>
          </div>

          {/* Carousel */}
          {width > 730 ? (
              <>
                {arr.map((item) => {
                  const slot = (item.index - i + arr.length) % arr.length
                  return (
                    <div
                      key={item.index}
                      style={getStyleForSlot(slot)}
                      className={`flex justify-center items-center h-64 w-64`}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className={`${slot === 0 || slot === 1 ? 'h-8 w-8' : slot === 2 || slot === 6 ? 'h-16 w-16' : slot === 3 || slot === 5 ? 'h-32 w-32' : 'h-64 w-64'} object-contain`}
                      />
                    </div>
                  )
                })}
              </>
            ) : (
              <>
                {arr.map((item) => {
                  const slot = (item.index - i + arr.length) % arr.length
                  return (
                    <div
                      key={item.index}
                      style={getStyleForSlotSmall(slot)}
                      className={`flex justify-center items-center h-64 w-64`}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className={`h-64 w-64`}
                      />
                    </div>
                  )
                })}
              </>
            )}
        </div>
      </div>
    </div>
  )
}

export default SectionHome3
