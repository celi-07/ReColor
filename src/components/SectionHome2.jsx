import React from 'react'
import InteractiveButton from '../elements/InteractiveButton'
import Coconut from '../assets/icon/ic_coconut.svg'

const SectionHome2 = ({ width }) => {
    const handlePress = () => {
        console.log("Learn How")
    }

    return (
        <div className={`bg-orange flex items-center py-8 px-16`}>
            <div>
                <div className={`flex justify-between items-center mb-4`}>
                    <h2 className={`font-maurenTrial text-white ${width < 600 ? 'text-[26px]' : 'text-[30px]' }`}>generate your own unique formula of natural dyes now!</h2>
                    {width < 700 && (
                        <img src={Coconut} alt="" className='w-16 h-16'/>
                    )}
                </div>
                <p className={`font-focus text-white text-[16px] mb-2`}>Discover the magic of natural dyes and craft your own unique color blends! With sustainable and eco-friendly ingredients, you can create vibrant hues for fabrics, crafts, and more. Unlock the secrets of plant-based dyes and let your creativity shine.</p>
                <InteractiveButton
                    className={`outline-white bg-white mt-2 mb-8`}
                    text='Learn How'
                    textStyle={`text-orange font-maurenTrial text-[16px]`}
                    disableHover={true}
                    handlePress={handlePress}
                />
                <p className={`font-focusItalic text-white text-[14px] mt-2`}>*This website is still in beta testing, all generated data may be inaccurate</p>
            </div>
            {width >= 700 && (
                <img src={Coconut} alt=""/>
            )}
        </div>
    )
}

export default SectionHome2