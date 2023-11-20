import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    title: "Logged-out successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            })
            .catch(err => console.log(err));
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/order/Salads">Order Food</NavLink></li>
        {
            user ? <>
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn m-1"><img className="w-20 rounded-full" src={user.photoURL} alt="" /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-black">{user.displayName}</li>
                    </ul>
                </div>


                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </>
                :
                <><li><NavLink to="/login">Login</NavLink></li></>
        }
    </>


    return (
        <div className="navbar bg-black bg-opacity-40 fixed z-10 container mx-auto">
            <div className="navbar-start text-white">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bristo Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;