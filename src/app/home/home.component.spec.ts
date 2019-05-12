import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpServiceService } from '../utils/http-service/http-service.service';
import { TimerComponent } from '../components/timer/timer.component';
import { ActionComponent } from '../components/action/action.component';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TimerService } from '../components/timer/timer.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientTestingModule],
      declarations: [
        HomeComponent,
        TimerComponent,
        ActionComponent
      ],
      providers: [HttpServiceService, TimerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
