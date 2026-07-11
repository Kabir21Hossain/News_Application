"use client"

import ClockLoader from "react-spinners/ClockLoader";

export default function LoadingPage() {
    return (
        <div className="flex min-h-[50vh] items-center justify-center w-full">
            <ClockLoader
                color="#43a9cb"
                loading
            />

        </div>
    )
}