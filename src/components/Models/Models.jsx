
// sent data to items tab


import { useState } from 'react';
import data from './Cars.json';
import Items from './Items';


function Models() {
  // const [shop, setShop] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data)
  const ISeries = () => { setFilteredItems(data.filter(data => data.Series === 'I Series')) };
  const MSeries = () => { setFilteredItems(data.filter(data => data.Series === 'M Series')) };





  return (
    <section className=" flex flex-wrap justify-center gap-7 pb-10 ">
      {/* Carosell */}

      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://www.wsupercars.com/wallpapers-wide/BMW/2022-BMW-M5-CS-004-1440w.jpg"
            className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://www.wsupercars.com/wallpapers-wide/BMW/2023-BMW-M3-Competition-Touring-001-1440w.jpg"
            className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://www.wsupercars.com/wallpapers-wide/BMW/2022-BMW-M440i-Gran-Coupe-003-1440w.jpg"
            className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://www.wsupercars.com/wallpapers-wide/BMW/2021-BMW-4-Series-003-1440w.jpg"
            className="w-full" />
        </div>
      </div>


      {/* Filter Items */}
      <div className='flex gap-3  w-full justify-center'>
        <button className='btn btn-active btn-neutral w-28' onClick={ISeries}>I Series</button>
        <button className='btn btn-active btn-neutral w-28' onClick={MSeries}>M Series</button>

      </div>
      {filteredItems.map(i => (
        <Items key={i.id} modelName={i.modelName} price={i.price} imgLink={i.imgLink} Series={i.Series} Door={i.Door} />
      ))}
    </section>
  );
}

export default Models;
