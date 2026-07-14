'use client'

import { FaGoogle, FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
export default function RightSideBar() {

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",

        });
    }

    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        })
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className='font-bold text-lg'>Login with</h2>
            <div className="flex flex-col gap-2">
                <button onClick={handleGoogleSignIn}
                    className="flex items-center justify-center gap-2 btn border-blue-500 text-blue-500">
                    <FaGoogle />
                    Login with google</button>

                <button onClick={handleGithubSignIn} className="flex items-center justify-center gap-2 btn">
                    <FaGithub />
                    Login with github</button>

            </div>


        </div>
    )
}