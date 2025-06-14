import React, { useEffect, useState } from 'react'
import Rhamnus from '../assets/icon/ic_rhamnus_saxatilis.svg'
import Chamomile from '../assets/icon/ic_anthemis_tinctoria.svg'
import Sappanwood from '../assets/icon/ic_caesalpinia_sappan.svg'
import Cochineal from '../assets/icon/ic_dactylopius_coccus.svg'
import Chesnut from '../assets/icon/ic_castanea_sativa.svg'
import Alkannet from '../assets/icon/ic_alkannet_tinctoria.svg'

import ProductCard from './ProductCard'
import InteractiveButton from '../elements/InteractiveButton'
import { useNavigate } from "react-router-dom"
import { DATA_PRODUCT } from '../constants/DATA_PRODUCT'

const SectionShop3 = ({ width, setShowItemAdded = () => {}  }) => {
  const navigate = useNavigate()
  
  const [isHoverLoadMore, setIsHoverLoadMore] = useState(false)

  const handleLoadMore = () => {
    navigate('/more')
    console.log('load more')
  }

  return (
    <div className={`flex flex-col p-16 bg-blue`} id='usage'>
        <div className={`flex items-start justify-between gap-10 mb-5 flex-wrap`}>
            <h1 className={`font-maurenTrial text-white text-[30px]`}>Usage</h1>
            <p className={`font-focus text-white text-[18px] flex-[1] min-w-[300px]`}>Natural dyes from ReColor are all derived from food wastes, reducing reliance on synthetic chemicals that can harm ecosystems. Unlike synthetic dyes, which often contain toxic substances, natural dyes are biodegradable and less likely to contribute to water pollution. Additionally, the use of natural dyes promotes sustainable agricultural practices, supporting biodiversity and reducing the carbon footprint associated with conventional dye production.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-align gap-10 mb-16">
            {/* Color List */}
            <div className="font-maurenTrial text-white text-[24px] text-center md:text-left">
                <h1>CLOTHES</h1>
                <h1>POLISH</h1>
                <h1>BEAUTY</h1>
                <h1>FOOD</h1>
                <h1>PAINT</h1>
                <h1>INK</h1>
                <h1>PAPER</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 text-center flex-grow">
            {DATA_PRODUCT.map((product, index) => (
                <ProductCard key={index} product={product} textColor='text-blue' setShowItemAdded={setShowItemAdded}/>
            ))}
            </div>
        </div>
        
        <div className='flex justify-center items-center gap-4 mt-4'>
            <InteractiveButton
              handlePress={handleLoadMore}
              text='Load More'
              className={`${width < 650 ? 'w-[100px]' : 'w-[200px]'} ${isHoverLoadMore ? '' : 'bg-lightPink'}`}
              outlineColor={'outline-lightPink'}
              textStyle={`${width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'} ${isHoverLoadMore ? 'text-lightPink' : 'text-blue'}`}
              onMouseEnter={() => setIsHoverLoadMore(true)}
              onMouseLeave={() => setIsHoverLoadMore(false)}
              disableHover={true}
            />
        </div>
        
    </div>

    
  )
}

export default SectionShop3