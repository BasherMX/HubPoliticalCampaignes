import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-halloween',
  templateUrl: './halloween.component.html',
  styleUrls: ['./halloween.component.less']
})
export class HalloweenComponent {

  nombre: string = "j";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtener el parámetro 'name' de la URL
    this.route.paramMap.subscribe(params => {
      let nombre = params.get('name') || '';
  
      // Verificar si no se recibió un nombre
      if (!nombre) {
        console.log("No se recibió ningún nombre, usando el nombre por defecto ''.");
        nombre = ''; // Asigna un nombre por defecto si es necesario
      } else {
        // Reemplazar guiones bajos con espacios
        nombre = nombre.replace(/_/g, ' ');
      }
  
      // Asigna el nombre final al componente
      this.nombre = nombre;
    });
  }
  

}
