import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user=
  {
    usuario:"felipe",
    password:"1234"
  }

  constructor( public loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async login(forma:NgForm)
  {
    if (forma.valid) {
      console.log("ingrese a login");
      const loading =  await this.loadingCtrl.create({
        
        message: 'Validando...',
        spinner: 'dots',
        duration: 1000,
        
      
      });

      loading.present();
      //this.user.usuario = forma.value.email;
     // this.user.password = forma.value.clave;

    }
    if  (this.user.usuario === forma.value.User && this.user.password === forma.value.password)
    {
      this.loadingCtrl.dismiss();

      console.log("verdadero")
      //this.user.usuario = forma.value.email;
      //this.user.password = forma.value.clave;
    }
    else
    {
     console.log("falso")
    }
 }
}