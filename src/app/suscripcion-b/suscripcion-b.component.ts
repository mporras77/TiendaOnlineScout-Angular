import { Component } from '@angular/core';
import { SuscripcionService } from '../services/suscripcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suscripcion-b',
  templateUrl: './suscripcion-b.component.html',
  styleUrls: ['./suscripcion-b.component.css']
})
export class SuscripcionBComponent {
  suscripciones: any[];
  suscripcionesCompradas: any[] = [];
  correo: string;

  constructor(private suscripcionService: SuscripcionService) {
    // Obtener la lista de suscripciones del servicio
    this.suscripciones = this.suscripcionService.getSuscripciones();
  }

  comprarSuscripcion(suscripcion, correo) {
    Swal.fire({
      title: '¿Estás seguro de comprar esta suscripción?',
      input: 'email',
      inputPlaceholder: 'Ingresa tu correo electrónico',
      showCancelButton: true,
      confirmButtonText: 'Comprar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Crear un objeto con la información de la suscripción comprada y el correo del usuario
        const suscripcionComprada = {
          id: Date.now(),
          tipo: suscripcion.tipo,
          correo: result.value
        };

        // Llamar al método comprarSuscripcion del servicio para agregar la nueva suscripción
        this.suscripcionService.comprarSuscripcion(suscripcionComprada);

        // Agregar la suscripción comprada al arreglo de suscripciones del componente
        this.suscripcionesCompradas.push(suscripcionComprada);

        // Guardar el correo en la variable del componente
        this.correo = result.value;

        // Mostrar un mensaje de confirmación al usuario
        Swal.fire({
          title: 'Suscripción comprada',
          icon: 'success',
          timer: 2000
        });
      }
    });
  }

  eliminarSuscripcion(id) {
    // Llamar al método eliminarSuscripcion del servicio para eliminar la suscripción
    this.suscripcionService.eliminarSuscripcion(id);

    // Filtrar la suscripción eliminada del arreglo de suscripciones compradas del componente
    this.suscripcionesCompradas = this.suscripcionesCompradas.filter(suscripcion => suscripcion.id !== id);
  }
}