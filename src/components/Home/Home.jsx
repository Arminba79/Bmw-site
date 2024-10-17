
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";
import img from "./firstpic3.jpg"
import ix from "./bmwix.jpg"



function Home() {

  return (
    <div>

      <div className=" w-full bg-black">

        <ReactFullpage
          debug

          easingcss3="cubic-bezier(0.175, 0.885, 0.320, 1.275)"
          licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
          render={() => (
            <ReactFullpage.Wrapper>




              {/* first slide */}


              <div className="section flex h-[35rem]">
                <div className="flex justify-center items-center ">
                  <div className=" w-5/12 flex items-center justify-center  ">
                    <span className="text-5xl font-semibold text-white">Learn everything <br /> about BMW here</span>
                  </div>

                  <div className="w-6/12 flex justify-evenly items-center ">
                    <img className="h-full rounded-md ms-12 " src={img} alt="" />
                  </div></div>
              </div>





              {/* other slides */}
              <div className="section py-12 ">
                {/* slide2 */}
                <div className="slide flex h-[37rem] items-center  ">
                  <div className="flex  my-10 py-20">
                    <div className="w-6/12">
                      <img className="ms-12 rounded-md" src={ix} alt="" />
                    </div>
                    <div className="w-6/12 flex justify-center items-center">
                      <p className="w-10/12 text-4xl font-semibold"> Enjoy nature consciously – sustainable travel in the BMW iX </p>
                    </div>
                  </div>
                </div>



                {/* slide2.2 */}
                <div className="slide  ">

                </div>


                {/*slide2.3  */}
                <div className="slide"><h1>Slide 2.3</h1></div>
              </div>
              {/* slide3 */}


            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    </div>
  )
}


export default Home