import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosComponent } from './contactos.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormDdComponent } from './form-dd/form-dd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactosComponent', () => {
  let component: ContactosComponent;
  let fixture: ComponentFixture<ContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactosComponent,
        FormTdComponent,
        FormDdComponent
       ], imports: [
        FormsModule,
        ReactiveFormsModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
