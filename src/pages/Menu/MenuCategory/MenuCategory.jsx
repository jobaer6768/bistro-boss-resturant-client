import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";


const MenuCategory = ({ title, img, items, body }) => {
    return (
        <div className="my-20">
            {title && <Cover
                title={title}
                img={img}
                body={body}
            >
            </Cover>}

            <div className="mb-10 mt-20 grid grid-cols-2 gap-12">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <div className="text-center">
                <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;