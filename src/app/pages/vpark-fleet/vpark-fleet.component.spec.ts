import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VparkFleetComponent } from './vpark-fleet.component';

describe('VparkFleetComponent', () => {
  let component: VparkFleetComponent;
  let fixture: ComponentFixture<VparkFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VparkFleetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VparkFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
