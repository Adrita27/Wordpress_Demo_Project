import{proxyCustomElement,HTMLElement,createEvent,h,Host,Fragment}from"@stencil/core/internal/client";import{o as openWormhole}from"./consumer.js";import{a as isPriceInOrder}from"./index5.js";import{i as intervalString}from"./price.js";import{a as apiFetch}from"./fetch.js";import{a as addQueryArgs}from"./add-query-args.js";import{d as defineCustomElement$6}from"./sc-alert2.js";import{d as defineCustomElement$5}from"./sc-choice-container2.js";import{d as defineCustomElement$4}from"./sc-format-number2.js";import{d as defineCustomElement$3}from"./sc-icon2.js";import{d as defineCustomElement$2}from"./sc-skeleton2.js";function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},_extends.apply(this,arguments)}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function isImmutable(e){return!(!e||"function"!=typeof e.hasOwnProperty||!(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function denormalizeImmutable(e,t,i){return Object.keys(e).reduce((function(t,r){var n=""+r;return t.has(n)?t.set(n,i(t.get(n),e[n])):t}),t)}var getDefaultGetId=function(e){return function(t){return isImmutable(t)?t.get(e):t[e]}},EntitySchema=function(){function e(e,t,i){if(void 0===t&&(t={}),void 0===i&&(i={}),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var r=i,n=r.idAttribute,c=void 0===n?"id":n,o=r.mergeStrategy,s=void 0===o?function(e,t){return _extends({},e,t)}:o,a=r.processStrategy,h=void 0===a?function(e){return _extends({},e)}:a,u=r.fallbackStrategy,d=void 0===u?function(e,t){}:u;this._key=e,this._getId="function"==typeof c?c:getDefaultGetId(c),this._idAttribute=c,this._mergeStrategy=s,this._processStrategy=h,this._fallbackStrategy=d,this.define(t)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce((function(t,i){var r,n=e[i];return _extends({},t,((r={})[i]=n,r))}),this.schema||{})},t.getId=function(e,t,i){return this._getId(e,t,i)},t.merge=function(e,t){return this._mergeStrategy(e,t)},t.fallback=function(e,t){return this._fallbackStrategy(e,t)},t.normalize=function(e,t,i,r,n,c){var o=this,s=this.getId(e,t,i),a=this.key;if(a in c||(c[a]={}),s in c[a]||(c[a][s]=[]),c[a][s].some((function(t){return t===e})))return s;c[a][s].push(e);var h=this._processStrategy(e,t,i);return Object.keys(this.schema).forEach((function(t){if(h.hasOwnProperty(t)&&"object"==typeof h[t]){var i=o.schema[t],s="function"==typeof i?i(e):i;h[t]=r(h[t],h,t,s,n,c)}})),n(this,h,e,t,i),s},t.denormalize=function(e,t){var i=this;return isImmutable(e)?denormalizeImmutable(this.schema,e,t):(Object.keys(this.schema).forEach((function(r){if(e.hasOwnProperty(r)){var n=i.schema[r];e[r]=t(e[r],n)}})),e)},_createClass(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),PolymorphicSchema=function(){function e(e,t){t&&(this._schemaAttribute="string"==typeof t?function(e){return e[t]}:t),this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=e},t.getSchemaAttribute=function(e,t,i){return!this.isSingleSchema&&this._schemaAttribute(e,t,i)},t.inferSchema=function(e,t,i){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(e,t,i);return this.schema[r]},t.normalizeValue=function(e,t,i,r,n,c){var o=this.inferSchema(e,t,i);if(!o)return e;var s=r(e,t,i,o,n,c);return this.isSingleSchema||null==s?s:{id:s,schema:this.getSchemaAttribute(e,t,i)}},t.denormalizeValue=function(e,t){var i=isImmutable(e)?e.get("schema"):e.schema;return this.isSingleSchema||i?t((this.isSingleSchema?void 0:isImmutable(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[i]):e},_createClass(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),UnionSchema=function(e){function t(t,i){if(!i)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return e.call(this,t,i)||this}_inheritsLoose(t,e);var i=t.prototype;return i.normalize=function(e,t,i,r,n,c){return this.normalizeValue(e,t,i,r,n,c)},i.denormalize=function(e,t){return this.denormalizeValue(e,t)},t}(PolymorphicSchema),ValuesSchema=function(e){function t(){return e.apply(this,arguments)||this}_inheritsLoose(t,e);var i=t.prototype;return i.normalize=function(e,t,i,r,n,c){var o=this;return Object.keys(e).reduce((function(t,i,s){var a,h=e[i];return null!=h?_extends({},t,((a={})[i]=o.normalizeValue(h,e,i,r,n,c),a)):t}),{})},i.denormalize=function(e,t){var i=this;return Object.keys(e).reduce((function(r,n){var c,o=e[n];return _extends({},r,((c={})[n]=i.denormalizeValue(o,t),c))}),{})},t}(PolymorphicSchema),validateSchema=function(e){if(Array.isArray(e)&&e.length>1)throw new Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},getValues=function(e){return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t]}))},normalize=function(e,t,i,r,n,c,o){return e=validateSchema(e),getValues(t).map((function(t,s){return n(t,i,r,e,c,o)}))},ArraySchema=function(e){function t(){return e.apply(this,arguments)||this}_inheritsLoose(t,e);var i=t.prototype;return i.normalize=function(e,t,i,r,n,c){var o=this;return getValues(e).map((function(e,s){return o.normalizeValue(e,t,i,r,n,c)})).filter((function(e){return null!=e}))},i.denormalize=function(e,t){var i=this;return e&&e.map?e.map((function(e){return i.denormalizeValue(e,t)})):e},t}(PolymorphicSchema),_normalize=function(e,t,i,r,n,c,o){var s=_extends({},t);return Object.keys(e).forEach((function(i){var r=e[i],a="function"==typeof r?r(t):r,h=n(t[i],t,i,a,c,o);null==h?delete s[i]:s[i]=h})),s},_denormalize=function(e,t,i){if(isImmutable(t))return denormalizeImmutable(e,t,i);var r=_extends({},t);return Object.keys(e).forEach((function(t){null!=r[t]&&(r[t]=i(r[t],e[t]))})),r},ObjectSchema=function(){function e(e){this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce((function(t,i){var r,n=e[i];return _extends({},t,((r={})[i]=n,r))}),this.schema||{})},t.normalize=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return _normalize.apply(void 0,[this.schema].concat(t))},t.denormalize=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return _denormalize.apply(void 0,[this.schema].concat(t))},e}(),visit=function e(t,i,r,n,c,o){return"object"==typeof t&&t?"object"!=typeof n||n.normalize&&"function"==typeof n.normalize?n.normalize(t,i,r,e,c,o):(Array.isArray(n)?normalize:_normalize)(n,t,i,r,e,c,o):t},addEntities=function(e){return function(t,i,r,n,c){var o=t.key,s=t.getId(r,n,c);o in e||(e[o]={});var a=e[o][s];e[o][s]=a?t.merge(a,i):i}},schema={Array:ArraySchema,Entity:EntitySchema,Object:ObjectSchema,Union:UnionSchema,Values:ValuesSchema},normalize$1=function(e,t){if(!e||"object"!=typeof e)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===e?"null":typeof e)+'".');var i={},r=addEntities(i);return{entities:i,result:visit(e,e,null,t,r,{})}};const entities={integration:new schema.Entity("integration"),account:new schema.Entity("account"),price:new schema.Entity("price"),product:new schema.Entity("product"),product_group:new schema.Entity("product_group"),purchase:new schema.Entity("purchase"),payment_method:new schema.Entity("payment_method"),card:new schema.Entity("card"),invoice:new schema.Entity("invoice"),current_period:new schema.Entity("current_period"),refund:new schema.Entity("refund"),charge:new schema.Entity("charge"),coupon:new schema.Entity("coupon"),promotion:new schema.Entity("promotion"),order:new schema.Entity("order"),customer:new schema.Entity("customer"),subscription:new schema.Entity("subscription"),product_group:new schema.Entity("product_group")},{price:price,product:product,purchase:purchase,payment_method:payment_method,card:card,invoice:invoice,refund:refund,charge:charge,coupon:coupon,promotion:promotion,order:order,integration:integration,customer:customer,product_group:product_group,subscription:subscription}=entities;product.define({prices:{data:[price]},product_group:product_group}),price.define({product:product}),invoice.define({purchases:{data:[purchase]},charge:charge,customer:customer,subscription:subscription}),order.define({purchases:{data:[purchase]},charge:charge,customer:customer,subscription:subscription}),charge.define({order:order,invoice:invoice}),subscription.define({current_period:invoice,purchase:purchase,price:price,payment_method:payment_method,order:order,customer:customer}),refund.define({charge:charge,customer:customer}),purchase.define({order:order,product:product,subscription:subscription}),payment_method.define({card:card}),coupon.define({promotions:{data:[promotion]}}),product_group.define({}),integration.define({});const normalizeEntities=e=>entities?.[e?.[0]?.object]?normalize$1(e,[entities[e?.[0]?.object]]):{},getPricesAndProducts=async({ids:e,archived:t=!1})=>{const i=await apiFetch({path:addQueryArgs("surecart/v1/prices/",{ids:e,archived:t,expand:["product"]})});return normalizePrices(i)},normalizePrices=e=>{const{entities:t}=normalizeEntities(e);return{prices:null==t?void 0:t.price,products:null==t?void 0:t.product}},scPriceChoiceCss=":host {\n  display: block;\n  min-width: 0;\n  width: 100%;\n}\n\nsc-choice-container {\n  container-type: inline-size;\n}\n\n.price-choice {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  line-height: var(--sc-line-height-dense);\n  gap: var(--sc-spacing-small);\n}\n.price-choice__name {\n  color: var(--sc-price-choice-name-color, var(--sc-input-label-color));\n  font-size: var(--sc-price-choice-name-size, var(--sc-input-label-font-size-medium));\n  font-weight: var(--sc-price-choice-name-font-weight, var(--sc-font-weight-bold));\n  text-transform: var(--sc-price-choice-text-transform, var(--sc-input-label-text-transform, none));\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  -moz-box-lines: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.price-choice__description {\n  color: var(--sc-input-help-text-color);\n}\n.price-choice > *:not(:first-child):last-child {\n  text-align: right;\n}\n.price-choice__details {\n  flex: 1 0 50%;\n  display: grid;\n  gap: var(--sc-spacing-xxx-small);\n}\n.price-choice__trial, .price-choice__setup-fee, .price-choice__price {\n  font-size: var(--sc-font-size-small);\n  color: var(--sc-input-help-text-color);\n}\n.price-choice__price {\n  color: var(--sc-input-label-color);\n  font-weight: var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));\n}\n\n@container (max-width: 325px) {\n  .price-choice {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--sc-spacing-xx-small);\n  }\n  .price-choice > *:not(:first-child):last-child {\n    text-align: initial;\n  }\n}",ScPriceChoice$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.scUpdateLineItem=createEvent(this,"scUpdateLineItem",7),this.scRemoveLineItem=createEvent(this,"scRemoveLineItem",7),this.scAddEntities=createEvent(this,"scAddEntities",7),this.priceId=void 0,this.price=void 0,this.product=void 0,this.loading=!1,this.label=void 0,this.showLabel=!0,this.showPrice=!0,this.showControl=!0,this.description=void 0,this.prices={},this.products={},this.order=void 0,this.quantity=1,this.type=void 0,this.checked=!1,this.error=void 0,this.isAdHoc=void 0,this.blank=!1,this.errorMessage=void 0,this.adHocErrorMessage=void 0}handlePriceIdChage(){var e;this.price&&(null===(e=this.price)||void 0===e?void 0:e.id)===this.priceId||this.fetchPriceWithProduct()}handlePricesChange(){var e,t,i;Object.keys(this.prices||{}).length&&Object.keys(this.products||{}).length&&(this.price=null===(e=null==this?void 0:this.prices)||void 0===e?void 0:e[this.priceId],this.product=null===(t=null==this?void 0:this.products)||void 0===t?void 0:t[null===(i=null==this?void 0:this.price)||void 0===i?void 0:i.product])}handlePriseChange(){var e;this.isAdHoc=null===(e=null==this?void 0:this.price)||void 0===e?void 0:e.ad_hoc}handleErrorsChange(){var e;const t=((null===(e=null==this?void 0:this.error)||void 0===e?void 0:e.additional_errors)||[]).find((e=>{var t;return"line_items.ad_hoc_amount"===(null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.attribute)}));this.adHocErrorMessage=(null==t?void 0:t.message)?null==t?void 0:t.message:""}handleCheckedChange(){var e;(null===(e=this.price)||void 0===e?void 0:e.ad_hoc)&&this.choice.checked&&setTimeout((()=>{this.adHocInput.triggerFocus()}),50)}componentWillLoad(){this.price||this.fetchPriceWithProduct()}async fetchPriceWithProduct(){if(this.priceId)try{this.loading=!0;const{products:e,prices:t}=await getPricesAndProducts({archived:!1,ids:[this.priceId]});this.scAddEntities.emit({prices:t,products:e})}catch(e){}finally{this.loading=!1}}isInOrder(){return isPriceInOrder(this.price,this.order)}isChecked(){return this.isInOrder()}onChangeAdHoc(e){this.scUpdateLineItem.emit({price_id:this.priceId,quantity:this.quantity,ad_hoc_amount:e.target.value})}getLineItem(){var e,t;return((null===(t=null===(e=this.order)||void 0===e?void 0:e.line_items)||void 0===t?void 0:t.data)||[]).find((e=>e.price.id===this.priceId))}showAdHoc(){var e,t;return!!(null===(e=this.price)||void 0===e?void 0:e.ad_hoc)&&(!!this.isInOrder()||(null===(t=null==this?void 0:this.choice)||void 0===t?void 0:t.checked))}renderEmpty(){var e;return(null===(e=null===window||void 0===window?void 0:window.wp)||void 0===e?void 0:e.blocks)?h("sc-alert",{type:"danger",open:!0,style:{margin:"0px"}},wp.i18n.__("This product has been archived.","surecart")):h(Host,{style:{display:"none"}})}renderPrice(){return h(Fragment,null,h("sc-format-number",{type:"currency",value:this.price.amount,currency:this.price.currency}),intervalString(this.price,{showOnce:!0,abbreviate:!0,labels:{interval:"/",period:
/** translators: used as in time period: "for 3 months" */
wp.i18n.__("for","surecart")}}))}render(){var e,t,i,r,n,c,o;return this.loading?h("sc-choice-container",{showControl:this.showControl,name:"loading",disabled:!0},h("div",{class:"price-choice"},h("sc-skeleton",{style:{width:"60px",display:"inline-block"}}),h("sc-skeleton",{style:{width:"80px",display:"inline-block"}}))):!(null===(e=null==this?void 0:this.price)||void 0===e?void 0:e.id)||(null===(t=this.price)||void 0===t?void 0:t.archived)||(null===(i=this.product)||void 0===i?void 0:i.archived)?this.renderEmpty():h("sc-choice-container",{ref:e=>this.choice=e,value:this.priceId,type:this.type,showControl:this.showControl,checked:this.isChecked()},h("div",{class:"price-choice"},this.showLabel&&h("div",{class:"price-choice__title"},h("div",{class:"price-choice__name"},this.label||(null===(r=null==this?void 0:this.price)||void 0===r?void 0:r.name)||(null===(n=null==this?void 0:this.product)||void 0===n?void 0:n.name)),!!this.description&&h("div",{class:"price-choice__description"},this.description)),this.showPrice&&h("div",{class:"price-choice__details"},h("div",{class:"price-choice__price"},(null===(c=this.price)||void 0===c?void 0:c.ad_hoc)?wp.i18n.__("Custom Amount","surecart"):h(Fragment,null,h("sc-format-number",{type:"currency",value:this.price.amount,currency:this.price.currency}),intervalString(this.price,{showOnce:!0,abbreviate:!0,labels:{interval:"/",period:
/** translators: used as in time period: "for 3 months" */
wp.i18n.__("for","surecart")}}))),!!this.price.trial_duration_days&&h("div",{class:"price-choice__trial"},wp.i18n.sprintf(wp.i18n._n("Starting in %s day","Starting in %s days",this.price.trial_duration_days,"surecart"),this.price.trial_duration_days)),!!this.price.setup_fee_enabled&&(null===(o=this.price)||void 0===o?void 0:o.setup_fee_amount)&&h("div",{class:"price-choice__setup-fee"},h("sc-format-number",{type:"currency",value:this.price.setup_fee_amount,currency:this.price.currency})," ",this.price.setup_fee_name||wp.i18n.__("Setup Fee","surecart")))))}static get watchers(){return{priceId:["handlePriceIdChage"],prices:["handlePricesChange"],products:["handlePricesChange"],price:["handlePriseChange"],error:["handleErrorsChange"],checked:["handleCheckedChange"]}}static get style(){return scPriceChoiceCss}},[0,"sc-price-choice",{priceId:[513,"price-id"],price:[1040],product:[1040],loading:[1028],label:[1],showLabel:[4,"show-label"],showPrice:[4,"show-price"],showControl:[4,"show-control"],description:[1],prices:[16],products:[16],order:[16],quantity:[2],type:[1],checked:[1540],error:[16],isAdHoc:[1040],blank:[4],errorMessage:[32],adHocErrorMessage:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-price-choice","sc-alert","sc-choice-container","sc-format-number","sc-icon","sc-skeleton"].forEach((e=>{switch(e){case"sc-price-choice":customElements.get(e)||customElements.define(e,ScPriceChoice$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$6();break;case"sc-choice-container":customElements.get(e)||defineCustomElement$5();break;case"sc-format-number":customElements.get(e)||defineCustomElement$4();break;case"sc-icon":customElements.get(e)||defineCustomElement$3();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$2()}}))}openWormhole(ScPriceChoice$1,["prices","products","order","error"],!1);const ScPriceChoice=ScPriceChoice$1,defineCustomElement=defineCustomElement$1;export{ScPriceChoice,defineCustomElement};