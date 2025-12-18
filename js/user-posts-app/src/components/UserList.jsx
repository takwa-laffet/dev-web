import React, { Component } from 'react';
import {users} from "../data.js";
class UserList extends Component{
    render(){
    const { onclickuser }=this.props;
    return(
        <ul>
            {users.map(user=>(
                <li key={user.id}>
                    <button onClick={()=>{
                        onclickuser(user.id)}}>
                        {user.name}
                        </button>
                        </li>
             ))}
                </ul>
            );
        }
    }
        export default UserList;
