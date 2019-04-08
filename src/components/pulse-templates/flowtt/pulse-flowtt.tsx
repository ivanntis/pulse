import { Component } from '@stencil/core';


@Component({
  tag: 'pulse-flowtt',
  styleUrl: 'pulse-flowtt.scss',
  shadow: true
})
export class PulseFlowtt {

  hostData() {

  }

  render() {

    return (
      <div class="flowtt-main">
        <div class="flowtt-main--container pulse-grid">
          <header class="row"> 
            <div class="col-xs-12  col-lg-10 col-lg-offset-1">
              <slot name="header"></slot> 
            </div>
          </header>
          <section class="row">
            <div class="col-xs-12  col-lg-3 col-lg-offset-3 order-lg-2"> <slot name="summary"></slot> </div>
            <div class="col-xs-12  col-lg-5 col-lg-offset-1 order-lg-1"> <slot name="content"></slot> </div>
          </section>
        </div>
      </div>
    );
  }
}
