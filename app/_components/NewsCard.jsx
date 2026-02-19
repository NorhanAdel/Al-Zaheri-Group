import Link from "next/link";

export default function NewsCard({ news }) {
  return (
    <Link href={`/news/${news.id}`}>
      <div className="rounded-2xl overflow-hidden border border-gray-300 hover:shadow-xl transition cursor-pointer bg-white h-[400]">
        {/* الصورة */}
        <div className="relative h-56">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />

          {/* التاريخ */}
          <div className="absolute bottom-4 right-4 bg-white rounded-xl px-3 py-2 text-center">
            <p className="text-red-600 font-bold">{news.day}</p>
            <p className="text-sm">{news.month}</p>
          </div>
        </div>

        {/* المحتوى */}
        <div className="p-6 text-right">
          <h3 className="text-xl font-bold leading-snug">{news.title}</h3>
        </div>
      </div>
    </Link>
  );
}
