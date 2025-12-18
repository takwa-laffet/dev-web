import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import UserList from './components/UserList';
import { Component } from 'react';

class App extends Component{
  state={
    userId:null
  }
  selectUser=(id)=>{
    this.setState({userId:id});
  }
  render(){
    const {userId}=this.state;
    return(<div>
      <UserList onclickuser={this.selectUser}/>
      <PostList userId={userId}/>
    </div>
    )
  }
}
export default App;