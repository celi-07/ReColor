import React from "react";

import Potato from "../assets/icon/ic_potato.svg";

const SectionCommunity1 = ({ width }) => {
    return (
        <div className='flex flex-col items-center justify-center bg-blue'>
            <div className={`flex flex-row justify-between gap-10 mb-5 flex-wrap`}>
                <div className={`flex flex-row `}>
                    <img src={Potato} alt="" />
                    
                </div>

            </div>
        </div>




    )
}

export default SectionCommunity1