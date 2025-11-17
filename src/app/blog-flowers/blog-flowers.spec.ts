import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFlowers } from './blog-flowers';

describe('BlogFlowers', () => {
  let component: BlogFlowers;
  let fixture: ComponentFixture<BlogFlowers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogFlowers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFlowers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
