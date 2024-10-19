import { auth, currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const MemberProfile = async () => {
  const user = await currentUser();
  // console.log("user", user);
  if (!user) {
    return null;
  }
  return (
    <div className='px-4 flex items-center gap-2'>
      <SignedIn>
        <UserButton />
        {user.emailAddresses[0] ? (
          <p className='truncate'>{user.emailAddresses[0]?.emailAddress}</p>
        ) : (
          <p className='truncate'>{user?.username} </p>
        )}
      </SignedIn>
    </div>
  );
};
export default MemberProfile;
