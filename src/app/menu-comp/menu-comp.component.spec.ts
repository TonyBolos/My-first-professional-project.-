import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCompComponent } from './menu-comp.component';

describe('MenuCompComponent', () => {
  let component: MenuCompComponent;
  let fixture: ComponentFixture<MenuCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCompComponent]
    });
    fixture = TestBed.createComponent(MenuCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
