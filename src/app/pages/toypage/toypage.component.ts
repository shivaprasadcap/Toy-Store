import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-toypage',
  templateUrl: './toypage.component.html',
  styleUrls: ['./toypage.component.css']
})
export class ToypageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  gettoypageId:any;
  toypageData:any;

  ngOnInit(): void {
    this.gettoypageId = this.param.snapshot.paramMap.get('id');
    console.log(this.gettoypageId,'gettoypage');
    if(this.gettoypageId)
    {
      this.toypageData =  this.service.toyDetails.filter((value)=>{
          return value.id == this.gettoypageId;
        });
        console.log(this.toypageData,'toypagedata>>');
        
    }
    
  }

}
