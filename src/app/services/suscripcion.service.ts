import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  eliminarSuscripcion(id: any) {
    throw new Error('Method not implemented.');
  }
  comprarSuscripcion(suscripcionComprada: { id: number; tipo: any; correo: any; }) {
    throw new Error('Method not implemented.');
  }
  getSuscripciones(): any[] {
    throw new Error('Method not implemented.');
  }
  private _tipoSuscripcion = new BehaviorSubject<string>('Free');
  public tipoSuscripcion$ = this._tipoSuscripcion.asObservable();

  private _suscripcionActual = new BehaviorSubject<any>(null);
  public suscripcionActual$ = this._suscripcionActual.asObservable();

  constructor() { }

  public setTipoSuscripcion(tipo: string): void {
    this._tipoSuscripcion.next(tipo);
  }

  public setSuscripcionActual(suscripcion: any): void {
    this._suscripcionActual.next(suscripcion);
  }

  public getSuscripcionActual(): Observable<any> {
    return this.suscripcionActual$;
  }
}