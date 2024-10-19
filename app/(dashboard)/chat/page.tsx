import Chat from "@/components/Chat";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export const metadata = {
  title: "Chat",
};

const ChatPage = async () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Chat />
    </HydrationBoundary>
  );
};
export default ChatPage;
