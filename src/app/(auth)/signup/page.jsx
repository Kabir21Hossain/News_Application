'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
const RegisterPage = () => {

    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();

    const handleSigninFunc = (data) => {
        console.log(data);

    }

    // console.log(watch('password'));
    // console.log(watch('email'));
    // console.log(errors);



    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
            <div className="p-4 rounded-xl bg-white ">
                <h2 className="text-2xl font-bold ">Register your account</h2>

                <form onSubmit={handleSubmit(handleSigninFunc)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">SignUp</legend>

                        <label className="label">Name</label>
                        <input type="text"
                            className="input"
                            placeholder="Name"
                            {...register("name", { required: true })} />

                        {errors.name && <span className="text-red-500">Name is required</span>}

                        <label className="label">Photo URL</label>
                        <input type="text"
                            className="input"
                            placeholder="Photo URL"
                            {...register("photoURL")}
                        />
                        {errors.photoURL && <span className="text-red-500">Photo URL is required</span>}

                        <label className="label">Email</label>
                        <input type="email"
                            className="input"
                            placeholder="Email"
                            {...register("email", { required: true })} />

                        {errors.email && <span className="text-red-500">Email is required</span>}

                        <label className="label">Password</label>
                        <input type="password"
                            className="input"
                            placeholder="Password"
                            {...register("password", { required: true })} />

                        {errors.password && <span className="text-red-500">Password is required</span>}

                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>




            </div>

        </div>
    );
};

export default RegisterPage;