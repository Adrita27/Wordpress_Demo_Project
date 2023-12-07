import{proxyCustomElement,HTMLElement,h,Fragment}from"@stencil/core/internal/client";import{g as getLineItemByProductId}from"./getters4.js";import{a as state,b as onChange}from"./google.js";import{g as getVariantFromValues}from"./util.js";import{a as updateLineItem,g as addLineItem}from"./index4.js";import{u as updateFormState}from"./mutations2.js";import{c as createErrorNotice}from"./mutations.js";import{i as isProductVariantOptionSoldOut,a as isProductVariantOptionMissing}from"./utils.js";import{d as defineCustomElement$9}from"./sc-choice-container2.js";import{d as defineCustomElement$8}from"./sc-choices2.js";import{d as defineCustomElement$7}from"./sc-form-control2.js";import{d as defineCustomElement$6}from"./sc-format-number2.js";import{d as defineCustomElement$5}from"./sc-pill-option2.js";import{d as defineCustomElement$4}from"./sc-price-choice-container2.js";import{d as defineCustomElement$3}from"./sc-skeleton2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";const scCheckoutProductPriceVariantSelectorCss=".sc-checkout-product-price-variant-selector{position:relative}.sc-checkout-product-price-variant-selector>*:not(:last-child){display:block;margin-bottom:var(--sc-form-row-spacing, 0.75em)}.sc-checkout-product-price-variant-selector__pills-wrapper{display:flex;flex-wrap:wrap;gap:var(--sc-spacing-x-small)}.sc-checkout-product-price-variant-selector__hidden-input{position:absolute !important;top:0 !important;left:0 !important;opacity:0 !important;padding:0px !important;margin:0px !important;pointer-events:none !important;width:0 !important}",ScProductCheckoutSelectVariantOption=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.product=void 0,this.label=void 0,this.selectedVariant=void 0,this.selectedPrice=void 0,this.option1=void 0,this.option2=void 0,this.option3=void 0}handleOptionChange(){var t,e;this.selectedVariant=getVariantFromValues({variants:null===(e=null===(t=this.product)||void 0===t?void 0:t.variants)||void 0===e?void 0:e.data,values:{...this.option1?{option_1:this.option1}:{},...this.option2?{option_2:this.option2}:{},...this.option3?{option_3:this.option3}:{}}})}isSelectedVariantOutOfStock(){var t,e;return(null===(t=this.product)||void 0===t?void 0:t.stock_enabled)&&this.hasVariants()&&!(null===(e=this.product)||void 0===e?void 0:e.allow_out_of_stock_purchases)&&this.selectedVariant.available_stock<1}hasRequiredSelectedVariant(){var t;return!this.hasVariants()||(null===(t=this.selectedVariant)||void 0===t?void 0:t.id)}async reportValidity(){return this.input.setCustomValidity(""),this.hasVariants()?this.hasRequiredSelectedVariant()?this.isSelectedVariantOutOfStock()?(this.input.setCustomValidity(wp.i18n.__("This selection is not available.","surecart")),this.input.reportValidity()):this.input.reportValidity():(this.input.setCustomValidity(wp.i18n.__("Please choose an available option.","surecart")),this.input.reportValidity()):this.input.reportValidity()}getSelectedPrice(){var t,e,i,o,n;return 1===(null===(i=null===(e=null===(t=this.product)||void 0===t?void 0:t.prices)||void 0===e?void 0:e.data)||void 0===i?void 0:i.length)?null===(n=null===(o=this.product)||void 0===o?void 0:o.prices)||void 0===n?void 0:n.data[0]:this.selectedPrice}async updateLineItems(){var t,e,i,o,n;const s=this.getSelectedPrice();if(!(null==s?void 0:s.id))return;const a=this.lineItem();if(((null===(t=null==a?void 0:a.price)||void 0===t?void 0:t.id)!==(null==s?void 0:s.id)||(null===(e=null==a?void 0:a.variant)||void 0===e?void 0:e.id)!==(null===(i=this.selectedVariant)||void 0===i?void 0:i.id))&&this.hasRequiredSelectedVariant()&&!this.isSelectedVariantOutOfStock())try{updateFormState("FETCH"),(null==a?void 0:a.id)?state.checkout=await updateLineItem({id:null==a?void 0:a.id,data:{variant:null===(o=this.selectedVariant)||void 0===o?void 0:o.id,price:null==s?void 0:s.id,quantity:1}}):state.checkout=await addLineItem({checkout:state.checkout,data:{variant:null===(n=this.selectedVariant)||void 0===n?void 0:n.id,price:null==s?void 0:s.id,quantity:1}}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}}componentWillLoad(){this.removeListener=onChange("checkout",(()=>{var t,e,i;const o=this.lineItem();this.selectedVariant=null==o?void 0:o.variant,this.selectedPrice=null==o?void 0:o.price,this.option1=null===(t=null==o?void 0:o.variant)||void 0===t?void 0:t.option_1,this.option2=null===(e=null==o?void 0:o.variant)||void 0===e?void 0:e.option_2,this.option3=null===(i=null==o?void 0:o.variant)||void 0===i?void 0:i.option_3}))}disconnectedCallback(){this.removeListener()}lineItem(){var t;return getLineItemByProductId(null===(t=this.product)||void 0===t?void 0:t.id)}hasVariants(){var t,e,i;return(null===(i=null===(e=null===(t=this.product)||void 0===t?void 0:t.variants)||void 0===e?void 0:e.data)||void 0===i?void 0:i.length)>0}render(){var t,e,i,o,n;return h("div",{class:"sc-checkout-product-price-variant-selector"},(this.product.variant_options.data||[]).map((({name:t,values:e},i)=>h("sc-form-control",{label:t},h("div",{class:"sc-checkout-product-price-variant-selector__pills-wrapper"},(e||[]).map((e=>{const o=[i+1,e,{...this.option1?{option_1:this.option1}:{},...this.option2?{option_2:this.option2}:{},...this.option3?{option_3:this.option3}:{}},this.product],n=isProductVariantOptionSoldOut.apply(void 0,o)||isProductVariantOptionMissing.apply(void 0,o);return h("sc-pill-option",{isUnavailable:n,isSelected:this[`option${i+1}`]===e,onClick:()=>this[`option${i+1}`]=e},h("span",{"aria-hidden":"true"},e),h("sc-visually-hidden",null,wp.i18n.sprintf(wp.i18n.__("Select %s: %s","surecart"),t,e),n&&h(Fragment,null," ",wp.i18n.__("(option unavailable)","surecart"))))})))))),(null===(i=null===(e=null===(t=this.product)||void 0===t?void 0:t.prices)||void 0===e?void 0:e.data)||void 0===i?void 0:i.length)>1&&h("sc-form-control",{label:(null===(o=this.product.variant_options.data)||void 0===o?void 0:o.length)?this.label:null},h("sc-choices",null,(this.product.prices.data||[]).sort(((t,e)=>(null==t?void 0:t.position)-(null==e?void 0:e.position))).map((t=>{var e,i,o;return h("sc-price-choice-container",{required:!0,price:t,label:(null==t?void 0:t.name)||(null===(e=this.product)||void 0===e?void 0:e.name),checked:(null===(o=null===(i=this.lineItem())||void 0===i?void 0:i.price)||void 0===o?void 0:o.id)===(null==t?void 0:t.id),onScChange:e=>{e.target.checked&&(this.selectedPrice=t)}})})))),h("input",{class:"sc-checkout-product-price-variant-selector__hidden-input",ref:t=>this.input=t,value:null===(n=this.selectedVariant)||void 0===n?void 0:n.id}))}get el(){return this}static get watchers(){return{option1:["handleOptionChange"],option2:["handleOptionChange"],option3:["handleOptionChange"],selectedVariant:["updateLineItems"],selectedPrice:["updateLineItems"]}}static get style(){return scCheckoutProductPriceVariantSelectorCss}},[0,"sc-checkout-product-price-variant-selector",{product:[16],label:[1],selectedVariant:[32],selectedPrice:[32],option1:[32],option2:[32],option3:[32],reportValidity:[64]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-checkout-product-price-variant-selector","sc-choice-container","sc-choices","sc-form-control","sc-format-number","sc-pill-option","sc-price-choice-container","sc-skeleton","sc-visually-hidden"].forEach((t=>{switch(t){case"sc-checkout-product-price-variant-selector":customElements.get(t)||customElements.define(t,ScProductCheckoutSelectVariantOption);break;case"sc-choice-container":customElements.get(t)||defineCustomElement$9();break;case"sc-choices":customElements.get(t)||defineCustomElement$8();break;case"sc-form-control":customElements.get(t)||defineCustomElement$7();break;case"sc-format-number":customElements.get(t)||defineCustomElement$6();break;case"sc-pill-option":customElements.get(t)||defineCustomElement$5();break;case"sc-price-choice-container":customElements.get(t)||defineCustomElement$4();break;case"sc-skeleton":customElements.get(t)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(t)||defineCustomElement$2()}}))}const ScCheckoutProductPriceVariantSelector=ScProductCheckoutSelectVariantOption,defineCustomElement=defineCustomElement$1;export{ScCheckoutProductPriceVariantSelector,defineCustomElement};