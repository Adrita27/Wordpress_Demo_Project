import{h,Fragment,Host}from"@stencil/core";import{__}from"@wordpress/i18n";import{intervalString}from"../../../../functions/price";import{state}from"@store/product";import{availablePrices}from"@store/product/getters";export class ScProductPriceChoices{constructor(){this.label=void 0,this.showPrice=void 0}renderPrice(e){return h(Fragment,null,h("sc-format-number",{type:"currency",value:e.amount,currency:e.currency}),h("span",{slot:"per"},intervalString(e,{labels:{interval:__("Every","surecart"),period:__("for","surecart"),once:__("Once","surecart")},showOnce:!0})))}render(){const e=availablePrices();return(null==e?void 0:e.length)<2?h(Host,{style:{display:"none"}}):h("sc-choices",{label:this.label,required:!0,style:{"--sc-input-required-indicator":" "}},(e||[]).map((e=>{var r,t;return h("sc-price-choice-container",{label:(null==e?void 0:e.name)||(null===(r=state.product)||void 0===r?void 0:r.name),showPrice:!!this.showPrice,price:e,checked:(null===(t=null==state?void 0:state.selectedPrice)||void 0===t?void 0:t.id)===(null==e?void 0:e.id),onScChange:r=>{r.target.checked&&(state.selectedPrice=e)}})})))}static get is(){return"sc-product-price-choices"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-product-price-choices.css"]}}static get styleUrls(){return{$:["sc-product-price-choices.css"]}}static get properties(){return{label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"label",reflect:!1},showPrice:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"show-price",reflect:!1}}}}