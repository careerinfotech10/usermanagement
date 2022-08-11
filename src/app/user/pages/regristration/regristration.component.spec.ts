import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegristrationComponent } from './regristration.component';

describe('RegristrationComponent', () => {
  let component: RegristrationComponent;
  let fixture: ComponentFixture<RegristrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegristrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegristrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
