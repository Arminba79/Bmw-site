

function Items(props) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img className="h-56 w-full"
                    src={props.imgLink}
                    alt={props.modelName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-black">{props.modelName}</h2>

                <div className="card-actions justify-between items-center gap-10">
                    <span className="text-black text-sm font-semibold">Price : {props.price}</span>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Items