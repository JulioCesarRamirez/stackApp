import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from "../utils/http-service/http-service.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  socialsNet: any;

  constructor(
    private httpService: HttpServiceService
  ) { }

  ngOnInit() {
    this.getSocialNetworks();
  }

  getSocialNetworks() {
    this.httpService.get('social_network', null).subscribe(
      data => {
        this.socialsNet = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
