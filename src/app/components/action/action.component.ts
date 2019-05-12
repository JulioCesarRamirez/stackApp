import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() public type: string;
  public typeName: string;
  public hold: boolean = false;
  public buy: boolean = false;
  public sell: boolean = false;

  constructor() { }

  ngOnInit() {
    this.typeConverter();
  }

  typeConverter() {
    switch (this.type) {
      case 'hold':
        this.typeName = 'Hold';
        this.hold = true;
        break;
      case 'sell':
        this.typeName = 'Sell';
        this.sell = true;
        break;
      case 'buy':
        this.typeName = 'Buy';
        this.buy = true;
        break;

      default:
        this.typeName = 'Wrong type';
        break;
    }
  }
}
