import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerventasComponent } from './verventas.component';

describe('VerventasComponent', () => {
  let component: VerventasComponent;
  let fixture: ComponentFixture<VerventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerventasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
