import React, { Component } from 'react';
import {posts} from "../data.js";
class PostList extends Component {
    render(){
        const { userId }=this.props;
        if (!userId) return <div>Please select a user to see their posts.</div>;
        const userPosts=posts.filter(p=>p.userId===userId);
        console.log(userPosts);
        const userhasnotPosts=userPosts.length===0;
        if (userhasnotPosts) return <div>This user has no posts.</div>;
        return(
            <ul>
                {userPosts.map(post=>(
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.descreption}</p>
                    </li>
                ))}
            </ul>
        );
    }

}
export default PostList;