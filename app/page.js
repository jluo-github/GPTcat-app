import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
 return (
  <>
   <div className='hero min-h-screen bg-base-200'>
    {" "}
    <div className='hero-content text-center'>
     {" "}
     <div className='max-w-md'>
      <h1 className='text-4xl text-primary font-bold'>
       {" "}
       <Image
        src='/cat1.png'
        width={300}
        height={300}
        className='mx-auto mb-6'
       />{" "}
       PurpleCat GPT
      </h1>
      <p className='py-4 text-md leading-loose'>
       {" "}
       Unlock the power of AI with our language companion. Enhanced
       conversations, content creation, and beyond, all powered by OpenAI!{" "}
      </p>{" "}
      <Link href='/chat' className='btn btn-secondary mb-12'>
       Get Started
      </Link>
     </div>{" "}
    </div>
    <div className='h-screen ml-auto mr-6 mt-6 '>
     <UserButton afterSignOutUrl='/' className=' ' />
    </div>
   </div>
  </>
 );
};

export default HomePage;
