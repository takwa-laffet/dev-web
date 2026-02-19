export function Add(){
    const a=5;
    const b=10;
    return(
        <>
        <h1>la somme de {a} et {b} est {a+b}</h1>
        <p> nombre au hasard :{Math.floor(Math.random()*1000)}</p>
        </>
    )
}
export function Salut2(){
    const salut = (nom)=> `Salut ${nom}! bienvenue ${nom + "!"}`;
    return(
        <>
        <h1>{salut('takwa')}</h1>
        </>
    );
}
export function Teststyle(){
    const test =true;
    const user ={name:"ali",age:45,city:"tunis"};
    return(
        <>
        <h1 style={{color: !test ? 'green' : 'red', fontSize: '24px'}}>{user.name} {user.age} {user.city}
        </h1>
            
<p>{user.name + " "+user.age + " "+ user.city}</p>
        <button onClick={()=>alert("cliqué")}>cliquez moi</button>
        </>
    )
}