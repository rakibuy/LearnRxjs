import { Component, OnInit } from '@angular/core';
import { interval, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  
  baseSourc!:Subscription
  arrayData:any
  ngOnInit(): void {
    const sourc = interval(1000)
    this.baseSourc = sourc.pipe(take(5), toArray()).subscribe(res=>{
      console.log(res)
      
    })
    
  }
}
