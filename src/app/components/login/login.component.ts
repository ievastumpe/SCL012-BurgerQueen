import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
// import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario:UsuarioModel = new UsuarioModel();

  constructor( private auth: AuthService
            ) { }

  ngOnInit() {


if ( localStorage.getItem('email') ) {
  this.usuario.email = localStorage.getItem('email');

}


  }


login(form: NgForm) {
  if (form.invalid ) { return; }
  this.auth.login( this.usuario )
    .subscribe( resp => {
      // this.router.navigateByUrl('/home');
      console.log(resp);
    }, (err) => {
      console.log(err.error.error.message);
    });

// console.log(this.usuario);
// console.log(form);

}

}
