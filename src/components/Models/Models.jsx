import  { useState, useEffect } from 'react';
import data from './Cars.json'; // وارد کردن فایل JSON
import Items from './Items';

function Models() {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    setShop(data); // تنظیم داده‌ها از فایل JSON
  }, []);

  return (
    <section className="h-96 flex flex-wrap justify-center gap-7 my-10">
      {shop.map(i => (
        <Items key={i.id} modelName={i.modelName} price={i.price} imgLink={i.imgLink} />
      ))}
    </section>
  );
}

export default Models;
