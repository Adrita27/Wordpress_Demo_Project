import{r as registerIconLibrary}from"./library.js";export{setAssetPath,setNonce,setPlatformOptions}from"@stencil/core/internal/client";export{c as countryChoices}from"./address.js";export{g as getFeaturedProductMediaAttributes}from"./media.js";export{g as getMaxStockQuantity}from"./quantity.js";import{g as getters,s as state,o as onChange,a as on,d as dispose,f as forceUpdate}from"./watchers.js";const registerIcons=(o="")=>{var e,t,r;if(o||(null===(e=null===window||void 0===window?void 0:window.scIcons)||void 0===e?void 0:e.path)||(null===(r=null===(t=null===window||void 0===window?void 0:window.parent)||void 0===t?void 0:t.scIcons)||void 0===r?void 0:r.path))return registerIconLibrary("default",{resolver:function(e){var t,r,n;const i=o||(null===(r=null===(t=null===window||void 0===window?void 0:window.parent)||void 0===t?void 0:t.scIcons)||void 0===r?void 0:r.path)||(null===(n=null===window||void 0===window?void 0:window.scIcons)||void 0===n?void 0:n.path);return`${null==i?void 0:i.replace(/\/$/,"")}/${e}.svg`},mutator:function(o){return o.setAttribute("fill","none")}})};window.registerSureCartIconPath=registerIcons,window.registerSureCartIconLibrary=registerIconLibrary,registerIcons();const index=Object.freeze({__proto__:null,getters:getters,state:state,onChange:onChange,on:on,dispose:dispose,forceUpdate:forceUpdate});export{index as productStore};