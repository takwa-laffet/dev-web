export default function Api(){
    return new Promise((resolve,reject)=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                console.log("test response",response);
                if(!response.ok){
            reject("Error fetching data");
                }
                return response.json();
            })
            .then((data)=>{
                resolve(data);
                console.log(data);
            })
            .catch((error)=>{
                reject(error);
                console.log(error);
            });

        });
}
export async function Api2(){ 
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data= await res.json();
    return data;
}
