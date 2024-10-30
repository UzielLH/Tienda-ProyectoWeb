import { TestBed } from '@angular/core/testing';

import { TcgService } from './tcg.service';

describe('TcgService', () => {
  let service: TcgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
