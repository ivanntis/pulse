import { Component, Element } from '@stencil/core';


@Component({
  tag: 'pulse-flowtm',
  styleUrl: 'pulse-flowtm.scss',
  shadow: true
})
export class Pulseflowtm {
  @Element() element: HTMLElement;

  hostData() {
    return;
  }

  render() {

    return (
      <div class="flowtm-main">
        <div class="flowtm-main--container pulse-grid">
          <header class="row flowtm-main--container--header"> 
            <div class="col-xs-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1">
              <slot name="header"></slot> 
            </div>
          </header>
          <section id="content" class="row flowtm-main--container--content">
            <div class="col-xs-12 col-md-10  col-md-offset-1"> <slot name="content"></slot> </div>
          </section>
        </div>
      </div>
    );
  }
}
