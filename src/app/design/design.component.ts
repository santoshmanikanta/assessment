import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SharedService } from '../design/shared.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
  providers: [SharedService]
})
export class DesignComponent implements OnInit {

  constructor( private http: Http, private sharedService: SharedService ) { }

  ngOnInit() {
	  this.sharedService.getUser();
  }
}
