import React from "react"
import Potato from "../assets/icon/ic_potato.svg"
import CommunityDyes from '../assets/icon/ic_community_dyes.svg'
import InteractiveButton from '../elements/InteractiveButton'

const SectionCommunity2 = ({ width }) => {
    return (
        <div className='flex flex-col bg-lightPink py-10 px-5 md:px-16'>
            {/* Best Suggestions Section */}
            <div className='flex flex-row flex-wrap gap-8 mb-16'>
                <div className={`flex items-center flex-col md:flex-row ${width <= 1000 ? 'w-full' : 'w-[80%]'}`}>
                    <div className='mb-5 md:mb-0 md:mr-8'>
                        <img src={Potato} alt="Potato Character" className="w-40 h-auto" />
                    </div>
                    
                    <div className='flex flex-col flex-1'>
                        <div className='flex justify-between items-center mb-5'>
                            <h2 className='text-xl font-bold text-blue'>BEST SUGGESTIONS FROM OUR BELOVED USERS</h2>
                        </div>
                        
                        <div className='flex flex-col gap-3'>
                            <input 
                                type="text" 
                                placeholder="Amazing dye" 
                                className='w-full p-3 rounded-tl-2xl rounded-br-2xl border border-blue text-blue focus:outline-blue'
                            />
                            <input 
                                type="text" 
                                placeholder="Amazingness amazing" 
                                className='w-full p-3 rounded-tl-2xl rounded-br-2xl border border-blue text-blue focus:outline-blue'
                            />
                            <textarea 
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla nunc ligula, at porta risus pulvinar non. Vivamus dignissim pharetra mattis. Integer dignissim congue neque in faucibus. Vivamus blandit sagittis." 
                                className='w-full p-3 rounded-tl-2xl rounded-br-2xl border border-blue text-blue h-32 focus:outline-blue'
                            ></textarea>
                            
                            <div className='mt-3 flex justify-start'>
                                <InteractiveButton 
                                    text="Send your suggestions"
                                    className="bg-blue"
                                    outlineColor="outline-blue"
                                    textStyle="text-sm"
                                    disableHover={true}
                                    disabled={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Community Dyes Stats Section */}
            <div className='flex flex-row flex-wrap gap-10'>
                <div className='relative'>
                    <img src={CommunityDyes} alt="Community Dyes" className="max-w-xs" />
                </div>
                
                <div className='flex-1'>
                    <h2 className='text-2xl font-bold text-blue mb-3'>SO FAR, WE HAVE ADOPTED</h2>
                    <h1 className='text-4xl font-bold text-blue mb-5'>78 RECIPES THAT OUR BELOVED USERS SHARED ON COMMUNITY</h1>
                    <p className='text-blue'>
                    🌿 <b>"Each recipe tells a story — of culture, creativity, and color."</b> <br />
                    Our community continues to inspire with unique dye blends passed down through generations or discovered through bold experimentation. Join us as we turn shared wisdom into vibrant possibilities.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionCommunity2