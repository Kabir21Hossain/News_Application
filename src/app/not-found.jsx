import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h2 className="text-gray-300 text-6xl font-light">
                404 - Not Found
            </h2>
            <p className="text-gray-500 text-xl mt-4">Sorry, the page you are looking for does not exist.</p>

            <Link href="/"><button className="btn btn-primary mt-4">Go Home</button></Link>
        </div>
    )
}


