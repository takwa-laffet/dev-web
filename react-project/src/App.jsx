import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Exemple2 ,Testapp} from './Example2'
import GetName from './Example2'
import { Getage } from './Example2'
import { Testconnect } from './Example2'  
import { Testconnect2 } from './Example2'
import { PartyEvent } from './Example2'
import Fruit from './Fruit'
import { Add, Salut2 } from './add'
import { Teststyle } from './add'
import Home from './component/Home'
import Profile from './component/Profile'
import {User2} from './component/User'
import { Hello } from './component/User'
import Test from './component/Test'
import Api from './component/Api'
import { Api2} from './component/Api'
import Posts from './component/Posts'
 
function App() {
  const name ="takwa";
  const age="25";
/* Api().then((users)=>{
  console.log(users);
  users.forEach((user)=>{
    console.log(user.name);
    console.log(user.email);
  });
  }).catch((error)=>{
    console.log(error);
  
}); */
Api2().then((posts)=>{
  posts.forEach((post)=>{
    console.log(post.userId);
    console.log(post.title);
    console.log(post.body);
  });
}).catch((error)=>{
  console.log(error);
})
  return (
    <>
    <Posts/>
{/*     <Hello/>
 */}    
 {/* 
 <Test/>
 <User2 id="user2"/>
    <Profile name={name} age={age}/>
    <Home/>
    <Teststyle/>
    <Salut2/>
    <Add/>
    <Fruit/>
    <PartyEvent/>
    <Testconnect2/>
    <Testconnect/>
    <div className="div1">
      <p>test test test </p>
    </div>
    <GetName/>
    <Getage/>
    <Exemple2/>
    <Testapp></Testapp> */}
    </>
  )
}

export default App
