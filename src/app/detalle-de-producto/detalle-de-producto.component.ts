
import {Component, OnInit, NgModule,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ProductosService} from "../productos.service";
import {ActivatedRoute} from "@angular/router";
import {Producto} from "../producto";
import { BrowserModule } from '@angular/platform-browser';
import {CarritoService} from "../carrito.service";
import {DataSharingService} from "../data-sharing.service";
import {environment} from "../../environments/environment";
import { MatChipsModule,  } from '@angular/material/chips';
import { CommonModule } from '@angular/common';



@NgModule({

  imports: [
    MatChipsModule, // asegúrate de tener importado el módulo correspondientr el módulo aquí
    CommonModule,
    BrowserModule,

    // fin módulos importados 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TuModulo { }
export class AppModule { }
@Component({
  selector: 'app-detalle-de-producto',
  templateUrl: './detalle-de-producto.component.html',
  styleUrls: ['./detalle-de-producto.component.css']
})
export class DetalleDeProductoComponent implements OnInit {
  public producto = {
    id: 0,
    fotos: [],
    nombre: "",
    descripcion: "",
    precio: "",
  };
  public fotoSeleccionada: string;
  public indiceSeleccionado = 0;
  public yaExiste: boolean = true;

  constructor(private carritoService: CarritoService, private productosService: ProductosService, private activatedRoute: ActivatedRoute, private dataSharingService: DataSharingService) {

  }

  public resolverFoto(foto) {
    const baseUrl = environment.baseUrl;
    return `${baseUrl}/foto_producto/${foto}`;
  }

  public seleccionarImagen(indice) {
    this.indiceSeleccionado = indice;
    this.fotoSeleccionada = this.producto.fotos[this.indiceSeleccionado].foto;
  }

  public async quitarDelCarrito() {
    const {id} = this.producto;
    const respuesta = await this.carritoService.quitarProducto(id);
    console.log({respuesta})
    this.refrescarEstado();
  }

  public async agregarAlCarrito() {
    const {id} = this.producto;
    const respuesta = await this.carritoService.agregarAlCarrito(id);
    console.log({respuesta})
    this.refrescarEstado();
  }

  async refrescarEstado() {
    const id = this.producto.id;
    this.yaExiste = await this.carritoService.existeEnCarrito(id);
    // Comunicación entre componentes
    this.dataSharingService.changeMessage("car_updated");
  }
  

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.producto = await this.productosService.obtenerProductoConFotosPorId(id);
    if (this.producto.fotos.length >= 0) {
      this.seleccionarImagen(0);
    }
    this.refrescarEstado();
  }

}
