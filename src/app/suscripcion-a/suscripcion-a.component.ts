import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { SuscripcionService } from '../services/suscripcion.service';

@Component({
  selector: 'app-suscripcion-a',
  templateUrl: './suscripcion-a.component.html',
  styleUrls: ['./suscripcion-a.component.css']
})
export class SuscripcionAComponent {
  suscripciones = [
    { nombre: 'Oro', tipo: 'oro', descripcion: 'Suscripción de nivel Oro', tiempoCaducidad: 365, precioActualizacion: 50 },
    { nombre: 'Cobre', tipo: 'cobre', descripcion: 'Suscripción de nivel Cobre', tiempoCaducidad: 180, precioActualizacion: 25 },
    { nombre: 'Bronce', tipo: 'bronce', descripcion: 'Suscripción de nivel Bronce', tiempoCaducidad: 90, precioActualizacion: 10 }
  ];

  tipoSuscripcion: string;
  descripcion: string;
  tiempoCaducidad: number;
  precioActualizacion: number;

  nuevaSuscripcionNombre: string;
  nuevaSuscripcionTipo: string;
  nuevaSuscripcionDescripcion: string;
  nuevaSuscripcionTiempoCaducidad: number;
  nuevaSuscripcionPrecioActualizacion: number;

  constructor(private suscripcionService: SuscripcionService) { }

  crearSuscripcion() {
    // Enviar los datos al backend para crear la suscripción
    // ...

    // Mostrar un mensaje de confirmación utilizando Swal
    Swal.fire({
      title: 'Suscripción creada!',
      text: 'Tu suscripción ha sido creada exitosamente',
      icon: 'success',
      confirmButtonText: 'Ok'
    });

    // Limpiar los campos del formulario
    this.tipoSuscripcion = null;
    this.descripcion = null;
    this.tiempoCaducidad = null;
    this.precioActualizacion = null;
  }

  crearNuevaSuscripcion() {
    const nuevaSuscripcion = {
      nombre: this.nuevaSuscripcionNombre,
      tipo: this.nuevaSuscripcionTipo,
      descripcion: this.nuevaSuscripcionDescripcion,
      tiempoCaducidad: this.nuevaSuscripcionTiempoCaducidad,
      precioActualizacion: this.nuevaSuscripcionPrecioActualizacion
    };

    // Agregar la nueva suscripción al arreglo de suscripciones
    this.suscripciones.push(nuevaSuscripcion);

    // Limpiar los campos del formulario
    this.nuevaSuscripcionNombre = null;
    this.nuevaSuscripcionTipo = null;
    this.nuevaSuscripcionDescripcion = null;
    this.nuevaSuscripcionTiempoCaducidad = null;
    this.nuevaSuscripcionPrecioActualizacion = null;
  }

  cambiarTipoSuscripcion(tipo: string) {
    this.suscripcionService.setTipoSuscripcion(tipo);
  }
}