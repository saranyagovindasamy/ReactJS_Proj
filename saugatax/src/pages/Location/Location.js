import React,{useEffect} from 'react'
import hero from '../../images/location/hero.jpg'
import Header from '../../components/Header'
import LocationCards from '../../components/LocationCards'

function Location() {
    useEffect(() => {
    document.title = "SaugaTax/Location"
  }, [])
  return (

    <div>
      <Header img={hero} title="Our Locations" 
      description="Being one of the leading Tax and Accounting firm in Canada we provide an advantage for our clients by having multiple locations to be reachable for every nuke and corner"/>
       < LocationCards />    
    </div>
  )
}

export default Location