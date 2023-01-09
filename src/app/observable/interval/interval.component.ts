import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UtilityDesignService } from 'src/app/Services/utility-design.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit{
  constructor(
    private utilityDesign:UtilityDesignService
  ){}
 obgMsg:string = "";
 videoSubscription!:Subscription;
  ngOnInit(): void {
    const bordcastVideo = interval(1000);
    
    this.videoSubscription = bordcastVideo.subscribe(res=>{
      console.log(res)
      this.obgMsg = "video" + " " + res;
      this.utilityDesign.addPrint(this.obgMsg, 'elContain')
      this.utilityDesign.addPrint(this.obgMsg, 'elContain1')
      this.utilityDesign.addPrint(this.obgMsg, 'elContain2')
      if(res>=5){
        this.videoSubscription.unsubscribe();
      }
    })
  }
}
