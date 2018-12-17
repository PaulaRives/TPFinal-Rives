import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoListItemComponent } from './alumno-list-item.component';

describe('AlumnoComponent', () => {
  let component: AlumnoListItemComponent;
  let fixture: ComponentFixture<AlumnoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
