import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  nome = "";
  email = "";
  mensagem = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  enviar(){ 
    console.log(this.nome)
    console.log(this.email)
    console.log(this.mensagem)
    this.showAlert();
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'AVISO',
      subTitle: 'Seu feedback foi enviado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }
}
