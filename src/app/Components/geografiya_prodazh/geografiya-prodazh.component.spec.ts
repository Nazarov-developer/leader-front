import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeografiyaProdazhComponent } from './geografiya-prodazh.component';

describe('GeografiyaProdazhComponent', () => {
  let component: GeografiyaProdazhComponent;
  let fixture: ComponentFixture<GeografiyaProdazhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeografiyaProdazhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeografiyaProdazhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
