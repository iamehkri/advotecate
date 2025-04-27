import Image from "next/image";

const events = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `Event ${i + 1}: GOTV Texting for Mayor Lee`,
  date: `March ${11 + (i % 10)}, 2025 @ 9:00 AM`,
  org: `Org ${i + 1} for Mayor of City`,
  location: "Atlanta, GA",
  featured: i % 5 === 0,
  image: `https://source.unsplash.com/400x300/?event,city,people,${i}`,
}));

export default function EventsModule() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 px-2">Events</h2>
      <div className="relative">
        {/* Scrollable event cards */}
        <div className="flex overflow-x-auto space-x-6 pb-4 px-2 scrollbar-hide snap-x snap-mandatory">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className="relative bg-white rounded-lg shadow-lg min-w-[320px] max-w-[320px] flex-shrink-0 snap-center border border-gray-100"
              style={{ boxShadow: "0 4px 24px 0 #c7d7f7a0" }}
            >
              {/* Featured badge */}
              {event.featured && (
                <span className="absolute top-3 right-3 bg-blue-200 text-blue-700 px-3 py-1 rounded text-sm font-medium z-10">
                  Featured Event
                </span>
              )}
              {/* Event image */}
              <div className="h-48 w-full relative rounded-t-lg overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover opacity-70"
                  sizes="320px"
                  priority={idx < 3}
                />
              </div>
              {/* Event details */}
              <div className="p-4 bg-white">
                <div className="text-gray-500 text-sm mb-1">{event.date}</div>
                <div className="font-bold text-lg text-gray-700 mb-1">{event.title}</div>
                <div className="text-pink-400 text-sm mb-2">{event.org}</div>
                <div className="flex items-center text-gray-400 text-xs mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {event.location}
                </div>
                <button className="w-full bg-[#00C9A1] text-white font-bold py-2 rounded-b-lg mt-2 hover:bg-[#009e7c] transition">Attend</button>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`h-3 w-3 rounded-full ${i === 0 ? 'bg-[#00C9A1]' : 'bg-gray-300'} inline-block`}></span>
          ))}
        </div>
      </div>
    </section>
  );
} 