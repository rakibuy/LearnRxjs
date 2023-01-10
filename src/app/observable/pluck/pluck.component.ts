import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
 data:any
 data2:any
  ngOnInit(): void {

    const member = [
      {id:'1', name:'rocky', job:{
        title:"Electical Enginier",
        des:"support"
      }},
      {id:'2', name:'rana', job:{
        title:"Marin Enginier",
        des:"support"
      }},
      {id:'3', name:'robin', job:{
        title:"web Enginier",
        des:"support"
      }},
      {id:'4', name:'rakib', job:{
        title:"Software Enginier",
        des:"support"
      }},
    ]


    const obsMem = from(member)

    obsMem.pipe(
      pluck('name'),
      toArray()
    ).subscribe(res=>{
      this.data = res
    })

    obsMem.pipe(
      pluck('job','title'),
      toArray()
    ).subscribe(res=>{
      this.data2 = res
    })
    
  }

  
}
