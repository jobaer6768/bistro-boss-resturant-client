import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = ({ text }) => {

    const { signInWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                const userRegistered = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }
                axiosPublic.post('/users', userRegistered)
                    .then(res => {
                        console.log(res);
                    })

                navigate(from);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-primary w-full">
                <FaGoogle></FaGoogle>
                {text} Google
            </button>
        </div>
    );
};

export default SocialLogin;