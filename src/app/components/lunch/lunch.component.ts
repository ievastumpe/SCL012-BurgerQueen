import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LunchService, Lunchb } from 'src/app/services/lunch.service';
@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  clickProd: any;
  clickPrecio: number;
  list: any = [];
  lunch: Lunchb[]=[];
  constructor(private _lunchService:LunchService,
              private router:Router
    ) {
    // console.log("constructor");
  }
  ngOnInit(): void {


    this.lunch = this._lunchService.getLunch();

  }
  onClickMe(event) {
    console.log(event);
    this.clickProd = event.path[1].innerText.replace('Agregar', '');
    this.setList(this.clickProd);
  }

  suma(event) {
    this.clickPrecio = event.path[1].innerText.split(' ', 6);
  }

  setList(item: any) {
    this.list.push(item);
    
  }
}
