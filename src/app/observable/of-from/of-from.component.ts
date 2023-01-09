import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UtilityDesignService } from 'src/app/Services/utility-design.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit{
  constructor(private utilityDesign:UtilityDesignService){}
  obsMsg!:string
  ngOnInit(): void {
    
    //OF

    const ofData = of('rocky','rana','robin')
    ofData.subscribe(res=>{
     
      this.obsMsg = res;
      this.utilityDesign.addPrint(this.obsMsg, 'elContent')

    })

    //from use arry

    const fromData = from(['rocky','rana','robin'])
    fromData.subscribe(res=>{
      console.log(res)
      this.obsMsg = res;
      this.utilityDesign.addPrint(this.obsMsg, 'elContent2')

    })
  }
}
