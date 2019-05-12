import { TestBed } from '@angular/core/testing';

import { HttpServiceService } from './http-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TimerService } from 'src/app/components/timer/timer.service';

describe('HttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TimerService]
  }));

  it('should be created', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    expect(service).toBeTruthy();
  });
});
