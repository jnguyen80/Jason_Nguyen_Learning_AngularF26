import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonkeyDetail } from './monkey-detail';

describe('MonkeyDetail', () => {
  let component: MonkeyDetail;
  let fixture: ComponentFixture<MonkeyDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonkeyDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(MonkeyDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
