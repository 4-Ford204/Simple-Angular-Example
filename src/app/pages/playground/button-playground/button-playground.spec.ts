import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlayground } from './button-playground';

describe('ButtonPlayground', () => {
  let component: ButtonPlayground;
  let fixture: ComponentFixture<ButtonPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPlayground],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
