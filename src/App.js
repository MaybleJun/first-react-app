import React, {useRef, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
function App() {

  const [posts, setPosts] = useState([
      {id:1, title: 'Mayble', body: 'Description'},
      {id:1, title: 'Mayble2', body: 'Description'},
      {id:3, title: 'Mayble3', body: 'Description'},
  ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost)=>{
      setPosts([...posts,newPost])
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort())

    }

    return (
    <div className="App">
        <PostForm create={createPost} />
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPosts()}
                defaultValue="Sort"
                options={[
                    {value:'title', name: 'by name'},
                    {value:'body', name: 'by description'},
                ]}
            />
        </div>
        {posts.length
            ?
            <PostList remove={removePost} posts={posts} title="Gravity Falls characters"/>
            :
            <h1 style={{textAlign: 'center'}}>
                Gravity Falls characters not found
            </h1>
        }


    </div>
  );
}

export default App;
