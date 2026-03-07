import React,{useState,useEffect} from "react";
export default function Posts(){
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        async function getposts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
         }
            getposts();
    },[])
    return(
        <>
        <h1>Posts</h1>
        {posts.map((post)=>
        <div key={post.id} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
        <ul >
            <li>{post.id}</li>
            <li>{post.title}</li>
            <li>{post.body}</li>
        </ul>
        </div>)}
        </>
    )
}