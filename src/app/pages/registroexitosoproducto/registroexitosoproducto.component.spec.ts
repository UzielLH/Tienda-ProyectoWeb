import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroexitosoproductoComponent } from './registroexitosoproducto.component';

describe('RegistroexitosoproductoComponent', () => {
  let component: RegistroexitosoproductoComponent;
  let fixture: ComponentFixture<RegistroexitosoproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroexitosoproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroexitosoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
