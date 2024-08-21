import { useEffect,useState } from "react"
import Widget from "./Widget"
export default function Main(){
    
    const [chngngText,setChngngText]=useState("")

    const [slctdTab,setSlctdTab]=useState()

    function onclick(action){
        setSlctdTab(action.target.className.slice(0,4))
    }
    useEffect(()=>{
        let img=document.getElementsByClassName("astro_img")[0]
        
        setTimeout(()=>{
            img.classList.remove("animate-anim_img_grow")
            img.classList.add("animate-anim_img_move")
        },[1000])

        let textLst=["Web Developer","Web Designer", "UI/UX Designer"]
        let overall_total=""
            
        
        let rightArrow=document.getElementsByClassName("arrow2_img_cont")[0]
        let leftArrow=document.getElementsByClassName("arrow1_img_cont")[0]

        let skill_img1=document.getElementsByClassName("skill_img0")[0]

        let skill_img2=document.getElementsByClassName("skill_img1")[0]
        let skill_img3=document.getElementsByClassName("skill_img2")[0]
        let skill_img4=document.getElementsByClassName("skill_img3")[0]
        let count=-1
        let loop=0
        let img_list=[[skill_img1,0],[skill_img2,0],[skill_img3,0],[skill_img4,0]]

        let delay=true
        rightArrow.addEventListener("click",()=>{
            if(delay===true){
                delay=false
                setTimeout(()=>{
                    
                
            console.log(delay)
            count=count+1
            
            
            
            


            img_list.forEach((val,ind)=>{
                let index
                switch(ind){
                    case 0:
                        index=1
                        break
                    case 1:
                        index=2
                        break
                    case 2:
                        index=3
                        break
                    case 3:
                        index=0
                        break

                }
                if((250*index-250*(count+1)+(count2+1)*250)+(Math.floor(val[1]/(index+1)))*1000-(250)<-250){
                    val[1]=val[1]+index+1
                    setTimeout(()=>{
                        val[0].style.transitionProperty="all"
                        val[0].style.transitionDuration="0.01s"
                        setTimeout(()=>{
                            val[0].style.top=""
                        },[500])
                        val[0].style.top="1200px"
                        val[0].style.left='500px'
                    },1000)
                    
   
                }else{
                    val[0].style.transitionProperty="all"
                    val[0].style.transitionDuration="1s"
                    val[0].style.left=`${(250*index-250*(count+1)+(count2+1)*250)+(Math.floor(val[1]/(index+1)))*1000-(250)}px`
                }
            })
        },100)
        setTimeout(()=>{
            delay=true
        },[1000])
            }})
        let count2=-1
        let img_list2=[[skill_img1,0],[skill_img2,0],[skill_img3,0],[skill_img4,0]]
        let delay2=true

        leftArrow.addEventListener("click",()=>{
            if(delay2===true){
            delay2=false
            setTimeout(()=>{
            
            count2=count2+1
            let main_count2=count%4
            let active_img=document.getElementsByClassName(`skill_img${main_count2}`)[0]

            
            img_list2.forEach((val,ind)=>{

                let index2
                switch(ind){
                    case 0:
                        index2=1
                        break
                    case 1:
                        index2=2
                        break
                    case 2:
                        index2=3
                        break
                    case 3:
                        index2=0
                        break

                }
                
                if((250*index2-250*(count+1)+(count2+1)*250)-(Math.floor(val[1]/(index2+1)))*1000-(250)>500){
                    val[1]=val[1]+index2+1
                    setTimeout(()=>{
                        val[0].style.transitionProperty="all"
                        val[0].style.transitionDuration="0.01s"
                        setTimeout(()=>{
                            val[0].style.top=""
                        },[20])
                        val[0].style.top="1200px"
                        val[0].style.left='-250px'
                    },1000)
                    
   
                }else{
                    val[0].style.transitionProperty="all"
                    val[0].style.transitionDuration="1s"
                    val[0].style.left=`${(250*index2-250*(count+1)+(count2+1)*250)-(Math.floor(val[1]/(index2+1)))*1000-(250)}px`
                }
            })
        },100)}
        setTimeout(()=>{
            delay2=true
        },[1000])
            
        })
        
    },[0])
    return <main className="relative w-[84vw] top-[102px] pt-[170px] flex flex-col ">
        <div className="sub_main flex flex-col text-white font-['Centra',sans-serif] font-bold  w-[84vw] ">
        <div className="sub_main2 flex w-[100%] flex-row  pl-[8vw] pr-[8vw] ">
        <div className="text_container ">
            <div className="welcome_text text-[20px] h-[50px] w-[272px] bg-welcome_grad pl-[5px] border-[1px] mt-[8px] mb-[8px] border-[rgb(175,147,165)] flex justify-center items-center tracking-[0.8px] ">Welcome to my Portfolio</div>
            <h1 className="hello_text text-[65px] leading-[1]"><span className="block">Hi I'm Pulkit {chngngText}</span></h1>
            <p className="para_text text-[18px] tracking-[0.8px]  leading-[1.5em] text-[#B8B8B8] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae soluta deserunt quibusdam libero quae earum velit odit in sit aspernatur, dolor autem qui itaque! Ducimus consequuntur accusantium ratione optio!
            </p>
        </div>
        <div className="img_container w-[1800px] flex justify-center items-center h-[400px]">
            <img src="src/assets/img/header-img.svg" className='astro_img w-[1800px] '/>
        </div>
        </div>
        <button className="h-[] text-[white] flex flex-row font-bold tracking-[0.8px] text-[20px] font-['Centra',sans-serif] pl-[8vw] pr-[8vw]">
        
            Let's Connect 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="currentColor" className="ml-[8px] mt-[3px]">

            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
            </svg>
        </button>
        <div className='skills_container  w-[100vw] h-[450px]  bg-[rgb(18,18,18)]  z-[5] mt-[186px] pl-[8vw] pr-[8vw] relative'>
            <div className=" absolute skills_container2 h-[450px] top-[-60px] bg-[rgb(21,21,21)] rounded-[64px] z-[10] pt-[60px] pb-[60px] pr-[50px] pl-[50px] flex flex-col justify-between w-[84%]">
                <div className="skills_text_container flex flex-col text-justify ">
                    <h1 className="skills flex justify-center">Skills</h1>
                    <p className="skills_text flex flex-col">
                    <span className="flex justify-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </span>
                    <span className="flex justify-center">
                    Lorem Ipsum has been the industry's standard dummy text.
                    </span>
                    </p>
                </div>
                    <div className="carousel_container
                    flex flex-row h-[206.5px] justify-center">
                    
                    <div className="arrow1_img_cont h-[100%] flex items-center justify-center">
                    <img src="src/assets/img/arrow1.svg" 
                    className="h-[30px] w-[30px] "/>
                    </div>

                        <div className="carousel_window  flex flex-row justify-between ml-[20px] mr-[20px] overflow-hidden h-[206.5px]">
                        
                        <div className="wrap h-[500px] w-[500px] relative top-[-146.5px]">

                            <img src="src/assets/img/meter1.svg" className="skill_img0 relative top-[146.5px] left-[0px]"/>
                            <img src="src/assets/img/meter2.svg" className="skill_img1 absolute top-[146.5px] left-[250px] "/>
                            <img src="src/assets/img/meter2.svg" className="skill_img2 absolute top-[146.5px] left-[500px] "/>
                            <img src="src/assets/img/meter2.svg" className="skill_img3 absolute top-[146.5px] left-[-250px] "/>

                        </div>
                        
                       
                    </div>

                    <div className="arrow2_img_cont h-[100%] flex items-center justify-center">
                    <img src="src/assets/img/arrow2.svg" 
                    className="h-[30px] w-[30px] flex items-center justify-center "/>
                    </div>
                    
                    </div>
            </div>
            <div className="shade_img_cont absolute top-[15%] z-[0] left-[0]">
                <img src="src/assets/img/color-sharp.png" className="shade_img w-[40vw] "/>
            </div>
        </div>
        <div className="projects_container  flex flex-col  w-[100vw] bg-black pt-[80px] pb-[125px] items-center justify-between">
        <div className="projects_container_2  w-[100vw]  flex flex-col h-[290px]  bg-black items-center justify-between">
            <h1 className="projects_head text-[45px] flex justify-center items-center font-['Centra',sans-serif]">
                Projects
            </h1>
            <p className="flex justify-center items-center w-[520px]  text-[#B8B8B8] text-[18px] leading-[1.5em]
            tracking-[0.8px] text-center font-['Centra',sans-serif] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at praesentium nemo quasi saepe inventore sit excepturi. Iste harum itaque ducimus! Distinctio maiores aut maxime illo quam itaque incidunt sed!</p>
            <div className="tabs-container flex flex-row w-[636px] rounded-[55px] h-[56px] font-['Centra',sans-serif] font-[300] tracking-[0.8px] border-white border-[1px] bg-[#1A1A1A] mb-[35px]">
                <button className="tab1 w-[224px] text-[17px] flex justify-center items-center border-r-[0.75px] hover:bg-tab_color focus:bg-tab_color  rounded-l-[55px]" onClick={onclick}>Tab 1</button>
                <button className="tab2 w-[224px] text-[17px] flex justify-center items-center border-r-[0.75px] hover:bg-tab_color focus:bg-tab_color " onClick={onclick}>Tab 2</button>
                <button className="tab3 w-[224px] text-[17px] flex justify-center items-center hover:bg-tab_color rounded-r-[55px] focus:bg-tab_color " onClick={onclick}>Tab 3</button>
            </div>
        </div>

        {slctdTab==="tab1"? <div><Widget/></div>: slctdTab==="tab3"? <p className="w-[390px] text-center text-[#B8B8B8] font-['Centra',sans-serif] font-[300] text-[18px] mt-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam ratione voluptatem suscipit quo, sit porro illo illum itaque quod vel totam repellat eum eaque iusto maxime dignissimos laudantium veritatis?</p> :  null }
        </div>
        </div>

        

    </main>
}
