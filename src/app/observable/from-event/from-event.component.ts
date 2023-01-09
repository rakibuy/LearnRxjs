import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityDesignService } from 'src/app/Services/utility-design.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private utiltyDesign: UtilityDesignService){
    
  }

  @ViewChild('addBtn') addBtn!: ElementRef;

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
      //console.log("Video" +" " + count++)
      let elValue = "Video" +" " + count++;
      this.utiltyDesign.addPrint(elValue, 'elContainer');
      this.utiltyDesign.addPrint(elValue, 'elContainer2');
    })
  }

  

}
