import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
const APIURL='http://localhost:8000/api/';
@Injectable({
  providedIn: 'root'
})
export class TcgService {
private _http=inject(HttpClient);
  constructor() { }
  getAllproductos(){
    return this._http.get(APIURL+'productos/all');
  }
  getProducto(id:number){
    return this._http.get(APIURL+'productos/'+id);
  }
  getProductosByDepartamento(departamento:string){
    return this._http.get(APIURL+'productos/departamento/'+departamento);
  }
  getProductoByNombre(nombre:string){
    return this._http.get(APIURL+'productos/producto/'+nombre);
  }
  getCantidadProducto(id:number){
    return this._http.get(APIURL+'productos/cantidadProducto/'+id);
  }
  createProducto(producto:any){
    return this._http.post(APIURL+'productos/create',producto);
  }
  updateProducto(producto:any, id:number){
    return this._http.put(APIURL+'productos/update/'+id,producto);
  }
  deleteProducto(id:number){
    return this._http.delete(APIURL+'productos/delete/'+id);
  }

  getAllVentas(){
    return this._http.get(APIURL+'venta/all');
  }
  getVentaById(id:number){
    return this._http.get(APIURL+'venta/'+id);
  }
  getVentaByFecha(fecha:string){
    return this._http.get(APIURL+'venta/fecha/'+fecha);
  }
  createVenta(venta:any){
    return this._http.post(APIURL+'venta/create',venta);
  }
  updateVenta(venta:any, id:number){
    return this._http.put(APIURL+'venta/update/'+id,venta);
  }
  deleteVenta(id:number){
    return this._http.delete(APIURL+'venta/delete/'+id);
  }
}
