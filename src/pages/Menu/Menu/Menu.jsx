import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";


const Menu = () => {
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
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;