import React, { useEffect, useState } from 'react'
import BoxData from '../elements/BoxData'
import CheckSquare from '../assets/icon/ic_check_square.svg'
import Leaf from '../assets/icon/ic_leaf.svg'
import UniqueColors from '../assets/icon/ic_unique_colors.svg'
import Pineapple from '../assets/icon/ic_pineapple.svg'
import InfoGraph from '../elements/InfoGraph'
import Onion from '../assets/icon/ic_onion.svg'
import Hamburger from '../assets/icon/ic_hamburger.svg'
import Peanut from '../assets/icon/ic_peanut_yellow.svg'

const SectionHome1 = ({ width }) => {
  return (
    <div className={`flex flex-col p-16 bg-turqoise`} id='section1'>
        <div className={`flex items-start justify-between gap-10 mb-16 flex-wrap`}>
            <h1 className={`font-maurenTrial text-white text-[30px] flex-[4]`}>Natural dyes are environmentally friendly and non-toxic</h1>
            <p className={`font-focus text-white text-[16px] flex-[6] min-w-[300px]`}>Natural dyes from ReColor are all derived from food wastes, reducing reliance on synthetic chemicals that can harm ecosystems. Unlike synthetic dyes, which often contain toxic substances, natural dyes are biodegradable and less likely to contribute to water pollution. Additionally, the use of natural dyes promotes sustainable agricultural practices, supporting biodiversity and reducing the carbon footprint associated with conventional dye production.</p>
        </div>

        <div className={`flex justify-around mb-8 flex-wrap`}>
            <BoxData
              image={CheckSquare}
              title="Safe for the skin"
              description='Discover the magic of our natural dyes made from food waste, which are gentle on the skin and embody a sustainable approach to creativity'
            />
            <BoxData
              image={Leaf}
              title="Biodegradable"
              description='Unlock your creativity with ReColor, where every vibrant hue tells a story of sustainability and transforms scraps into stunning works of art'
            />
            <BoxData
              image={UniqueColors}
              title="Large Range of Unique Colors"
              description='Discover an extraordinary palette of unique colors from ReColor, transforming everyday scraps into vibrant shades that celebrate sustainability and creativity'
            />
        </div>

        <div className={`flex items-center flex-wrap ${width < 1200 ? 'justify-center' : 'justify-between'}`}>
          <img src={Pineapple} alt="pineapple" className={`w-[30%]`} />
          <div className={`flex flex-col flex-1`}>
            <h2 className={`font-maurenTrial text-white text-[24px] text-center mb-2`}>Our natural dyes are made from food waste</h2>
            <p className={`font-focus text-white text-[16px] mb-8`}>We have done research to make the best out of food wastes and create the best color results. Our numerous number of dyes are the results of our research. Below are the most used food wastes in our products: </p>
            <InfoGraph
              text={'Fresh Vegetables'}
              barWidth={`${width < 500 ? 'w-[140px]' : width < 800 ? 'w-[280px]' :  'w-[560px]'}`}
              percent={'28'}
              fontSize={width < 500 ? 'text-[16px]' : 'text-[20px]'}
            />
            <InfoGraph
              text={'Drinks'}
              barWidth={`${width < 500 ? 'w-[75px]' : width < 800 ? 'w-[150px]' :  'w-[300px]'}`}
              percent={'15'}
              fontSize={width < 500 ? 'text-[16px]' : 'text-[20px]'}
            />
            <InfoGraph
              text={'Bakery'}
              barWidth={`${width < 500 ? 'w-[55px]' : width < 800 ? 'w-[110px]' :  'w-[220px]'}`}
              percent={'11'}
              fontSize={width < 500 ? 'text-[16px]' : 'text-[20px]'}
            />
            <InfoGraph
              text={'Dairy Products'}
              barWidth={`${width < 500 ? 'w-[45px]' : width < 800 ? 'w-[90px]' :  'w-[180px]'}`}
              percent={'9'}
              fontSize={width < 500 ? 'text-[16px]' : 'text-[20px]'}
            />
            <InfoGraph
              text={'Fresh Fruits'}
              barWidth={`${width < 500 ? 'w-[30px]' : width < 800 ? 'w-[60px]' :  'w-[120px]'}`}
              percent={'6'}
              fontSize={width < 500 ? 'text-[16px]' : 'text-[20px]'}
            />
            <p className={`font-focusItalic text-[16px] text-white mt-2`}>Source: ‘Food surplus and waste in the UK’ by Wrap</p>
          </div>
        </div>
        
        <div className={`flex items-end mt-16 flex-wrap ${width < 1140 ? 'justify-center' : 'gap-[5%]'}`}>
          <div className={`flex flex-wrap items-end ${width < 1140 ? 'w-full justify-around' : 'w-[50%] justify-between'}`}>
            <img src={Onion} alt="onion" />
            <img src={Hamburger} alt="hamburger" />
            <img src={Peanut} alt="peanut" />
          </div>
          <div className={`${width < 500 ? 'flex flex-col flex-wrap w-full break-words text-wrap' : 'w-[40%] min-w-[450px]'}`}>
            <h2 className={`font-maurenTrial text-[30px] text-white ${width < 1140 ? 'text-center pt-8' : 'text-right'}`}>food waste, a billion tonne problem</h2>
            <p className={`font-focus text-[16px] text-white ${width < 1140 ? 'text-center' : 'text-right'}`}>Food waste is a pressing issue that not only contributes to environmental challenges like greenhouse gas emissions but also squanders valuable resources and nutrition. We can tackle this problem by creatively repurposing scraps into sustainable products, such as biodegradable natural dyes, while promoting mindful consumption practices that reduce waste at every stage of the food cycle.</p>
            <p className={`font-focusItalic text-[16px] text-white ${width < 1140 ? 'text-center' : 'text-right'} pt-4`}>Source: 2021 Food Waste Index by UN Environment Programme</p>
          </div>
        </div>
    </div>
  )
}

export default SectionHome1