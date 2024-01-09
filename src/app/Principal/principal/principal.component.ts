import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.less']
})
export class PrincipalComponent {
  

  cotizar="https://wa.me/+523346502871?text=Hola+me+gustaría+contratar+una+pagina+";
  cardsData = [
    {
      imageUrl: '../../../assets/principal/Riestra.png',
      title: 'Web de Campaña',
      link: 'https://elecciones-git-master-bashermx.vercel.app?_vercel_share=Djl6AOI3LJeezYrO1I0nrgXkUGgIAUxg',
    },
    {
      imageUrl: '../../../assets/principal/moni+.png',
      title: 'Web Personalizada',
      link: 'https://example-1stinfrom.my.canva.site/moni-becerra',
    },
    {
      imageUrl: '../../../assets/principal/Juvenil.png',
      title: 'Web Juvenil',
      link: 'https://webs-politicas.vercel.app/WebJuvenil',
    },
  ];

  

  replaceSp(inputString:string) {
    return inputString.replace(/ /g, '+');
  }

  abrirEnlace(url: string): void {
    if(url != null && url !="")
    window.open(url, '_blank');
  }
}
