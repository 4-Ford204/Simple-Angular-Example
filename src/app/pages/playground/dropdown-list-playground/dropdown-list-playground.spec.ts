import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownListPlayground } from './dropdown-list-playground';

describe('DropdownListPlayground', () => {
  let component: DropdownListPlayground;
  let fixture: ComponentFixture<DropdownListPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownListPlayground],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownListPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
