import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSpinnerComponent } from './ac-spinner.component';

describe('AcSpinnerComponent', () => {
  let component: AcSpinnerComponent;
  let fixture: ComponentFixture<AcSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
