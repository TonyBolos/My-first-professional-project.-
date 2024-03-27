import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmwix3CompComponent } from './bmwix3-comp.component';

describe('Bmwix3CompComponent', () => {
  let component: Bmwix3CompComponent;
  let fixture: ComponentFixture<Bmwix3CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bmwix3CompComponent]
    });
    fixture = TestBed.createComponent(Bmwix3CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
