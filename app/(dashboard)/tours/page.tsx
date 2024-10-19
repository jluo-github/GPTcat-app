import Tours from "@/components/Tours";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getAllTours } from "@/utils/actions";

export const metadata = {
  title: "Tours",
};

const ToursPage = async ({ searchParams }: { searchParams: { searchTerm: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["tours", searchParams.searchTerm],
    queryFn: () => getAllTours(searchParams.searchTerm || ""),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Tours />
    </HydrationBoundary>
  );
};
export default ToursPage;
