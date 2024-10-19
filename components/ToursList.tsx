import TourCard from "./TourCard";
import type { Tour } from "@prisma/client";

const ToursList = ({ tours }: { tours: Tour[] }) => {
  if (tours.length === 0) {
    return <div>No tours found</div>;
  }

  return (
    <div className='grid w-4/5 mx-auto sm:w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};
export default ToursList;
