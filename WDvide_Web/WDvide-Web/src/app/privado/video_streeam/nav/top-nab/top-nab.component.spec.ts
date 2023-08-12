import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNabComponent } from './top-nab.component';

describe('TopNabComponent', () => {
  let component: TopNabComponent;
  let fixture: ComponentFixture<TopNabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
