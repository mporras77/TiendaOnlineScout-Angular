import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VentasComponent } from './ventas/ventas.component';
import { TiendaComponent } from './tienda/tienda.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';
import { TerminarCompraComponent } from './terminar-compra/terminar-compra.component';
import { DetalleDeVentaComponent } from './detalle-de-venta/detalle-de-venta.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/agregar', component: AgregarProductoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'producto/detalle/:id', component: DetalleDeProductoComponent },
  { path: 'terminar_compra', component: TerminarCompraComponent },
  { path: 'detalle-venta/:id', component: DetalleDeVentaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profileUser', component: UserProfileComponent },
  { path: '**', redirectTo: '/login' },
  { path: '', pathMatch: 'full', redirectTo: '/productos' } // change this to redirect to /productos
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}