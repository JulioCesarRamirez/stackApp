import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionComponent } from './action.component';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call typeConverter with hold', () => {
    component.type = 'hold';
    component.typeConverter();
    expect(component.typeName).toBe('Hold');
  });

  it('should call typeConverter with sell', () => {
    component.type = 'sell';
    component.typeConverter();
    expect(component.typeName).toBe('Sell');
  });

  it('should call typeConverter with buy', () => {
    component.type = 'buy';
    component.typeConverter();
    expect(component.typeName).toBe('Buy');
  });

  it('should call getNumber with sell', () => {
    component.price = 1;
    component.getNumber(2);
    expect(component.price).toBe(2);
  });

});
