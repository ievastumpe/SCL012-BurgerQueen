import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BreakfastService, Breakfastb } from 'src/app/services/breakfast.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  clickProd: any;
  clickPrecio: number;
  list: any = [];
  breakfast: Breakfastb[]=[];
  constructor(private _breakfastService:BreakfastService,
              private router:Router
    ) {
    // console.log("constructor");
  }
  ngOnInit(): void {


    this.breakfast = this._breakfastService.getBreakfast();
  }
  verBreakfastb(idx:number){
    // console.log(idx);
    this.router.navigate( ['/breakfast', idx] );
  }
}
