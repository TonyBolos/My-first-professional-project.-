import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmwseries1CompComponent } from './bmwseries1-comp.component';

describe('Bmwseries1CompComponent', () => {
  let component: Bmwseries1CompComponent;
  let fixture: ComponentFixture<Bmwseries1CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bmwseries1CompComponent]
    });
    fixture = TestBed.createComponent(Bmwseries1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
