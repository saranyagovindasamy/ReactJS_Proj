import React from 'react';
import { useDispatch} from 'react-redux'
import moment from 'moment';

import { likePost,deletePost} from '../../../actions/posts';


const Post = ({post,setCurrentId}) => {

    const dispatch = useDispatch();
    console.log(dispatch)

return(
<>
   <div>
     <div className="h-24 w-24">
        {post.creator}<br />
        {post.title}<br />
        {moment(post.createdAt).fromNow()}
        
         {/* {post.tags.map((tag) => `#${tag}`)} */}
         {post.message}
         </div> 
         <button onClick={()=>dispatch(likePost(post._id))}>Like</button>
        <button onClick={()=>dispatch(deletePost(post._id))}> delete</button>
        <button onClick={()=>setCurrentId(post._id)}> Edit</button>

            </div>
            </>
)}

export default Post;
