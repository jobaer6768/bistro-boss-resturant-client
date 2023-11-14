import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menuItems] = useMenu();
    const popularMenuItems = menuItems.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check It Out"}
            >
            </SectionTitle>
            <div className="mb-10 grid grid-cols-2 gap-12">
                {
                    popularMenuItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;