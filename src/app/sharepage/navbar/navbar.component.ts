import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router){

  }
  ngOnInit() {
  }
  
  // login(){
  //   this.router.navigateByUrl('');
  // }

  home(){
    this.router.navigateByUrl('');
  }

  about(){
    this.router.navigateByUrl('about');
  }
  toypage(){
    this.router.navigateByUrl('toypage');
  }
  toylist(){
    this.router.navigateByUrl('toylist');
  }
  contact(){
    this.router.navigateByUrl('contact');
  }

}
