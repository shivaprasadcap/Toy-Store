import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-toylist',
  templateUrl: './toylist.component.html',
  styleUrls: ['./toylist.component.css']
})
export class toylistComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  toyData:any;
  ngOnInit(): void {
    this.toyData = this.service.toyDetails;
  }

}
