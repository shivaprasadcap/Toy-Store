import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToypageComponent } from './toypage.component';

describe('ToypageComponent', () => {
  let component: ToypageComponent;
  let fixture: ComponentFixture<ToypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
