import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { GadgetsComponent } from './gadgets.component';
import { GadgetsService } from './shared';

describe('Component: Gadgets', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [GadgetsComponent, GadgetsService]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([GadgetsComponent],
      (component: GadgetsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(GadgetsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(GadgetsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <gadgets></gadgets>
  `,
  directives: [GadgetsComponent]
})
class GadgetsComponentTestController {
}