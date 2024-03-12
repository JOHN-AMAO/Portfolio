import React from "react";

const Page = () => {
  return (
    <div className='flex flex-col gap-4 md:mt-20 justify-center md:h-screen md:ml-20 text-white'>
      <h1 className='md:text-2xl text-xl underline  font-extrabold'>
        My Resume
      </h1>
      <h2>Here are some of the technologies and languages I work with:</h2>
      <div>
        <h2 className='md:text-xl text-lg font-extrabold'>Languages</h2>
        <p>Python</p>
        <p>TypeScript</p>
        <p>JavaScript</p>

        <h2 className='md:text-xl text-lg my-5  font-extrabold'>
          Frameworks and libraries, databases and databases tools
        </h2>
        <p>Nextjs</p>
        <p>React</p>
        <p>Nodejs</p>
        <p>Expressjs</p>
        <p>Django</p>
        <p>Tailwind css</p>
        <p>Shadcn UI</p>
        <p>Zod</p>
        <p>React Hook Form</p>
        <p>Mongodb</p>
        <p>Mongoose</p>
        <p>Prisma</p>
        <p>A lot more</p>
        <h2 className='md:text-xl text-lg my-5 font-extrabold'>Tools</h2>
        <p>Docker</p>
        <p>Postman</p>
        <p>Vercel</p>
        <p>Git and GitHub</p>
        <p>Heroku</p>
        <p>Locofy</p>
        <p>V0.dev</p>
      </div>
    </div>
  );
};

export default Page;
