import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LunchService, Lunchb } from 'src/app/services/lunch.service';
@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  lunch: Lunchb[]=[];
  constructor(private _lunchService:LunchService,
              private router:Router
    ) {
    // console.log("constructor");
  }
  ngOnInit(): void {


    this.lunch = this._lunchService.getLunch();

  }
  verLunchb(idx:number){
    // console.log(idx);
    this.router.navigate( ['/lunchb', idx] );
  }
}
