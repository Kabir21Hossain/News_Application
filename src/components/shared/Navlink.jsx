'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navlink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={isActive ? 'border-b-2 border-purple-500' : ''}>
            {children}
        </Link>
    )
}