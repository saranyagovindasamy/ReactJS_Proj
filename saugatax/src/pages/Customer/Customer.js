import React,{useEffect} from 'react'
import customer from '../../images/customers/Customer.png'
import Header from "../../components/Header"
import customer1 from "../../images/customers/customer1.jpg"
function Customer() {
        useEffect(() => {
    document.title = "SaugaTax/Customer"
  }, [])
  return (
   
    
    <div>
        
        <Header img={customer} title="Our Customers"
        description="Saugatax is produly serving a broad range of spectrum including self-employed professional and Corporate firms."/>
     
    <div className="mt-10 lg:invisible" >
    <img src={customer1} alt="customer" className="lg:object-none"/>
    </div>
    <div className="flex flex-col container mx-auto mt-10 lg:-mt-32">
        <h1 className='text-center mx-auto text-2xl font-semibold py-8'>Industries We Serve</h1>
    <div className='mx-5 flex flex-col md:flex-row md:mx-10 md:space-x-10'>
        <ul className='list-disc list-inside text-left leading-relaxed mt-5 md:basis-1/2 md:break-words lg:basis-3/4'>
            <li>Advertising Companies</li>
            <li>Automobile Services</li>
            <li>Banquet Hall & Convention Center</li>
            <li>Carpet & Upholstery Cleaning Services</li>
            <li>Courier Services</li>
            <li>Dentist and Dental Services</li>
            <li>Digital Marketing Agencies</li>
            <li>Food Delivery Services</li>
            <li>Painiting Services</li>
            <li>Pest Control Services</li>
            <li>Placement Agency Services</li>
        </ul>
        <ul className='list-disc list-inside text-left leading-relaxed mt-5  md:basis-1/2 md:break-words lg:basis-3/4'>
            <li>Food Retail-Groceries & Covenient Stores</li>
            <li>Online Business-E-Commerce</li>
            <li>Painting Services</li>
            <li>Pest Control Services</li>
            <li>Placement Agency Services</li>
            <li>Property Management Services</li>
            <li>PSW and Health Care Professionals</li>
            <li>Real Estate Agents</li>
            <li>Real Estate Staging Services</li>
            <li>Renovation – Residential and Commercial</li>
            <li>Property Management Services</li>
            </ul>
            <ul className='list-disc list-inside text-left leading-relaxed mt-5 md:basis-1/2 md:break-words lg:basis-3/4'>

            <li>PSW and Health care Professionals</li>
            <li>Restaurants & Bars</li>
            <li>Restaurants/catering Services</li>
            <li>Salon Spa and Beauty Solutions</li>
            <li>Tours and Travel Agencies</li>
            <li>Towing Services</li>
            <li>Truck Services</li>
            <li>Tuition and Educational Services</li>
            <li>Uber/Lyt Passenger Services</li>
            <li>Warehousing Business</li>
        </ul>
    </div>
    </div>
    <div className='flex justify-center items-center w-full mt-5 bg-gray-900 h-40'>
        <button className='border-none text-white rounded-md bg-red-500 p-4 font-bold text-lg'>Contact Us</button>
    </div>
   </div>
 
  )
}

export default Customer