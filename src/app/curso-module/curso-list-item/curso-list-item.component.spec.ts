import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListItemComponent } from './curso-list-item.component';

describe('CursoListItemComponent', () => {
  let component: CursoListItemComponent;
  let fixture: ComponentFixture<CursoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
