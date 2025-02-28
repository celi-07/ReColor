import React, { useState } from 'react'
import ColorScanner from '../elements/ColorScanner'
import Potato from '../assets/icon/ic_potato.svg'
import InteractiveButton from '../elements/InteractiveButton'
import CoconutBrown from '../assets/icon/ic_coconut_brown.svg'

const ScannerSection = ({ 
    width,
    baseColor = '',
    hoverColor = '',
    borderImg = '',
    textColor = 'text-turqoise',
    bgColor = '',
    baseBgColor = '',
    hoverBgColor = '',
    outlineColor = '',
    focusOutline = 'focus:outline-turqoise',
    borderOutline = 'border-turqoise',
    handleCheckout = () => {}
}) => {
    const [chosen, setChosen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <div className={`flex ${width <= 1215 ? 'justify-center' : 'justify-between'} ${width < 500 ? 'px-8' : 'p-16'} flex-wrap ${bgColor}`}>
            <ColorScanner 
                baseColor={baseColor}
                hoverColor={hoverColor}
                borderImg={borderImg}
                baseBgColor={baseBgColor}
                hoverBgColor={hoverBgColor}
                outlineColor={outlineColor}
                focusOutline={focusOutline}
                borderOutline={borderOutline}
                chosen={(bool) => setChosen(bool)}
            />
            {chosen ? (
                <div className={`flex flex-col justify-center items-center ${width < 500 ? 'min-w-0 w-full' : width < 730 ? 'min-w-[500px] p-4 w-[60%]' : 'p-4 w-[60%]'}`}>
                    <h2 className={`font-maurenTrial ${textColor} text-[30px] text-center`}>GET YOUR CUSTOM DYE WITH YOUR REQUESTED COLOR NOW!!</h2>
                    <img src={CoconutBrown} alt="" className={`w-32 h-32`} />
                    <p className={`font-focus ${textColor} text-[16px]`}>Enjoy your unique dye formula!</p>
                    <InteractiveButton
                        text='buy your customized dye'
                        className={`mt-16 mb-4 ${isHovered ? hoverBgColor : baseBgColor} ${outlineColor}`}
                        textStyle={`font-maurenTrial text-[16px] ${isHovered ? hoverColor : baseColor}`}
                        handlePress={handleCheckout}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        disableHover={true}
                    />
                    <p className={`font-focus ${textColor} text-[16px] mb-8 text-center`}>Your color data has been successfully requested! Click buy to order your custom colored dye!</p>
                </div>
            ) : (
                <div className={`${width < 500 ? 'min-w-0 w-full' : width < 730 ? 'min-w-[500px] p-4 w-[60%]' : 'p-4 w-[60%]'}`}>
                    <p className={`font-focus ${textColor} text-[13px] ${width < 1215 ? 'text-right pb-8' : 'text-left'}`}>*specifically for the scanning option</p>
                    <h2 className={`font-maurenTrial ${textColor} ${width < 500 ? 'text-[24px]' : 'text-[30px]'} ${width < 1215 ? 'text-center' : 'text-left'}`}>make sure the lighting is adequate to minimize the alteration of the code</h2>
                    <div className={`flex justify-between`}>
                        <p className={`font-focus ${textColor} ${width < 500 ? 'text-[14px]' : 'text-[16px]'} ${width <= 1215 ? 'text-center' : 'text-justify'}`}>When scanning a color, make sure your environment is well-lit to prevent any distortions or alterations in the detected shade. Natural daylight or white light is ideal for accurate results. Avoid shadows, reflections, or overly dim areas, as they can impact the accuracy of the scanned color. By ensuring proper lighting, you’ll get the most precise color match for your custom formula.</p>
                        {width > 1215 && <img src={Potato} alt="" className={`pt-4`} />}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ScannerSection