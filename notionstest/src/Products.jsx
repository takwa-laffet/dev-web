import { useEffect, useState } from "react";

export default function Products(){
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        async function fetchProducts(){
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);}
            fetchProducts();
    },[])
return(
    <>
    <h1>Products</h1>
     {products.map((product)=><div key={product.id} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <img src={product.image} alt={product.title}/>
     </div>)}
    </>
)
}