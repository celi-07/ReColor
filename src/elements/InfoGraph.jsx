import React from 'react'
import InteractiveButton from './InteractiveButton'

const InfoGraph = ({
    text = '',
    barWidth = '',
    percent = 0,
    fontSize = 'text-[20px]',
}) => {
  return (
    <div className={`flex items-center mb-4`}>
        <h2 className={`font-maurenTrial text-white text-[16px] w-[200px]`}>{text}</h2>
        <InteractiveButton
            className={`outline-white bg-white ${barWidth}`}        
            disableHover={true}
            disabled={true}
            text={`${percent}%`}
            textStyle={`text-turqoise font-Mogra text-right pr-2 ${fontSize}`}
        />
    </div>
  )
}

export default InfoGraph