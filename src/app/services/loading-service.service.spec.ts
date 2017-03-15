import { TestBed, inject } from '@angular/core/testing';

import { LoadingServiceService } from './loading-service.service';

describe('LoadingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingServiceService]
    });
  });

  it('should ...', inject([LoadingServiceService], (service: LoadingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
