import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import NewTour from "@/components/NewTour";

export const metadata = {
  title: "New Tour",
};

const NewTourPage = async() => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTour />
    </HydrationBoundary>
  );
};
export default NewTourPage;
