import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarventaComponent } from './registrarventa.component';

describe('RegistrarventaComponent', () => {
  let component: RegistrarventaComponent;
  let fixture: ComponentFixture<RegistrarventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarventaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
