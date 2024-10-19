import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect } from "react";
import "./styles.css";
import img from "./Assests/firstpic3.jpg"
import ix from "./Assests/bmwix.jpg"
import sr7 from "./Assests/Series7.jpg"


// for import anime.js
import anime from 'animejs/lib/anime.es.js';





function Home() {

  useEffect(() => {
    anime.timeline({
      easing: 'easeOutExpo',


    })
      .add({
        targets: '.animesp1',
        translateX: 350,



      })
      .add({
        targets: '.animesp2',
        translateX: 350,

      })
  }, []);

  return (
    <div>

      <div className=" w-full bg-black">

        <ReactFullpage
          debug

          navigation={true}

          easingcss3="cubic-bezier(0.175, 0.885, 0.320, 1.275)"
          licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
          render={() => (
            <ReactFullpage.Wrapper>




              {/*Slide 1 */}


              <div className="section relative">

                <div className="absolute top-28 flex flex-col w-full items-start text-black text-5xl font-bold  ">
                  <span className="animesp1">Power and Beauty, Together</span>
                  <span className="animesp2">Advanced Technology for Your Comfort</span>
                </div>
                <img src={sr7} alt="" />

              </div>


              {/*Slide 2 */}
              <div className="section flex  ">
                <div className="flex justify-center items-center ">
                  <div  className=" w-5/12 flex items-center justify-center  ">
                    <span className="text-5xl font-semibold text-white">Learn everything <br /> about BMW here</span>
                  </div>

                  <div className="w-6/12 flex justify-evenly items-center ">
                    <img className="h-full rounded-md ms-12 " src={img} alt="" />
                  </div></div>
              </div>






              {/*Slide 3 */}
              <div className="section py-12 ">
                {/* slide 3 */}
                <div className="slide flex  items-center  ">
                  <div className="flex  my-10 py-20">
                    <div className="w-6/12">
                      <img className="ms-12 rounded-md" src={ix} alt="" />
                    </div>
                    <div className="w-6/12 flex justify-center items-center">
                      <p className="w-10/12 text-4xl font-semibold"> Enjoy nature consciously – sustainable travel in the BMW iX </p>
                    </div>
                  </div>
                </div>



                {/* slide3.2 */}
                <div className="slide  ">

                </div>


                {/*slide3.3  */}
                <div className="slide"><h1>Slide 2.3</h1></div>
              </div>



            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    </div>
  )
}


export default Home