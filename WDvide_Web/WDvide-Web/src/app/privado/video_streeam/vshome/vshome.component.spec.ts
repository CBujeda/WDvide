import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VshomeComponent } from './vshome.component';

describe('VshomeComponent', () => {
  let component: VshomeComponent;
  let fixture: ComponentFixture<VshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
