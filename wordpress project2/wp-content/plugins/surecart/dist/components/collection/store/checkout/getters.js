import{getCheckout}from"../checkouts/mutations";import state from"./store";export const currentCheckout=()=>getCheckout(state.formId,state.mode);export const checkoutIsLocked=(t="")=>{var o;return t?state.locks.some((o=>o===t)):!!(null===(o=state.locks)||void 0===o?void 0:o.length)};export const getLineItemByProductId=t=>{var o,e;return((null===(e=null===(o=state.checkout)||void 0===o?void 0:o.line_items)||void 0===e?void 0:e.data)||[]).find((o=>{var e,r;return(null===(r=null===(e=null==o?void 0:o.price)||void 0===e?void 0:e.product)||void 0===r?void 0:r.id)===t}))};