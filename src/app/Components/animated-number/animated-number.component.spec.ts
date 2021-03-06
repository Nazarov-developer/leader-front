import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { AnimatedNumberComponent } from './animated-number.component';

describe('AnimatedNumberComponent', () => {
  let component: AnimatedNumberComponent;
  let fixture: ComponentFixture<AnimatedNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
