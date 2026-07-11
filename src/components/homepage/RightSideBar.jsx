import { FaGoogle, FaGithub } from "react-icons/fa";

export default function RightSideBar() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className='font-bold text-lg'>Login with</h2>
            <div className="flex flex-col gap-2">
                <button className="flex items-center justify-center gap-2 btn border-blue-500 text-blue-500">
                    <FaGoogle />
                    Login with google</button>

                <button className="flex items-center justify-center gap-2 btn">
                    <FaGithub />
                    Login with github</button>

            </div>


        </div>
    )
}