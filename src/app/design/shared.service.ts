import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedService {
	
	public users;

  constructor( private http: Http ) { }	
	getUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .map((res:Response) => res.json())
	.subscribe(
        data => { this.users = data},
        err => console.error(err),
        () => console.log('done')
      );
  }
  
}
