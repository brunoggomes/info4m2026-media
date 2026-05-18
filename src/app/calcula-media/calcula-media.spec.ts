import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaMedia } from './calcula-media';

describe('CalculaMedia', () => {
  let component: CalculaMedia;
  let fixture: ComponentFixture<CalculaMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculaMedia],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculaMedia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
