import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListPlusComponent } from './users-list-plus.component';

describe('usersListPlusComponent', () => {
  let component: UsersListPlusComponent;
  let fixture: ComponentFixture<UsersListPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
