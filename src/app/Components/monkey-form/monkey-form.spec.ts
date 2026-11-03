import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonkeyForm } from './monkey-form';

describe('MonkeyForm', () => {
  let component: MonkeyForm;
  let fixture: ComponentFixture<MonkeyForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonkeyForm],
    }).compileComponents();

    fixture = TestBed.createComponent(MonkeyForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
