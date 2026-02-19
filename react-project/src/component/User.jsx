import Profile from "./Profile";
import Buttonprops from "./Butonn";
const User ={
    name:"takwa",
    age:25,
    city:"tunis",
    job:"web developer"
}
export const User2 = () =>{
    return(
        <>
        <Profile  name={User.name} age={User.age}/>
        </>)
}
 export default User;
 export const Hello =()=>{
    alert("hello user");
    return(
    <><Buttonprops onClick={Hello} label="click me">hello</Buttonprops></>
);
}
