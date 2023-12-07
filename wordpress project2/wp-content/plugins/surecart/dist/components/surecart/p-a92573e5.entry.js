import{r as t,h as e,F as i,a as s}from"./p-cc7ce8c7.js";import{a as o}from"./p-18e45a13.js";import{b as r,e as a}from"./p-86121117.js";import{g as d,a as n,s as l}from"./p-e173b5aa.js";import{s as c}from"./p-dc169b96.js";import{c as p}from"./p-05fc1ee0.js";import{u}from"./p-7c0fbe03.js";import{f as h}from"./p-10c348ba.js";import{a as v}from"./p-1c2e2695.js";import"./p-4d73f82a.js";import"./p-7ef0f71c.js";import"./p-25433d0f.js";import"./p-a3ae8411.js";import"./p-09484d0e.js";import"./p-61e10f79.js";const f=":host{--sc-drawer-header-spacing:var(--sc-spacing-large);--sc-drawer-body-spacing:var(--sc-spacing-large);--sc-drawer-footer-spacing:var(--sc-spacing-large)}.cart{font-size:16px}.cart__header{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1em}.cart__close{opacity:0.75;transition:opacity 0.25s ease;cursor:pointer}.cart__close:hover{opacity:1}::slotted(*){padding:var(--sc-drawer-header-spacing);background:var(--sc-panel-background-color);position:relative}::slotted(sc-line-items){flex:1 1 auto;overflow:auto;-webkit-overflow-scrolling:touch;min-height:200px}::slotted(:last-child){border-bottom:0 !important}sc-drawer::part(body){display:flex;flex-direction:column;box-sizing:border-box;padding:0;overflow:hidden}";const m=class{constructor(e){t(this,e);this.open=null;this.formId=undefined;this.header=undefined;this.checkoutLink=undefined;this.cartTemplate=undefined;this.mode="live";this.checkoutUrl=undefined;this.alwaysShow=undefined;this.floatingIconEnabled=true;this.uiState="idle"}handleOpenChange(){var t,e,i;c.set("cart",{...c.state.cart,...{open:this.open}});if(this.open===true){this.fetchOrder()}else{(i=(e=(t=document===null||document===void 0?void 0:document.querySelector("sc-cart-icon"))===null||t===void 0?void 0:t.shadowRoot)===null||e===void 0?void 0:e.querySelector(".cart"))===null||i===void 0?void 0:i.focus()}}order(){return d(this.formId,this.mode)}setCheckout(t){n(t,this.formId)}pageHasForm(){return!!document.querySelector("sc-checkout")}getItemsCount(){var t,e;const i=(e=(t=l.checkout)===null||t===void 0?void 0:t.line_items)===null||e===void 0?void 0:e.data;let s=0;(i||[]).forEach((t=>{s=s+(t===null||t===void 0?void 0:t.quantity)}));return s}handleSetState(t){this.uiState=t.detail}handleCloseCart(){this.open=false}async fetchOrder(){var t;try{u("FETCH");l.checkout=await o({method:"GET",path:v(`${r}${(t=l.checkout)===null||t===void 0?void 0:t.id}`,{expand:a})});u("RESOLVE")}catch(t){console.error(t);u("REJECT");p(t)}}componentWillLoad(){this.open=!!c.state.cart.open;c.onChange("cart",(t=>{this.open=t.open}))}state(){var t,e,i,s,o,r,a,d,n,c,p;return{uiState:this.uiState,checkoutLink:this.checkoutLink,loading:this.uiState==="loading",busy:this.uiState==="busy",navigating:this.uiState==="navigating",empty:!((i=(e=(t=l.checkout)===null||t===void 0?void 0:t.line_items)===null||e===void 0?void 0:e.pagination)===null||i===void 0?void 0:i.count),order:l.checkout,lineItems:((o=(s=l.checkout)===null||s===void 0?void 0:s.line_items)===null||o===void 0?void 0:o.data)||[],tax_status:(r=l.checkout)===null||r===void 0?void 0:r.tax_status,customerShippingAddress:typeof((a=l.checkout)===null||a===void 0?void 0:a.customer)!=="string"?(n=(d=l.checkout)===null||d===void 0?void 0:d.customer)===null||n===void 0?void 0:n.shipping_address:{},shippingAddress:(c=l.checkout)===null||c===void 0?void 0:c.shipping_address,taxStatus:(p=l.checkout)===null||p===void 0?void 0:p.tax_status,formId:this.formId}}render(){return e("sc-cart-session-provider",null,e("sc-drawer",{open:this.open,onScAfterShow:()=>this.open=true,onScAfterHide:()=>{this.open=false}},this.open===true&&e(i,null,e("div",{class:"cart__header-suffix",slot:"header"},e("slot",{name:"cart-header"}),e("sc-error",{style:{"--sc-alert-border-radius":"0"},slot:"header"})),e("slot",null)),h()&&e("sc-block-ui",{"z-index":9})))}get el(){return s(this)}static get watchers(){return{open:["handleOpenChange"]}}};m.style=f;export{m as sc_cart};
//# sourceMappingURL=p-a92573e5.entry.js.map