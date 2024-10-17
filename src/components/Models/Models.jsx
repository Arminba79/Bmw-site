
// sent data to items tab


import { useState} from 'react';
import data from './Cars.json';
import Items from './Items';


function Models() {
  // const [shop, setShop] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data)
  const ISeries = () => { setFilteredItems(data.filter(data => data.Series === 'I Series')) };
  const MSeries = () => { setFilteredItems(data.filter(data => data.Series === 'M Series')) };



 

  return (
    <section className=" flex flex-wrap justify-center gap-7 my-10  ">

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
