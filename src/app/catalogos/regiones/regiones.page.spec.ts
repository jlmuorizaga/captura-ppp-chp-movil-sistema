import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegionesPage } from './regiones.page';

describe('RegionesPage', () => {
  let component: RegionesPage;
  let fixture: ComponentFixture<RegionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
