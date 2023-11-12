import './MenuItem.css';


const MenuItem = ({ item }) => {

    const { name, image, recipe, price } = item;

    return (
        <div className="flex gap-8">
            <div>
                <img className="w-[104px] menu-style" src={image} alt="" />
            </div>
            <div className="flex gap-1">
                <div className="opacity-60 space-y-2">
                    <h3 className="">{name} ------------------</h3>
                    <p className="text-xs">{recipe}</p>
                </div>
                <div>
                    <p className="text-[#BB8506]">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;