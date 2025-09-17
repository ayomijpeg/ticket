import events from "../data/events.json";
import EventCard from "../components/EventCard";
import CategoryButtons from "../components/CategoryButtons";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
};

export default function Home() {
  // Group events by category
  const categories = Array.from(new Set(events.map((e: Event) => e.category)));

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <section key={category}>
          <h2 className="text-2xl font-bold mb-6">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {events
              .filter((event: Event) => event.category === category)
              .map((event: Event) => (
                <EventCard key={event.id} {...event} />
              ))}
          </div>
        </section>
      ))}
      
      <CategoryButtons/>
    </div>
  );
}
