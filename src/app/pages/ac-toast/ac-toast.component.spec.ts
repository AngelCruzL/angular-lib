import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcToastComponent } from './ac-toast.component';

describe('AcToastComponent', () => {
  let component: AcToastComponent;
  let fixture: ComponentFixture<AcToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcToastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
