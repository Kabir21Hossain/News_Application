import Image from "next/image";
import { LuEye } from "react-icons/lu";
import { CiShare2, CiBookmark, CiStar } from "react-icons/ci";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

export default function NewsCard({ news }) {
    return (
        <div className="card bg-base-100 w-full shadow-sm">

            <div className="card-body">
                {/* author info */}

                <div className="flex justify-between items-center bg-slate-300 p-4 rounded-sm">
                    <div className="left flex gap-1 items-center">
                        {/* author image */}
                        <Image
                            src={news?.author?.img}
                            alt={news?.author?.name}
                            width={40}
                            height={40}
                            className="rounded-full" />

                        <div className="right">
                            {/* author name and published date */}
                            <h2 className="font-semibold">{news?.author?.name}</h2>
                            <p className='text-gray-400 text-xs'>{news.author?.published_date}</p>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        <CiShare2 className="text-2xl" />
                        <CiBookmark className="text-2xl" />
                    </div>
                </div>

                <h2 className="card-title">{news?.title}</h2>
                <p className="text-justify truncate line-clamp-3">{news?.details}</p>
                <figure>
                    <Image src={news?.image_url} alt={news?.title} width={600} height={400} className="rounded-sm"></Image>
                </figure>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <h2 className="flex items-center gap-2"><CiStar />{news?.rating.number}</h2>
                        <p className="flex items-center gap-2"><FaEye />{news.total_view}</p>
                    </div>
                    <Link href={`/news/${news._id}`}><button className="btn btn-primary">See Details</button></Link>

                </div>


            </div>
        </div>
    )
}
