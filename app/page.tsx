import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className='hero bg-base-200 min-h-screen '>
      <div className='hero-content text-center'>
        <div className='max-w-[70%] md:max-w-[50%]'>
          <h1 className='text-5xl font-bold my-8 text-violet-800'>Hello there</h1>
          <div>
            <Image
              src='/cat1.png'
              width={384}
              height={384}
              alt='logo'
              className='w-full mx-auto mb-4 shadow-2xl shadow-violet-600 rounded-2xl dark:shadow-violet-400'
            />
          </div>
          <p className='py-6 text-violet-800'>
            Unlock the power of AI with our language companion. Enhanced conversations,
            content creation, and beyond, all powered by OpenAI!{" "}
          </p>
          <Link
            href='/chat'
            className='btn btn-primary shadow-xl shadow-violet-300 dark:shadow-violet-400/[0.5]'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
