import React,{useEffect} from 'react'

function Blogs() {
          useEffect(() => {
    document.title = "SaugaTax/Blogs"
  }, [])
  return (
    <div>Blogs</div>
  )
}

export default Blogs