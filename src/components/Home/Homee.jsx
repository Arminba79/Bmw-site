
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";

import img from "./firstpic3.jpg"
import ix from "./bmwix.jpg"
import clip from "./Assests/homeclip.mp4"

const Homee = () => {
  var isVideoPlaying = false;
  var numSwipes = 0;


  const beforeLeave = (origin, destination, direction, trigger) => {
    var isSectionWithVideoToPlayOnScroll = origin.index === 0 || origin.index === 1;
    var pauseDelay = origin.index === 0 ? 2700 : 1200;

    // Preventing video animations when using the bullet navigation
    var shouldTriggerAnimation = trigger !== 'verticalNav';

    if (isSectionWithVideoToPlayOnScroll
      && shouldTriggerAnimation
      && !isVideoPlaying
      && numSwipes < 3
    ) {
      numSwipes++;
      var video = origin.item.querySelector('video');

      // Play the video
      video.play();
      isVideoPlaying = true;

      // Set a timeout to stop the video after 2 seconds
      setTimeout(function () {
        video.pause();      // Pause the video
        isVideoPlaying = false
      }, pauseDelay);
    }

    if (isVideoPlaying) {

      // Preventing scroll to destination
      return false;
    }
  }

  const afterLoad = (origin, destination, direction, trigger) => {

    // Resetting the video on the previous section
    if (origin) {
      var prevVideo = origin.item.querySelector('video');
      if (prevVideo) {
        prevVideo.currentTime = 0;
      }
    }

    // Resetting counter & flag
    numSwipes = 0;
    isVideoPlaying = false;
  }
  return (
    <div className="App">

      <ReactFullpage
        debug

        beforeLeave={beforeLeave}
        afterLoad={afterLoad}
        navigation={true}
        licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
        render={() => (
          <ReactFullpage.Wrapper>

            <div className="section overflow-y-hidden" >

              <video className="overlay-video overflow-y-hidden" loop="" muted="true" playsInline="">
                <video className="overflow-y-hidden" src={clip}></video>
                <source className="overflow-y-hidden" src={clip} type="video/mp4"></source>
              </video>
              <div className="layer">
                <h1>Play Video on Scroll</h1>
              </div>
            </div>
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

          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Homee;