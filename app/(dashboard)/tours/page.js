import React from "react";
import {
 dehydrate,
 HydrationBoundary,
 QueryClient,
} from "@tanstack/react-query";
import ToursPage from "@/components/ToursPage";
import { getAllTours } from "@/utils/action";


export const fetchCache = "force-no-store";

const AllToursPage = async () => {
 const queryClient = new QueryClient();

 // prefetch the data:
 await queryClient.prefetchQuery({
  queryKey: ["tours", ""],
  queryFn: () => getAllTours(),
 });

 return (
  // setup queryClient:
  <HydrationBoundary state={dehydrate(queryClient)}>
   <ToursPage />
  </HydrationBoundary>
 );
};

export default AllToursPage;
