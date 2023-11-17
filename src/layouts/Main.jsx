import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login');

    return (
        <>
            <div className="container mx-auto">
                { noHeaderFooter || <Navbar></Navbar>}
                <Outlet></Outlet>
            </div>
            <div>
                { noHeaderFooter || <Footer></Footer>}
            </div>
        </>
    );
};

export default Main;