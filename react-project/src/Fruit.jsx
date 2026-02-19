const Fruit =()=>{
    const Fruits=["Pomme","Banane","Orange","Fraise"];
   return(
    <ul>
    {Fruits.map((Fruit,index)=>(
        <li key={index}>{index} : {Fruit}</li>
    ))}
   </ul>
   ); 
}
export default Fruit;