import Link from "next/link";
import userAvatar from '@/assets/user.png'
import Image from "next/image";
import Navlink from "./Navlink";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-base-100 shadow-sm mx-[10%] px-2 ">
            <div></div>
            <ul className="flex justify-between items-center gap-4 menu menu-horizontal px-1">
                <li>
                    <Navlink href={'/'}>Home</Navlink>
                </li>
                <li>
                    <Navlink href={'/about-us'}>About</Navlink>
                </li>
                <li>
                    <Navlink href={'/career'}>Career</Navlink>
                </li>
            </ul>

            <div className="flex justify-between items-center gap-4">
                <Image src={userAvatar} width={40} height={40} alt={'user avatar'}></Image>
                <button className="btn bg-purple-500 text-white">
                    <Link href={'/login'}>Login</Link>
                </button>
            </div>
        </div>
    )
}

export default Navbar;

