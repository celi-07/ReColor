import React from 'react'

import CurveFooterTop from '../assets/icon/ic_curve_footer_top.svg'
import Facebook from '../assets/icon/ic_facebook.svg'
import Instagram from '../assets/icon/ic_instagram.svg'
import Email from '../assets/icon/ic_email.svg'
import LinkedIn from '../assets/icon/ic_linkedIn.svg'

const Footer = ({ 
  width,
  isWavy = true, 
  bgColor = 'bg-turqoise'
}) => {
  return (
    <div>
        {isWavy && <img src={CurveFooterTop} alt="" className={`w-full object-contain block`}/>}
        <div className={`${bgColor} flex justify-between px-16 py-8 -mt-1 ${width < 600 ? 'flex-col gap-8' : ''}`}>
          {width < 600 ? (
            <h2 className={`font-maurenTrial text-[36px] text-white`}>Recolor</h2>
          ) : (
            <h2 className={`font-maurenTrial text-[36px] text-white leading-none whitespace-pre-line w-[100px]`}>Re{'\n'}co{'\n'}lor</h2>
          )}
          <div className={`flex justify-between ${width < 1200 ? 'flex-col gap-8' : 'w-[70%]'}`}>
            <div>
              <h2 className={`font-maurenTrial text-[24px] text-white`}>Contact</h2>
              <p className={`font-focus text-[16px] text-white`}>Email  : contact@recolor.com</p>
              <p className={`font-focus text-[16px] text-white`}>Phone  : +123 456 7890</p>
              <p className={`font-focus text-[16px] text-white`}>Address: 123 Recolor Street, Green City, Country</p>
            </div>
            <div>
              <h2 className={`font-maurenTrial text-[24px] text-white`}>Service</h2>
              <p className={`font-focus text-[16px] text-white`}>Customer Support</p>
              <p className={`font-focus text-[16px] text-white`}>Return Policy</p>
              <p className={`font-focus text-[16px] text-white`}>Terms & Conditions</p>
            </div>
            <div>
              <h2 className={`font-maurenTrial text-[24px] text-white`}>Sustainability</h2>
              <p className={`font-focus text-[16px] text-white`}>Our Green Commitment</p>
              <p className={`font-focus text-[16px] text-white`}>Eco-friendly Materials</p>
              <p className={`font-focus text-[16px] text-white`}>Recycling Program</p>
            </div>      
          </div>
          <div className={`flex ${width < 600 ? 'flex-row justify-center' : 'flex-col'} gap-4`}>
            <img src={Facebook} alt="" className={`w-8 h-8`}/>
            <img src={LinkedIn} alt="" className={`w-8 h-8`}/>
            <img src={Email} alt="" className={`w-8 h-8`}/>
            <img src={Instagram} alt="" className={`w-8 h-8`}/>
          </div>
        </div>
    </div>
  )
}

export default Footer