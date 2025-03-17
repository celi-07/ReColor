import React from "react";

import InteractiveButton from "../elements/InteractiveButton"
import { useNavigate } from "react-router-dom";



function ProductCard({ product, width }) {
    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate('/checkout')
    }

  return (
    <div className="">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 fill-blue"
      />
      <h3 className="font-maurenTrial text-white text-lg">{product.name}</h3>
      <p className="font-focusGrotesk text-white text-sm">{product.description}</p>
      <p className="font-focusGrotesk text-white text-sm mt-2">{product.price}</p>
      <div className="font-maurenTrial flex justify-center items-center gap-4 mt-4">
        <InteractiveButton
                handlePress={handleCheckout}
                text='CHEKCOUT'
                className={width < 650 ? 'w-[100px] outline outline-black bg-lightPink' : 'w-[150px] outline outline-lightPink bg-lightPink hover:bg-turqoise'}
                textStyle={width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px] text-turqoise hover:text-lightPink'}
            />

        <InteractiveButton
                handlePress={handleCheckout}
                text='+'
                className={width < 650 ? 'w-[30px] bg-turqoise' : 'w-[50px] bg-turqoise hover:bg-lightPink'}
                textStyle={width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'}
            />
        </div>
    </div>
  );
}

export default ProductCard;
