import React,{useState,useEffect} from 'react';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({currentId,setCurrentId}) => {
    
  const [postData,setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

   useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () =>{
      setCurrentId(0);
      setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''})
  }
  const handleSubmit = async(e)=>{
      e.preventDefault();

      if(currentId === 0){
          dispatch(createPost(postData));
          clear();
      }else{
          dispatch(updatePost(currentId, postData))
          clear();
      }
  }
  return <div>
     <div className="container mx-auto">
         <form onSubmit={handleSubmit}>
             <input type="text" name="creator" placeholder="Creator" value={postData.creator} onChange={(e) => setPostData({...postData, creator:e.target.value})} />
            <input type="text" name="title" placeholder="title " value={postData.title} onChange={(e) => setPostData({...postData, title:e.target.value})} />

             <input type="text" name="message" placeholder="message" value={postData.message} onChange={(e) => setPostData({...postData, message:e.target.value})} />
             <input type="text" name="tags" placeholder="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}  />

            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile:base64})} />
<button type="submit">Submit</button><br/>
<button type="submit">Clear</button>

         </form>
         </div> 
  </div>;
};

export default Form;
