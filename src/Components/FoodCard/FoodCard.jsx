

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <p className="absolute right-0 mx-5 my-2 bg-black text-white px-2 py-1">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline bg-slate-100 text-orange-500 border-0 border-b-4 ">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;