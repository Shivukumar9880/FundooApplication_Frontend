import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabelContainerComponent } from './edit-label-container.component';

describe('EditLabelContainerComponent', () => {
  let component: EditLabelContainerComponent;
  let fixture: ComponentFixture<EditLabelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLabelContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
