import { Injectable } from '@angular/core';

@Injectable()
export class BreakfastService {

  private breakfast: Breakfastb[] = [
    {
      id : "1",
      item : "Cafe Americano",
      price : 500,
      category: "Drink",
      img : "./assets/img/cafe-americano.jpg"
    },
    {
        id : "2",
        item : "Cafe con leche",
        price : 700,
        category: "Drink",
        img : "./assets/img/cafe-con-leche.jpg"
    },
    {
        id : "3",
        item : "Jugo de frutas natural",
        price : 700,
        category: "Drink",
        img : "./assets/img/jugo-de-frutas.jpg"
    },
    ];

    private breakfastFood: BreakfastFood[] = [
    {
        id : "4",
        item : "Sandwich de jamon y queso",
        price : 1000,
        category: "Food",
        img : "./assets/img/sandwich-de-jamon-queso.jpg"
    },
    ];

  constructor() {
    console.log("Servicio listo para usar");
  }

   getBreakfast(): Breakfastb[] {
    return this.breakfast; //SE HACE REFERENCIA A LA CLASE
  }

  getBreakfastFood(): BreakfastFood[] {
    return this.breakfastFood; //SE HACE REFERENCIA A LA CLASE
  }
}

export interface Breakfastb{
  id: string;
  item: string;
  price: number;
  category:string;
  img: string;
  }

export interface BreakfastFood{
  id: string;
  item: string;
  price: number;
  category:string;
  img: string;
  }
