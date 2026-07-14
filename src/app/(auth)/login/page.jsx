'use client'
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
const LoginPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);



    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();

    const handleLoginFunc = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            callbackURL: "/",
        });

        console.log(res, error)

        if (error) {
            alert(error.message);
        }
        else {
            alert("Login successful");

        }

    }

    // console.log(watch('password'));
    // console.log(watch('email'));
    // console.log(errors);



    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
            <div className="p-4 rounded-xl bg-white ">
                <h2 className="text-2xl font-bold ">Login your account</h2>

                <form onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Login</legend>

                        <label className="label">Email</label>
                        <input type="email"
                            className="input"
                            placeholder="Email"
                            {...register("email", { required: true })} />

                        {errors.email && <span className="text-red-500">Email is required</span>}

                        <div className="relative">
                            <label className="label">Password</label>
                            <input type={isShowPassword ? "text" : 'password'}
                                className="input"
                                placeholder="Password"
                                {...register("password", { required: true })} />

                            <span className=" absolute right-1 top-7" onClick={() => setIsShowPassword(!isShowPassword)}>

                                {isShowPassword ? 'Hide' : 'Show'}
                            </span>

                            {errors.password && <span className="text-red-500">Password is required</span>}

                        </div>

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>

                <p className="text-gray-400 font-medium text-sm mt-4">Don't have any account? <Link href={'/signup'} className="text-blue-500 underline">Register here</Link></p>


            </div>

        </div>
    );
};

export default LoginPage;