import { TestBed } from '@angular/core/testing';

import { UserPhotoService } from '../user-photo/user-photo.service';

describe('UserPhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPhotoService = TestBed.get(UserPhotoService);
    expect(service).toBeTruthy();
  });
});
