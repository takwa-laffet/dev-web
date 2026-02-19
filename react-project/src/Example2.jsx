const nom="ali123";
export function Exemple2(){
    return(
        <div>
           <h1>{nom},{salut()}</h1> 
        </div>
    )
}
export function Testapp(){
    return(
        <div>
            <h1>test</h1>
        </div>
    )
}
function GetName(){
    const name="takwa";
    return (
        <>
        <h1>hi {name}</h1>
        </>
    )
}
export default GetName;
export function Getage(){
    const age=25;
    return (
        <h1>age: {age}</h1>
    )
}
function salut(){
    return "bienvenue dans react";

}
export function Testconnect(){
    const test=false;
    return <h1>{test ? "user connecté":"user non connecté"}</h1>}
export function Testconnect2(){
    const Admin=false;
    return( <h1>{Admin && <p>Bienvenue Admin</p>}</h1>);
}
export function PartyEvent(){
    function createevent(){
        alert("event created");
    }
    return(
        <>
<h1>Party Event</h1>
                <button onClick={createevent}>create party event</button>

        </>
    )
}
