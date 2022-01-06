import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensionPannelComponent } from './expension-pannel.component';

describe('ExpensionPannelComponent', () => {
  let component: ExpensionPannelComponent;
  let fixture: ComponentFixture<ExpensionPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensionPannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensionPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
