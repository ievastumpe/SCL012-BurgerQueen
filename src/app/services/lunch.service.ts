import { Injectable } from '@angular/core';

@Injectable()
export class LunchService {

  private lunch: Lunchb[] = [
    {
      id : "5",
      item : "Hamburguesa simple de res",
      price : 1000,
      category: "Hamburguesas",
      img : "./assets/img/agua.jpg"
  },
  {
      id : "6",
      item : "Hamburguesa doble de res",
      price : 1500,
      category: "Hamburguesas",
      img : "./assets/img/agua.jpg"
  },
  {
      id : "7",
      item : "Hamburguesa simple de pollo",
      price : 1000,
      category: "Hamburguesas",
      img : "./assets/img/agua.jpg"
  },
  {
      id : "8",
      item : "Hamburguesa doble de pollo",
      price : 1500,
      category: "Hamburguesas",
      img : "./assets/img/agua.jpg"
  },
  {
      id : "9",
      item : "Hamburguesa simple vegetariana",
      price : 1000,
      category: "Hamburguesas",
      img :"./assets/img/agua.jpg"
  },
  {
      id : "10",
      item : "Hamburguesa doble vegetariana",
      price : 1500,
      category: "Hamburguesas",
      img :"./assets/img/agua.jpg"
  },
  {
      id : "11",
      item : "Papas fritas",
      price : 500,
      category: "Acompañamientos",
      img :"./assets/img/agua.jpg"
  },
  {
      id : "12",
      item : "Aros de cebolla",
      price : 500,
      category: "Acompañamientos",
      img :"./assets/img/agua.jpg"
  },
  {
      id : "13",
      item : "Agua 500 ml",
      price : 500,
      category: "Para tomar",
      img : "./assets/img/agua.jpg"
  },
  {
      id : "14",
      item : "Agua 750 ml",
      price : 700,
      category: "Para tomar",
      img : "./assets/img/agua.jpg"
  },
  {
      id :  "15",
      item : "Bebida/gaseosa 500ml",
      price : 700,
      category: "Para tomar",
      img : "./assets/img/bebida-gaseosa.jpg"
  },
  {
      id: "16",
      item: "Bebida/gaseosa 750ml",
      price : 1000,
      category: "Para tomar",
      img : "./assets/img/agua.jpg"
  },
  {
      id: "17",
      item: "queso",
      price : 100,
      category: "Agregados",
      img : "./assets/img/agua.jpg"
  },
  {
      id: "18",
      item: "huevo",
      price : 100,
      category: "Agregados",
      img : "./assets/img/agua.jpg"
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
