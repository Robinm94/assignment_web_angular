import { TestBed } from '@angular/core/testing';

import { ApipostService } from './apipost.service';

describe('ApipostService', () => {
  let service: ApipostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
