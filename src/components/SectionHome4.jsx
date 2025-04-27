import React, { useState } from 'react'
import CurveTextTop from '../assets/icon/ic_curve_text_top.svg'
import DiscountDye from '../assets/icon/ic_discount_dye.svg'
import Tomato from '../assets/icon/ic_tomato.svg'
import Accounts from '../assets/icon/ic_accounts.svg'
import Watermelon from '../assets/icon/ic_watermelon.svg'
import CoconutToungeOut from '../assets/icon/ic_coconut_tounge_out.svg'
import InteractiveButton from '../elements/InteractiveButton'
import './components.css'
import { useNavigate } from 'react-router-dom'

const SectionHome4 = ({ width }) => {
    const [isHoverBtn, setIsHoverBtn] = useState(false)

    const navigate = useNavigate()

    const handleJoinNow = () => {
        navigate('/community')
    }

    return (
        <div className={`relative`}>
            <img src={CurveTextTop} alt="" className={`w-full object-contain block`} />
            {width >= 1235 && (
                <div className={`absolute right-10 top-[180px]`}>
                    <h2 className={`font-maurenTrial text-white text-[24px] mb-4`}>Join Exciting Discussions on Natural Dyes</h2>
                    <div className={`flex items-center gap-8 ${width >= 1235 ? 'mb-4' : ''}`}>
                        <img src={Watermelon} alt="" className={`w-24 h-24`} />
                        <div className={`bg-[#FFE6E6] rounded-br-2xl rounded-tl-2xl ${width < 1350 ? 'w-[500px] h-[100px]' : 'w-[550px] h-[80px]'} p-4`}>
                            <p className={`font-focus text-blue text-[16px]`}>Discover the fascinating world of natural dyes! Engage in discussions about different dye sources and color extraction techniques.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className={`bg-[#FFE6E6] rounded-br-2xl rounded-tl-2xl ${width < 1350 ? 'w-[500px] h-[100px]' : 'w-[550px] h-[80px]'} p-4`}>
                            <p className={`font-focus text-blue text-[16px]`}>Learn how various plants, minerals, and organic materials contribute to the art of natural dyeing.</p>
                        </div>
                        <img src={CoconutToungeOut} alt="" className={`w-24 h-24`} />
                    </div>
                </div>
            )}

            <div className={`bg-blue p-16 ${width < 1210 ? 'flex flex-col items-center' : ''}`}> 
                <div className={`${width < 1210 ? '' : 'w-[45%]'}`}>
                    <h2 className={`font-maurenTrial text-white text-[30px] ${width < 1350 ? 'text-center' : 'text-left'}`}>Community</h2>
                    <p className={`font-focus text-white text-[16px] text-justify`}>Join our vibrant community of natural dye enthusiasts! Share your experiences, learn from others, and explore new dyeing techniques. Whether you are a beginner or an expert, connect with like-minded individuals who are passionate about sustainable and creative coloring methods.</p>
                </div>

                {width < 1235 && (
                    <div className={`pt-8`}>
                        <h2 className={`font-maurenTrial text-white text-[24px] text-center mb-4`}>Join Exciting Discussions on Natural Dyes</h2>
                        <div className="flex items-center gap-8 mb-4">
                            <img src={Watermelon} alt="" className={`${width < 450 ? 'w-12 h-12' : 'w-24 h-24'}`} />
                            <div className={`bg-[#FFE6E6] rounded-br-2xl rounded-tl-2xl p-4`}>
                                <p className={`font-focus text-blue ${width < 450 ? 'text-[14px]' : 'text-[16px]'}`}>Discover the fascinating world of natural dyes! Engage in discussions about different dye sources and color extraction techniques.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className={`bg-[#FFE6E6] rounded-br-2xl rounded-tl-2xl p-4`}>
                                <p className={`font-focus text-blue ${width < 450 ? 'text-[14px]' : 'text-[16px]'}`}>Learn how various plants, minerals, and organic materials contribute to the art of natural dyeing.</p>
                            </div>
                            <img src={CoconutToungeOut} alt="" className={`${width < 450 ? 'w-12 h-12' : 'w-24 h-24'}`} />
                        </div>
                    </div>
                )}
                
                <div className={`mt-16 flex items-end justify-between gap-10 ${width < 1000 ? 'flex-wrap' : ''}`}>
                    <div className={`flex flex-col flex-4`}>
                        <h2 className={`font-maurenTrial text-white ${width < 1000 ? 'text-[24px] text-center' : 'text-[30px]'}`}>acquire points to get discounts</h2>
                        <div className="flex items-center gap-10">
                            {width > 450 && (
                                <img src={DiscountDye} alt="" className={`${width < 600 ? 'w-20 h-20' : 'w-40 h-40'}`}/>
                            )}
                            <p className={`font-focus text-white text-[16px] text-justify`}>Earn points every time you engage with our community! Participate in discussions, share your dyeing projects, and invite friends to join. Redeem your points for exclusive discounts on our premium natural dye products.</p>
                        </div>
                    </div>
                    <div className={`flex items-center flex-6 ${width < 1000 ? 'gap-10' : ''}`}>
                        {width > 450 && (
                            <img src={Tomato} alt="" className={`${width < 600 ? 'w-20 h-20' : width < 1000 ? 'w-40 h-40' : 'w-56 h-56'}`} />
                        )}
                        <div>
                            <img src={Accounts} alt="" className={`w-8 h-8`} />
                            <h2 className={`font-maurenTrial text-white text-[24px] my-4`}>Fun fact</h2>
                            <p className={`font-focus text-white text-[16px]`}>Did you know that some of the world’s most famous natural dyes, like indigo and cochineal, have been used for centuries? Ancient civilizations used plant-based dyes for textiles, cosmetics, and even artwork. Natural dyeing is an age-old craft that continues to thrive in sustainable fashion today!</p>
                        </div>
                    </div>
                </div>

                <InteractiveButton
                    text='JOIN NOW'
                    textStyle={`font-maurenTrial ${isHoverBtn ? 'text-white' : 'text-blue'} text-[16px]`}
                    className={`outline-white ${isHoverBtn ? 'bg-blue' : 'bg-white'} mt-16 flex justify-self-center`}
                    onMouseEnter={() => setIsHoverBtn(true)}
                    onMouseLeave={() => setIsHoverBtn(false)}
                    disableHover={true}
                    handlePress={handleJoinNow}
                />
            </div>
        </div>
    )
}

export default SectionHome4