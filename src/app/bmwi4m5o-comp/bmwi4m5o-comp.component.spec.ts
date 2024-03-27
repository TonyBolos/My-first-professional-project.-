import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmwi4m5oCompComponent } from './bmwi4m5o-comp.component';

describe('Bmwi4m5oCompComponent', () => {
  let component: Bmwi4m5oCompComponent;
  let fixture: ComponentFixture<Bmwi4m5oCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bmwi4m5oCompComponent]
    });
    fixture = TestBed.createComponent(Bmwi4m5oCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
