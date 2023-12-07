"use strict";const index=require("./index-9daae515.js"),watchers=require("./watchers-2abdd0cb.js"),google=require("./google-a04e0fd5.js"),ui=require("./ui-9bbf7d3b.js"),addQueryArgs=require("./add-query-args-17c551b6.js"),submitCartForm=async()=>{var e,t,a,s,r,d;if(!(null===(e=watchers.state.selectedPrice)||void 0===e?void 0:e.id))return;if((null===(t=watchers.state.selectedPrice)||void 0===t?void 0:t.ad_hoc)&&(null===watchers.state.adHocAmount||void 0===watchers.state.adHocAmount))return;const c=google.getCheckout(null===watchers.state||void 0===watchers.state?void 0:watchers.state.formId,watchers.state.mode);try{watchers.state.busy=!0;const e=await index.addLineItem({checkout:c,data:{price:null===(a=watchers.state.selectedPrice)||void 0===a?void 0:a.id,quantity:Math.max((null===(s=watchers.state.selectedPrice)||void 0===s?void 0:s.ad_hoc)?1:watchers.state.quantity,1),variant:null===(r=watchers.state.selectedVariant)||void 0===r?void 0:r.id,...(null===(d=watchers.state.selectedPrice)||void 0===d?void 0:d.ad_hoc)?{ad_hoc_amount:watchers.state.adHocAmount}:{}},live_mode:"test"!==watchers.state.mode});google.setCheckout(e,watchers.state.formId),ui.toggleCart(!0),watchers.state.dialog=null}catch(e){console.error(e),watchers.state.error=e}finally{watchers.state.busy=!1}},getProductBuyLink=(e,t={})=>{var a,s,r,d,c,i,o;if((null===(a=watchers.state.selectedPrice)||void 0===a?void 0:a.id)&&(!(null===(s=watchers.state.selectedPrice)||void 0===s?void 0:s.ad_hoc)||watchers.state.adHocAmount))return addQueryArgs.addQueryArgs(e,{line_items:[{price:null===(r=watchers.state.selectedPrice)||void 0===r?void 0:r.id,quantity:(null===(d=watchers.state.selectedPrice)||void 0===d?void 0:d.ad_hoc)?1:watchers.state.quantity,...(null===(c=watchers.state.selectedPrice)||void 0===c?void 0:c.ad_hoc)?{ad_hoc_amount:watchers.state.adHocAmount}:{},...(null===(i=watchers.state.selectedVariant)||void 0===i?void 0:i.id)?{variant:null===(o=watchers.state.selectedVariant)||void 0===o?void 0:o.id}:{}}],...t})};exports.getProductBuyLink=getProductBuyLink,exports.submitCartForm=submitCartForm;