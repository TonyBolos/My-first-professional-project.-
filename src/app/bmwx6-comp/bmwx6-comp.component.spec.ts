import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmwx6CompComponent } from './bmwx6-comp.component';

describe('Bmwx6CompComponent', () => {
  let component: Bmwx6CompComponent;
  let fixture: ComponentFixture<Bmwx6CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bmwx6CompComponent]
    });
    fixture = TestBed.createComponent(Bmwx6CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
