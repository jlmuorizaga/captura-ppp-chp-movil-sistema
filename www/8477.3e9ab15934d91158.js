"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8477],{8477:(V,z,l)=>{l.r(z),l.d(z,{ion_range:()=>L});var j=l(467),a=l(9672),B=l(909),g=l(4920),E=l(4929),S=l(5083),A=l(333),o=l(3664);const L=class{constructor(n){var e=this;(0,a.r)(this,n),this.ionChange=(0,a.d)(this,"ionChange",7),this.ionInput=(0,a.d)(this,"ionInput",7),this.ionFocus=(0,a.d)(this,"ionFocus",7),this.ionBlur=(0,a.d)(this,"ionBlur",7),this.ionKnobMoveStart=(0,a.d)(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=(0,a.d)(this,"ionKnobMoveEnd",7),this.rangeId="ion-r-"+T++,this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.clampBounds=t=>(0,g.j)(this.min,t,this.max),this.ensureValueInBounds=t=>this.dualKnobs?{lower:this.clampBounds(t.lower),upper:this.clampBounds(t.upper)}:this.clampBounds(t),this.setupGesture=(0,j.A)(function*(){const t=e.rangeSlider;t&&(e.gesture=(yield Promise.resolve().then(l.bind(l,8607))).createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:10,onStart:()=>e.onStart(),onMove:r=>e.onMove(r),onEnd:r=>e.onEnd(r)}),e.gesture.enable(!e.disabled))}),this.handleKeyboard=(t,r)=>{const{ensureValueInBounds:d}=this;let i=this.step;i=i>0?i:1,i/=this.max-this.min,r||(i*=-1),"A"===t?this.ratioA=(0,g.j)(0,this.ratioA+i,1):this.ratioB=(0,g.j)(0,this.ratioB+i,1),this.ionKnobMoveStart.emit({value:d(this.value)}),this.updateValue(),this.emitValueChange(),this.ionKnobMoveEnd.emit({value:d(this.value)})},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit())},this.ratioA=0,this.ratioB=0,this.pressedKnob=void 0,this.color=void 0,this.debounce=void 0,this.name=this.rangeId,this.label=void 0,this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=t=>Math.round(t),this.snaps=!1,this.step=1,this.ticks=!0,this.activeBarStart=void 0,this.disabled=!1,this.value=0,this.labelPlacement="start"}debounceChanged(){const{ionInput:n,debounce:e,originalIonInput:t}=this;this.ionInput=void 0===e?null!=t?t:n:(0,g.e)(n,e)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}activeBarStartChanged(){const{activeBarStart:n}=this;void 0!==n&&(n>this.max?((0,E.p)(`Range: The value of activeBarStart (${n}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.max):n<this.min&&((0,E.p)(`Range: The value of activeBarStart (${n}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.min))}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}valueChanged(){this.noUpdate||this.updateRatio()}componentWillLoad(){this.el.hasAttribute("id")&&(this.rangeId=this.el.getAttribute("id")),this.inheritedAttributes=(0,g.i)(this.el)}componentDidLoad(){this.originalIonInput=this.ionInput,this.setupGesture(),this.updateRatio(),this.didLoad=!0}connectedCallback(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.activeBarStartChanged(),this.didLoad&&this.setupGesture(),this.contentEl=(0,B.f)(this.el)}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){var n;const e=null!==(n=this.value)&&void 0!==n?n:0;return this.dualKnobs?"object"==typeof e?e:{lower:0,upper:e}:"object"==typeof e?e.upper:e}emitValueChange(){this.value=this.ensureValueInBounds(this.value),this.ionChange.emit({value:this.value})}onStart(){this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})}onMove(n){const{contentEl:e,pressedKnob:t}=this,r=n.currentX;e&&void 0===this.initialContentScrollY&&(this.initialContentScrollY=(0,B.d)(e)),void 0===t&&this.setPressedKnob(r),this.update(r)}onEnd(n){const{contentEl:e,initialContentScrollY:t}=this,r=n.currentX||n.clientX;void 0===this.pressedKnob&&this.setPressedKnob(r),e&&void 0!==t&&(0,B.r)(e,t),this.update(r),this.pressedKnob=void 0,this.emitValueChange(),this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})}update(n){const e=this.rect;let t=(0,g.j)(0,(n-e.left)/e.width,1);(0,S.i)(this.el)&&(t=1-t),this.snaps&&(t=w(R(t,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=t:this.ratioB=t,this.updateValue()}setPressedKnob(n){const e=this.rect=this.rangeSlider.getBoundingClientRect();let t=(0,g.j)(0,(n-e.left)/e.width,1);(0,S.i)(this.el)&&(t=1-t),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-t)<Math.abs(this.ratioB-t)?"A":"B",this.setFocus(this.pressedKnob)}get valA(){return R(this.ratioA,this.min,this.max,this.step)}get valB(){return R(this.ratioB,this.min,this.max,this.step)}get ratioLower(){if(this.dualKnobs)return Math.min(this.ratioA,this.ratioB);const{activeBarStart:n}=this;return null==n?0:w(n,this.min,this.max)}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const n=this.getValue(),{min:e,max:t}=this;this.dualKnobs?(this.ratioA=w(n.lower,e,t),this.ratioB=w(n.upper,e,t)):this.ratioA=w(n,e,t)}updateValue(){this.noUpdate=!0;const{valA:n,valB:e}=this;this.value=this.dualKnobs?{lower:Math.min(n,e),upper:Math.max(n,e)}:n,this.ionInput.emit({value:this.value}),this.noUpdate=!1}setFocus(n){if(this.el.shadowRoot){const e=this.el.shadowRoot.querySelector("A"===n?".range-knob-a":".range-knob-b");e&&e.focus()}}get hasStartSlotContent(){return null!==this.el.querySelector('[slot="start"]')}get hasEndSlotContent(){return null!==this.el.querySelector('[slot="end"]')}get hasLabel(){return void 0!==this.label||null!==this.el.querySelector('[slot="label"]')}renderRangeSlider(){var n;const{min:e,max:t,step:r,handleKeyboard:d,pressedKnob:i,disabled:u,pin:x,ratioLower:p,ratioUpper:m,pinFormatter:y,inheritedAttributes:_}=this;let k=100*p+"%",v=100-100*m+"%";const f=(0,S.i)(this.el),b=f?"right":"left",$=c=>({[b]:c[b]});!1===this.dualKnobs&&(this.valA<(null!==(n=this.activeBarStart)&&void 0!==n?n:this.min)?(k=100*m+"%",v=100-100*p+"%"):(k=100*p+"%",v=100-100*m+"%"));const W={[b]:k,[f?"left":"right"]:v},D=[];if(this.snaps&&this.ticks)for(let c=e;c<=t;c+=r){const I=w(c,e,t),G=Math.min(p,m),X=Math.max(p,m),O={ratio:I,active:I>=G&&I<=X};O[b]=100*I+"%",D.push(O)}return(0,a.h)("div",{class:"range-slider",ref:c=>this.rangeSlider=c,onPointerUp:c=>{void 0===this.pressedKnob&&(this.onStart(),this.onEnd(c))}},D.map(c=>(0,a.h)("div",{style:$(c),role:"presentation",class:{"range-tick":!0,"range-tick-active":c.active},part:c.active?"tick-active":"tick"})),(0,a.h)("div",{class:"range-bar-container"},(0,a.h)("div",{class:"range-bar",role:"presentation",part:"bar"}),(0,a.h)("div",{class:{"range-bar":!0,"range-bar-active":!0,"has-ticks":D.length>0},role:"presentation",style:W,part:"bar-active"})),U(f,{knob:"A",pressed:"A"===i,value:this.valA,ratio:this.ratioA,pin:x,pinFormatter:y,disabled:u,handleKeyboard:d,min:e,max:t,inheritedAttributes:_}),this.dualKnobs&&U(f,{knob:"B",pressed:"B"===i,value:this.valB,ratio:this.ratioB,pin:x,pinFormatter:y,disabled:u,handleKeyboard:d,min:e,max:t,inheritedAttributes:_}))}render(){const{disabled:n,el:e,hasLabel:t,rangeId:r,pin:d,pressedKnob:i,labelPlacement:u,label:x}=this,p=(0,A.h)("ion-item",e),y=p&&!(t&&("start"===u||"fixed"===u)||this.hasStartSlotContent),k=p&&!(t&&"end"===u||this.hasEndSlotContent),v=(0,o.b)(this);return(0,g.d)(!0,e,this.name,JSON.stringify(this.getValue()),n),(0,a.h)(a.f,{key:"7ad5ca892fd46c64ce5583e91e6812410a869921",onFocusin:this.onFocus,onFocusout:this.onBlur,id:r,class:(0,A.c)(this.color,{[v]:!0,"in-item":p,"range-disabled":n,"range-pressed":void 0!==i,"range-has-pin":d,[`range-label-placement-${u}`]:!0,"range-item-start-adjustment":y,"range-item-end-adjustment":k})},(0,a.h)("label",{key:"eb8d46a9572341b4cc3c91d8a5de0667bd166ca4",class:"range-wrapper",id:"range-label"},(0,a.h)("div",{key:"21acd6ff6eba17bf6923bf723fea055b95fd29ca",class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!t},part:"label"},void 0!==x?(0,a.h)("div",{class:"label-text"},x):(0,a.h)("slot",{name:"label"})),(0,a.h)("div",{key:"7644c86a6ad3edf2c27f02dd2a14795b3720ea0d",class:"native-wrapper"},(0,a.h)("slot",{key:"1bbeccee57addc126b36de395e28ba655248695b",name:"start"}),this.renderRangeSlider(),(0,a.h)("slot",{key:"2963dd84e4116fc3956c304eb53deefd0d1291df",name:"end"}))))}get el(){return(0,a.i)(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},U=(n,{knob:e,value:t,ratio:r,min:d,max:i,disabled:u,pressed:x,pin:p,handleKeyboard:m,pinFormatter:y,inheritedAttributes:_})=>{const k=n?"right":"left",f=_["aria-label"];return(0,a.h)("div",{onKeyDown:b=>{const C=b.key;"ArrowLeft"===C||"ArrowDown"===C?(m(e,!1),b.preventDefault(),b.stopPropagation()):("ArrowRight"===C||"ArrowUp"===C)&&(m(e,!0),b.preventDefault(),b.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===e,"range-knob-b":"B"===e,"range-knob-pressed":x,"range-knob-min":t===d,"range-knob-max":t===i,"ion-activatable":!0,"ion-focusable":!0},style:(()=>{const b={};return b[k]=100*r+"%",b})(),role:"slider",tabindex:u?-1:0,"aria-label":void 0!==f?f:null,"aria-labelledby":void 0===f?"range-label":null,"aria-valuemin":d,"aria-valuemax":i,"aria-disabled":u?"true":null,"aria-valuenow":t},p&&(0,a.h)("div",{class:"range-pin",role:"presentation",part:"pin"},y(t)),(0,a.h)("div",{class:"range-knob",role:"presentation",part:"knob"}))},R=(n,e,t,r)=>{let d=(t-e)*n;return r>0&&(d=Math.round(d/r)*r+e),function h(n,...e){const t=Math.max(...e.map(r=>function s(n){return n%1==0?0:n.toString().split(".")[1].length}(r)));return Number(n.toFixed(t))}((0,g.j)(e,d,t),e,t,r)},w=(n,e,t)=>(0,g.j)(0,(n-e)/(t-e),1);let T=0;L.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:2px;--height:42px}:host(.range-item-start-adjustment){-webkit-padding-start:24px;padding-inline-start:24px}:host(.range-item-end-adjustment){-webkit-padding-end:24px;padding-inline-end:24px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:calc(8px + 0.75rem)}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:calc(8px + 0.75rem)}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  100%,  0) scale(0.01);transform:translate3d(0,  100%,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:0.75rem;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 11px), 0) scale(1);transform:translate3d(0, calc(-100% + 11px), 0) scale(1)}:host(.range-disabled){opacity:0.3}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.26);--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #0054e9);--pin-color:var(--ion-color-primary-contrast, #fff)}::slotted(:not(ion-icon)[slot=start]),::slotted(:not(ion-icon)[slot=end]),.native-wrapper{font-size:0.75rem}:host(.range-item-start-adjustment){-webkit-padding-start:18px;padding-inline-start:18px}:host(.range-item-end-adjustment){-webkit-padding-end:18px;padding-inline-end:18px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:1.75rem}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:1.75rem}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}.range-knob::before{inset-inline-start:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.75rem;height:1.75rem;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color)}.range-pin::before{bottom:-1px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}.range-pin::before{inset-inline-start:50%}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 4px), 0) scale(1);transform:translate3d(0, calc(-100% + 4px), 0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}'}},333:(V,z,l)=>{l.d(z,{c:()=>B,g:()=>E,h:()=>a,o:()=>A});var j=l(467);const a=(o,s)=>null!==s.closest(o),B=(o,s)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},s):s,E=o=>{const s={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(h=>null!=h).map(h=>h.trim()).filter(h=>""!==h):[])(o).forEach(h=>s[h]=!0),s},S=/^[a-z][a-z0-9+\-.]*:/,A=function(){var o=(0,j.A)(function*(s,h,P,M){if(null!=s&&"#"!==s[0]&&!S.test(s)){const K=document.querySelector("ion-router");if(K)return null!=h&&h.preventDefault(),K.push(s,P,M)}return!1});return function(h,P,M,K){return o.apply(this,arguments)}}()}}]);