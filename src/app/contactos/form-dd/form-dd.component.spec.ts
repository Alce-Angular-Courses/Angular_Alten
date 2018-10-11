import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDdComponent } from './form-dd.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormDdComponent', () => {
  let component: FormDdComponent;
  let fixture: ComponentFixture<FormDdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDdComponent ],
      imports: [
        ReactiveFormsModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
