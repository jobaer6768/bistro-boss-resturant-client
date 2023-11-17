

const FoodCard = ({ item }) => {

    const { name, image, recipe, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
                <p className="absolute top-8 right-8 bg-black text-white py-1 px-2 rounded-lg">${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 bg-slate-100 text-orange-300 border-orange-300 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;