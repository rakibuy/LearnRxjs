import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { UtilityDesignService } from 'src/app/Services/utility-design.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  //subscription
  sub1!:Subscription
  sub2!:Subscription

  //messages
  mes1!:string
  mes2!:string

constructor(private utilityDesign:UtilityDesignService){}

  ngOnInit(): void {
    //ex - 1
    const broadcasthVideo = interval(1000);

    this.sub1 = broadcasthVideo.pipe(
      map(data =>'video ' + data)
    ).subscribe(res=>{
      this.mes1 = res
    })

    setTimeout(()=>{
      this.sub1.unsubscribe();
    },10000)

    //ex -2
  this.sub2 = broadcasthVideo.pipe(
    map(data=>"Vido" + data * 2)
  ).subscribe(res=>{
    this.mes2 = res
  })
  setTimeout(()=>{
    this.sub2.unsubscribe();
  },10000)

  //ex -3
  const member = [
    {id:'1', name:'rocky'},
    {id:'2', name:'rana'},
    {id:'3', name:'robin'},
    {id:'4', name:'rakib'},
  ]

  const obsmem = from(member)

  obsmem.pipe(
    map(data=>data.name)
  ).subscribe(res=>{
    this.utilityDesign.addPrint(res, 'elContent')
  })

  }
  
}
