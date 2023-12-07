import{proxyCustomElement,HTMLElement,createEvent,h,Fragment}from"@stencil/core/internal/client";import{i as intervalString}from"./price.js";import{d as defineCustomElement$4}from"./sc-choice-container2.js";import{d as defineCustomElement$3}from"./sc-format-number2.js";import{d as defineCustomElement$2}from"./sc-skeleton2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";const scPriceChoiceContainerCss=":host {\n  display: block;\n  min-width: 0;\n  width: 100%;\n}\n\nsc-choice-container {\n  container-type: inline-size;\n}\n\n.price-choice {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  line-height: var(--sc-line-height-dense);\n  gap: var(--sc-spacing-small);\n}\n.price-choice__name {\n  display: inline-block;\n  font-size: var(--sc-price-choice-name-size, var(--sc-input-label-font-size-medium));\n  font-weight: var(--sc-price-choice-name-font-weight, var(--sc-font-weight-bold));\n  text-transform: var(--sc-price-choice-text-transform, var(--sc-input-label-text-transform, none));\n}\n.price-choice > *:not(:first-child):last-child {\n  text-align: right;\n}\n.price-choice__details {\n  flex: 1 0 50%;\n  display: grid;\n  gap: var(--sc-spacing-xxx-small);\n}\n.price-choice__trial, .price-choice__setup-fee, .price-choice__price {\n  font-size: var(--sc-font-size-small);\n  opacity: 0.8;\n}\n.price-choice__price {\n  font-weight: var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));\n}\n\n@container (max-width: 325px) {\n  .price-choice {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--sc-spacing-xx-small);\n  }\n  .price-choice > *:not(:first-child):last-child {\n    text-align: initial;\n  }\n}",ScPriceChoiceContainer=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.scChange=createEvent(this,"scChange",7),this.price=void 0,this.loading=!1,this.label=void 0,this.showLabel=!0,this.showPrice=!0,this.showControl=!1,this.description=void 0,this.type=void 0,this.required=!1,this.checked=!1,this.priceData=void 0}handlePriceChange(){this.priceData="string"==typeof this.price?JSON.parse(this.price):this.price}componentWillLoad(){this.handlePriceChange()}renderPrice(){var e,i;return h(Fragment,null,h("sc-format-number",{type:"currency",value:null===(e=this.priceData)||void 0===e?void 0:e.amount,currency:null===(i=this.priceData)||void 0===i?void 0:i.currency}),intervalString(this.priceData,{showOnce:!0,abbreviate:!0,labels:{interval:"/",period:
/** translators: used as in time period: "for 3 months" */
wp.i18n.__("for","surecart")}}))}render(){var e,i,t,n,c,r,s,a,o,l,d,p;return this.loading?h("sc-choice-container",{showControl:this.showControl,name:"loading",disabled:!0},h("div",{class:"price-choice"},h("sc-skeleton",{style:{width:"60px",display:"inline-block"}}),h("sc-skeleton",{style:{width:"80px",display:"inline-block"}}))):h("sc-choice-container",{value:null===(e=this.priceData)||void 0===e?void 0:e.id,type:this.type,showControl:this.showControl,checked:this.checked,onScChange:()=>this.scChange.emit(),required:this.required},h("div",{class:"price-choice"},this.showLabel&&h("div",{class:"price-choice__title"},h("div",{class:"price-choice__name"},this.label||this.priceData.name),!!this.description&&h("div",{class:"price-choice__description"},this.description)),this.showPrice&&h("div",{class:"price-choice__details"},h("div",{class:"price-choice__price"},(null===(i=this.priceData)||void 0===i?void 0:i.ad_hoc)?wp.i18n.__("Custom Amount","surecart"):h(Fragment,null,h("sc-format-number",{type:"currency",value:null===(t=this.priceData)||void 0===t?void 0:t.amount,currency:null===(n=this.priceData)||void 0===n?void 0:n.currency}),(null===(c=this.priceData)||void 0===c?void 0:c.recurring_period_count)&&1<=(null===(r=this.priceData)||void 0===r?void 0:r.recurring_period_count)&&h("sc-visually-hidden",null," ",wp.i18n.__("This is a repeating price. Payment will happen","surecart")," ",intervalString(this.priceData,{showOnce:!0,abbreviate:!1,labels:{interval:wp.i18n.__("every","surecart"),period:
/** translators: used as in time period: "for 3 months" */
wp.i18n.__("for","surecart")}})),h("span",{"aria-hidden":"true"},intervalString(this.priceData,{showOnce:!0,abbreviate:!0,labels:{interval:"/",period:
/** translators: used as in time period: "for 3 months" */
wp.i18n.__("for","surecart")}})))),!!(null===(s=this.priceData)||void 0===s?void 0:s.trial_duration_days)&&h(Fragment,null,h("sc-visually-hidden",null,wp.i18n.sprintf(wp.i18n.__("You have a %d-day trial before payment becomes necessary.","surecart"),null===(a=this.priceData)||void 0===a?void 0:a.trial_duration_days)),h("div",{class:"price-choice__trial","aria-hidden":"true"},wp.i18n.sprintf(wp.i18n._n("Starting in %s day","Starting in %s days",this.priceData.trial_duration_days,"surecart"),this.priceData.trial_duration_days))),!!(null===(o=this.priceData)||void 0===o?void 0:o.setup_fee_enabled)&&(null===(l=this.priceData)||void 0===l?void 0:l.setup_fee_amount)&&h("div",{class:"price-choice__setup-fee"},h("sc-visually-hidden",null,wp.i18n.__("This payment plan has","surecart")," "),h("sc-format-number",{type:"currency",value:this.priceData.setup_fee_amount,currency:null===(d=this.priceData)||void 0===d?void 0:d.currency})," ",(null===(p=this.priceData)||void 0===p?void 0:p.setup_fee_name)||wp.i18n.__("Setup Fee","surecart")))))}static get watchers(){return{price:["handlePriceChange"]}}static get style(){return scPriceChoiceContainerCss}},[0,"sc-price-choice-container",{price:[1],loading:[4],label:[1],showLabel:[4,"show-label"],showPrice:[4,"show-price"],showControl:[4,"show-control"],description:[1],type:[1],required:[4],checked:[1540],priceData:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-price-choice-container","sc-choice-container","sc-format-number","sc-skeleton","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-price-choice-container":customElements.get(e)||customElements.define(e,ScPriceChoiceContainer);break;case"sc-choice-container":customElements.get(e)||defineCustomElement$4();break;case"sc-format-number":customElements.get(e)||defineCustomElement$3();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$1()}}))}export{ScPriceChoiceContainer as S,defineCustomElement as d};