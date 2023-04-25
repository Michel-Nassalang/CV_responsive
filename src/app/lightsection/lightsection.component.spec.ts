import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsectionComponent } from './lightsection.component';

describe('LightsectionComponent', () => {
  let component: LightsectionComponent;
  let fixture: ComponentFixture<LightsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
