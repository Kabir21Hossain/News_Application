import LeftSidebar from "@/components/homepage/LeftSidebar";
import NewsCard from "@/components/homepage/NewsCard";
import RightSideBar from "@/components/homepage/RightSideBar";
import { getCategories, getNewsByCategory } from "@/lib/data";





export default async function NewsCategoryPage({ params }) {
    const categories = await getCategories();
    const { id } = await params;
    const news = await getNewsByCategory(id);

    return (
        <div className="my-8 grid grid-cols-4 gap-4 max-w-7xl mx-[10%]">
            <div className="font-bold text-3xl">
                <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
            </div>

            <div className="col-span-2 text-3xl bg-purple-100">
                all news
                {news.length > 0 ?
                    news.map(n => (<NewsCard key={n._id} news={n}></NewsCard>)) :
                    <p className="text-sm text-gray-400 text-center mt-4 font-normal">No news found</p>
                }
            </div>

            <div className="">
                <RightSideBar />
            </div>


        </div>
    )
}