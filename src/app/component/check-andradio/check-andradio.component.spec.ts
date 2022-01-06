import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckANDradioComponent } from './check-andradio.component';

describe('CheckANDradioComponent', () => {
  let component: CheckANDradioComponent;
  let fixture: ComponentFixture<CheckANDradioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckANDradioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckANDradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
