import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { signup } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signup(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err.message))
    };




    return (
        <>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/i })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 character</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be greater then 6 character</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have One uppercase ,lowercase, number, special character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="form-control">
                                <p><small>already have account? <Link to="/login">Login</Link></small></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Register;