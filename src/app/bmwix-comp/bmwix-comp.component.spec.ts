import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwixCompComponent } from './bmwix-comp.component';

describe('BmwixCompComponent', () => {
  let component: BmwixCompComponent;
  let fixture: ComponentFixture<BmwixCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmwixCompComponent]
    });
    fixture = TestBed.createComponent(BmwixCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
