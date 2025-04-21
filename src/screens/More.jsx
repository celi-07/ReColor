import React from 'react'

import Rhamnus from '../assets/icon/ic_rhamnus_saxatilis.svg'
import Chamomile from '../assets/icon/ic_anthemis_tinctoria.svg'
import Sappanwood from '../assets/icon/ic_caesalpinia_sappan.svg'
import Cochineal from '../assets/icon/ic_dactylopius_coccus.svg'
import Chesnut from '../assets/icon/ic_castanea_sativa.svg'
import Alkannet from '../assets/icon/ic_alkannet_tinctoria.svg'
import Cutch from '../assets/icon/ic_acacia_catechu.svg'

import ShoppingBag from '../assets/icon/ic_shopping_bag.svg'
import User from '../assets/icon/ic_user.svg'

import ProductCard from '../components/ProductCard'

const products = [
    {
    name: "BUCKTHORN DYE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rp 50.000,00",
    image: Rhamnus,
    },
    {
      name: "CHAMOMILE DYE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "Rp 50.000,00",
      image: Chamomile,
    },
    {
      name: "SAPPANWOOD DYE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "Rp 50.000,00",
      image: Sappanwood,
    },
    {
      name: "COCHINEAL DYE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "Rp 50.000,00",
      image: Cochineal,
    },
    {
      name: "CHESNUT DYE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "Rp 50.000,00",
      image: Chesnut,
    },
    {
      name: "ALKANNET DYE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "Rp 50.000,00",
      image: Alkannet,
    },
    {
     name: "CUTCH EXTRACT DYE",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     price: "Rp 50.000,00",
     image: Cutch,
    }
]

const More = ({ width }) => {
    const handleBack = () => {
        window.history.back()
    }

    return (
        <div className={`bg-turqoise flex-col items-center py-8 px-16`}>
            <div className={`flex flex-row justify-between`}>
                <div className={`font-maurenTrial text-lightPink text-[30px] text-left mt-12 mb-16`}>
                    <button onClick={handleBack}>&lt; Back To Shop</button>
                </div>

                <div className={`flex ${width < 600 ? 'flex-row justify-center' : 'flex-row'} gap-4 mt-12 mb-16`}>
                    <img src={ShoppingBag} alt="" className={`w-8 h-8`}/>
                    <img src={User} alt="" className={`w-8 h-8`}/>
                </div>

            </div>

            <div className={`flex items-start justify-between gap-10 mb-5 flex-wrap`}>
                <h1 className={`font-maurenTrial text-white text-[30px]`}>Color</h1>
                <p className={`font-focus text-white text-[12px] flex-[1] min-w-[300px]`}>Natural dyes from ReColor are all derived from food wastes, reducing reliance on synthetic chemicals that can harm ecosystems. Unlike synthetic dyes, which often contain toxic substances, natural dyes are biodegradable and less likely to contribute to water pollution. Additionally, the use of natural dyes promotes sustainable agricultural practices, supporting biodiversity and reducing the carbon footprint associated with conventional dye production.</p>
            </div>

            <div className={`flex flex-col md:flex-row items-center md:items-start justify-align gap-10 mb-16`}>
                {/* Color List */}
                <div className="font-maurenTrial text-white text-[24px] text-center md:text-left">
                    <h1>RED</h1>
                    <h1>ORANGE</h1>
                    <h1>YELLOW</h1>
                    <h1>GREEN</h1>
                    <h1>BLUE</h1>
                    <h1>PURPLE</h1>
                    <h1>PINK</h1>
                    <h1>BROWN</h1>
                    <h1>GREY</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 text-center flex-grow">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default More