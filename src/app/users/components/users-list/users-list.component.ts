import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: [
  ]
})
export class UsersListComponent implements OnInit, OnDestroy {

  usersList : User[] = [];
  userSubscription: Subscription | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //1.send the request to the service
    this.userSubscription = this.userService.getUsers()
      .subscribe( (res: User[])=>{
        console.log(res); //2. get the response from the service
        this.usersList=res;
      })

    
  }

  ngOnDestroy(){
    this.userSubscription?.unsubscribe();

    if(this.usersList && this.usersList.length >0){
      this.usersList.length =0;
    }
  }

}
