import TourInfo from "@/components/TourInfo";
import { generateTourImage, getSingleTour } from "@/utils/action";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";

// export const fetchCache = "force-no-store";

const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;

const SingleTourPage = async ({ params }) => {
 const { id } = params;

 const tour = await getSingleTour(id);
 if (!tour) {
  redirect("/tours");
 }

 // const tourImage = await generateTourImage({
 //  city: tour.city,
 //  country: tour.country,
 // });

 const { data } = await axios.get(`${url}${tour.city}`);
 const tourImage = data?.results[0]?.urls?.raw;

 return (
  <div>
   <Link href='/tours' className='btn btn-secondary mb-12'>
    Back to Tours
   </Link>

   {tourImage && (
    <div>
     <Image
      src={tourImage}
      width={300}
      height={300}
      className='rounded-xl shadow-xl mb-16 h-96 w-96 object-cover'
      alt={tour.title}
      priority
     />
    </div>
   )}

   <TourInfo tour={tour} />
  </div>
 );
};
export default SingleTourPage;
