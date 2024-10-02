import img from "./firstpic3.jpg"
import ix from "./bmwix.jpg"

function Home() {
  return (
    <section className="flex flex-wrap w-full  bg-black h-96">
      <div className=" w-5/12 flex items-center justify-center h-full">
        <span className="text-5xl font-semibold text-white">Learn everything <br /> about BMW here</span>
      </div>


      <div className="w-7/12 flex justify-evenly items-center h-full">
        <img className="h-full rounded-md ms-12" src={img} alt="" />
      </div>

      <div className="w-6/12 "><img src={ix} alt="" /></div>
      <div className="w-6/12 flex justify-center items-center"><p className="w-10/12 text-4xl font-semibold"> Enjoy nature consciously – sustainable travel in the BMW iX </p></div>
    </section>
  )
}

export default Home