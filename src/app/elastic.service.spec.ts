/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElasticService } from './elastic.service';

describe('Service: Elastic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElasticService]
    });
  });

  it('should ...', inject([ElasticService], (service: ElasticService) => {
    expect(service).toBeTruthy();
  }));
});
