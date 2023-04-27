import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToylistComponent } from './toylist.component';

describe('ToylistComponent', () => {
  let component: ToylistComponent;
  let fixture: ComponentFixture<ToylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
