import { Injectable } from '@angular/core';
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';

@Injectable()
export class LunchService {

  private lunch: Lunchb[] = [
    {
      id : "5",
      item : "Hamburguesa de res SIMPLE",
      price : 1000,
      category: "Hamburguesas",
      img : "./assets/img/5.jpg"
  },
  {
    id : "6",
      item : "Hamburguesa de res DOBLE",
      price : 1500,
      category: "Hamburguesas",
      img : "./assets/img/6.jpg"
  },
  {
    id : "7",
      item : "Hamburguesa de pollo SIMPLE",
      price : 1000,
      category: "Hamburguesas",
      img : "./assets/img/7.jpg"
  },
  {
    id : "8",
      item : "Hamburguesa de pollo DOBLE",
      price : 1500,
      category: "Hamburguesas",
      img : "./assets/img/8.jpg"
  },
  {
    id : "9",
      item : "Hamburguesa vegetariana SIMPLE",
      price : 1000,
      category: "Hamburguesas",
      img :"./assets/img/9.jpg"
  },
  {
    id : "10",
      item : "Hamburguesa vegetariana DOBLE",
      price : 1500,
      category: "Hamburguesas",
      img :"./assets/img/10.jpg"
  },
  {
    id : "11",
      item : "Papas fritas",
      price : 500,
      category: "Acompañamientos",
      img :"./assets/img/11.jpg"
  },
  {
    id : "12",
      item : "Aros de cebolla",
      price : 500,
      category: "Acompañamientos",
      img :"./assets/img/12.jpg"
  },
  {
    id : "13",
      item : "Agua 500 ml",
      price : 500,
      category: "Para tomar",
      img : "./assets/img/13.jpg"
  },
  {
    id : "14",
      item : "Agua 750 ml",
      price : 700,
      category: "Para tomar",
      img : "./assets/img/14.jpg"
  },
  {
    id : "15",
      item : "Bebida/gaseosa 500ml",
      price : 700,
      category: "Para tomar",
      img : "./assets/img/15.jpg"
  },
  {
    id : "16",
      item: "Bebida/gaseosa 750ml",
      price : 1000,
      category: "Para tomar",
      img : "./assets/img/16.jpg"
  },
  {
    id : "17",
      item: "Queso",
      price : 100,
      category: "Agregados",
      img : "./assets/img/17.jpg"
  },
  {
    id : "18",
      item: "Huevo",
      price : 100,
      category: "Agregados",
      img : "./assets/img/18.jpg"
  }
  ];

  constructor() {
    console.log("Servicio listo para usar");
  }

   getLunch(): Lunchb[] {
    return this.lunch; //SE HACE REFERENCIA A LA CLASE
  }
}


export interface Lunchb{
  id: string;
  item: string;
  price: number;
  category:string;
  img: string;
  }
