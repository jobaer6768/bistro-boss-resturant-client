import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenuItems(popularItems);
            })
    }, [])

    return (
        <section>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check It Out"}
            >
            </SectionTitle>
            <div className="mb-10 grid grid-cols-2 gap-12">
                {
                    menuItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;