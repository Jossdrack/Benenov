import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

    username: string = ""
    password: string = ""
    cpassword: string = "" 
    ngOnInit() {
    }

    async register(){
      const { username, password, cpassword } = this
      if(password !== cpassword){
        return console.error("Passwords don't match")
      }

      try{
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@ynov.com ', password)
        console.log(res) 
      }catch(error) {
          console.dir(error)
      }
    }

}
