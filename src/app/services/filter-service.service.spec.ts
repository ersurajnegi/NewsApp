import { TestBed, inject } from '@angular/core/testing';

import { FilterServiceService } from './filter-service.service';

describe('FilterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterServiceService]
    });
  });

  it('should ...', inject([FilterServiceService], (service: FilterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
