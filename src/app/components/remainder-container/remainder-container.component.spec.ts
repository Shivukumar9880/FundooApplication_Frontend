import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainderContainerComponent } from './remainder-container.component';

describe('RemainderContainerComponent', () => {
  let component: RemainderContainerComponent;
  let fixture: ComponentFixture<RemainderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
