import React from 'react'

function Rqc() {
  return (
    <div>
    <h3 className="text-3xl text-center mx-auto font-extrabold leading-6 text-red-500">Request a Call Back ?</h3>


<div className="mt-10 mx-auto md:mx-52 lg:mx-60 xl:mx-72 container ">
        <div className=" md:grid md:grid-cols-3 md:gap-6">
         
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 text-left">
                      <label htmlFor="first-name" className="text-left text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 w-full h-10 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 "
                      />
                    </div>

                   

                    <div className="col-span-6 sm:col-span-4 text-left">
                      <label htmlFor="email-address" className="text-sm font-medium text-gray-700">
                        Email 
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 "
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 text-left">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                        Select a Service
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 cursor-pointer block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                         <option>Choose One</option>
                        <option>Services/General</option>
                        <option>Personal Tax</option>
                        <option>Corporate Tax</option>
                        <option>US Tax</option>
                        <option>Self-Employment Tax</option>
                        <option>Business Incorporation Services</option>
                        <option>Business Advisory Services</option>
                        <option>Additional corporation Services</option>
                        <option>Accounting & Book Keeping </option>
                        <option>Other Services</option>

                      </select>
                    </div>
                    <div className="col-span-6 text-left sm:col-span-6 lg:col-span-2">
                      <label htmlFor="phone" className=" appearance-none block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        className="mt-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 "
                      />
                    </div>

                    <div className="col-span-6 text-left">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                      Type your Message
                      </label>
                      <textarea
                        rows="6"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                      />
                    </div>

                    

                    

                    
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium border-red-500 rounded-md text-red-600 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-indigo-800"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  )
}
export default Rqc