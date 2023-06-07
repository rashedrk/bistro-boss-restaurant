import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const user = { name: loggedUser.displayName, email: loggedUser.email }
                console.log(user);
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, {replace: true})
                        
                        })
                    .catch(err => console.log(err))
            });
        }
    return (
            <button onClick={handleGoogleLogin} className=" btn btn-circle btn-outline">
                G
            </button>
        );
    };

    export default SocialLogin;