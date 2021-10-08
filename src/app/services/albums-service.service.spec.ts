import { TestBed } from '@angular/core/testing';

import { AlbumsServiceService } from './albums-service.service';

describe('AlbumsServiceService', () => {
  let service: AlbumsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
