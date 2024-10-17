// Box For Items

import AOS from 'aos';
import 'aos/dist/aos.css';


function Items(props) {
    AOS.init()
    return (
        <div data-aos-duration="1500" data-aos="zoom-in-up" data-aos-delay="300"  className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img className="h-56 w-full" src={props.imgLink} alt={props.modelName} />
            </figure>
            <div className="card-body">
                <h2  data-aos-duration="1500" data-aos="fade-down" data-aos-delay="300"  className="card-title text-black">{props.modelName}</h2>

                <div className="card-actions justify-between items-center gap-10">
                    <span  className="text-black text-sm font-semibold">Price : {props.price}</span>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Items