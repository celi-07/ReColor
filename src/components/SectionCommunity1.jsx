import React from "react"
import Potato from "../assets/icon/ic_potato.svg"
import WaterMelon from "../assets/icon/ic_watermelon.svg"
import CoconutBrown from '../assets/icon/ic_coconut2.svg'
import InteractiveButton from "../elements/InteractiveButton"

const SectionCommunity1 = ({ width }) => {
    // Sample data for points records
    const pointsRecords = [
        { points: "+31", date: "Sep 19" },
        { points: "+15", date: "Sep 15" },
        { points: "+15", date: "Sep 11" },
    ]

    // Sample data for server list
    const servers = [
        { name: "DYE.IO", participants: "12 participants online" },
        { name: "DYERBROS", participants: "9 participants online" },
        { name: "MR CREATIVE", participants: "12 participants online" },
        { name: "COLORING", participants: "27 participants online" },
    ]

    // Sample data for chat messages
    const chatMessages = [
        { 
            avatar: WaterMelon, 
            message: "Whoa! Just tried out the custom dye tool on ReColor — it's so satisfying seeing the color change in real time! 🔥"
        },
        { 
            avatar: CoconutBrown, 
            message: "Right?? I mixed a forest green with a hint of ochre and ended up with this super earthy tone. Kinda want it on everything now 😭"
        },
        { 
            avatar: WaterMelon, 
            message: "Haha I went the opposite — pastel dream. Lavender with soft sky blue. Super smooth interface too 🌈✨"
        },
    ]

    return (
        <div className='flex flex-col bg-blue text-white py-10 px-5 md:px-16' id='section1'>
            {/* Top section with Profile, Points, Stats, Badge */}
            <div className={`flex flex-row justify-between gap-10 mb-10  ${width < 900 ? 'flex-col' : ''}`}>
                {width >= 900 ? 
                    <>
                        {/* Profile Section */}
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-maurenTrial text-[12px]'>NOVICE DYE MAKER</p>
                                <img src={Potato} alt="Potato Character" className="w-40 h-auto" />
                            </div>
                            <p className='text-center mt-2 font-maurenTrial text-[12px]'>ANONYMOUS</p>
                        </div>

                        {/* Points Section */}
                        <div className='flex flex-col items-center justify-center font-maurenTrial'>
                            <h2 className='text-xl mb-2'>POINTS</h2>
                            <div className='relative'>
                                {/* Circle with border */}
                                <div className='w-32 h-32 rounded-full border-4 border-white flex items-center justify-center'>
                                    <span className='text-4xl'>553</span>
                                </div>

                                {/* Points records below */}
                                <div className='mt-5'>
                                    {pointsRecords.map((record, index) => (
                                        <div key={index} className='flex justify-between text-sm mb-1'>
                                            <span>{record.points}</span>
                                            <span className='w-12'>{record.date}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                    : width >= 400 ?
                    <div className="flex justify-around">
                        {/* Profile Section */}
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-maurenTrial text-[12px]'>NOVICE DYE MAKER</p>
                                <img src={Potato} alt="Potato Character" className="w-40 h-auto" />
                            </div>
                            <p className='text-center mt-2 font-maurenTrial text-[12px]'>ANONYMOUS</p>
                        </div>

                        {/* Points Section */}
                        <div className='flex flex-col items-center justify-center font-maurenTrial'>
                            <h2 className='text-xl mb-2'>POINTS</h2>
                            <div className='relative'>
                                {/* Circle with border */}
                                <div className='w-32 h-32 rounded-full border-4 border-white flex items-center justify-center'>
                                    <span className='text-4xl'>553</span>
                                </div>

                                {/* Points records below */}
                                <div className='mt-5'>
                                    {pointsRecords.map((record, index) => (
                                        <div key={index} className='flex justify-between text-sm mb-1'>
                                            <span>{record.points}</span>
                                            <span className='w-12'>{record.date}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        {/* Profile Section */}
                        <div className='flex flex-col items-center mb-8'>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-maurenTrial text-[12px]'>NOVICE DYE MAKER</p>
                                <img src={Potato} alt="Potato Character" className="w-40 h-auto" />
                            </div>
                            <p className='text-center mt-2 font-maurenTrial text-[12px]'>ANONYMOUS</p>
                        </div>

                        {/* Points Section */}
                        <div className='flex flex-col items-center justify-center font-maurenTrial'>
                            <h2 className='text-xl mb-2'>POINTS</h2>
                            <div className='relative'>
                                {/* Circle with border */}
                                <div className='w-32 h-32 rounded-full border-4 border-white flex items-center justify-center'>
                                    <span className='text-4xl'>553</span>
                                </div>

                                {/* Points records below */}
                                <div className='mt-5'>
                                    {pointsRecords.map((record, index) => (
                                        <div key={index} className='flex justify-between text-sm mb-1'>
                                            <span>{record.points}</span>
                                            <span className='w-12'>{record.date}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {/* Stats Section */}
                <div className={`flex flex-col font-maurenTrial items-center`}>
                    <h2 className='text-xl mb-2'>STATS</h2>
                    <div className='flex flex-col gap-2 w-full'>
                        {['LIKES', 'COMMENTS', 'PINGS', 'ADOPTED IDEAS'].map((item, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <span className='w-24'>{item}</span>
                                <div className={`flex-1 bg-white rounded-tl-2xl rounded-br-2xl px-3 py-1 min-w-[150px]`}>
                                    <span className='text-blue font-bold'>37</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Badge Section */}
                <div className='flex flex-col items-end'>
                    <h2 className='text-xl mb-2 font-maurenTrial'>BADGE</h2>
                    <div className='bg-white rounded-tl-2xl rounded-br-2xl p-3 text-blue flex-wrap font-maurenTrial max-w-[550px]'>
                        <h3 className='font-bold'>NOVICE DYE MAKER</h3>
                        <p className='text-xs mt-1 text-wrap flex-wrap'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nunc fringilla nunc ligula, at porta risus pulvinar non. 
                            Vivamus dignissim pharetra mattis.
                        </p>
                    </div>
                    
                    {/* Streaks */}
                    <div className='mt-4'>
                        <h3 className='text-right font-bold font-maurenTrial'>STREAKS</h3>
                        <div className='flex justify-end mt-2 font-maurenTrial'>
                            {[1, 2, 3, 4, 5].map((_, index) => (
                                <div key={index} className='w-8 h-8'>
                                    <img src={Potato} alt="Streak" className="w-full h-full" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="rounded-tl-2xl rounded-br-2xl mt-3 mb-1 w-60 h-4 border-white border-2 flex">
                                <div className="bg-white rounded-tl-2xl rounded-br-2xl flex-[69]"></div>
                                <div className="flex-[31]"></div>
                            </div>
                            <p className='text-xs text-center text-white font-maurenThin'>
                                <span className='text-white font-maurenTrial'>31</span> Until the next badge
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom section with Servers and Chat */}
            <div className={`flex flex-row gap-10 mt-5 flex-wrap ${width < 600 ? 'items-center' : ''}`}>
                {/* Servers List */}
                <div className={`flex flex-col ${width < 600 ? 'w-full mb-2' : ''}`}>
                    <div className='flex items-center gap-8 mb-4 justify-between'>
                        <h2 className='text-xl font-bold'>SERVERS</h2>
                        <InteractiveButton 
                            text="CREATE SERVER"
                            className="bg-white"
                            outlineColor="outline-white"
                            textStyle="text-sm text-blue"
                            disableHover={true}
                            disabled={true}
                        />
                    </div>
                    
                    <div className='flex flex-col gap-3'>
                        {servers.map((server, index) => (
                            <div key={index} className='bg-blue-dark rounded-tl-2xl rounded-br-2xl p-3 border border-white'>
                                <p className='font-bold'>{server.name}</p>
                                <div className='flex items-center gap-2 text-xs'>
                                    <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                                    <span>{server.participants}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {width >= 600 && <div className="w-0.5 h-100 bg-white"></div>}

                {/* Chat Section */}
                <div className='flex flex-col flex-1 justify-between'>
                    <div className='flex flex-col gap-4'>
                        {chatMessages.map((message, index) => (
                            <div key={index} className='flex items-start gap-3'>
                                {index % 2 === 0 && ( <img src={message.avatar} alt="User avatar" className="w-12 h-12" />)}
                                <div className='flex-1 bg-white rounded-tl-2xl rounded-br-2xl p-3'>
                                    <p className='text-blue text-sm'>{message.message}</p>
                                </div>
                                {index % 2 !== 0 && ( <img src={message.avatar} alt="User avatar" className="w-12 h-12" />)}
                            </div>
                        ))}
                    </div>
                    
                    {/* Chat Input */}
                    <div className='flex items-center mt-5'>
                        <div className='flex-1 border-white border-2 rounded-tl-2xl rounded-br-2xl p-2 flex items-center'>
                            <input 
                                type="text" 
                                placeholder="Type..." 
                                className='flex-1 pl-2 text-white outline-none bg-transparent font-focusGrotesk'
                                disabled={true}
                            />
                            <button className='text-white'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 8L1 15V1L15 8Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionCommunity1