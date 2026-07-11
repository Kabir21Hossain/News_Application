import Marquee from "react-fast-marquee"

const news = [
    {
        id: "1",
        title: "Breaking News: Major Event Unfold in the city",

    },
    {
        id: "2",
        title: "Breaking News: Major Event Unfold in the city",

    },
    {
        id: "3",
        title: "Breaking News: Major Event Unfold in the city",

    },
    {
        id: "4",
        title: "Breaking News: Major Event Unfold in the city",

    },
    {
        id: "5",
        title: "Breaking News: Major Event Unfold in the city",

    },
    {
        id: "6",
        title: "Breaking News: Major Event Unfold in the city",

    },
    {
        id: "7",
        title: "Breaking News: Major Event Unfold in the city",

    },
    {
        id: "8",
        title: "Breaking News: Major Event Unfold in the city",

    },
    {
        id: "9",
        title: "Breaking News: Major Event Unfold in the city",

    },
    {
        id: "10",
        title: "Breaking News: Major Event Unfold in the city",

    },
]

export const BreakingNews = () => {
    return (
        <div className="flex max-w-7xl mx-[10%] gap-4 items-center bg-gray-100 py-2 ">
            <button className="btn bg-red-500 text-white py-2">Latest News</button>
            <Marquee className='flex items-center' autoPlay={true} pauseOnHover={true}>
                {
                    news.map(item => (
                        <p key={item.id} className="bg-gray-100 mr-12">{item.title}</p>
                    ))
                }
            </Marquee>
        </div>
    )
}
