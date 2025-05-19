import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSeccionComponent } from './about-seccion.component';

describe('AboutSeccionComponent', () => {
  let component: AboutSeccionComponent;
  let fixture: ComponentFixture<AboutSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSeccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
