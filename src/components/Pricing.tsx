import React from "react";

const Pricing = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="flex flex-col mx-auto items-center max-w-screen-md mb-8 lg:mb-12">
          <h2 className="mb-4 mx-auto text-center text-2xl tracking-tight w-[120px] text-gray-900">
            $
          </h2>
          <h2 className="mb-4 mx-auto text-center text-4xl tracking-tight w-[120px] text-gray-900 border-b border-black pb-3">
            Pricing
          </h2>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 md:grid-cols-3 lg:space-y-0">
          {/* <!-- Pricing Card --> */}
          <div className="flex flex-col p-6 mx-auto max-w-[285px] text-center border-2 border-gray-100 shadow dark:border-gray-400 xl:p-8 dark:bg-white dark:text-black">
            <h3 className="mb-4 text-2xl">Community</h3>
            <div className="flex flex-col justify-center items-center my-8">
              <div>
                <span className="mr-2 text-sm">$</span>
                <span className="mr-2 text-5xl">0</span>
              </div>
              <span className="text-gray-500 dark:text-black uppercase text-xs">
                unlimited events
              </span>
              <span className="text-gray-500 dark:text-black text-sm mt-10 border-b border-black pb-7">
                for small events with less than 100 attendees
              </span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="flex flex-col mb-8 space-y-4 items-center">
              <li className="flex items-center space-x-3">
                <span>RSVP Form</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>QR Code Scanner</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Unique QR Code for Each Attendee</span>
              </li>
            </ul>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="flex flex-col p-6 mx-auto max-w-[285px] text-center border-2 border-gray-100 shadow dark:border-gray-400 xl:p-8 dark:bg-white dark:text-black">
            <h3 className="mb-4 text-2xl">Events</h3>
            <div className="flex flex-col justify-center items-center my-8">
              <div>
                <span className="mr-2 text-sm">$</span>
                <span className="mr-2 text-5xl">999</span>
              </div>
              <span className="text-gray-500 dark:text-black uppercase text-xs">
                unlimited events
              </span>
              <span className="text-gray-500 dark:text-black text-sm mt-10 border-b border-black pb-7">
                for conferences, conventions and other large events
              </span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="flex flex-col mb-8 space-y-4 items-center">
              <li className="flex items-center space-x-2">
                <span>everything in Community +</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Unlimited Email Broadcasts</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Unlimited Whatsapp Boradcasts</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Custom RSVP Form</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Payment Integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Real Time Analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>24*7 Phone Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>other Customisations</span>
              </li>
            </ul>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="flex flex-col p-6 mx-auto max-w-[285px] text-center border-2 border-gray-100 shadow dark:border-gray-400 xl:p-8 dark:bg-white dark:text-black">
            <h3 className="mb-4 text-2xl">Exhibitions</h3>
            <div className="flex flex-col justify-center items-center my-8">
              <div>
                <span className="mr-2 text-sm">$</span>
                <span className="mr-2 text-5xl">2500</span>
              </div>
              <span className="text-gray-500 dark:text-black uppercase text-xs">
                unlimited events
              </span>
              <span className="text-gray-500 dark:text-black text-sm mt-10 border-b border-black pb-7">
                for small events with less than 100 attendees
              </span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="flex flex-col mb-8 space-y-4 items-center">
              <li className="flex items-center space-x-3">
                <span>everything in Community +</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>everything in Events +</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Lead Management App for every stall / exhibitor</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
