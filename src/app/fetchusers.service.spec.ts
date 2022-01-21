import { TestBed } from '@angular/core/testing';

import { FetchusersService } from './fetchusers.service';

describe('FetchusersService', () => {
  let service: FetchusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
