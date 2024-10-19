import TourInfo from "@/components/TourInfo";
import { getTourById } from "@/utils/actions";
import type { Tour } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;

const TourPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const tourData: Tour | null = await getTourById(id);
  // stops stored as JSON
  const tour = tourData ? { ...tourData, stops: tourData.stops as string[] } : null;
  if (!tour) {
    redirect("/tours");
  }

  // get tour image
  const { data } = await axios.get(`${url}${tour.city}`);
  const tourImage = data?.results[0]?.urls?.raw;

  return (
    <div className='my-12'>
      <Link href='/tours' className='btn btn-secondary mb-12'>
        Back to Tours
      </Link>

      {tourImage ? (
        <div className=''>
          <Image
            src={tourImage}
            width={300}
            height={300}
            alt={tour.title}
            priority
            className='rounded-xl shadow-xl mb-16 h-96 w-96 object-cover'
          />
        </div>
      ) : null}

      <TourInfo tour={tour} />
    </div>
  );
};
export default TourPage;
