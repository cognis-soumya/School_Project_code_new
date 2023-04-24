import { TestBed } from '@angular/core/testing';

import { LocalServicesService } from './local-services.service';

describe('LocalServicesService', () => {
  let service: LocalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
