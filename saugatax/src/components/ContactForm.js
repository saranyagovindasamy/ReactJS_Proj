import React from 'react'


function ContactForm() {
  return (
    <div>
        <h1 className="mt-5 font-semibold text-3xl container mx-auto">Fill In Your Info!</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 my-10 mx-20 space-y-5 text-left font-light '>
       <div className="md:mt-5">
        <label >First Name</label>
        <input type="text" className=' my-5 border-b-2 border-black  w-72 content-center focus:border-b-4 focus:outline-none' />
          </div>
         
          <div>
          <label>Last Name</label>
        <input type="text" className="my-5 border-b-2 border-black  w-72 content-center  focus:border-b-4 focus:outline-none"/>
          
         </div>
       
       
          <div><label>Phone</label>
        <input type="number" className="my-5 border-b-2  border-black w-72 content-center  focus:border-b-4 focus:outline-none" />
         </div>
         
           <div>
          <label className="pb-3">Email</label>
        <input type="email" className="my-5 border-b-2 border-black  w-72 content-center  focus:border-b-4 focus:outline-none"/>
          
         </div>
         <div> <label>Message</label>
        <textarea cols="6" className="my-5 border-b-2 border-black w-72 content-center focus:border-b-4 focus:outline-none"/>
         </div><div> <label>Select Service</label>
          <select className="my-5 after:border-b-2 border-black w-72 content-center cursor-pointer focus:border-b-4 focus:outline-none">
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
    </div>
    <button type="button" className='inline-block font-semibold mx-auto  bg-blue-900 hover:bg-red-600 text-white border-black px-16 py-5 mb-5'>Submit</button>
    </div>
  )
}

export default ContactForm
