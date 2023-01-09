import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { UtilityDesignService } from 'src/app/Services/utility-design.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  obgMsg!:string

  videoSubscription!:Subscription;
  constructor(private utilityDesign:UtilityDesignService){}
  ngOnInit(): void {
    const bordcastVideo = timer(5000, 1000)

   this.videoSubscription = bordcastVideo.subscribe(res=>{
      console.log(res)
      this.obgMsg = "Video" +" " + res;
      this.utilityDesign.addPrint(this.obgMsg, 'elContain')
      this.utilityDesign.addPrint(this.obgMsg, 'elContain1')
      this.utilityDesign.addPrint(this.obgMsg, 'elContain2')
      if(res >= 5){
        this.videoSubscription.unsubscribe();
      }
    })
    
  }

}
