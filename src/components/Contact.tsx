import React from "react";

const Contact = () => {
  return (
    <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-3xl tracking-tight text-gray-900">
        Contact Us
        </h1>
        <p className="mt-3 text-lg text-gray-600">
        You will hear back from us within 24 hours
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              // for="first-name"
              className="block text-left text-sm leading-6 text-gray-900"
            >
              First Name *
            </label>
            <div className="mt-2.5">
              <input
                required={true}
                type="text"
                name="first-name"
                id="first-name"
                // autocomplete={false}
                className="block w-full border-b focus:outline-none"
                // placeholder="Your First Name"
                // class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              // for="last-name"
              className="block text-left text-sm leading-6 text-gray-900"
            >
              Last Name *
            </label>
            <div className="mt-2.5">
              <input
                required={false}
                type="text"
                name="last-name"
                id="last-name"
                // autocomplete="family-name"
                className="block w-full border-b focus:outline-none"
                // placeholder="Your Last Name"
                // class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* <div class="sm:col-span-2">
            <label
              for="company"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div class="mt-2.5">
              <input
                required=""
                type="text"
                name="company"
                id="company"
                autocomplete="organization"
                placeholder="Your Company Name"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}
          <div>
            <label
              // for="email"
              className="block text-left text-sm leading-6 text-gray-900"
            >
              Email *
            </label>
            <div className="mt-2.5">
              <input
                required={true}
                type="email"
                name="email"
                id="email"
                // autocomplete="email"
                className="block w-full border-b focus:outline-none"
                // placeholder="Your Email Address"
                // class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              // for="phone"
              className="block text-left text-sm leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone"
                id="phone"
                // autocomplete="tel"
                className="block w-full border-b focus:outline-none placeholder:text-xs text-gray-400"
                placeholder="With Country Code"
                // class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              // for="message"
              className="block text-left text-sm leading-6 text-gray-900"
            >
              Where do you want to use Visity? *
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                // rows="4"
                className="block w-full border-b focus:outline-none"
                // placeholder="Share your thoughts..."
                // class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex mt-10 justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-sm py-2 w-[300px] block"
          >
            Sign Me Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
