"use client";
import {
 createNewTour,
 fetchUserTokensById,
 subtractTokens,
 generateTourResponse,
 getExistingTour,
} from "@/utils/action";

import TourInfo from "./TourInfo";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

const NewTour = () => {
 const queryClient = useQueryClient();

 const { userId } = useAuth();

 const {
  mutate,
  isPending,
  data: tour,
 } = useMutation({
  mutationFn: async (destination) => {
   const existingTour = await getExistingTour(destination);
   if (existingTour) {
    return existingTour;
   }

   const currentTokens = await fetchUserTokensById(userId);

   if (currentTokens < 500) {
    toast.error("Token balance is too low.");
    return null;
   }

   const newTour = await generateTourResponse(destination);

   if (!newTour) {
    toast.error("No tour found for this destination. Please try another one.");
    return null;
   }

   const response = await createNewTour(newTour.tour);
   queryClient.invalidateQueries({ queryKey: ["tours"] });
   const newTokens = await subtractTokens(userId, newTour.tokens);
   toast.success(`${newTokens} tokens remaining...`);
   return newTour.tour;
  },
 });

 const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const destination = Object.fromEntries(formData.entries());
  // console.log(destination);
  mutate(destination);
 };

 if (isPending) {
  return <span className='loading loading-lg'></span>;
 }

 return (
  <>
   <form onSubmit={handleSubmit} className='max-w-2xl mt-2'>
    <h2 className='mb-4'>Select Destination</h2>

    <div className='join w-full'>
     <input
      type='text'
      className='input input-bordered join-item w-full'
      placeholder='City'
      name='city'
      required
     />

     <input
      type='text'
      className='input input-bordered join-item w-full'
      placeholder='Country'
      name='country'
      required
     />

     <button className='btn btn-primary join-item' type='submit'>
      Generate Tour
     </button>
    </div>
   </form>

   <div className='mt-16'>{tour ? <TourInfo tour={tour} /> : null}</div>
  </>
 );
};
export default NewTour;
