import Link from "next/link";

export default function LeftSidebar({ categories, activeId }) {
    return (
        <div>
            <h2 className="text-center my-4 text-lg font-medium">All Categories</h2>
            <ul className="flex flex-col gap-3">
                {categories.map(category => (
                    <li className={`bg-slate-100 p-2 rounded-md text-sm text-center font-medium text-gray-600`} key={category.category_id}>
                        <Link className={`block w-full p-2 rounded-md  transition-all ${activeId === category.category_id ? 'bg-red-500 text-white' : ''}`} href={`/category/${category.category_id}`}>{category.category_name}</Link>

                    </li>
                ))}
            </ul>
        </div>
    )
}