import React, {useMemo, useRef, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
function App() {

  const [posts, setPosts] = useState([
      {id:1, title: 'Mayble Pines', body: 'Description1'},
      {id:2, title: 'Dipper Pines', body: 'Description2'},
      {id:3, title: 'Jesús Ramírez', body: 'Description3'},
  ])

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false);


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
        setModal(false)
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
    <div className="App">
        <MyButton style={{marginTop: 30}} onClick={()=> setModal(true)}>
            Create user
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
        </MyModal>
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
