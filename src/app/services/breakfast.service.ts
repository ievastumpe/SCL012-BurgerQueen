import { Injectable } from '@angular/core';
// import { v4 as uuid } from 'uuid';
// then later in the in the products, add id : uuid.v4(),


@Injectable()
export class BreakfastService {

  private breakfast: Breakfastb[] = [
    {
    id : "1",
    item : "Cafe Americano",
    price : 500,
    category: "Drink",
    img : "./assets/img/1.jpg"
    },
    {
    id : "2",
    item : "Cafe con leche",
    price : 700,
    category: "Drink",
    img : "./assets/img/2.jpg"
    },
    {
    id : "3",
    item : "Jugo de frutas natural",
    price : 700,
    category: "Drink",
    img : "./assets/img/3.jpg"
    },
    {
    id : "4",
    item : "Sandwich de jamon y queso",
    price : 1000,
    category: "Food",
    img : "./assets/img/4.jpg"
    },
  ];

  constructor() {
    console.log("Servicio listo para usar");
  }

   getBreakfast(): Breakfastb[] {
    return this.breakfast; //SE HACE REFERENCIA A LA CLASE
  }
}

export interface Breakfastb{
  id: string;
  item: string;
  price: number;
  category:string;
  img: string;
  }

