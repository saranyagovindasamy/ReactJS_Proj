import React from 'react'

function Heading(props) {
  return (
    <div>
        <div className='inline-flex  text-gray-800 rounded-full p-4 text-xl font-bold'>
            <h1 className='outline-0'>{props.title}</h1>
        </div>
    </div>
  )
}

export default Heading