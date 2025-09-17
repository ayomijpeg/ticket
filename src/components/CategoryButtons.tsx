"use client";

import Link from "next/link";

export default function CategoryButtons() {
  const categories = [
    { name: "Concerts", href: "/concerts" },
    { name: "Sports", href: "/sports" },
    { name: "Arts & Theater", href: "/arts" },
    { name: "Comedy", href: "/comedy" },
    { name: "Browse All Tickets", href: "/tickets" },
    { name: "Tickets", href: "/tickets/ticketpage" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          href={cat.href}
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-500 transition"
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
