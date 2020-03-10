import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BreakfastService, Breakfastb, BreakfastFood } from 'src/app/services/breakfast.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfast: Breakfastb[]=[];
  breakfastFood: BreakfastFood[]=[];
  constructor(private _breakfastService:BreakfastService,
              private router:Router
    ) {
    // console.log("constructor");
  }
  ngOnInit(): void {


    this.breakfast = this._breakfastService.getBreakfast();
    this.breakfastFood = this._breakfastService.getBreakfastFood();
  }
  verBreakfastb(idx:number){
    // console.log(idx);
    this.router.navigate( ['/breakfast', idx] );
  }
}
