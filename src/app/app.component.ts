import {Component, OnInit} from '@angular/core';
import {CarritoService} from "./carrito.service";
import {DataSharingService} from "./data-sharing.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-angular-node';
  public productos = [];

  constructor(private carritoService: CarritoService, private dataSharingService: DataSharingService) {
    // Comunicación entre componentes
    this.dataSharingService.currentMessage.subscribe(mensaje => {
      if (mensaje == "car_updated") {
        this.refrescarCarrito();
      }
    })
  }

  public async refrescarCarrito() {
    try {
      this.productos = await this.carritoService.obtenerProductos();
      Swal.fire({
        icon: 'success',
        title: 'Carrito actualizado',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al actualizar el carrito',
        text: error.message
      });
    }
  }
  public total() {
    // Quién te conoce reduce
    let total = 0;
    this.productos.forEach(p => total += p.precio);
    return total;
  }

  ngOnInit(): void {
    this.refrescarCarrito();
  }


}
