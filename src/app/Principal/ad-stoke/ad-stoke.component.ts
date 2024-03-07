import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';



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




  generatePDF() {
    
    // Cargar la fuente Arial
    const url = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.3/fonts/arial.ttf'; // URL de la fuente Arial
    const fontName = 'Arial';
    const fontStyle = 'normal';
    
    const doc = new jsPDF();
    
    // Cargar la fuente Arial
    doc.addFileToVFS(fontName + '.ttf', url);
    doc.addFont(fontName + '.ttf', fontName, fontStyle);

    // Agregar imagen al principio del documento
    const imageUrl = 'https://basherdev-bashermx.vercel.app/assets/logoForPost.png'; // URL de la imagen que deseas agregar
    const imageWidth = 50; // Ancho de la imagen en el PDF
    const imageHeight = 50; // Alto de la imagen en el PDF
    const imageX = 80; // Posición X de la imagen en el PDF
    const imageY = 5; // Posición Y de la imagen en el PDF
    doc.addImage(imageUrl, 'JPEG', imageX, imageY, imageWidth, imageHeight);

    // Definir estilos
    const boldText = { fontWeight: 'bold' };
    const normalText = {};
  
    // Agregar título
    doc.setFontSize(18);
    doc.setFont('Arial', 'bold');
    doc.text('COTIZACION DE ANUNCIOS PARA REDES SOCIALES', 10, 60);
    doc.text('BASHERDEV', 10, 70);
  
    // Agregar fecha
    const fechaActual = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.setFont("Arial", 'normal');
    doc.text(`Fecha: ${fechaActual}`, 10, 75);
  
    // Agregar precios
    doc.setFontSize(19);
    doc.setFont("Arial", 'bold');
    doc.text('Descripción:', 10, 90);
    
    doc.setFontSize(12);
    doc.setFont('Arial', 'normal');
    doc.text(`Cantidad de personas a alcanzar: ${this.selectedCantidadPersonas}`, 10, 100);
    doc.text(`Cantidad de publicaciones semanales: ${this.cantidadPublicaciones}`, 10, 110);
    
    
    
    const precios = [
      { nombre: 'Precio semanal:', valor: this.precioSemanal },
      { nombre: 'Precio mensual:', valor: this.precioMensual },
      { nombre: 'Precio por campaña completa:', valor: this.precioCampCompleta }
    ];
    
    const startY = 110;
    const lineHeight = 10;
    let currentY = startY;
    currentY= currentY+20;
    
    doc.setFontSize(19);
    doc.setFont("Arial", 'bold');
    doc.text('Precio:', 10, currentY);
    
    doc.setFontSize(14);
    currentY= currentY+10;
    doc.setFont('Arial', 'normal');
    precios.forEach(precio => {
      doc.setFont('Arial', 'normal');
      doc.setFont("a", 'bold');
      doc.text(precio.nombre, 10, currentY);
      doc.setFont("a", 'normal');
      doc.text("$"+precio.valor, 100, currentY);
      currentY += lineHeight;
    });
  
    // Calcular la posición centrada horizontalmente
    const text1 = 'Atentamente:';
    const text2 = 'Brayan Ulises Vazquez Heredia';
    const textWidth = doc.getTextWidth(text1);
    const textWidth2 = doc.getTextWidth(text2);
    const pageWidth = doc.internal.pageSize.width;
    const centerX = (pageWidth - textWidth) / 2;
    const centerX2 = (pageWidth - textWidth2) / 2;

    // Agregar nota final centrada horizontalmente
    doc.setFontSize(10);
    doc.setFont('Arial', 'normal');
    doc.text('Atentamente:', centerX, currentY + 10);
    doc.text('Brayan Ulises Vazquez Heredia', centerX2+5, currentY + 15);
        
    doc.setFontSize(8);
    doc.setFont("a", 'italic');
    doc.text('*Los Precios Incluyen IVA', 10, currentY + 45);
    doc.text('*Precios sujetos a cambios sin previo aviso, actualizados al 1 de marzo de 2024', 10, currentY + 50);
  
    // Guardar el PDF
    doc.save('cotizacion.pdf');
}

  

  
}
