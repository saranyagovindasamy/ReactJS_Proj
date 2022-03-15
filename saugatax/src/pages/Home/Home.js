import React,{useEffect} from 'react'
import Rqc from '../../components/Rqc'
import Carousel from "../../components/Carousel"
import Button from '../../components/Button'
import HomesmallCard from '../../components/HomesmallCard'
import Hprovide from '../../components/Hprovide'
import HspecialCard from '../../components/HspecialCard'
import BacCard from '../../components/BacCard'
import Homebg from '../../components/Homebg'
import "../../App.css"
function Home() {
          useEffect(() => {
    document.title = "SaugaTax/Home"
  }, [])
  return (
    <div>
      <div className="mb-10">
      <Carousel />
      </div>

      <HomesmallCard />
 
     <div className='my-10 w-full bg-zinc-700 p-5 shadow-md'>
       <h1 className='text-3xl font-bold text-white'>We Provide</h1>
       </div>
      <Hprovide />
      <HspecialCard />
<Button name="All Service"/>
<Homebg />

<div className='mt-10'>
<Rqc />
</div>
    </div>
  )
}

export default Home