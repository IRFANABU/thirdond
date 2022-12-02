import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBrandListComponent } from './mobile-brand-list.component';

describe('MobileBrandListComponent', () => {
  let component: MobileBrandListComponent;
  let fixture: ComponentFixture<MobileBrandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileBrandListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileBrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
