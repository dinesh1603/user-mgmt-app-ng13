import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { // dep inj for http client 

  }

  // Create User Request
  createUser( formData: User): Observable<User> { // 1. get the form data from the comp ts 
    console.log(formData);
    
    // 2. send the data to the rest api
      // 2.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users 
      // 2.2. What's the data? formData 
      // 2.3. What's the Http Method? POST 
      // 2.4. What's the REST API Client tool? HttpClient 
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', formData)
      .pipe( map( (res: User) => { // 3. get the res from the rest api 
        console.log(res);
        // 4. send the res to the comp ts 
        return res;
      }));  
  }

  //Get Users Request
  getUsers() : Observable<User[]>{ //1.get the request from the service
    //2.send the request to the rest API
      // 2.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users 
      // 2.2. What's the data? formData 
      // 2.3. What's the Http Method? GET 
      // 2.4. What's the REST API Client tool? HttpClient 
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
      .pipe(map((res: User[])=>{ //3. get the res from the rest API
        console.log(res);
        //4. send the response to the component
        return res;
      }))
  }

  // single iser details
  getUserById(userId: string): Observable<User>{//1. get the req with an id from the component
    //2.send the request to the rest API
      // 2.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users 
      // 2.2. What's the data? formData 
      // 2.3. What's the Http Method? GET 
      // 2.4. What's the REST API Client tool? HttpClient 
    
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .pipe(map((res: User)=>{ //3. get the res from the rest API
      console.log(res);
      //4. send the response to the component
      return res;
    }))
  }

  //Update Users Request
  updateUser(formData: User): Promise<User>{
    console.log(formData);

    return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${formData.id}`,formData)
      .toPromise()
      .then((res: User | undefined)=>{
        console.log(res);
        return res;
      })
      .catch((err)=>{
        console.log(err);
        return err;
      })
      .finally(()=>{
        console.log("It is over!")
      })
    
  }

  //Delete Users Request
  deleteUserById(userId: string): Observable<User>{//1. get the req with an id from the component
    //2.send the request to the rest API
      // 2.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users 
      // 2.2. What's the data? formData 
      // 2.3. What's the Http Method? DELETE 
      // 2.4. What's the REST API Client tool? HttpClient 
      console.log(userId);
    return this.http.delete<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .pipe(map((res: User)=>{ //3. get the res from the rest API
      console.log(res);
      
      //4. send the response to the component
      return res;
      
    }))
  }
}
