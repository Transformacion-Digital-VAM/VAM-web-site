import { TestBed } from '@angular/core/testing';

import { PresolicitudService } from './presolicitud.service';

describe('PresolicitudService', () => {
  let service: PresolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
