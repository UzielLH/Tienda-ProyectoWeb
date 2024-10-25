import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroexitosoventaComponent } from './registroexitosoventa.component';

describe('RegistroexitosoventaComponent', () => {
  let component: RegistroexitosoventaComponent;
  let fixture: ComponentFixture<RegistroexitosoventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroexitosoventaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroexitosoventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
