import { Component, Prop, Watch } from "@stencil/core";
import { Elevation, CssClassMap, Color } from '../../../interface';
import { createColorClasses } from '../../../utils/themes';

@Component({
  tag: 'pulse-card',
  styleUrl: 'pulse-card.scss',
  shadow: true
})
export class PulseCard {

  @Prop() elevation: Elevation = 8;
  @Prop() color: Color;
  @Prop() elevationhover: Elevation = 0;

  @Watch('elevation')
  validateIndex(newValue: Elevation) {
    const isValid = typeof newValue === 'number' && newValue % 2 === 0 && newValue <= 24;
    if (!isValid) { throw new Error('invalid elevation') };
  }

  constructor() { }

  hostData() {

    return {
      class: {
        ...createColorClasses(this.color)
      }
    };
  }

  render() {
    const elevationClass: CssClassMap =
    {
      'pc-main': true,
      [`pulse-elevation-hover-${this.elevationhover}`]: !!this.elevationhover,
      [`pulse-elevation-${this.elevation}`]: true,
    }

    const attr = { class: elevationClass }
    return (
      <div {...attr}>
        <slot></slot>
      </div>
    );
  }
}