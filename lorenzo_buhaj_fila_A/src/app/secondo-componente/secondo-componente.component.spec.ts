import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoComponenteComponent } from './secondo-componente.component';

describe('SecondoComponenteComponent', () => {
  let component: SecondoComponenteComponent;
  let fixture: ComponentFixture<SecondoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondoComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
