import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmwm4coupeCompComponent } from './bmwm4coupe-comp.component';

describe('Bmwm4coupeCompComponent', () => {
  let component: Bmwm4coupeCompComponent;
  let fixture: ComponentFixture<Bmwm4coupeCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bmwm4coupeCompComponent]
    });
    fixture = TestBed.createComponent(Bmwm4coupeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
