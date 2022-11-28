import { Component } from '@angular/core';

import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productos: Producto[] = [
    {id: 1, nombre: "Tomate", precio: 150},
    {id: 2, nombre: "Berenjena", precio: 85},
    {id: 3, nombre: "Espinaca", precio: 94},
    {id: 4, nombre: "Lechuga", precio: 68},
    {id: 5, nombre: "Cebolla", precio: 13},
  ];

  productoSeleccionado: Producto = new Producto();

  agregarOEditar(){
    if(this.productoSeleccionado.id === 0){
      this.productoSeleccionado.id = this.productos.length + 1;
      this.productos.push(this.productoSeleccionado);
    }
    this.productoSeleccionado = new Producto();
  }

  abrirEditar(producto: Producto){
    this.productoSeleccionado = producto;
  }

  eliminar(){
    this.productos = this.productos.filter(x => x != this.productoSeleccionado);
    this.productoSeleccionado = new Producto();
  }
}
