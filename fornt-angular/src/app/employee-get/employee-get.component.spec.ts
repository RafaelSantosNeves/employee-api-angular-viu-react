import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGetComponent } from './employee-get.component';

describe('EmployeeGetComponent', () => {
  let component: EmployeeGetComponent;
  let fixture: ComponentFixture<EmployeeGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeGetComponent]
    });
    fixture = TestBed.createComponent(EmployeeGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
