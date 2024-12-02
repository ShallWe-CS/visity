import React from "react";

const Hero = () => {
  return (
    <section className="bg-white text-black w-full mx-auto max-w-[1440px]">
      <div className="grid px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Left Section */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-left max-w-2xl text-blue-500 mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-5xl ">
            QR Code
          </h1>
          <h1 className="text-left max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-5xl ">
            for Superfast
          </h1>
          <h1 className="text-left max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-5xl ">
            Check-In!
          </h1>
          <p className="text-left max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl ">
            Ideal for MICE, conferences, exhibitions and other events.
          </p>
          <button
            // href="#"
            className="flex items-start bg-blue-500 text-white  px-5 py-3 text-md font-semibold border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 text-left"
          >
            Schedule Demo
          </button>
        </div>

        {/* Right Section */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
