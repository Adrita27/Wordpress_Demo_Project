import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{a as state}from"./google.js";import{s as state$1}from"./store2.js";import{s as state$3}from"./store3.js";import"./watchers2.js";import{s as state$2}from"./getters3.js";import{U as Universe}from"./universe.js";import{d as defineCustomElement$N}from"./sc-address2.js";import{d as defineCustomElement$M}from"./sc-alert2.js";import{d as defineCustomElement$L}from"./sc-block-ui2.js";import{d as defineCustomElement$K}from"./sc-button2.js";import{d as defineCustomElement$J}from"./sc-card2.js";import{d as defineCustomElement$I}from"./sc-checkout-form-errors2.js";import{d as defineCustomElement$H}from"./sc-checkout-stock-alert2.js";import{d as defineCustomElement$G}from"./sc-checkout-unsaved-changes-warning2.js";import{d as defineCustomElement$F}from"./sc-choice2.js";import{d as defineCustomElement$E}from"./sc-compact-address2.js";import{d as defineCustomElement$D}from"./sc-dashboard-module2.js";import{d as defineCustomElement$C}from"./sc-dialog2.js";import{d as defineCustomElement$B}from"./sc-divider2.js";import{d as defineCustomElement$A}from"./dropdown.js";import{d as defineCustomElement$z}from"./sc-flex2.js";import{d as defineCustomElement$y}from"./sc-form2.js";import{d as defineCustomElement$x}from"./sc-form-components-validator2.js";import{d as defineCustomElement$w}from"./sc-form-control2.js";import{d as defineCustomElement$v}from"./sc-form-error-provider2.js";import{d as defineCustomElement$u}from"./sc-form-state-provider2.js";import{d as defineCustomElement$t}from"./sc-format-number2.js";import{d as defineCustomElement$s}from"./sc-icon2.js";import{d as defineCustomElement$r}from"./sc-input2.js";import{d as defineCustomElement$q}from"./sc-line-item2.js";import{d as defineCustomElement$p}from"./sc-line-item-shipping2.js";import{d as defineCustomElement$o}from"./sc-line-item-tax2.js";import{d as defineCustomElement$n}from"./sc-line-items-provider2.js";import{d as defineCustomElement$m}from"./sc-login-provider2.js";import{d as defineCustomElement$l}from"./sc-menu2.js";import{d as defineCustomElement$k}from"./sc-menu-item2.js";import{d as defineCustomElement$j}from"./sc-menu-label2.js";import{d as defineCustomElement$i}from"./sc-order-bump2.js";import{d as defineCustomElement$h}from"./sc-order-bumps2.js";import{d as defineCustomElement$g}from"./sc-order-confirm-provider2.js";import{d as defineCustomElement$f}from"./sc-order-shipping-address2.js";import{d as defineCustomElement$e}from"./sc-order-tax-id-input2.js";import{d as defineCustomElement$d}from"./sc-radio2.js";import{d as defineCustomElement$c}from"./sc-radio-group2.js";import{d as defineCustomElement$b}from"./sc-select2.js";import{d as defineCustomElement$a}from"./sc-session-provider2.js";import{d as defineCustomElement$9}from"./sc-shipping-choices2.js";import{d as defineCustomElement$8}from"./sc-skeleton2.js";import{d as defineCustomElement$7}from"./sc-spinner2.js";import{d as defineCustomElement$6}from"./sc-table2.js";import{d as defineCustomElement$5}from"./sc-table-cell2.js";import{d as defineCustomElement$4}from"./sc-table-row2.js";import{d as defineCustomElement$3}from"./sc-tax-id-input2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";const scCheckoutCss="sc-checkout{display:block;font-family:var(--sc-font-sans);font-size:var(--sc-checkout-font-size, 16px);position:relative}sc-checkout h3{font-size:var(--sc-input-label-font-size-medium)}sc-alert{margin-bottom:var(--sc-form-row-spacing)}.sc-checkout-container.sc-align-center{max-width:500px;margin-left:auto;margin-right:auto}.sc-checkout-container.sc-align-wide{max-width:800px;margin-left:auto;margin-right:auto}::slotted(*){font-family:var(--sc-font-sans)}",ScCheckout$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.scOrderUpdated=createEvent(this,"scOrderUpdated",7),this.scOrderFinalized=createEvent(this,"scOrderFinalized",7),this.scOrderError=createEvent(this,"scOrderError",7),this.prices=[],this.product=void 0,this.mode="live",this.formId=void 0,this.modified=void 0,this.currencyCode="usd",this.persistSession=!0,this.successUrl="",this.customer=void 0,this.alignment=void 0,this.taxProtocol=void 0,this.disableComponentsValidation=void 0,this.processors=void 0,this.manualPaymentMethods=void 0,this.editLineItems=!0,this.removeLineItems=!0,this.abandonedCheckoutEnabled=void 0,this.stripePaymentElement=!1,this.pricesEntities={},this.productsEntities={},this.checkoutState="idle",this.error=void 0,this.processor="stripe",this.method=void 0,this.isManualProcessor=void 0,this.paymentIntents={},this.isDuplicate=void 0}handleOrderStateUpdate(e){state.checkout=e.detail}handleMethodChange(e){this.method=e.detail}handleAddEntities(e){const{products:t,prices:s}=e.detail;Object.keys((null==t?void 0:t.length)||{})&&(this.productsEntities={...this.productsEntities,...t}),Object.keys((null==s?void 0:s.length)||{})&&(this.pricesEntities={...this.pricesEntities,...s})}async submit({skip_validation:e}={skip_validation:!1}){return e||await this.validate(),await this.sessionProvider.finalize()}async validate(){const e=this.el.querySelector("sc-form");return await e.validate()}componentWillLoad(){const e=document.querySelector("sc-checkout");this.isDuplicate=!!e&&e!==this.el,this.isDuplicate||Universe.create(this,this.state())}state(){var e,t,s,o,i,n,m,c,r,a,d,l,u,p,f,h,E,g,v,k,C,_x;return{processor:this.processor,method:this.method,selectedProcessorId:this.processor,manualPaymentMethods:this.manualPaymentMethods,processor_data:null===(e=state.checkout)||void 0===e?void 0:e.processor_data,state:this.checkoutState,formState:state$1.formState.value,paymentIntents:this.paymentIntents,successUrl:this.successUrl,bumps:null===(s=null===(t=state.checkout)||void 0===t?void 0:t.recommended_bumps)||void 0===s?void 0:s.data,order:state.checkout,abandonedCheckoutEnabled:null===(o=state.checkout)||void 0===o?void 0:o.abandoned_checkout_enabled,checkout:state.checkout,shippingEnabled:null===(i=state.checkout)||void 0===i?void 0:i.shipping_enabled,lineItems:(null===(m=null===(n=state.checkout)||void 0===n?void 0:n.line_items)||void 0===m?void 0:m.data)||[],editLineItems:this.editLineItems,removeLineItems:this.removeLineItems,loading:"loading"===state$1.formState.value,busy:["updating","finalizing","paying","confirming"].includes(state$1.formState.value),paying:["finalizing","paying","confirming"].includes(state$1.formState.value),empty:!["loading","updating"].includes(state$1.formState.value)&&!(null===(a=null===(r=null===(c=state.checkout)||void 0===c?void 0:c.line_items)||void 0===r?void 0:r.pagination)||void 0===a?void 0:a.count),stripePaymentElement:state$2.config.stripe.paymentElement,stripePaymentIntent:((null===(l=null===(d=state.checkout)||void 0===d?void 0:d.staged_payment_intents)||void 0===l?void 0:l.data)||[]).find((e=>"stripe"===e.processor_type)),error:this.error,customer:this.customer,tax_status:null===(u=state.checkout)||void 0===u?void 0:u.tax_status,taxEnabled:null===(p=state.checkout)||void 0===p?void 0:p.tax_enabled,customerShippingAddress:"string"!=typeof(null===(f=state.checkout)||void 0===f?void 0:f.customer)?null===(E=null===(h=state.checkout)||void 0===h?void 0:h.customer)||void 0===E?void 0:E.shipping_address:{},shippingAddress:null===(g=state.checkout)||void 0===g?void 0:g.shipping_address,taxStatus:null===(v=state.checkout)||void 0===v?void 0:v.tax_status,taxIdentifier:null===(k=state.checkout)||void 0===k?void 0:k.tax_identifier,totalAmount:null===(C=state.checkout)||void 0===C?void 0:C.total_amount,taxProtocol:this.taxProtocol,lockedChoices:this.prices,products:this.productsEntities,prices:this.pricesEntities,country:"US",loggedIn:state$3.loggedIn,emailExists:null===(_x=state.checkout)||void 0===_x?void 0:_x.email_exists,formId:state.formId,mode:state.mode,currencyCode:state.currencyCode}}render(){return this.isDuplicate?h("sc-alert",{open:!0},wp.i18n.__("Due to processor restrictions, only one checkout form is allowed on the page.","surecart")):h("div",{class:{"sc-checkout-container":!0,"sc-align-center":"center"===this.alignment,"sc-align-wide":"wide"===this.alignment,"sc-align-full":"full"===this.alignment}},h("sc-checkout-unsaved-changes-warning",{state:this.checkoutState}),state.validateStock&&h("sc-checkout-stock-alert",null),h(Universe.Provider,{state:this.state()},h("sc-login-provider",{loggedIn:state$3.loggedIn,onScSetCustomer:e=>this.customer=e.detail,onScSetLoggedIn:e=>state$3.loggedIn=e.detail,order:state.checkout},h("sc-form-state-provider",{onScSetCheckoutFormState:e=>this.checkoutState=e.detail},h("sc-form-error-provider",null,h("sc-form-components-validator",{disabled:this.disableComponentsValidation,taxProtocol:state.taxProtocol},h("sc-order-confirm-provider",{"checkout-status":state$1.formState.value,"success-url":this.successUrl},h("sc-session-provider",{ref:e=>this.sessionProvider=e,prices:this.prices,persist:this.persistSession},h("slot",null))))))),this.state().busy&&h("sc-block-ui",{class:"busy-block-ui",style:{"z-index":"30"}}),["finalizing","paying","confirming","confirmed","redirecting"].includes(state$1.formState.value)&&h("sc-block-ui",{spinner:!0,style:{"--sc-block-ui-opacity":"0.75","z-index":"30"}},state$1.text.loading[state$1.formState.value]||wp.i18n.__("Processing payment...","surecart"))))}get el(){return this}static get style(){return scCheckoutCss}},[4,"sc-checkout",{prices:[16],product:[16],mode:[1],formId:[2,"form-id"],modified:[1],currencyCode:[1,"currency-code"],persistSession:[4,"persist-session"],successUrl:[1,"success-url"],customer:[1040],alignment:[1],taxProtocol:[16],disableComponentsValidation:[4,"disable-components-validation"],processors:[1040],manualPaymentMethods:[16],editLineItems:[4,"edit-line-items"],removeLineItems:[4,"remove-line-items"],abandonedCheckoutEnabled:[4,"abandoned-checkout-enabled"],stripePaymentElement:[4,"stripe-payment-element"],pricesEntities:[32],productsEntities:[32],checkoutState:[32],error:[32],processor:[32],method:[32],isManualProcessor:[32],paymentIntents:[32],isDuplicate:[32],submit:[64],validate:[64]},[[0,"scUpdateOrderState","handleOrderStateUpdate"],[0,"scSetMethod","handleMethodChange"],[0,"scAddEntities","handleAddEntities"]]]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-checkout","sc-address","sc-alert","sc-block-ui","sc-button","sc-card","sc-checkout-form-errors","sc-checkout-stock-alert","sc-checkout-unsaved-changes-warning","sc-choice","sc-compact-address","sc-dashboard-module","sc-dialog","sc-divider","sc-dropdown","sc-flex","sc-form","sc-form-components-validator","sc-form-control","sc-form-error-provider","sc-form-state-provider","sc-format-number","sc-icon","sc-input","sc-line-item","sc-line-item-shipping","sc-line-item-tax","sc-line-items-provider","sc-login-provider","sc-menu","sc-menu-item","sc-menu-label","sc-order-bump","sc-order-bumps","sc-order-confirm-provider","sc-order-shipping-address","sc-order-tax-id-input","sc-radio","sc-radio-group","sc-select","sc-session-provider","sc-shipping-choices","sc-skeleton","sc-spinner","sc-table","sc-table-cell","sc-table-row","sc-tax-id-input","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-checkout":customElements.get(e)||customElements.define(e,ScCheckout$1);break;case"sc-address":customElements.get(e)||defineCustomElement$N();break;case"sc-alert":customElements.get(e)||defineCustomElement$M();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$L();break;case"sc-button":customElements.get(e)||defineCustomElement$K();break;case"sc-card":customElements.get(e)||defineCustomElement$J();break;case"sc-checkout-form-errors":customElements.get(e)||defineCustomElement$I();break;case"sc-checkout-stock-alert":customElements.get(e)||defineCustomElement$H();break;case"sc-checkout-unsaved-changes-warning":customElements.get(e)||defineCustomElement$G();break;case"sc-choice":customElements.get(e)||defineCustomElement$F();break;case"sc-compact-address":customElements.get(e)||defineCustomElement$E();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$D();break;case"sc-dialog":customElements.get(e)||defineCustomElement$C();break;case"sc-divider":customElements.get(e)||defineCustomElement$B();break;case"sc-dropdown":customElements.get(e)||defineCustomElement$A();break;case"sc-flex":customElements.get(e)||defineCustomElement$z();break;case"sc-form":customElements.get(e)||defineCustomElement$y();break;case"sc-form-components-validator":customElements.get(e)||defineCustomElement$x();break;case"sc-form-control":customElements.get(e)||defineCustomElement$w();break;case"sc-form-error-provider":customElements.get(e)||defineCustomElement$v();break;case"sc-form-state-provider":customElements.get(e)||defineCustomElement$u();break;case"sc-format-number":customElements.get(e)||defineCustomElement$t();break;case"sc-icon":customElements.get(e)||defineCustomElement$s();break;case"sc-input":customElements.get(e)||defineCustomElement$r();break;case"sc-line-item":customElements.get(e)||defineCustomElement$q();break;case"sc-line-item-shipping":customElements.get(e)||defineCustomElement$p();break;case"sc-line-item-tax":customElements.get(e)||defineCustomElement$o();break;case"sc-line-items-provider":customElements.get(e)||defineCustomElement$n();break;case"sc-login-provider":customElements.get(e)||defineCustomElement$m();break;case"sc-menu":customElements.get(e)||defineCustomElement$l();break;case"sc-menu-item":customElements.get(e)||defineCustomElement$k();break;case"sc-menu-label":customElements.get(e)||defineCustomElement$j();break;case"sc-order-bump":customElements.get(e)||defineCustomElement$i();break;case"sc-order-bumps":customElements.get(e)||defineCustomElement$h();break;case"sc-order-confirm-provider":customElements.get(e)||defineCustomElement$g();break;case"sc-order-shipping-address":customElements.get(e)||defineCustomElement$f();break;case"sc-order-tax-id-input":customElements.get(e)||defineCustomElement$e();break;case"sc-radio":customElements.get(e)||defineCustomElement$d();break;case"sc-radio-group":customElements.get(e)||defineCustomElement$c();break;case"sc-select":customElements.get(e)||defineCustomElement$b();break;case"sc-session-provider":customElements.get(e)||defineCustomElement$a();break;case"sc-shipping-choices":customElements.get(e)||defineCustomElement$9();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$8();break;case"sc-spinner":customElements.get(e)||defineCustomElement$7();break;case"sc-table":customElements.get(e)||defineCustomElement$6();break;case"sc-table-cell":customElements.get(e)||defineCustomElement$5();break;case"sc-table-row":customElements.get(e)||defineCustomElement$4();break;case"sc-tax-id-input":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScCheckout=ScCheckout$1,defineCustomElement=defineCustomElement$1;export{ScCheckout,defineCustomElement};