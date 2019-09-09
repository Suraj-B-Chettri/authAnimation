import { TestBed } from '@angular/core/testing';

import { SendimgService } from './sendimg.service';

describe('SendimgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendimgService = TestBed.get(SendimgService);
    expect(service).toBeTruthy();
  });
});
