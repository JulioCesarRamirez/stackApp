import { TestBed } from '@angular/core/testing';

import { HttpServiceService } from './http-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TimerService } from 'src/app/components/timer/timer.service';
describe('HttpServiceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let heroService: HttpServiceService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TimerService]
  }));
  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    heroService = new HttpServiceService(<any>httpClientSpy);
  });
  it('should be created', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    expect(service).toBeTruthy();
  });

  it('should call get one', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    service.getOne('mockCall', '123', null);
  });

  it('should call get one with query', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    service.getOne('mockCall', '123', 1);
  });

  it('should call post', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    service.post('mockCall', '123');
  });

  it('should call put', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    service.put('mockCall', '123', 1);
  });

  it('should call delete', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    service.delete('mockCall', '123');
  });

  it('should call get', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    service.get('mockCall', null);
  });

  it('should call get with query', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    service.get('mockCall', 2);
  });

});
