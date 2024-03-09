import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className='flex flex-col gap-6 justify-center text-white items-center md:ml-20 md:mt-[-400px]'>
      <div className=' flex flex-col w-3/4 p-5'>
        <h1 className='text-4xl mb-4 p-4 rounded font-serif font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
          Major Projects I&apos;ve worked on:
        </h1>
        <p className='font-bold text-gray-500'>
          Here are the major projects I have worked on, some still under
          developement, smaller projects can be found on{" "}
          <Link
            className='text-blue-500'
            href='/https://github.com/JOHN-AMAO'
          >
            {" "}
            my github page
          </Link>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Page;
