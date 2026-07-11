"use client";

import { FadeLoader } from "react-spinners";

export default function LoadPage() {
    return (
        <div className="flex min-h-[50vh] items-center justify-center w-full">
            <FadeLoader color="#4F46E5" size={40} loading speedMultiplier={3}
            />
        </div>
    );
}
