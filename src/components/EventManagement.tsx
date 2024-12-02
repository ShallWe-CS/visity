import React from "react";

const EventManagement = () => {
  return (
    <section className="w-full items-center pt-10 my-5 mx-auto max-w-[1440px]">
      <div className="my-5">
        <h1 className="w-full pb-8 text-4xl tracking-tight leading-none md:text-5xl xl:text-4xl text-black">
          Simplified Event Management
        </h1>
        <div className="flex justify-center">
          <img
            src="https://static.wixstatic.com/media/d15db3_adbf2382288042c086b3ed6e5ef6a129~mv2.png/v1/fill/w_921,h_161,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/VISITY_HowItWorks.png"
            alt="mockup"
          />
        </div>
      </div>

      <div className="py-20">
        <div className="flex max-w-[700px] mx-auto flex-col items-center py-15 my-5 bg-yellow-50">
          <h1 className="w-full pb-10 text-4xl tracking-tight leading-none md:text-5xl xl:text-4xl text-black">
            Created for Event Organisers
          </h1>
          <p className="w-full text-center px-5 mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-lg">
            There is a lot going on behind the scenes. We understand the pain of
            event organisers and have designed Visity to make it super easy to
            host manage events.
          </p>
          <p className="w-full text-center px-5  mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-lg">
            Say goodbye to manual pen and paper processes and hello to the
            convenience of Visity for your next event.
          </p>
        </div>
      </div>

      <div className="py-20">
        <h1 className="w-full pb-15 text-4xl tracking-tight leading-none md:text-5xl xl:text-4xl text-black">
          How it Works?
        </h1>
        <div className="flex items-center w-full col-span-6">
          <div className="px-6 h-96 lg:h-100% w-full max-w-4xl col-span-6 flex items-center mx-auto">
            <div className="w-full h-full">
              {/* <div className="w-full h-full">
                <iframe
                  frameborder="0"
                  allowfullscreen="1"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&amp;mute=0&amp;controls=0&"
                  id="widget2"
                ></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <h1 className="w-full pb-10 text-4xl tracking-tight leading-none md:text-5xl xl:text-4xl text-black">
          Why we created Visity?
        </h1>
        <p className="w-full max-w-[700px] mx-auto text-center px-5 mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-lg">
          We believe the creative intelligence of humanity should not be wasted
          standing in lines and filling out forms. Man landed on the moon in
          1969 but till today we still use manual process with pen and paper for
          event operations.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto py-20">
        <h1 className="w-full pb-10 text-4xl tracking-tight leading-none md:text-5xl xl:text-4xl text-black">
          Features
        </h1>
        <p className="w-full text-center px-5 mb-6 font-light text-gray-800  lg:mb-8 md:text-lg lg:text-lg">
          Ditch the clipboard. Go paperless with Visity!
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 mt-10">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://static.wixstatic.com/media/d15db3_c68c3be6714b4539a2ab01da00178e00~mv2.png/v1/fill/w_67,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/invite.png"
              alt="Feature 1"
              className="mb-4 w-18 h-18 object-cover"
            />
            <h3 className="text-lg font-medium text-black">RSVP Form</h3>
            <h4 className="text-md font-medium text-gray-800  text-center mt-5">
              tailored to fit event's needs
            </h4>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://static.wixstatic.com/media/d15db3_14e496b55dd6413ea62f52dfaf77614b~mv2.png/v1/fill/w_67,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/qr-code%20(4).png"
              alt="Feature 2"
              className="mb-4 w-18 h-18 object-cover"
            />
            <h3 className="text-lg font-medium text-black">eTicket QR Code</h3>
            <h4 className="text-md font-medium text-gray-800  text-center mt-5">
              sent to attendee upon registration via email
            </h4>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://static.wixstatic.com/media/d15db3_ea51a21949334a82971e35a4ceb36535~mv2.png/v1/fill/w_67,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/security%20(1).png"
              alt="Feature 3"
              className="mb-4 w-18 h-18 object-cover"
            />
            <h3 className="text-lg font-medium text-black">Security</h3>
            <h4 className="text-md font-medium text-gray-800  text-center mt-5">
              eTicket can only be scanned from a Visity scanner
            </h4>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://static.wixstatic.com/media/d15db3_bca6ec79d3984d4ea1fa87f1d1b3fc6a~mv2.png/v1/fill/w_67,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d15db3_bca6ec79d3984d4ea1fa87f1d1b3fc6a~mv2.png"
              alt="Feature 4"
              className="mb-4 w-18 h-18 object-cover"
            />
            <h3 className="text-lg font-medium text-black">
              Real Time Notifications
            </h3>
            <h4 className="text-md font-medium text-gray-800  text-center mt-5">
              send email broadcasts to all your attendees on the go
            </h4>
          </div>
          {/* Item 5 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://static.wixstatic.com/media/d15db3_081387230a594f1caa7c5b9d22834392~mv2.png/v1/fill/w_67,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d15db3_081387230a594f1caa7c5b9d22834392~mv2.png"
              alt="Feature 5"
              className="mb-4 w-18 h-18 object-cover"
            />
            <h3 className="text-lg font-medium text-black">Mobile-first app</h3>
            <h4 className="text-md font-medium text-gray-800  text-center mt-5">
              Grab a coffee and manage your event from your mobile. You don't
              need a laptop.
            </h4>
          </div>
          {/* Item 6 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://static.wixstatic.com/media/d15db3_1682f24c8a2e4cfc86f225eab1ef3119~mv2.png/v1/fill/w_67,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d15db3_1682f24c8a2e4cfc86f225eab1ef3119~mv2.png"
              alt="Feature 6"
              className="mb-4 w-18 h-18 object-cover"
            />
            <h3 className="text-lg font-medium text-black">
              Seamless User Experience
            </h3>
            <h4 className="text-md font-medium text-gray-800 text-center mt-5">
              Your attendees will love the hassle free check-in experience
              tailored to fit event's needs
            </h4>
          </div>
        </div>
      </div>

      <section className="bg-white w-full">
        <div className="grid px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
          {/* Left Section */}
          <div className="mr-auto place-self-center lg:col-span-4">
            <h1 className="text-left max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-5xl text-black">
              It's all about the experience!
            </h1>
            <p className="text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Visity has been designed for simplicity and ease of use for event
              organizers and attendees.
            </p>
          </div>

          {/* Right Section */}
          <div className="hidden lg:mt-0 lg:col-span-8 lg:flex">
            <img
              src="https://static.wixstatic.com/media/d15db3_1b8500321eb4483bb9cb6458652d863b~mv2.jpg/v1/fill/w_960,h_604,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d15db3_1b8500321eb4483bb9cb6458652d863b~mv2.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default EventManagement;
