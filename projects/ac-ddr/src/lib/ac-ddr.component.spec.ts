import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcDdrComponent } from './ac-ddr.component';

describe('AcDdrComponent', () => {
  let component: AcDdrComponent;
  let fixture: ComponentFixture<AcDdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcDdrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcDdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
