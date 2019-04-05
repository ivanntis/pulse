import { Component, Prop, Listen, Element, Event, EventEmitter } from '@stencil/core';
import { hasShadowDom } from '../../../utils/utils';
import { Color, Fill } from '../../../interface';
import { createColorClasses } from '../../../utils/themes';

@Component({
  tag: 'pulse-button',
  styleUrl: 'pulse-button.scss',
  shadow: true
})
export class PulseButton {

  @Element() el: HTMLElement;

  @Event() pulseFocus!: EventEmitter<void>;
  @Event() pulseBlur!: EventEmitter<void>;

  @Prop() color: Color;
  @Prop({ reflectToAttr: true }) fill: Fill = 'solid';
  @Prop({ reflectToAttr: true }) disabled = false;
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  @Listen('click')
  onClick(ev: Event) {
    if (hasShadowDom(this.el)) {
      //Busca si hay un padre que contiene el elemento aislado por el shadowDom
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();

        const virtualButton = document.createElement('button');
        virtualButton.type = this.type;
        virtualButton.style.display = 'none';
        form.appendChild(virtualButton);
        virtualButton.click();
        virtualButton.remove();
      }
    }
  }

  private onFocus = () => {
    this.pulseFocus.emit();
  }

  private onBlur = () => {
    this.pulseBlur.emit();
  }


  hostData() {
    const { disabled, color, fill } = this;
    return {
      'aria-disabled': disabled ? 'true' : null,
      class: {
        ...createColorClasses(color),
        'button': true,
        [`button-${fill}`]: true,
        'button-disabled': disabled,
        'pulse-focusable': true,
      }
    };
  }

  render() {
    const attrs = { type: this.type }

    return (
      <button
        {...attrs}
        class="button-native"
        onFocus={this.onFocus}
        onBlur={this.onBlur}>
        <slot></slot>
      </button>
    );
  }
}
