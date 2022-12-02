import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBrandDetailComponent } from './mobile-brand-detail.component';

describe('MobileBrandDetailComponent', () => {
  let component: MobileBrandDetailComponent;
  let fixture: ComponentFixture<MobileBrandDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileBrandDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileBrandDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
