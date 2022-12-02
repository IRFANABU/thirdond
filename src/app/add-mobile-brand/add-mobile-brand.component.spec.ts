import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobileBrandComponent } from './add-mobile-brand.component';

describe('AddMobileBrandComponent', () => {
  let component: AddMobileBrandComponent;
  let fixture: ComponentFixture<AddMobileBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMobileBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMobileBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
