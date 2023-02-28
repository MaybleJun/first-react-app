import React, {useMemo, useRef, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
function App() {

  const [posts, setPosts] = useState([
      {id:1, title: 'Mayble1', body: 'Description1'},
      {id:1, title: 'Mayble2', body: 'Description2'},
      {id:3, title: 'Mayble3', body: 'Description3'},
  ])

    const [filter, setFilter] = useState({sort:'', query:''})


    const sortedPosts = useMemo(()=>{
        console.log('work')
        if(filter.sort){
            return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    },[filter.query,sortedPosts])

    const createPost = (newPost)=>{
      setPosts([...posts,newPost])
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
    <div className="App">
        <PostForm create={createPost} />
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Gravity Falls characters"/>
    </div>
  );
}

export default App;
