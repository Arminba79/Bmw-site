import  { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

function Aboutus() {
  useEffect(() => {
    anime({
      targets: '.anime-target',
      translateX: 150,
      
      
      duration: 1200
    });
  }, []);

  return (
    <section className="h-96 anime-target bg-yellow-600 w-52 mt-16">
      <div className=" py-56 text-black text-5xl">
        محتوا
      </div>
    </section>
  );
}

export default Aboutus;
