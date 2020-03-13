import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private url = 'https://identitytoolkit.googleapis.com/v1';
    private apikey = 'AIzaSyAsQqXyYBc64M4MvgEMjUnaFQ1tx-d8fuE';


    userToken: string;
  //CREAR NUEVO USUARIO
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //LOGIN
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]



  constructor( private http: HttpClient ) { }

logout() {

}

login(usuario: UsuarioModel) {
  const authData = {
    email: usuario.email,
    password: usuario.password,
    returnSecureToken: true
  };
  return this.http.post(
    `${this.url}/accounts:signInWithPassword?key=${ this.apikey }`,
    authData
  );

}

nuevoUsuario(usuario: UsuarioModel){
  const authData = {
    email: usuario.email,
    password: usuario.password,
    returnSecureToken: true
  };
  return this.http.post(
    `${this.url}/accounts:signUp?key=${ this.apikey }`,
    authData
  );
  // ).pipe(
  //    map( resp =>{
  //      this.guardarToken ( resp('idToken'))
  //    })
  // );
}

// private guardarToken (idToken: string){

//   this.userToken = idToken;
//   localStorage.setItem('token', idToken);
//   }

//   leerToken() {
//     if (localStorage.getItem('token')){
//       this.userToken = localStorage.getItem('token');
//     } else {
//       this.userToken = '';
//     }
//     return this.userToken;
//   }

// }
}
