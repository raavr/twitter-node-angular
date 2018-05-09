import { TestBed, inject } from '@angular/core/testing';

import { TweetsService } from './tweets.service';
import { HttpClient } from '@angular/common/http';

describe('TweetsService', () => {
  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [TweetsService, { provide: HttpClient, useValue: httpClientSpy }]
    });
  });

  it('should be created', inject([TweetsService], (service: TweetsService) => {
    expect(service).toBeTruthy();
  }));
});
