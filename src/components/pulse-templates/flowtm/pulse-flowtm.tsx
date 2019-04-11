import { Component, Element } from '@stencil/core';


@Component({
  tag: 'pulse-flowtm',
  styleUrl: 'pulse-flowtm.scss',
  shadow: true
})
export class Pulseflowtm {
  @Element() element: HTMLElement;
  private content: HTMLElement;
  private head: HTMLElement;

  hostData() {
    return;
  }

  componentDidLoad(){
    // console.log('this.element.clientHeight',this.element.clientHeight);
    // console.log('window.innerHeight',window.innerHeight);
    // console.log('this.head.offsetHeight',this.head.offsetHeight);
    this.content.style.maxHeight = `${(window.innerHeight) - (this.head.offsetHeight+40)}px`;
  }

  render() {

    return (
      <div class="flowtm-main">
        <div class="flowtm-main--container pulse-grid">
          <header class="row flowtm-main--container--header" ref={el => this.head = el as HTMLElement}> 
            <div class="col-xs-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1">
              <slot name="header"></slot> 
            </div>
          </header>
          <section id="content" class="row flowtm-main--container--content" ref={el => this.content = el as HTMLElement}>
            <div class="col-xs-12 col-md-10  col-md-offset-1"> <slot name="content"></slot> </div>
          </section>
        </div>
      </div>
    );
  }
}
