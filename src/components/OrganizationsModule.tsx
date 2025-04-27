import Image from "next/image";

const organizations = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: "Jessica Lee for Mayor",
  city: "Atlanta, GA",
  featured: i % 5 === 0,
  image: `https://source.unsplash.com/400x300/?organization,city,${i}`,
}));

export default function OrganizationsModule() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 px-2">Organizations</h2>
      <div className="relative">
        {/* Scrollable organization cards */}
        <div className="flex overflow-x-auto space-x-6 pb-4 px-2 scrollbar-hide snap-x snap-mandatory">
          {organizations.map((org, idx) => (
            <div
              key={org.id}
              className="relative bg-white rounded-lg shadow-lg min-w-[320px] max-w-[320px] flex-shrink-0 snap-center border border-gray-100"
              style={{ boxShadow: "0 4px 24px 0 #c7d7f7a0" }}
            >
              {/* Featured badge */}
              {org.featured && (
                <span className="absolute top-3 right-3 bg-blue-200 text-blue-700 px-3 py-1 rounded text-sm font-medium z-10">
                  Featured
                </span>
              )}
              {/* Organization image */}
              <div className="h-48 w-full relative rounded-t-lg overflow-hidden">
                <Image
                  src={org.image}
                  alt={org.name}
                  fill
                  className="object-cover opacity-70"
                  sizes="320px"
                  priority={idx < 3}
                />
              </div>
              {/* Organization details */}
              <div className="p-4 bg-white">
                <div className="font-bold text-lg text-gray-700 mb-1">{org.name}</div>
                <div className="text-pink-400 text-sm mb-4">{org.city}</div>
                <button className="w-full bg-[#00C9A1] text-white font-bold py-2 rounded-b-lg mt-2 hover:bg-[#009e7c] transition">Donate</button>
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