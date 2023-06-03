import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    useEffect(() => {
        loadCaptchaEnginge(6);
    });
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    };
    const handleCaptcha = event => {

        const userCaptcha = event.target.value;
        if (validateCaptcha(userCaptcha)) {
            setDisabled(false);
        }

        else {
            setDisabled(true);
        }
    }
return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <LoadCanvasTemplate />
                        <input onBlur={handleCaptcha} type="text" name="captcha" placeholder="Enter captcha above" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button disabled={disabled} className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="form-control">
                    <p>
                        <small>New here? <Link to='/signup'>Create an Account</Link></small>
                    </p>
                </div>
            </div>
        </div>
    </div>
);
};

export default Login;