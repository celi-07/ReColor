import React, { useState } from 'react'

import Tomato2 from '../assets/icon/ic_tomato2.svg'
import InteractiveButton from '../elements/InteractiveButton'
import { useNavigate } from 'react-router-dom'

const SectionHome5 = ({ width }) => {
    const [isHoverBtn, setIsHoverBtn] = useState(false)

    const navigate = useNavigate()

    const handleLearnHow = () => {
        navigate('/community')
        window.scrollTo(0, 0)
    }

    return (
        <div className={`flex gap-10 p-16 items-center`}>
            {width > 600 && (
                <img src={Tomato2} alt="" className={`${width < 1000 ? 'w-24 h-24' : ''}`} />
            )}
            <div className={`flex flex-col ${width <= 600 ? 'items-center' : 'items-start'}`}>
                <h2 className={`font-maurenTrial text-turqoise text-[30px]`}>take a step in making our earth a safer earth for everyone{width < 600 && (<img src={Tomato2} alt="" className={'w-12 h-12'} />)}</h2>
                <p className={`font-focus text-turqoise text-[16px]`}>Join us in creating a cleaner, greener future for everyone. Small actions lead to big changes—reduce waste, conserve energy, and make sustainable choices every day. Together, we can build a safer and healthier planet for generations to come.</p>
                <InteractiveButton
                    className={`outline-turqoise bg-turqoise mt-2 hover:bg-white hover:outline-turqoise`}
                    text='Learn How'
                    textStyle={`${isHoverBtn ? 'text-turqoise' : 'text-white'} font-maurenTrial text-[16px]`}
                    handlePress={handleLearnHow}
                    onMouseEnter={() => setIsHoverBtn(true)}
                    onMouseLeave={() => setIsHoverBtn(false)}
                />
            </div>
        </div>
    )
}

export default SectionHome5