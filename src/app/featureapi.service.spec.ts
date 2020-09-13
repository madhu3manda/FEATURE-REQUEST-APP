import { TestBed } from '@angular/core/testing';

import { FeatureapiService } from './featureapi.service';

describe('FeatureapiService', () => {
  let service: FeatureapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
