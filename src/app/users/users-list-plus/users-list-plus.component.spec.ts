import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListPlusComponent } from './users-list-plus.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('usersListPlusComponent', () => {
  let component: UsersListPlusComponent;
  let fixture: ComponentFixture<UsersListPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListPlusComponent ],
      imports: [
        FormsModule,
        HttpClientModule ]
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
