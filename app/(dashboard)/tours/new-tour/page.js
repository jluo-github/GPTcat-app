import {
 dehydrate,
 HydrationBoundary,
 QueryClient,
} from "@tanstack/react-query";
import NewTour from "@/components/NewTour";

// export const fetchCache = "force-no-store";

const NewTourPage = () => {
 const queryClient = new QueryClient();

 return (
  // setup queryClient:
  <HydrationBoundary state={dehydrate(queryClient)}>
   <NewTour />
  </HydrationBoundary>
 );
};

export default NewTourPage;
