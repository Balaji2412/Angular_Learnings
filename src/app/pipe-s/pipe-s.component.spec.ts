import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeSComponent } from './pipe-s.component';

describe('PipeSComponent', () => {
  let component: PipeSComponent;
  let fixture: ComponentFixture<PipeSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
