import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ServiceCustomer{

    constructor(private http: HttpClient){}

 generatepdf(user:any){
    return this.http.get('http:localhost/customer-feedback');
}
}
 