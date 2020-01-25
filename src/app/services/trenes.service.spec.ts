import { TestBed } from '@angular/core/testing';

import { TrenesService } from './trenes.service';

describe('TrenesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrenesService = TestBed.get(TrenesService);
    expect(service).toBeTruthy();
  });
});
