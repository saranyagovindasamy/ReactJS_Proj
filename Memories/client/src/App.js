import React, {useState,useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {getPosts} from './actions/posts';
import Post from './components/Posts/Post/Post'
// import Post from './components/Posts/Post/Post'
const App =() => {
  const [currentId,setCurrentId] = useState(0)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts());
    
  },[currentId,dispatch]);
  
  return (
    <div className="App">
         <h1 className="text-3xl font-bold underline">      Hello world!    </h1>
    <div className="grid grid-cols-2">
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Post />
    </div>
    </div>
  );
}

export default App;
