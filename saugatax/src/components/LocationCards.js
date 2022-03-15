import React from 'react';
import LocationCard from './LocationCard'
import Loc1 from "../images/location/loc-1.jpg"
import Loc2 from "../images/location/loc-2.jpg.webp"
import Loc3 from "../images/location/loc-3.jpg"
import Loc4 from "../images/location/loc-4.jpg"
import Loc5 from "../images/location/loc-5.jpg"
import Loc6 from "../images/location/loc-6.jpg"
import Loc7 from "../images/location/loc-7.jpg"
import Loc8 from "../images/location/loc-8.jpg"
import Loc9 from "../images/location/loc-9.jpg"
import Loc10 from "../images/location/loc-10.jpg"

export const LocationData = [
  {id:1,
  title:"Scarborough",
  imgSrc:Loc1,
},
  {id:2,
    title:"Ajax",
      imgSrc:Loc2,

},
  {id:3,
    title:"Oshawa",
      imgSrc:Loc3,

},
  {id:4,
    title:"Whitby",
      imgSrc:Loc4,

},
  {id:5,
    title:"Pickering",
      imgSrc:Loc5,

},
  {id:6,
    title:"Etobicoke",
      imgSrc:Loc6,

},
  {id:7,
    title:"North York",
      imgSrc:Loc7,

},
  {id:8,
    title:"Toronto",
      imgSrc:Loc8,

},
  {id:9,
    title:"Brampton",
      imgSrc:Loc9,

},
  {id:10,
    title:"Markham",
      imgSrc:Loc10,

},
]
function LocationCards() {
  return <div>

      <div className="grid my-2 md:grid-cols-3  lg:grid-cols-5 lg:gap-y-0 gap-x-10 mx-9">
        {LocationData.map((data) => <LocationCard key={data.id} id={data.id} title={data.title} img={data.imgSrc}/>)}
      </div>
  </div>
}

export default LocationCards;




