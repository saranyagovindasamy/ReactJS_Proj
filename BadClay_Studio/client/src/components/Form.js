import React from 'react'

function Form() {
  return (
    <div>
        <div >
            <form>
                <div className='grid-cols-1 justify-items-center inline-grid mt-5 bg-gray-300 p-10 lg:p-30'>
                    
                <input type="text" name="fname" placeholder='First Name' className='px-10 p-3 mb-4 lg:p-4 lg:px-20'/>
                <input type="text" name="lname" placeholder='Last Name'className='px-10 p-3 mb-4 lg:p-4 lg:px-20'/>

                <input type="email" name="email" placeholder='Email'className='p-3 px-10 mb-4 lg:p-4 lg:px-20'/>

                <input type="text" name="cname" placeholder='Company Name'className='p-3 px-10 mb-4 lg:p-4 lg:px-20'/>
                <textarea className='resize-y px-12 p-5 mb-4 lg:p-5 lg:px-24' placeholder='Type your message here...'></textarea>
                <button className='bg-red-500 p-2 mt-6 text-white font-semibold hover:bg-red-700 rounded-lg'>Send Message</button>

                </div>
              

            </form>
        </div>
    </div>
  )
}

export default Form