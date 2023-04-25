import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarksectionComponent } from './darksection.component';

describe('DarksectionComponent', () => {
  let component: DarksectionComponent;
  let fixture: ComponentFixture<DarksectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarksectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarksectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
