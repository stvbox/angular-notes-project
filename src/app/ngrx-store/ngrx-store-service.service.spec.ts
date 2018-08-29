import { TestBed, inject } from '@angular/core/testing';

import { NgrxStoreServiceService } from './ngrx-store-service.service';

describe('NgrxStoreServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgrxStoreServiceService]
    });
  });

  it('should be created', inject([NgrxStoreServiceService], (service: NgrxStoreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
