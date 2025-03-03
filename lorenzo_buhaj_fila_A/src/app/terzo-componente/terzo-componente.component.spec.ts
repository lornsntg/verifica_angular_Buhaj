import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzoComponenteComponent } from './terzo-componente.component';

describe('TerzoComponenteComponent', () => {
  let component: TerzoComponenteComponent;
  let fixture: ComponentFixture<TerzoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerzoComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerzoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
