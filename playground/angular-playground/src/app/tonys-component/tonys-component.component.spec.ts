import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonysComponentComponent } from './tonys-component.component';

describe('TonysComponentComponent', () => {
  let component: TonysComponentComponent;
  let fixture: ComponentFixture<TonysComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonysComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonysComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
