import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmwi7CompComponent } from './bmwi7-comp.component';

describe('Bmwi7CompComponent', () => {
  let component: Bmwi7CompComponent;
  let fixture: ComponentFixture<Bmwi7CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bmwi7CompComponent]
    });
    fixture = TestBed.createComponent(Bmwi7CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
