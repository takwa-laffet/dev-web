import { Injectable ,inject, signal} from "@angular/core"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
 })
export class ApiService{
    newbook=signal<any>({});
private http =inject(HttpClient);
private url='https://jsonplaceholder.typicode.com/todos'
//private todos:any[]=this.http.get<any[]>(this.url).subscribe(data=>this.todos=data);
getbooks():Observable<any[]>{
    console.log(this.http.get<any[]>(this.url));
   return this.http.get<any[]>(this.url);

}
/* addbook(book:any):Observable<any>{
this.newbook.set(book);
return this.http.post<any>(this.url,book);
} */
}