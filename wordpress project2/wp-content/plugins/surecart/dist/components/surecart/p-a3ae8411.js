const o=o=>o&&"object"==typeof o&&!Array.isArray(o),n=()=>{const t=document.querySelector('script[type="application/json"]#sc-store-data');if(!t)return{};try{const i=JSON.parse(t.textContent);if(o(i))return i;throw Error("Parsed state is not an object")}catch(o){console.log(o)}return{}},i=(o,t,i,n)=>{var a,l,r,e,s;if(!(null==n?void 0:n.stock_enabled)||(null==n?void 0:n.allow_out_of_stock_purchases))return!1;if(1===o){const o=null===(r=(l=(null===(a=n.variants)||void 0===a?void 0:a.data)||[]).filter)||void 0===r?void 0:r.call(l,(o=>o.option_1===t));return Math.max(...o.map((o=>o.available_stock)))<=0}if(2===o){const o=((null===(e=n.variants)||void 0===e?void 0:e.data)||[]).filter((o=>(null==o?void 0:o.option_1)===i.option_1&&o.option_2===t));return Math.max(...o.map((o=>o.available_stock)))<=0}const v=((null===(s=n.variants)||void 0===s?void 0:s.data)||[]).filter((o=>(null==o?void 0:o.option_1)===i.option_1&&(null==o?void 0:o.option_2)===i.option_2&&o.option_3===t)),d=Math.max(...v.map((o=>o.available_stock)));return d<=0},t=(o,t,i,n)=>{var a,l,r;return 1===o?!((null===(a=n.variants)||void 0===a?void 0:a.data)||[]).some((o=>o.option_1===t)):2===o?!((null===(l=n.variants)||void 0===l?void 0:l.data)||[]).some((o=>(null==o?void 0:o.option_1)===i.option_1&&o.option_2===t)):!((null===(r=n.variants)||void 0===r?void 0:r.data)||[]).some((o=>(null==o?void 0:o.option_1)===i.option_1&&(null==o?void 0:o.option_2)===i.option_2&&o.option_3===t))};export{t as a,n as g,i};