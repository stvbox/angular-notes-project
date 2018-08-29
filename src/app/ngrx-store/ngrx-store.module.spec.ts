import { NgrxStoreModule } from './ngrx-store.module';

describe('NgrxStoreModule', () => {
  let ngrxStoreModule: NgrxStoreModule;

  beforeEach(() => {
    ngrxStoreModule = new NgrxStoreModule();
  });

  it('should create an instance', () => {
    expect(ngrxStoreModule).toBeTruthy();
  });
});
