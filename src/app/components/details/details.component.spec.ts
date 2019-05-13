import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailsComponent } from './details.component';
import { RouterModule, ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpServiceService } from 'src/app/utils/http-service/http-service.service';
import { ChartsModule } from 'ng2-charts';


describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let httpClientSpy: { get: jasmine.Spy };
  let httpServiceService: HttpServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [RouterModule, HttpClientTestingModule, ChartsModule],
      providers: [HttpServiceService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: {
                params: {
                  id: 1
                }
              }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpServiceService = new HttpServiceService(<any>httpClientSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
