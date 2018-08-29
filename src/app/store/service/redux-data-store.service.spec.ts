import { TestBed, inject } from '@angular/core/testing';

import { ReduxDataStoreService } from './redux-data-store.service';

describe('ReduxDataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReduxDataStoreService]
    });
  });

  it('should be created', inject([ReduxDataStoreService], (service: ReduxDataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
