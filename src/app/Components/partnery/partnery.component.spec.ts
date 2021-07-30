import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartneryComponent } from './partnery.component';

describe('PartneryComponent', () => {
  let component: PartneryComponent;
  let fixture: ComponentFixture<PartneryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartneryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartneryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
