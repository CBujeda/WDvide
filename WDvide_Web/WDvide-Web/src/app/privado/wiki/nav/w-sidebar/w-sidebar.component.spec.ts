import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WSidebarComponent } from './w-sidebar.component';

describe('WSidebarComponent', () => {
  let component: WSidebarComponent;
  let fixture: ComponentFixture<WSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
