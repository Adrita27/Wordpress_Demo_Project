import{r as s,h as i,H as t}from"./p-cc7ce8c7.js";import{o as e}from"./p-2f9b1dd9.js";const n=":host{display:block}";const o=class{constructor(i){s(this,i);this.order=undefined;this.label=undefined;this.loading=undefined}render(){var s,e,n;if(!((s=this===null||this===void 0?void 0:this.order)===null||s===void 0?void 0:s.bump_amount)){return i(t,{style:{display:"none"}})}return i("sc-line-item",null,i("span",{slot:"description"},this.label||wp.i18n.__("Bundle Discount","surecart")),i("span",{slot:"price"},i("sc-format-number",{type:"currency",currency:((e=this.order)===null||e===void 0?void 0:e.currency)||"usd",value:(n=this.order)===null||n===void 0?void 0:n.bump_amount})))}};e(o,["order"],false);o.style=n;export{o as sc_line_item_bump};
//# sourceMappingURL=p-6459ab40.entry.js.map