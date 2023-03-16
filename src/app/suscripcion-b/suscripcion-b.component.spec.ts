import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionBComponent } from './suscripcion-b.component';

describe('SuscripcionBComponent', () => {
  let component: SuscripcionBComponent;
  let fixture: ComponentFixture<SuscripcionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscripcionBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscripcionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
