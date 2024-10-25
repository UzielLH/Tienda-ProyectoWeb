import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroerrorventaComponent } from './registroerrorventa.component';

describe('RegistroerrorventaComponent', () => {
  let component: RegistroerrorventaComponent;
  let fixture: ComponentFixture<RegistroerrorventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroerrorventaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroerrorventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
