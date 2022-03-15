import React from 'react'
import { useSelector} from 'react-redux'

import Post from './Post/Post';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts)

return(
    
    <div>
        {!posts.length ? "Loading...":(
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        
{posts.data.map((post) =>(
         
        <Post post={post} key={post._id} setCurrentId={setCurrentId} />
        
        ))
    }</div>)}

      </div>
   

)


            }      

export default Posts;