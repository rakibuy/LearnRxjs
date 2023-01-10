import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  data:any
  dataL:any
  dataG:any
  ngOnInit(): void {
    const member = [
      {id:'1', name:'rocky',gender:'Male'},
      {id:'2', name:'rana',gender:'Male'},
      {id:'3', name:'robin',gender:'Male'},
      {id:'4', name:'rakib',gender:'Male'},
      {id:'5', name:'aisha',gender:'female'},
      {id:'6', name:'israt jahan',gender:'female'},
      {id:'7', name:'aria',gender:'female'},
    ]
    //ex -1
    const obsMem = from(member)
    obsMem.pipe(toArray()).subscribe(res=>{
      this.dataG = res;
    })

    //ex - 2
    
    obsMem.pipe(
      filter(item=>item.name.length <= 5),
      toArray()).subscribe(res=>{
      this.dataL = res;
    })

     //ex - 3
    
     obsMem.pipe(
      filter(item=>item.gender == 'Male'),
      toArray()).subscribe(res=>{
      this.dataG = res;
    })
  }
}
