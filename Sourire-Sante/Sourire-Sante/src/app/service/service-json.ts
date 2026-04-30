import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn: "root",
})
export class ServiceJson {
    private http=inject(HttpClient);
    private url ="http://localhost:3000/patients";
//attribut pour stocker les données récupérées de l'API
    private patients=this.http.get(this.url).subscribe((data=>console.log('Patients:', data)));
//methode pour récupérer les données de l'API
getPatients():Observable<any>{
    return this.http.get(this.url);

}
addPatient(patient:any):Observable<any>{
    return this.http.post(this.url,patient);
}
addrendezvous(rendezvous:any):Observable<any>{
    return this.http.post(this.url,rendezvous);}
getrendezvouswithdate(date:any):Observable<any>{
    return this.http.get(this.url+'?date='+date);}
getpatientbyname(name:any):Observable<any>{
    return this.http.get(this.url+'?name='+name);}
modifierpatient(id:any,patient:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,patient);}
supprimerpatient(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
}
}