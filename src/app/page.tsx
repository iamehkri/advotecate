import CandidatesModule from "@/components/CandidatesModule";
import OrganizationsModule from "@/components/OrganizationsModule";
import EventsModule from "@/components/EventsModule";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="bg-white shadow-md rounded-xl p-10 text-center max-w-md w-full">
          <h1 className="text-3xl font-bold mb-2">Welcome to Advotecate</h1>
          <p className="text-gray-600">Your platform for advocacy and campaign management.</p>
        </div>
      </div>
      <CandidatesModule />
      <OrganizationsModule />
      <EventsModule />
    </>
  );
}
