import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Producto} from "../producto";
import {ProductosService} from "../productos.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  productoModel = new Producto("", "",);
  @ViewChild("foto", {
    read: ElementRef
  }) foto: ElementRef;

  constructor(private productosService: ProductosService, private snackBar: MatSnackBar) {
  }

  public cargando = false;

  async guardar() {
    if (!this.productoModel.nombre) {
      Swal.fire('Error', 'Escribe un nombre', 'error');
      return;
    }
    if (!this.productoModel.descripcion) {
      Swal.fire('Error', 'Escribe la descripción', 'error');
      return;
    }
    if (!this.productoModel.precio) {
      Swal.fire('Error', 'Escribe el precio', 'error');
      return;
    }
    let archivos = this.foto.nativeElement.files;
    if (!archivos.length) {
      Swal.fire('Error', 'Selecciona al menos una foto', 'error');
      return;
    }
    this.cargando = true;
    // Guardamos producto
    const idProductoGuardado = await this.productosService.agregarProducto(this.productoModel);
    // Y luego las fotos
    const fd = new FormData();
    for (let x = 0; x < archivos.length; x++) {
      fd.append(`foto_${x}`, archivos[x])
    }
    fd.append("idProducto", idProductoGuardado);
    const respuesta = await this.productosService.agregarFotosDeProducto(fd);
    this.snackBar.open("Producto guardado", "", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    });
    Swal.fire('Producto guardado', '', 'success');
    this.cargando = false;
    this.productoModel = new Producto("", "");
    this.foto.nativeElement.value = "";
  }

  ngOnInit(): void {
  }
}