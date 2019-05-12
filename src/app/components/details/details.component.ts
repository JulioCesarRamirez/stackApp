import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from "../../utils/http-service/http-service.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public socialNetwork: any;
  constructor(
    private router: ActivatedRoute,
    private httpService: HttpServiceService
  ) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [], label: 'Price' },
    { data: [], label: 'Post' }
  ];

  ngOnInit() {
    let id = parseInt(this.router.snapshot.queryParamMap.get('id'));
    this.getSocialNetwork(id);
  }

  getSocialNetwork(id: number) {
    let price = 100;
    let posts = 100;
    this.httpService.get('social_network/' + id, null).subscribe(
      data => {
        this.socialNetwork = data;
        this.socialNetwork.price = this.socialNetwork.price * this.random();
        this.socialNetwork.post = this.socialNetwork.post * this.random();
        this.barChartLabels.forEach(index => {
          this.barChartData[0].data.push(price * this.random());
          this.barChartData[1].data.push(posts * this.random());
        });

      },
      err => {
        console.log(err);
      }
    );
  }
  random(): number {
    return Math.floor(Math.random() * Math.floor(100));
  }

}
