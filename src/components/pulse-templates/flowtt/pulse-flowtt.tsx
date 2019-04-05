import { Component  } from '@stencil/core';


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
           <div class="flowtt-main--container">
            <slot name="header"></slot>
            <slot name="content"></slot>
            <slot name="summary"></slot>
          </div>
        </div>
      );
    }
  }
  