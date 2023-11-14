import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import DesertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Menu = () => {

    const [menuItems] = useMenu();
    const offered = menuItems.filter(item => item.category === 'offered');
    const deserts = menuItems.filter(item => item.category === 'dessert');
    const salads = menuItems.filter(item => item.category === 'salad');
    const soups = menuItems.filter(item => item.category === 'soup');
    const pizzas = menuItems.filter(item => item.category === 'pizza');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={"Our Menu"}
                body={"Would you like to try a dish?"}
            ></Cover>
            <SectionTitle
                heading={"Today's Offer"}
                subHeading={"Don't miss it"}
            ></SectionTitle>

            {/* offered section */}
            <MenuCategory
                items={offered}
            ></MenuCategory>

            {/* deserts section */}
            <MenuCategory
                items={deserts}
                title={"Deserts"}
                img={DesertImg}
                body={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>

            {/* pizza section */}
            <MenuCategory
                items={pizzas}
                title={"Pizzas"}
                img={pizzaImg}
                body={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>

            {/* salad section */}
            <MenuCategory
                items={salads}
                title={"Salads"}
                img={saladImg}
                body={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>

            {/* soup section */}
            <MenuCategory
                items={soups}
                title={"Soups"}
                img={soupImg}
                body={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
        </div>
    );
};

export default Menu;