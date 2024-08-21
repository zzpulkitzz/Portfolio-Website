/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'welcome_grad':'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);',
        "tab_color":"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
        "shutter_color":"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)"
  
      },
      backgroundPosition:{
        "blabla":"center -40px"

      },
      gridTemplateRows: {
        "row_temp":"70px repeat(2,65px) 200px 85px"
        
      },
      gridTemplateColumns:{
        "col_temp":"repeat(2,172px) "
      },

      keyframes:{
        'anim_head_shrink_prop':{
          '0%':{
            backgroundColor:'none',
            top:'20px'
          },
          '100%':{
            backgroundColor:'black',
            top:'0px'
          }
        },
        'anim_head_grow_prop':{
          '0%':{
            backgroundColor:'black',
            top:'0px'
          },
          '100%':{
            backgroundColor:'none',
            top:'20px'
          }
        },
        'anim_img_move_prop':{
          '0%':{
            transform:'translateY(0px)'
          },
          '100%':{
            transform:'translateY(-30px)'
          }
        },
        'anim_img_grow_prop':{
          '0%':{
            width:'100px'

          },
          '100%':{
            width:'1800px'
          }
        },
        'anim_move_left_prop':{
          '0%':{
            transform:"translateX(0px)"
          },
          '100%':{
            transform:"translateY(10px)"
          }
        }

      },
      animation:{
        'anim_head_shrink':'anim_head_shrink_prop 0.5s ease-in-out forwards',
        'anim_head_grow':'anim_head_grow_prop 0.4s ease-in-out forwards',
        'anim_img_move':'anim_img_move_prop 2s linear infinite alternate',
        'anim_img_grow':'anim_img_grow_prop 2.5s ease-in-out forwards',
        'anim_move_left':'anim_move_left_prop 0.8s ease-in-out forwards',
        'anim_flank_right':'anim_flank_right_prop 2s ease-in-out forwards'

      }
      
    },
  },
  plugins: [],
}

