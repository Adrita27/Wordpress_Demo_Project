import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{s as speak}from"./index2.js";import{i as isBumpInOrder}from"./index5.js";import{i as intervalString,a as getFormattedPrice}from"./price.js";import{g as getFeaturedProductMediaAttributes,s as sizeImage}from"./media.js";import{a as state}from"./google.js";import{d as defineCustomElement$3}from"./sc-choice2.js";import{d as defineCustomElement$2}from"./sc-divider2.js";import{d as defineCustomElement$1}from"./sc-format-number2.js";const scOrderBumpCss=":host {\n  display: block;\n}\n\n.bump {\n  display: grid;\n  gap: 1em;\n}\n.bump__text {\n  display: grid;\n  gap: 0.25em;\n}\n.bump__tag {\n  background: var(--sc-color-primary-500);\n  color: var(--sc-color-white);\n  border-radius: var(--sc-input-border-radius-medium);\n  padding: var(--sc-spacing-x-small);\n  font-size: var(--sc-font-size-x-small);\n}\n.bump__product {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-choice-padding, 1.3em 1.1em);\n  line-height: var(--sc-line-height-dense);\n}\n.bump__product--wrapper {\n  container-type: inline-size;\n}\n@container (max-width: 325px) {\n  .bump__product {\n    flex-direction: column;\n    align-items: start;\n  }\n}\n.bump__product-title {\n  font-weight: var(--sc-font-weight-semibold);\n}\n.bump__product-description {\n  color: var(--sc-input-label-color);\n}\n.bump__image {\n  width: var(--sc-product-line-item-image-size, 4em);\n  height: var(--sc-product-line-item-image-size, 4em);\n  flex: 0 0 var(--sc-product-line-item-image-size, 4em);\n  object-fit: cover;\n  border-radius: 4px;\n  border: 1px solid var(--sc-color-gray-200);\n  display: block;\n  box-shadow: var(--sc-input-box-shadow);\n}\n.bump__price--has-discount .bump__original-price {\n  text-decoration: line-through;\n  color: var(--sc-color-gray-500);\n  font-size: var(--sc-font-size-small);\n}\n.bump__price .bump__new-price {\n  font-size: var(--sc-font-size-large);\n  color: var(--sc-color-gray-700);\n}\n.bump__price .bump__interval {\n  color: var(--sc-color-gray-500);\n}\n.bump__amount {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-spacing-x-small);\n  flex-wrap: wrap;\n  margin-top: var(--sc-spacing-xx-small);\n}",ScOrderBump=proxyCustomElement(class extends HTMLElement{constructor(){var i;super(),this.__registerHost(),this.__attachShadow(),this.scAddLineItem=createEvent(this,"scAddLineItem",7),this.scRemoveLineItem=createEvent(this,"scRemoveLineItem",7),this.bump=void 0,this.showControl=void 0,this.cdnRoot=null===(i=window.scData)||void 0===i?void 0:i.cdn_root}updateLineItem(i){var e,t,n;const r=(null===(e=this.bump.price)||void 0===e?void 0:e.id)||(null===(t=this.bump)||void 0===t?void 0:t.price);i?(this.scAddLineItem.emit({bump:null===(n=this.bump)||void 0===n?void 0:n.id,price_id:r,quantity:1}),speak(wp.i18n.__("Order bump applied.","surecart"))):(this.scRemoveLineItem.emit({price_id:r,quantity:1}),speak(wp.i18n.__("Order bump Removed.","surecart")))}newPrice(){var i,e,t,n,r,o;let s=null,a=(null===(e=null===(i=this.bump)||void 0===i?void 0:i.price)||void 0===e?void 0:e.amount)||0;if((null===(t=this.bump)||void 0===t?void 0:t.amount_off)&&(s=Math.max(0,a-(null===(n=this.bump)||void 0===n?void 0:n.amount_off))),null===(r=this.bump)||void 0===r?void 0:r.percent_off){const i=a*((null===(o=this.bump)||void 0===o?void 0:o.percent_off)/100);s=Math.max(0,a-i)}return s}renderInterval(){var i;const e=intervalString(null===(i=this.bump)||void 0===i?void 0:i.price,{labels:{interval:"/",period:wp.i18n.__("for","surecart")}});return e.trim().length?h("span",{class:"bump__interval"},e):null}renderPrice(){var i,e,t,n,r,o,s,a,d,u,c;return h("div",{slot:"description",class:{bump__price:!0,"bump__price--has-discount":!!(null===(i=this.bump)||void 0===i?void 0:i.percent_off)||!!(null===(e=this.bump)||void 0===e?void 0:e.amount_off)},part:"price"},h("span",{"aria-label":
/** translators: %s: old price */
wp.i18n.sprintf(wp.i18n.__("Originally priced at %s.","surecart"),getFormattedPrice({amount:null===(n=null===(t=this.bump)||void 0===t?void 0:t.price)||void 0===n?void 0:n.amount,currency:null===(o=null===(r=this.bump)||void 0===r?void 0:r.price)||void 0===o?void 0:o.currency}))},h("sc-format-number",{type:"currency",class:"bump__original-price",value:null===(a=null===(s=this.bump)||void 0===s?void 0:s.price)||void 0===a?void 0:a.amount,currency:null===(u=null===(d=this.bump)||void 0===d?void 0:d.price)||void 0===u?void 0:u.currency})," "),h("span",null,h("span",{"aria-hidden":"true"},0===this.newPrice()&&wp.i18n.__("Free","surecart"),null!==this.newPrice()&&this.newPrice()>0&&h("sc-format-number",{type:"currency",class:"bump__new-price",value:this.newPrice(),currency:(null===(c=this.bump)||void 0===c?void 0:c.price).currency}),this.renderInterval())))}renderDiscount(){var i,e,t,n,r,o,s,a;return(null===(i=this.bump)||void 0===i?void 0:i.amount_off)?h("div",{class:"bump__tag","aria-label":
/** translators: %1$s: amount off, %2$s: currency */
wp.i18n.sprintf(wp.i18n.__("You save %1$s%2$s.","surecart"),null===(e=this.bump)||void 0===e?void 0:e.amount_off,(null===(t=this.bump)||void 0===t?void 0:t.price).currency)},h("span",{"aria-hidden":"true"},wp.i18n.__("Save","surecart")," ",h("sc-format-number",{type:"currency",value:-(null===(n=this.bump)||void 0===n?void 0:n.amount_off),currency:(null===(r=this.bump)||void 0===r?void 0:r.price).currency}))):(null===(o=this.bump)||void 0===o?void 0:o.percent_off)?h("div",{class:"bump__tag","aria-label":
/** translators: %s: amount percent off */
wp.i18n.sprintf(wp.i18n.__("You save %s%%.","surecart"),null===(s=this.bump)||void 0===s?void 0:s.percent_off)},h("span",{"aria-hidden":"true"},wp.i18n.sprintf(wp.i18n.__("Save %s%%","surecart"),null===(a=this.bump)||void 0===a?void 0:a.percent_off))):void 0}render(){var i,e,t,n,r,o,s,a,d,u,c,l,p,m,v,b,_,f,g;const w=null===(e=null===(i=this.bump)||void 0===i?void 0:i.price)||void 0===e?void 0:e.product,y=getFeaturedProductMediaAttributes(w);return h("sc-choice",{value:null===(t=this.bump)||void 0===t?void 0:t.id,type:"checkbox",showControl:this.showControl,checked:isBumpInOrder(this.bump,null==state?void 0:state.checkout),onScChange:i=>this.updateLineItem(i.target.checked),onKeyDown:i=>{"Enter"!==i.key&&" "!==i.key||(i.preventDefault(),i.stopImmediatePropagation(),this.updateLineItem(!isBumpInOrder(this.bump,null==state?void 0:state.checkout)))},exportparts:"base, control, checked-icon, title"},h("div",{part:"base-content",class:"bump"},h("div",{class:"bump__text"},h("div",{class:"bump__title","aria-label":wp.i18n.sprintf(
/* translators: %s: order bump name */
wp.i18n.__("Product: %s.","surecart"),(null===(r=null===(n=this.bump)||void 0===n?void 0:n.metadata)||void 0===r?void 0:r.cta)||(null===(o=this.bump)||void 0===o?void 0:o.name)||(null==w?void 0:w.name))},h("span",{"aria-hidden":"true"},(null===(a=null===(s=this.bump)||void 0===s?void 0:s.metadata)||void 0===a?void 0:a.cta)||(null===(d=this.bump)||void 0===d?void 0:d.name)||(null==w?void 0:w.name))),h("div",{class:"bump__amount"},h("span",null,this.renderPrice()),h("span",null,this.renderDiscount())))),(null===(c=null===(u=this.bump)||void 0===u?void 0:u.metadata)||void 0===c?void 0:c.description)&&h("div",{slot:"footer",class:"bump__product--wrapper"},h("sc-divider",{style:{"--spacing":"var(--sc-spacing-medium)"}}),h("div",{class:"bump__product"},!!(null==y?void 0:y.url)&&h("img",{src:sizeImage(null==y?void 0:y.url,130),alt:y.alt,...y.title?{title:y.title}:{},class:"bump__image"}),h("div",{class:"bump__product-text"},!!(null===(p=null===(l=this.bump)||void 0===l?void 0:l.metadata)||void 0===p?void 0:p.cta)&&h("div",{class:"bump__product-title","aria-hidden":"true"},this.bump.name||(null==w?void 0:w.name)),!!(null===(v=null===(m=this.bump)||void 0===m?void 0:m.metadata)||void 0===v?void 0:v.description)&&h("div",{class:"bump__product-description","aria-label":wp.i18n.sprintf(
/* translators: %s: Product description */
wp.i18n.__("Product description: %s.","surecart"),null===(_=null===(b=this.bump)||void 0===b?void 0:b.metadata)||void 0===_?void 0:_.description)},h("span",{"aria-hidden":"true"},null===(g=null===(f=this.bump)||void 0===f?void 0:f.metadata)||void 0===g?void 0:g.description))))))}static get style(){return scOrderBumpCss}},[1,"sc-order-bump",{bump:[16],showControl:[516,"show-control"],cdnRoot:[1,"cdn-root"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-order-bump","sc-choice","sc-divider","sc-format-number"].forEach((i=>{switch(i){case"sc-order-bump":customElements.get(i)||customElements.define(i,ScOrderBump);break;case"sc-choice":customElements.get(i)||defineCustomElement$3();break;case"sc-divider":customElements.get(i)||defineCustomElement$2();break;case"sc-format-number":customElements.get(i)||defineCustomElement$1()}}))}export{ScOrderBump as S,defineCustomElement as d};