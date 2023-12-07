import{r,h as o,c as i,a as t,H as s}from"./p-cc7ce8c7.js";import{i as e}from"./p-d556eec7.js";import{m as a}from"./p-7ef0f71c.js";import{F as n}from"./p-8617d8eb.js";import{s as c}from"./p-e173b5aa.js";import{l,u as d}from"./p-8bdde94d.js";import{c as h}from"./p-86121117.js";import{c as p}from"./p-df0f6f3f.js";import{c as u}from"./p-05fc1ee0.js";import{s as m}from"./p-09484d0e.js";import{g as f}from"./p-11ab1b16.js";import"./p-1c2e2695.js";import"./p-25433d0f.js";import"./p-4d73f82a.js";import"./p-a3ae8411.js";import"./p-7c0fbe03.js";import"./p-61e10f79.js";import"./p-18e45a13.js";const g=':host{display:block;position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;overflow:hidden;display:flex;align-items:center;justify-content:center}:host>*{z-index:1}:host:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;cursor:wait;background:var(--sc-block-ui-background-color, var(--sc-color-white));opacity:var(--sc-block-ui-opacity, 0.15)}:host.transparent:after{background:transparent}.overlay__content{font-size:var(--sc-font-size-large);font-weight:var(--sc-font-weight-semibold);display:grid;gap:0.5em;text-align:center}';const v=class{constructor(o){r(this,o);this.zIndex=1;this.transparent=undefined;this.spinner=undefined}render(){return o("div",{part:"base",class:{overlay:true,transparent:this.transparent},style:{"z-index":this.zIndex.toString()}},o("div",{class:"overlay__content",part:"content"},o("slot",{name:"spinner"},!this.transparent&&this.spinner&&o("sc-spinner",null)),o("slot",null)))}};v.style=g;function b(r){const o=new FormData(r);const i={};o.forEach(((r,o)=>{i[o]=r}));return i}const _="sc-form{display:block}:host{display:block}::slotted(*:not(:last-child)),sc-form form>*:not(:last-child){margin-bottom:var(--sc-form-row-spacing, 0.75em)}::slotted(*:not(:last-child)).wp-block-spacer,sc-form form>*:not(:last-child).wp-block-spacer{margin-bottom:0}";const y=class{constructor(o){r(this,o);this.scSubmit=i(this,"scSubmit",7);this.scFormSubmit=i(this,"scFormSubmit",7);this.scFormChange=i(this,"scFormChange",7);this.novalidate=false}async getFormData(){return new FormData(this.formElement)}async getFormJson(){return b(this.formElement)}async handleChange(){this.scFormChange.emit(b(this.formElement))}async submit(){return this.submitForm()}getFormControls(){return[...this.form.querySelectorAll("*")]}async validate(){const r=this.getFormControls();const o=r.filter((r=>typeof r.reportValidity==="function"));if(!this.novalidate){for(const r of o){if(!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)){continue}const o=await r.reportValidity();if(!o){return false}}}return true}submitForm(){const r=document.createElement("button");if(this.formElement){r.type="submit";r.style.position="absolute";r.style.width="0";r.style.height="0";r.style.clip="rect(0 0 0 0)";r.style.clipPath="inset(50%)";r.style.overflow="hidden";r.style.whiteSpace="nowrap";this.formElement.append(r);r.click();r.remove()}}render(){return o("div",{part:"base",class:"form",role:"form"},o("form",{part:"form",ref:r=>this.formElement=r,class:"test",onSubmit:async r=>{r.preventDefault();const o=await this.validate();if(!o){return false}this.scSubmit.emit();this.scFormSubmit.emit()},novalidate:this.novalidate},o("slot",null)))}get form(){return t(this)}};y.style=_;const w=".form-control{font-family:var(--sc-font-sans);font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-normal);display:flex;flex-direction:column;gap:var(--sc-input-label-margin)}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control--has-label .form-control__label{display:inline-block;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0)}.form-control--has-label.form-control--small .form-control__label{font-size:var(--sc-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--sc-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--sc-input-label-font-size-large)}::slotted(.control--errors){margin-top:var(--sc-spacing-small);color:var(--sc-color-danger-500)}::slotted([slot=label-end]){float:right}.form-control--is-required .required{color:var(--sc-color-danger-500)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--sc-input-help-text-color)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--sc-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--sc-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--sc-input-help-text-font-size-large)}.form-control--has-error .form-control__error-text{display:block;color:var(--sc-input-error-text-color)}.form-control--has-error.form-control--small .form-control__error-text{font-size:var(--sc-input-error-text-font-size-small)}.form-control--has-error.form-control--medium .form-control__error-text{font-size:var(--sc-input-error-text-font-size-medium)}.form-control--has-error.form-control--large .form-control__error-text{font-size:var(--sc-input-error-text-font-size-large)}.form-control--has-error ::part(base){border-color:rgb(var(--sl-color-danger-500))}.form-control--is-rtl.form-control--has-label .form-control__label{text-align:right}";const x=class{constructor(o){r(this,o);this.size="medium";this.name=undefined;this.showLabel=true;this.label=undefined;this.labelId=undefined;this.inputId=undefined;this.required=false;this.help=undefined;this.helpId=undefined}render(){return o("div",{part:"form-control",class:{"form-control":true,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":!!this.label&&this.showLabel,"form-control--has-help-text":!!this.help,"form-control--is-required":!!this.required,"form-control--is-rtl":e()}},o("label",{part:"label",id:this.labelId,class:"form-control__label",htmlFor:this.inputId,"aria-hidden":!!this.label?"false":"true"},o("slot",{name:"label"},this.label),o("slot",{name:"label-end"}),!!this.required&&o("span",{"aria-hidden":"true",class:"required"}," ","*"),o("sc-visually-hidden",null,!!this.required?wp.i18n.__("required","surecart"):"")),o("div",{part:"input",class:"form-control__input"},o("slot",null)),this.help&&o("div",{part:"help-text",id:this.helpId,class:"form-control__help-text"},o("slot",{name:"help-text"},this.help)))}get el(){return t(this)}};x.style=w;const k={kg:"kilogram",lb:"pound",g:"gram",oz:"ounce"};const z=class{constructor(o){r(this,o);this.value=0;this.locale=undefined;this.type="decimal";this.noGrouping=false;this.currency="USD";this.currencyDisplay="symbol";this.minimumIntegerDigits=undefined;this.minimumFractionDigits=null;this.maximumFractionDigits=undefined;this.minimumSignificantDigits=undefined;this.maximumSignificantDigits=undefined;this.noConvert=undefined;this.unit="lb"}render(){if(isNaN(this.value)){return""}const r=navigator.language||(navigator===null||navigator===void 0?void 0:navigator.browserLanguage)||(navigator.languages||["en"])[0];const o=this.noConvert||this.type!=="currency"?this.value:a(this.value,this.currency.toUpperCase());const i=o%1==0?0:2;return new Intl.NumberFormat(this.locale||r,{style:this.type,currency:this.currency.toUpperCase(),currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits!==null?this.minimumFractionDigits:i,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits,unit:k[this.unit]}).format(o)}};const j=":host{display:inline-block}.radio{display:inline-flex;align-items:flex-start;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;gap:var(--sc-spacing-xx-small)}.radio:not(.radio--editing){cursor:pointer}.radio__icon{display:inline-flex;width:var(--sc-radio-size);height:var(--sc-radio-size)}.radio__icon svg{width:100%;height:100%}.radio__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--sc-radio-size);height:var(--sc-radio-size);border:solid var(--sc-input-border-width) var(--sc-input-border-color);border-radius:50%;background-color:var(--sc-input-background-color);color:transparent;transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) opacity, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.radio__control input[type=radio]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover{border-color:var(--sc-input-border-color-hover);background-color:var(--sc-input-background-color-hover)}.radio.radio--focused:not(.radio--checked):not(.radio--disabled) .radio__control{border-color:var(--sc-input-border-color-focus);background-color:var(--sc-input-background-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.radio--checked .radio__control{color:var(--var-sc-checked-radio-background-color, var(--sc-input-background-color));border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.radio.radio--checked:not(.radio--disabled) .radio__control:hover{opacity:0.8}.radio.radio--checked:not(.radio--disabled).radio--focused .radio__control{border-color:var(--var-sc-checked-radio-border-color, var(--sc-input-background-color));background-color:var(--sc-color-primary-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.radio--disabled{opacity:0.5;cursor:not-allowed}.radio:not(.radio--checked) svg circle{opacity:0}.radio__label{line-height:var(--sc-radio-size);margin-left:0.5em;user-select:none}";let C=0;const D=class{constructor(o){r(this,o);this.scBlur=i(this,"scBlur",7);this.scChange=i(this,"scChange",7);this.scFocus=i(this,"scFocus",7);this.inputId=`radio-${++C}`;this.labelId=`radio-label-${C}`;this.hasFocus=false;this.name=undefined;this.value=undefined;this.disabled=false;this.checked=false;this.required=false;this.invalid=false;this.edit=undefined}async ceClick(){this.input.click()}async reportValidity(){this.invalid=!this.input.checkValidity();return this.input.reportValidity()}handleCheckedChange(){if(!this.input)return;if(this.checked){this.getSiblingRadios().map((r=>r.checked=false))}this.input.checked=this.checked;this.scChange.emit()}handleClick(){this.checked=true}handleBlur(){this.hasFocus=false;this.scBlur.emit()}handleFocus(){this.hasFocus=true;this.scFocus.emit()}setCustomValidity(r){this.input.setCustomValidity(r);this.invalid=!this.input.checkValidity()}getAllRadios(){const r=this.el.closest("sc-radio-group");if(!r){return[]}return[...r.querySelectorAll("sc-radio")]}getSiblingRadios(){return this.getAllRadios().filter((r=>r!==this.el))}handleKeyDown(r){if(this.edit)return true;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(r.key)){const o=this.getAllRadios().filter((r=>!r.disabled));const i=["ArrowUp","ArrowLeft"].includes(r.key)?-1:1;let t=o.indexOf(this.el)+i;if(t<0)t=o.length-1;if(t>o.length-1)t=0;this.getAllRadios().map((r=>r.checked=false));o[t].focus();o[t].checked=true;r.preventDefault()}}handleMouseDown(r){if(this.edit)return true;r.preventDefault();this.input.focus()}componentDidLoad(){this.formController=new n(this.el,{value:r=>r.checked?r.value:undefined}).addFormData()}disconnectedCallback(){var r;(r=this.formController)===null||r===void 0?void 0:r.removeFormData()}render(){const r=this.edit?"div":"label";return o(r,{part:"base",class:{radio:true,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--editing":this.edit},htmlFor:this.inputId,onKeyDown:r=>this.handleKeyDown(r),onMouseDown:r=>this.handleMouseDown(r)},o("span",{part:"control",class:"radio__control"},o("span",{part:"checked-icon",class:"radio__icon"},o("svg",{viewBox:"0 0 16 16"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor"},o("circle",{cx:"8",cy:"8",r:"3.42857143"}))))),o("input",{id:this.inputId,ref:r=>this.input=r,type:"radio",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,required:this.required,"aria-checked":this.checked?"true":"false","aria-disabled":this.disabled?"true":"false","aria-labelledby":this.labelId,onClick:()=>this.handleClick(),onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus()})),o("span",{part:"label",id:this.labelId,class:"radio__label"},o("slot",null)))}get el(){return t(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};D.style=j;const F=':host{display:block}.radio-group{border:none;padding:0;margin:0;min-width:0}.radio-group .radio-group__label{display:inline-block;padding:0;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0);margin-bottom:var(--sc-input-label-margin)}.radio-group__hidden-input{position:absolute;opacity:0;padding:0px;margin:0px;pointer-events:none}.radio-group--is-required .radio-group__label:after{content:" *";color:var(--sc-color-danger-500)}::slotted(sc-radio:not(:last-of-type)){display:block;margin-bottom:var(--sc-spacing-x-small)}.radio-group--is-rtl.radio-group,.radio-group--is-rtl.radio-group .radio-group__label{text-align:right}';const S=class{constructor(o){r(this,o);this.scChange=i(this,"scChange",7);this.label="";this.invalid=undefined;this.value="";this.required=undefined}async reportValidity(){this.invalid=!this.input.checkValidity();return this.input.reportValidity()}handleRadioClick(r){if(r.target.tagName!=="SC-RADIO")return;r.stopImmediatePropagation();const o=r.target;if(o.disabled){return}if(o.checked){this.value=o.value;this.scChange.emit(o.value)}}render(){return o("fieldset",{part:"base",class:{"radio-group":true,"radio-group--invalid":this.invalid,"radio-group--is-required":this.required,"radio-group--is-rtl":e()},"aria-invalid":this.invalid,role:"radiogroup"},o("legend",{part:"label",class:"radio-group__label"},o("slot",{name:"label"},this.label)),o("input",{type:"text",class:"radio-group__hidden-input",ref:r=>this.input=r,required:this.required,value:this.value,tabindex:"-1"}),o("div",{part:"items",class:"radio-group__items"},o("slot",null)))}};S.style=F;const q=":host{display:block}.shipping-choice{width:100%;padding:var(--sc-spacing-medium);margin:0;box-sizing:border-box;border-bottom:var(--sc-input-border, 1px solid var(--sc-color-gray-300))}.shipping-choice__empty{background:var(--sc-alert-background-color, var(--sc-color-gray-100));opacity:0.75;padding:var(--sc-spacing-large);border-radius:var(--sc-input-border-radius-medium);line-height:var(--sc-line-height-dense);font-size:var(--sc-font-size-small);border:solid 1px var(--sc-input-border-color, var(--sc-input-border))}.shipping-choice:last-child{border-bottom-width:0}.shipping-choice__text{display:flex;flex-direction:column;gap:var(--sc-spacing-xx-small)}.shipping-choice__price{color:var(--sc-input-label-color);font-weight:var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));white-space:nowrap}.shipping-choice__name{display:inline-block;color:var(--sc-price-choice-name-color, var(--sc-input-label-color));font-size:var(--sc-price-choice-name-size, var(--sc-input-label-font-size-medium));font-weight:var(--sc-price-choice-name-font-weight, var(--sc-font-weight-bold));text-transform:var(--sc-price-choice-text-transform, var(--sc-input-label-text-transform, none));line-height:var(--sc-shipping-name-line-height, 1)}.shipping-choice__description{color:var(--sc-input-label-color);font-weight:var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));line-height:var(--sc-shipping-description-line-height, 1.2)}sc-radio-group::part(items){border:var(--sc-input-border, 1px solid var(--sc-color-gray-300));border-radius:var(--sc-shipping-choice-border-radius, var(--sc-input-border-radius-medium));box-shadow:var(--sc-shipping-box-shadow, var(--sc-input-box-shadow));overflow:hidden;position:relative}sc-radio::part(base){width:100%}sc-radio::part(label){width:100%;display:flex;justify-content:space-between;gap:var(--sc-spacing-small)}sc-radio-group::slotted(sc-radio:not(:last-of-type)){margin-bottom:0}";const A=class{constructor(o){r(this,o);this.label=undefined;this.showDescription=true}async updateCheckout(r){if(!r)return;try{l("selected_shipping_choice");c.checkout=await h({id:c.checkout.id,data:{selected_shipping_choice_id:r}});m(wp.i18n.__("Shipping choice updated.","surecart"),"assertive");const{total_amount:o,currency:i}=c.checkout;m(wp.i18n.sprintf(wp.i18n.__("Your order total has changed to: %1$s.","surecart"),f({amount:o,currency:i})),"assertive")}catch(r){console.error(r);u(r)}finally{d("selected_shipping_choice")}}render(){var r,i,t,e,a,n;if(!((r=c===null||c===void 0?void 0:c.checkout)===null||r===void 0?void 0:r.selected_shipping_choice_required)){return o(s,{style:{display:"none"}})}if(!((e=(t=(i=c===null||c===void 0?void 0:c.checkout)===null||i===void 0?void 0:i.shipping_choices)===null||t===void 0?void 0:t.data)===null||e===void 0?void 0:e.length)){return o("sc-form-control",{part:"empty",label:this.label||wp.i18n.__("Shipping","surecart")},o("div",{class:"shipping-choice__empty"},wp.i18n.__("Sorry, we are not able to ship to your address.","surecart")))}return o(s,null,o("sc-radio-group",{part:"base",label:this.label||wp.i18n.__("Shipping","surecart"),class:"shipping-choices",onScChange:r=>this.updateCheckout(r.detail)},(((n=(a=c===null||c===void 0?void 0:c.checkout)===null||a===void 0?void 0:a.shipping_choices)===null||n===void 0?void 0:n.data)||[]).map((({id:r,amount:i,currency:t,shipping_method:s})=>{var e;return o("sc-radio",{key:r,checked:((e=c===null||c===void 0?void 0:c.checkout)===null||e===void 0?void 0:e.selected_shipping_choice)===r,exportparts:"base:radio__base,label:radio__label,control:radio__control,checked-icon:radio__checked-icon",class:"shipping-choice",value:r},o("div",{class:"shipping-choice__text"},o("div",{class:"shipping-choice__name"},(s===null||s===void 0?void 0:s.name)||wp.i18n.__("Standard Shipping","surecart")),this.showDescription&&!!(s===null||s===void 0?void 0:s.description)&&o("div",{class:"shipping-choice__description"},s===null||s===void 0?void 0:s.description)),o("div",{class:"shipping-choice__price"},!!i?o("sc-format-number",{type:"currency",value:i,currency:t}):wp.i18n.__("Free","surecart")))}))),p("selected_shipping_choice")&&o("sc-block-ui",null))}};A.style=q;const R=":host{--track-color:#0d131e20;--indicator-color:var(--sc-color-primary-500);--stroke-width:2px;--spinner-size:1em;display:inline-block}.spinner{display:inline-block;width:var(--spinner-size);height:var(--spinner-size);border-radius:50%;border:solid var(--stroke-width) var(--track-color);border-top-color:var(--indicator-color);border-right-color:var(--indicator-color);animation:1s linear infinite spin}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";const B=class{constructor(o){r(this,o)}render(){return o("span",{part:"base",class:"spinner","aria-busy":"true","aria-live":"polite"})}};B.style=R;const I=":host(:not(:focus-within)){position:absolute !important;width:1px !important;height:1px !important;clip:rect(0 0 0 0) !important;clip-path:inset(50%) !important;border:none !important;overflow:hidden !important;white-space:nowrap !important;padding:0 !important}";const L=class{constructor(o){r(this,o)}render(){return o("slot",null)}};L.style=I;export{v as sc_block_ui,y as sc_form,x as sc_form_control,z as sc_format_number,D as sc_radio,S as sc_radio_group,A as sc_shipping_choices,B as sc_spinner,L as sc_visually_hidden};
//# sourceMappingURL=p-1fe78fef.entry.js.map