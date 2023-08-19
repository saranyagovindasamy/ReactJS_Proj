import React from 'react'
import Banner from '../components/Banner'
import Cards from "../components/Cards"
function CareersPage() {
  return (
    <div>
      <div className="mx-auto container mt-10 mb-10">
        <Banner title="Career Opportunities" subtitle="NB:" desc="Please note that in reason of strict labor laws, we are hiring Vietnamese Nationals in Priority, but please do have a look at vacancies and jon description in this page, we may hire Non-Vietnamese too."/>
        <Cards />
  
    <span className="mb-5">Please Send your CV and Portfolio at <a className="underline decoration-pink-500 decoration-4">jobs@bad-clay.com</a></span>
    </div>
      </div>
  )
}

export default CareersPage