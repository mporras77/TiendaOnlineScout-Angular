import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionAComponent } from './suscripcion-a.component';

describe('SuscripcionAComponent', () => {
  let component: SuscripcionAComponent;
  let fixture: ComponentFixture<SuscripcionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscripcionAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscripcionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
