import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundLayout } from './playground-layout';

describe('PlaygroundLayout', () => {
  let component: PlaygroundLayout;
  let fixture: ComponentFixture<PlaygroundLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
