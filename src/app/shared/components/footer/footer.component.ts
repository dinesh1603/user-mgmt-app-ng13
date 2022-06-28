import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <p class="text-center fixed-bottom" style="color: black;">Copyright @ dinesh</p>
  
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
