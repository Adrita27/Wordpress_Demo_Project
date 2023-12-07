"use strict";const isObject=t=>t&&"object"==typeof t&&!Array.isArray(t),getSerializedState=()=>{const t=document.querySelector('script[type="application/json"]#sc-store-data');if(!t)return{};try{const i=JSON.parse(t.textContent);if((o=i)&&"object"==typeof o&&!Array.isArray(o))return i;throw Error("Parsed state is not an object")}catch(t){console.log(t)}var o;return{}},isProductVariantOptionSoldOut=(t,o,i,a)=>{var n,r,e,l,s;if(!(null==a?void 0:a.stock_enabled)||(null==a?void 0:a.allow_out_of_stock_purchases))return!1;if(1===t){const t=null===(e=(r=(null===(n=a.variants)||void 0===n?void 0:n.data)||[]).filter)||void 0===e?void 0:e.call(r,(t=>t.option_1===o));return Math.max(...t.map((t=>t.available_stock)))<=0}if(2===t){const t=((null===(l=a.variants)||void 0===l?void 0:l.data)||[]).filter((t=>(null==t?void 0:t.option_1)===i.option_1&&t.option_2===o));return Math.max(...t.map((t=>t.available_stock)))<=0}const d=((null===(s=a.variants)||void 0===s?void 0:s.data)||[]).filter((t=>(null==t?void 0:t.option_1)===i.option_1&&(null==t?void 0:t.option_2)===i.option_2&&t.option_3===o));return Math.max(...d.map((t=>t.available_stock)))<=0},isProductVariantOptionMissing=(t,o,i,a)=>{var n,r,e;return 1===t?!((null===(n=a.variants)||void 0===n?void 0:n.data)||[]).some((t=>t.option_1===o)):2===t?!((null===(r=a.variants)||void 0===r?void 0:r.data)||[]).some((t=>(null==t?void 0:t.option_1)===i.option_1&&t.option_2===o)):!((null===(e=a.variants)||void 0===e?void 0:e.data)||[]).some((t=>(null==t?void 0:t.option_1)===i.option_1&&(null==t?void 0:t.option_2)===i.option_2&&t.option_3===o))};exports.getSerializedState=getSerializedState,exports.isProductVariantOptionMissing=isProductVariantOptionMissing,exports.isProductVariantOptionSoldOut=isProductVariantOptionSoldOut;