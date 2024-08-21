import {useEffect} from 'react'
export default function Footer(){

    return <div className="foot_container relative top-[102px] left-[0px] w-[100vw] pl-[8vw] pr-[8vw] bg-shutter_color pt-[40px]">
    <div className='get_in_touch_container flex flex-rows h-[695px] w-[720px] '>
        <div className="get_in_touch_img flex justify-center">
            <img src="src/assets/img/contact-img.svg"/>
        </div>
        <div className='get_in_touch_text'>
            
            <form className='grid grid-rows-row_temp   grid-cols-col_temp  gap-x-[10px] gap-y-[7px]'>
                <div className="get_in_touch col-span-2 text-[45px] font-[700] text-[white] font-['Centra',sans-serif] pl-[10px]">
                Get In Touch
                </div>
                <input type="text" placeholder="First Name" className="first_name h-[62px] w-[170px] bg-[rgba(255,255,255,0.1)]   border-[1px] rounded-[20px] text-white font-['Centra',sans-serif] text-[16px] font-[100] border-[rbga(255,255,255,0.5)]" />

                <input type="text" className="last_name h-[62px] w-[170px] bg-[rgba(255,255,255,0.1)]  border-[1px] rounded-[20px]  font-['Centra',sans-serif] text-[16px] font-[300] border-[rbga(255,255,255,0.5)]"  placeholder='Last Name'/>

                <input type="text" className="email_address h-[62px] w-[170px] bg-[rgba(255,255,255,0.1)] border-white border-[1px] rounded-[20px]  font-['Centra',sans-serif] text-[16px] font-[300] border-[rbga(255,255,255,0.5)]" placeholder='Email Address'/>

                <input type="text" className="phone_number h-[62px] w-[170px] bg-[rgba(255,255,255,0.1)]  border-[1px] rounded-[20px] font-['Centra',sans-serif] text-[16px] font-[300] border-[rbga(255,255,255,0.5)]" placeholder='Phone Number'/> 
                
                <input type="text" className="message flex  justify-self-auto h-[200px] rounded-[5px] bg-[rgba(255,255,255,0.1)] col-span-2  border-[1px]  text-white font-['Centra',sans-serif] text-[16px] font-[300]  border-[rbga(255,255,255,0.5)]" placeholder='Message'/>
                

                <button className='send relative bg-white text-[18px] h-[55px] mt-[33px] w-[140px] text-black font-bold font-["Centra",sans-serif] z-[1] hover:text-white before:w-[0px] before:h-[55px] before:bg-[black]  before:content-[""] before:flex before:absolute before:top-[0px] bofore:left-[0px] hover:before:w-[140px] hover:before:transition-all  before:justify-center before:items-center before:duration-[500ms] group'>
                    <div className='z-[2] text-black group-hover:text-white absolute top-[13px] left-[45px]'>Send</div>
                    </button>
            </form>
        </div>
    </div>

    <div className="newsletter_container w-[84%]  bg-white py-[70px] px-[120px] h-[302px] rounded-[55px] absolute z-[100] bottom-[-180px]">
        <div className="newsletter flex flex-row justify-between">
            <div className="newsletter_text w-[218px] h-[125px] leading-[1.2em] tracking-[0.5px] font-[700] text-[black] font-['Centra',sans-serif] text-[24px]">
                Subscribe to our newsletter & Never miss latest update
            </div>
            <form className="flex flex-col gap-3">
                <input className="email  w-[212px] relative border-[1px] border-shutter_color rounded-[20px] grow"/>
                <button className="submit  w-[100px] grow bg-shutter_color">Submit</button>
                
            </form>
        </div>
    </div>
    <div className="foot_end h-[402px] bg-black w-[100vw] absolute left-[0] pl-[8vw] pr-[8vw]">
        <div className="foot_end_text absolute bottom-0 w-[84%] flex flex-row justify-between h-[100px]">
            <div className="logo text-white text-[32px] font-['Centra',sans-serif] font-[700] flex items-center ">LOGO</div>
            <div className="copyright_container flex flex-col items-center justify-between">
            <div className="icons_container flex flex-row justify-end mt-[10px] w-[100%]">
                <div className='rounded-full bg-[rgb(41,41,41)] h-[40px] w-[40px] flex justify-center items-center border-[1px] mr-[8px]'>
                <img src="src/assets/img/nav-icon1.svg"/>
                </div>
                <div className='rounded-full bg-[rgb(41,41,41)] h-[40px] w-[40px] flex justify-center items-center border-[1px] mr-[8px]'>
                <img src="src/assets/img/nav-icon2.svg"/>
                </div>
                <div className='rounded-full bg-[rgb(41,41,41)] h-[40px] w-[40px] flex justify-center items-center border-[1px]'>
                <img src="src/assets/img/nav-icon3.svg"/>
                </div>
            </div>
             
            <div className="copyright text-[#B8B8B8] text-[14px] font-[400] font-['Centra',sans-serif] tracking-[0.5px] mb-[20px]">
                Copyright 2022. All Rights Reserved
            </div>

            </div>
        </div>
    </div>
    </div>
}