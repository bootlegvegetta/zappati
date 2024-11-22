import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NothingPage } from './nothing.page';

describe('NothingPage', () => {
  let component: NothingPage;
  let fixture: ComponentFixture<NothingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
