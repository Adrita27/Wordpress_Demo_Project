import{r as t,h as i,H as o,a as s}from"./p-cc7ce8c7.js";import{s as n,o as a,i as r,b as u}from"./p-caaec0f6.js";import{g as c,s as d}from"./p-a73ceb2b.js";import"./p-25433d0f.js";import"./p-d5a52441.js";import"./p-a3ae8411.js";import"./p-09484d0e.js";import"./p-86121117.js";import"./p-e173b5aa.js";import"./p-7ef0f71c.js";import"./p-1c2e2695.js";import"./p-4d73f82a.js";import"./p-18e45a13.js";import"./p-dc169b96.js";const e="sc-product-buy-button{position:relative}sc-product-buy-button a.wp-block-button__link{position:relative;text-decoration:none}sc-product-buy-button .sc-block-button--sold-out,sc-product-buy-button .sc-block-button--unavailable{display:none !important}sc-product-buy-button.is-unavailable a{display:none !important}sc-product-buy-button.is-unavailable .sc-block-button--unavailable{display:initial !important}sc-product-buy-button.is-sold-out a{display:none !important}sc-product-buy-button.is-sold-out .sc-block-button--sold-out{display:initial !important}sc-product-buy-button sc-spinner::part(base){--indicator-color:currentColor;--spinner-size:12px;position:absolute;top:calc(50% - var(--spinner-size) + var(--spinner-size) / 4);left:calc(50% - var(--spinner-size) + var(--spinner-size) / 4)}sc-product-buy-button [data-text],sc-product-buy-button [data-loader]{transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}sc-product-buy-button [data-loader]{opacity:0;visibility:hidden}sc-product-buy-button.is-disabled{pointer-events:none}sc-product-buy-button.is-busy [data-text]{opacity:0;visibility:hidden}sc-product-buy-button.is-busy [data-loader]{opacity:1;visibility:visible}sc-product-buy-button.is-out-of-stock [data-text]{opacity:0.6}";const p=class{constructor(i){t(this,i);this.addToCart=undefined}handleCartClick(t){var i,o,s;t.preventDefault();if(n.busy)return;if((i=n===null||n===void 0?void 0:n.selectedPrice)===null||i===void 0?void 0:i.ad_hoc){return n.dialog=this.addToCart?"ad_hoc_cart":"ad_hoc_buy"}if(!this.addToCart){const t=(s=(o=window===null||window===void 0?void 0:window.scData)===null||o===void 0?void 0:o.pages)===null||s===void 0?void 0:s.checkout;if(!t)return;return window.location.assign(c(t,{no_cart:!this.addToCart}))}d()}componentDidLoad(){this.link=this.el.querySelector("a");this.updateProductLink();a("selectedPrice",(()=>this.updateProductLink()));a("selectedVariant",(()=>this.updateProductLink()))}updateProductLink(){var t,i;const o=(i=(t=window===null||window===void 0?void 0:window.scData)===null||t===void 0?void 0:t.pages)===null||i===void 0?void 0:i.checkout;if(!o||!this.link)return;this.link.href=c(o,!this.addToCart?{no_cart:true}:{})}render(){return i(o,{class:{"is-busy":n.busy&&!!this.addToCart,"is-disabled":n.disabled,"is-sold-out":r()&&!u(),"is-unavailable":u()},onClick:t=>this.handleCartClick(t)},i("slot",null))}get el(){return s(this)}};p.style=e;export{p as sc_product_buy_button};
//# sourceMappingURL=p-48b256ec.entry.js.map