import{r as t,h as e,a as s}from"./p-cc7ce8c7.js";import{s as i}from"./p-d93fa5d8.js";import"./p-25433d0f.js";const l=':host{display:block}:slotted([slot="summary"]){line-height:1;display:flex;align-items:center;gap:0.5em}';const n=class{constructor(e){t(this,e);this.methodId=undefined;this.processorId=undefined;this.isManual=undefined;this.card=undefined}isSelected(){if(this.methodId){return(i===null||i===void 0?void 0:i.id)===this.processorId&&(i===null||i===void 0?void 0:i.method)==this.methodId}return!(i===null||i===void 0?void 0:i.method)&&(i===null||i===void 0?void 0:i.id)===this.processorId}getAllOptions(){const t=this.el.closest("sc-payment")||this.el.parentElement;if(!t){return[]}return[...t.querySelectorAll(this.el.tagName)]}getSiblingItems(){return this.getAllOptions().filter((t=>t!==this.el))}hasOthers(){var t;return!!((t=this.getSiblingItems())===null||t===void 0?void 0:t.length)}render(){const t=this.hasOthers()?"sc-toggle":"div";return e(t,{"show-control":true,borderless:true,open:this.isSelected(),onScShow:()=>{i.id=this.processorId;i.manual=!!this.isManual;i.method=this.methodId}},this.hasOthers()&&e("slot",{name:"summary",slot:"summary"}),this.card&&!this.hasOthers()?e("sc-card",null,e("slot",null)):e("slot",null))}get el(){return s(this)}};n.style=l;const a=":host{display:block}::slotted([slot=icon]){display:block;font-size:24px}.payment-selected{display:flex;flex-direction:column;gap:var(--sc-spacing-x-small)}.payment-selected__label{color:var(--sc-input-label-color);line-height:var(--sc-line-height-dense);font-size:var(--sc-font-size-medium)}.payment-selected__instructions{display:flex;justify-content:flex-start;align-items:center;gap:1em}.payment-selected__instructions svg{width:42px;height:42px;flex-shrink:0}.payment-selected__instructions-text{color:var(--sc-input-label-color);font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense)}";const o=class{constructor(e){t(this,e);this.iconName=undefined;this.label=undefined}render(){return e("div",{class:"payment-selected",part:"base"},e("slot",{name:"icon"}),e("div",{class:"payment-selected__label"},this.label),e("sc-divider",{style:{"--spacing":"var(--sc-spacing-xx-small)"},exportparts:"base:divider, line:divider__line"}),e("div",{part:"instructions",class:"payment-selected__instructions"},e("svg",{part:"icon",viewBox:"0 0 48 40",fill:"var(--sc-color-gray-500)",xmlns:"http://www.w3.org/2000/svg",role:"presentation"},e("path",{opacity:".6","fill-rule":"evenodd","clip-rule":"evenodd",d:"M43 5a4 4 0 00-4-4H17a4 4 0 00-4 4v11a1 1 0 102 0V5a2 2 0 012-2h22a2 2 0 012 2v30a2 2 0 01-2 2H17a2 2 0 01-2-2v-9a1 1 0 10-2 0v9a4 4 0 004 4h22a4 4 0 004-4V5zM17.992 16.409L21.583 20H6a1 1 0 100 2h15.583l-3.591 3.591a1 1 0 101.415 1.416l5.3-5.3a1 1 0 000-1.414l-5.3-5.3a1 1 0 10-1.415 1.416zM17 6a1 1 0 011-1h15a1 1 0 011 1v2a1 1 0 01-1 1H18a1 1 0 01-1-1V6zm21-1a1 1 0 100 2 1 1 0 000-2z"})),e("div",{part:"text",class:"payment-selected__instructions-text"},e("slot",null))))}};o.style=a;export{n as sc_payment_method_choice,o as sc_payment_selected};
//# sourceMappingURL=p-fee64d41.entry.js.map