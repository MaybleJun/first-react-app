import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
function App() {

  const [posts, setPosts] = useState([
      {id:1, title: 'Mayble', body: 'Description'},
      {id:1, title: 'Mayble2', body: 'Description'},
      {id:3, title: 'Mayble3', body: 'Description'},
  ])

    const createPost = (newPost)=>{
      setPosts([...posts,newPost])
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
    <div className="App">
        <PostForm create={createPost} />
        <PostList remove={removePost} posts={posts} title="Персонажи Гравити Фолз"/>

    </div>
  );
}

export default App;
