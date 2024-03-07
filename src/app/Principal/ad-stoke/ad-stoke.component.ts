import { Component } from '@angular/core';

@Component({
  selector: 'ad-stoke',
  templateUrl: './ad-stoke.component.html',
  styleUrls: ['./ad-stoke.component.less']
})
export class AdStokeComponent {
  cantidadesPersonas: { personas: string, precio: string }[] = [
    { personas: '1,6 mil - 4,6 mil personas', precio: '580' },
    { personas: '3,1 mil - 9,1 mil personas', precio: '1160' },
    { personas: '4,7 mil - 13,7 mil personas', precio: '1740' },
    { personas: '7,9 mil - 22,8 mil personas', precio: '2900' },
    { personas: '23,6 mil - 68,3 mil personas', precio: '8700' },
    { personas: '39,4 mil - 113,8 mil personas', precio: '14500' }
  ];

  selectedCantidadPersonas: string = this.cantidadesPersonas[0].personas; // Valor predeterminado
  cantidadPublicaciones: number = 0; // Valor predeterminado

  precioSemanal: string = '0';
  precioMensual: string = '0';
  precioCampCompleta: string = '0'; // Cambiado a precioCampCompleta

  constructor() { }

  calcularPrecios() {
    const precioSeleccionado = this.cantidadesPersonas.find(cantidad => cantidad.personas === this.selectedCantidadPersonas)?.precio;
    const precioPorPublicacion = Number(precioSeleccionado);
    const descuento = 0.05; // 5% de descuento

    const precioSemanal = precioPorPublicacion * this.cantidadPublicaciones;
    const precioMensual = precioSemanal * 4; // Se asume 4 semanas en un mes
    const precioCampCompleta = precioMensual * 6.4;// * (1 - descuento); // Se asume 6.4 meses de campaña y se aplica el descuento

    this.precioSemanal = precioSemanal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.precioMensual = precioMensual.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.precioCampCompleta = precioCampCompleta.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Cambiado a precioCampCompleta
  }

  generateWhatsAppLink(): string {
    const datosPaquete = `Cantidad de personas: ${this.selectedCantidadPersonas}, Cantidad de publicaciones: ${this.cantidadPublicaciones}, Precio total: ${this.precioSemanal}`;
    return `https://wa.me/+523346502871?text=${encodeURIComponent(datosPaquete)}`;
  }
}
