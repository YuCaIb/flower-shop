import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItems } from './basket-items';

describe('BasketItems', () => {
  let component: BasketItems;
  let fixture: ComponentFixture<BasketItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
