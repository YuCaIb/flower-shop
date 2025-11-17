import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FowerList } from './fower-list';

describe('FowerList', () => {
  let component: FowerList;
  let fixture: ComponentFixture<FowerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FowerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FowerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
