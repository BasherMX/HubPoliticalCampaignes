import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {

  abrirEnlace(opt: boolean){
    setTimeout(() => {
      let url = "";
      if(opt){ //what
        url = 'https://wa.me/+523346502871?text=Hola!+vengo+de+tu+portafolio+me+gustaría+más+información+sobre+una+página+web';
      }else{ //twitter
        url = 'https://twitter.com/Basher_dev';
      }
      window.open(url, '_blank');
    }, 400);
  }
}
