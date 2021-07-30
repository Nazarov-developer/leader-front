import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasheKredoComponent } from './nashe-kredo.component';

describe('NasheKredoComponent', () => {
  let component: NasheKredoComponent;
  let fixture: ComponentFixture<NasheKredoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasheKredoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasheKredoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
