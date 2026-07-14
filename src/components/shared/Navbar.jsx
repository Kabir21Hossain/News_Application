"use client";

import Link from "next/link";
import userAvatar from '@/assets/user.png'
import Image from "next/image";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    // console.log(session)

    const user = session?.user;
    console.log(user);

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

            {
                user ? (
                    <div className="flex justify-between items-center gap-4">
                        <h2>Hello, {user.name}</h2>
                        <Image src={user.photo || userAvatar} width={40} height={40} alt={'user avatar'}></Image>
                        <button onClick={async () => await authClient.signOut({ callbackURL: '/login' })} className="btn bg-purple-500 text-white">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center gap-4">
                        <button className="btn bg-purple-500 text-white">
                            <Link href={'/login'}>Login</Link>
                        </button>
                    </div>
                )
            }



        </div>
    )
}

export default Navbar;

