import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
}

export default function EventCard({ id, title, date, location, image }: EventCardProps) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
        priority
      />
      
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
        <p className="text-gray-500 text-sm">{new Date(date).toDateString()}</p>
        <Link 
          href={`/events/${id}`} 
          className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
