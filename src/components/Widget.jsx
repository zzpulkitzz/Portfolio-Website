import { useEffect } from "react"

export default function Widget(){

    useEffect(()=>{
        let img_box=document.getElementsByClassName("2")[0]
        let text_cont=document.getElementsByClassName("")[0]
        img_box.addEventListener("mouseout",()=>{
            
        })
    },[0])

    return <div className="widget_conatiner h-[340px] w-[700px] grid grid-rows-2 grid-cols-3 ml-[8vw] mr-[8vw] ">
       
        <div className="1 bg-[url(src/assets/img/project-img1.png)] bg-cover bg-no-repeat  before:h-[0%] before:w-[100%] before:rounded-[11px] mb-[15px] mr-[15px] 
         before:bg-shutter_color before:content-[''] before:block before:opacity-85 hover:before:h-[100%] before:transition-all before:duration-[400ms] rounded-[18px] overflow-hidden group z-0 relative before:absolute before:top-0 before:left-0">
     
        
                <div className="text_cont opacity-0 absolute  top-[50px] group-hover:top-[20px] hover:transition-all duration-[750ms] left-[5px] text-center  group-hover:opacity-100 z-10 ">
                    <h1 className=" text-[30px] font-bold ">      Business Startup 
                    </h1>
                    <p className=" tracking-[0.8px] text-[15px] font-[400]">
                        Design & Development
                    </p>
                </div>
            
        </div>
        
        <div className="2 bg-[url(src/assets/img/project-img2.png)] bg-cover bg-no-repeat  before:h-[0px] before:w-[100%] before:rounded-[11px] mb-[15px] mr-[15px] 
         before:bg-shutter_color before:content-[''] before:block before:opacity-85 hover:before:h-[100%] before:transition-all before:duration-[400ms] rounded-[18px] overflow-hidden group z-0 relative before:absolute before:top-0 before:left-0">
            <div className="text_cont opacity-0 relative  top-[50px] group-hover:top-[20px] hover:transition-all duration-[750ms] left-[5px] text-center  group-hover:opacity-100">
            <h1 className=" text-[30px] font-bold "> Business Startup 
            </h1>
            <p className=" tracking-[0.8px] text-[15px] font-[400]">
                Design & Development
            </p>
            </div>
        </div>
        <div className="3 bg-[url(src/assets/img/project-img3.png)] bg-cover bg-no-repeat  before:h-[0px] before:w-[100%] before:rounded-[11px] mb-[15px] mr-[15px] 
         before:bg-shutter_color before:content-[''] before:block before:opacity-85 hover:before:h-[100%] before:transition-all before:duration-[400ms] rounded-[18px] overflow-hidden group z-0 relative before:absolute before:top-0 before:left-0">

<div className="text_cont opacity-0 relative  top-[50px] group-hover:top-[20px] hover:transition-all duration-[750ms] left-[5px] text-center  group-hover:opacity-100">
            <h1 className=" text-[30px] font-bold "> Business Startup 
            </h1>
            <p className=" tracking-[0.8px] text-[15px] font-[400]">
                Design & Development
            </p>
            </div>

         </div>

        <div className="4 bg-[url(src/assets/img/project-img1.png)] bg-cover bg-no-repeat  before:h-[0px] before:w-[100%] before:rounded-[11px] mb-[15px] mr-[15px] 
         before:bg-shutter_color before:content-[''] before:block before:opacity-85 hover:before:h-[100%] before:transition-all before:duration-[400ms] rounded-[18px] overflow-hidden group z-0 relative before:absolute before:top-0 before:left-0">
            
            <div className="text_cont opacity-0 relative  top-[50px] group-hover:top-[20px] hover:transition-all duration-[750ms] left-[5px] text-center  group-hover:opacity-100">
            <h1 className=" text-[30px] font-bold "> Business Startup 
            </h1>
            <p className=" tracking-[0.8px] text-[15px] font-[400]">
                Design & Development
            </p>
            </div>

        </div>


        <div className="5 bg-[url(src/assets/img/project-img2.png)] bg-cover bg-no-repeat  before:h-[0px] before:w-[100%] before:rounded-[11px] mb-[15px] mr-[15px] 
         before:bg-shutter_color  before:content-[''] before:block before:opacity-85 hover:before:h-[100%] before:transition-all before:duration-[400ms] rounded-[18px] overflow-hidden group z-0 relative before:absolute before:top-0 before:left-0">

<div className="text_cont opacity-0 relative  top-[50px] group-hover:top-[20px] hover:transition-all duration-[750ms] left-[5px] text-center  group-hover:opacity-100">
            <h1 className=" text-[30px] font-bold "> Business Startup 
            </h1>
            <p className=" tracking-[0.8px] text-[15px] font-[400]">
                Design & Development
            </p>
            </div>

        </div>


        <div className="6 bg-[url(src/assets/img/project-img3.png)] bg-cover bg-no-repeat  before:h-[0px] before:w-[100%] before:rounded-[11px] mb-[15px] mr-[15px] 
         before:bg-shutter_color  before:content-[''] before:block before:opacity-85 hover:before:h-[100%] before:transition-all before:duration-[400ms] rounded-[18px] overflow-hidden group z-0 relative before:absolute before:top-0 before:left-0">

            <div className="text_cont opacity-0 relative  top-[50px] group-hover:top-[20px] hover:transition-all hover:duration-[750ms] left-[5px] text-center  group-hover:opacity-100">
            <h1 className=" text-[30px] font-bold "> Business Startup 
            </h1>
            <p className=" tracking-[0.8px] text-[15px] font-[400]">
                Design & Development
            </p>
            </div>

        </div>


    </div>
}