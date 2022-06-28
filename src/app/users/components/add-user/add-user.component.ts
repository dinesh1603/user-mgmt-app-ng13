import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 0: Have the HTML form with necessary inputs first. It is already present. 

  // Step 1: Have the HTML form tag equivalent in TS 
  addUserForm = new FormGroup({
    // Step 2: Have the input equivalents in TS 
    name: new FormControl('', Validators.required), // Step 5: Let's setup validations 
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]), //adding email validation also
  });
  // Refer HTML for step 3

  isSaved = false;

  constructor(private userService: UserService) { // 0. connect with the service class using dep injection 

  }

  ngOnInit(): void {
  }

  handleAddUser(): void {
    console.log('Submitted');
    console.log(this.addUserForm.value); // here's the form data

    // 1. Send the above form data to the service 
    this.userService.createUser(this.addUserForm.value)
      .subscribe((res: any) => { // 2. get the resp from the service 
        console.log(res);
        if (res && res.id) {
          this.isSaved = true;
        }
      });
  }

}
