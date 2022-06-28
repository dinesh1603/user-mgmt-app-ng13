import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styles: [
  ]
})
export class UsersDetailsComponent implements OnInit {

  userData: User = new User;
  duplicatedUserData: User = new User;

  isUpdated = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //1.send the request to the service
    this.userService.getUserById(this.route.snapshot.params['id'])
      .subscribe((res: User) => { //2. get the response from the service
        console.log(res);
        this.userData = res;

      })
  }

  handleUpdateModelOpen(): void {
    this.duplicatedUserData = { ...this.userData }
  }

  async handleUpdateForm() {
    console.log(this.duplicatedUserData);
    const result = await this.userService.updateUser(this.duplicatedUserData)
    console.log(result);

    if (result && result.id) {
      this.isUpdated = true;
      this.userData = result;
    }
  }


  //Delete User
  deleteUser(): void {
    this.userService.deleteUserById(this.route.snapshot.params['id'])
      .subscribe((res: any) => { //2. get the response from the service
        console.log(res);
        this.userData = res;
        alert("Deleted Successfully");
      this.router.navigate(['/users']);
      })
  }
}
