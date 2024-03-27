import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmw8seriesCompComponent } from './bmw8series-comp.component';

describe('Bmw8seriesCompComponent', () => {
  let component: Bmw8seriesCompComponent;
  let fixture: ComponentFixture<Bmw8seriesCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bmw8seriesCompComponent]
    });
    fixture = TestBed.createComponent(Bmw8seriesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
