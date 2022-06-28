import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  template: `
  <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">User Manager +</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <app-menu>
          
          <li class="nav-item">
            <a class="nav-link" routerLink="/login"  *ngIf="isLogin">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  (click)="handleLogout()" *ngIf="!isLogin" >Logout</a>
          </li>
        </app-menu>
        
      </div>
    </div>
  </nav>  
</header>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = true;

  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }
  
  

  handleLogout(){
    
    this.authService.logout();
    alert("Logged Out");
    this.router.navigate(['login']);
  }

}
