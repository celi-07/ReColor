import React from 'react'
import InteractiveButton from './InteractiveButton'

const NumberData = ({
    numberString = '0',
    title = null,
    text = 'Text'
}) => {
  return (
    <div className={`w-[25%] min-w-[350px] p-4`}>
        <div className={`flex gap-5 items-center mb-4`}>
            <InteractiveButton
                text={numberString}
                className='w-[38px] bg-turqoise'
                textStyle='text-[24px] font-Mogra'
                disableHover={true}
                disabled={true}
            />
            {title}
        </div>
        <p className={`font-focus text-turqoise text-[18px] text-justify`}>{text}</p>
    </div>
  )
}

export default NumberData