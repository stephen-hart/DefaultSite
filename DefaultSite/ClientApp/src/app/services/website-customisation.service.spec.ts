import { TestBed } from '@angular/core/testing';

import { WebsiteCustomisationService } from './website-customisation.service';

describe('WebsiteCustomisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebsiteCustomisationService = TestBed.get(WebsiteCustomisationService);
    expect(service).toBeTruthy();
  });
});
