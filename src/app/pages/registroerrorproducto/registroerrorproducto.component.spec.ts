import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroerrorproductoComponent } from './registroerrorproducto.component';

describe('RegistroerrorproductoComponent', () => {
  let component: RegistroerrorproductoComponent;
  let fixture: ComponentFixture<RegistroerrorproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroerrorproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroerrorproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
