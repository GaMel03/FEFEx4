import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteTaker } from './note-taker';

describe('NoteTaker', () => {
  let component: NoteTaker;
  let fixture: ComponentFixture<NoteTaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteTaker],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteTaker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
