import { ComponentFixture, TestBed } from '@angular/core/testing';

import AcJoinPipeComponent from './ac-join-pipe.component';

describe('AcJoinPipeComponent', () => {
  let component: AcJoinPipeComponent;
  let fixture: ComponentFixture<AcJoinPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcJoinPipeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcJoinPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
