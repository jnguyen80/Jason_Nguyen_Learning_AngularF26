import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonkeyListItem } from './monkey-list-item';

describe('MonkeyListItem', () => {
  let component: MonkeyListItem;
  let fixture: ComponentFixture<MonkeyListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonkeyListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MonkeyListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
