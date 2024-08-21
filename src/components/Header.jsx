import logo1 from "../assets/img/nav-icon1.svg"
import logo2 from "../assets/img/nav-icon2.svg"
import logo3 from "../assets/img/nav-icon3.svg"
import { useEffect } from "react"
import { useState } from "react"

export default function Header(){
    const [text,setText]=useState("")
    //hover code for logos
    useEffect(()=>{                         
        let li=document.getElementsByClassName("li")[0]
        let li_img=document.getElementsByClassName("li")[1]
        let ig=document.getElementsByClassName("ig")[0]
        let ig_img=document.getElementsByClassName("ig")[1]
        let fb=document.getElementsByClassName("fb")[0]
        let fb_img=document.getElementsByClassName("fb")[1]

        let arr=[li,ig,fb]
        let arr_img=[li_img,ig_img,fb_img]

        arr.forEach((elem,val)=>{
            
            elem.addEventListener("mouseover",()=>{
                arr_img[val].src=`src/assets/img/nav-icon${val+1}_black.svg`
            })
            elem.addEventListener("mouseout",()=>{
                arr_img[val].src=`src/assets/img/nav-icon${val+1}.svg`
            })
        })

        const onScroll = () => {
            let head=document.getElementsByClassName('head')[0]
        
            if(window.scrollY>100){
                head.classList.add('animate-anim_head_shrink')
                if(head.classList.contains("animate-anim_head_grow")){
                    head.classList.remove('animate-anim_head_grow')
                }
                
            }else{
                if(head.classList.contains("animate-anim_head_shrink")){
                    head.classList.remove('animate-anim_head_shrink')
                    head.classList.add('animate-anim_head_grow')
                }
                
                
            }

          };
        
          window.addEventListener('scroll', onScroll);
          let textLst=["Web Developer","Web Designer","UI/UX Designer"]
          
        
        
                
                
    },[0])

    return <header className="head flex flex-row justify-between text-white h-[82px] fixed left-0 w-[100vw] top-[20px] pl-[8vw] pr-[8vw] z-[12]" >
        <div className="site_name w-[85px] text-[32px] flex justify-center h-[100%] items-center text-[rgb(255,255,255)">

            <img src="src/assets/img/logo.svg" className="h-[100px] w-[100px]"/>
        </div>
        <div className="navbar flex flex-row justify-between w-[652px]">
            <div className="navbar_mini flex flex-row justify-between w-[268px] text-[rgb(196,196,196)] font-['Centra',sans-serif] font-normal">
                <div className="home flex justify-center items-center ">Home</div>
                <div className="skills flex justify-center items-center">Skills</div>
                <div className="projects flex justify-center items-center">Projects</div>
            </div>
            <div className="navbar_mini_sec flex flex-row justify-between w-[340px] items-center">
            <div className="socials flex flex-row justify-between items-center w-[135px] ">
                <div className="li border-[1px] rounded-full p-[10px] hover:bg-white bg-[rgb(38,38,38)]">
                <img className="li h-[18px] flex justify-center items-center  " src={logo1}></img>
                </div>

                <div className="ig border-[1px] rounded-full p-[10px] hover:bg-white bg-[rgb(38,38,38)]">
                <img className="ig h-[18px] flex justify-center items-center    " src={logo2}></img>
                </div>

                <div className="fb border-[1px] rounded-full p-[10px] hover:bg-white bg-[rgb(38,38,38)]">
                <img className="fb h-[18px] flex justify-center items-center    " src={logo3}></img>
                </div>
            </div>
            <button className="button w-[182px] h-[70px] text-[18px] font- border-white border-[1px] flex items-center justify-center font-['Centra',sans-serif] font-bold">Let's Connect</button>
            </div>
        </div>
    </header>
}