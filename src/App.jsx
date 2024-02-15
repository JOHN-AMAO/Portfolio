import { BrowserRouter } from "react-router-dom";
// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='text-center relative z-0 h-screen bg-primary'>
          {/* <div
            className='bg-hero-pattern bg-cover
        bg-no-repeat bg-center'
          > */}
          {/* <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas /> */}
          <p>
            Got tired of all the stupid animations on this site, new version
            coming when i am a bit free{" "}
          </p>
          {/* </div> */}
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
