import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect } from "react";
import "./styles.css";

import ix from "./Assests/bmwix.jpg"


import ImageSlide2 from "./Assests/slide2.jpg"

// for import anime.js
import anime from 'animejs/lib/anime.es.js';





function Home() {

  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
    });

    timeline
      .add({
        targets: '.animesp1',
        translateX: [0, 350],
        opacity: [0, 1],
      })
      .add({
        targets: '.animesp2',
        translateX: [0, 350],
        opacity: [0, 1],
        offset: '-=500', // شروع دومین انیمیشن قبل از اتمام اولین انیمیشن
      });
  }, []);



  return (
    <div >

      {/* Mobile and tablet */}




      <div className="container-fluid w-full bg-black flex " >

        <ReactFullpage
          debug

          navigation={false}

          easingcss3="cubic-bezier(0.175, 0.885, 0.320, 1.275)"
          licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
          render={() => (
            // large screen
            <ReactFullpage.Wrapper>




              {/*Slide 1 */}

              {/* large screen */}
              <div className="section bg-cover relative opacity-80 hidden xl:flex " style={{ backgroundImage: `url("https://www.wsupercars.com/wallpapers-wide/BMW/2023-BMW-M3-Competition-Touring-005-1440w.jpg")` }}>

                <div className="absolute top-28 flex-col w-full items-start text-white text-5xl font-bold  flex ">
                  <span className="animesp1">Power and Beauty, Together</span>
                  <span className="animesp2">Advanced Technology for Your Comfort</span>
                </div>
                {/* <img src={sr7} alt="" /> */}

              </div>
              {/* mobile and tablet screen */}
              <div className="section flex xl:hidden  items-start">
                <div className="flex flex-col  ">
                  {/* text Box */}
                  <div className="flex flex-col text-3xl font-semibold h-96 ">
                    <span>Power and Beauty, Together</span>
                    <span>Advanced Technology for Your Comfort</span>
                  </div>
                </div>

              </div>


              {/*Slide 2 */}
              <div className="section flex flex-wrap">
                <div className="flex flex-wrap justify-center items-center w-full">
                  <div className="w-full md:w-7/12 flex items-center">
                    <div
                      className=" w-full h-96 flex justify-center  bg-cover opacity-30 hover:opacity-70 transition rounded-lg"
                      style={{ backgroundImage: `url(${ImageSlide2})` }}
                    >
                      <span className="text-xl md:text-3xl mt-24 xl:mt-5">The BMW journey to the mobility of the future</span>
                    </div>
                  </div>
                  <div className="w-full md:w-5/12 flex flex-col justify-evenly h-max">
                    <div
                      style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1665950798334-6251a5cdb1e9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                      }}
                      className="rounded-lg w-full h-80 opacity-30 hover:opacity-70 transition bg-cover flex justify-center"
                    >
                      <span className="text-xl md:text-4xl mt-14 text-white">You are safe</span>
                    </div>
                    <div
                      className="rounded-lg flex justify-center bg-green-400 w-full h-80 bg-cover opacity-30 hover:opacity-70 transition"
                      style={{ backgroundImage: `url("https://www.ezoo.uk/wp-content/uploads/2022/05/Charging.jpg")` }}
                    >
                      <span className="text-xl md:text-4xl mt-5 text-white">We love Our World</span>
                    </div>
                  </div>
                </div>
              </div>








              {/*Slide 3 */}
              <div className="section py-12">
                {/* slide 3 */}
                <div className="slide flex items-center justify-center flex-wrap">
                  <div className="flex my-10 py-20 w-full flex-wrap">
                    <div className="w-full lg:w-6/12 p-4">
                      <img className="w-full rounded-md" src={ix} alt="BMW iX" />
                    </div>
                    <div className="w-full lg:w-6/12 flex justify-center items-center p-4">
                      <p className="text-xl lg:text-4xl font-semibold text-center">Enjoy nature consciously – sustainable travel in the BMW iX</p>
                    </div>
                  </div>
                </div>
                {/* slide3.2 */}
                <div className="slide">
                  {/* Add more content or leave it empty */}
                </div>
                {/* slide3.3 */}
                <div className="slide">
                  <h1 className="text-center">Slide 2.3</h1>
                </div>
              </div>





            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    </div>
  )
}


export default Home