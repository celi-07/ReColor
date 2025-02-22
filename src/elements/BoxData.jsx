import React from 'react'

const BoxData = ({
    image = '',
    title = '',
    description = '',
}) => {
  return (
    <div className={`w-[25%] flex flex-col items-center min-w-[300px] p-8`}>
        <img src={image} alt="box-data-image" />
        <h4 className={`font-maurenTrial text-white text-center text-[16px]`}>{title}</h4>
        <p className={`font-focus text-white text-[16px] text-center`}>{description}</p>
    </div>
  )
}

export default BoxData