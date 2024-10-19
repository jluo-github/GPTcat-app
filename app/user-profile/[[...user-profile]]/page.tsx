import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";
import { fetchOrCreateTokens } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";

export const metadata = {
  title: "Profile",
};

const UserProfilePage = async () => {
  const { userId } = auth();
  if (!userId) {
    return <Link href='/sign-in'></Link>;
  }
  const tokens = await fetchOrCreateTokens(userId);

  return (
    <div className='flex items-center justify-center flex-col min-h-screen  '>
      <div className='flex items-center mb-8 gap-20'>
        <h2 className='text-xl font-bold'>Tokens Amount : {tokens}</h2>
        <Link href='/chat' className='text-lg link'>
          close
        </Link>
      </div>
      <UserProfile path='/user-profile' />
    </div>
  );
};

export default UserProfilePage;
