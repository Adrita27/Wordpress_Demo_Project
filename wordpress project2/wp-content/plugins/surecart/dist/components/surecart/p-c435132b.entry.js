import{r as s,h as t,F as i}from"./p-cc7ce8c7.js";import{s as a,c as p,e as r}from"./p-caaec0f6.js";import"./p-25433d0f.js";import"./p-d5a52441.js";import"./p-a3ae8411.js";import"./p-09484d0e.js";const o=".sc-product-pills-variant-option__wrapper{display:flex;flex-wrap:wrap;gap:var(--sc-spacing-x-small)}";const l=class{constructor(t){s(this,t);this.label=undefined;this.optionNumber=1}render(){return t("sc-form-control",{label:this.label},t("span",{slot:"label"},this.label),t("div",{class:"sc-product-pills-variant-option__wrapper"},(a.variant_options[this.optionNumber-1].values||[]).map((s=>{const o=p(this.optionNumber,s)||r(this.optionNumber,s);return t("sc-pill-option",{isUnavailable:o,isSelected:a.variantValues[`option_${this.optionNumber}`]===s,onClick:()=>a.variantValues={...a.variantValues,[`option_${this.optionNumber}`]:s}},t("span",{"aria-hidden":"true"},s),t("sc-visually-hidden",null,wp.i18n.sprintf(wp.i18n.__("Select %s: %s.","surecart"),this.label,s),o&&t(i,null," ",wp.i18n.__("(option unavailable)","surecart")),a.variantValues[`option_${this.optionNumber}`]===s&&t(i,null," ",wp.i18n.__("This option is currently selected.","surecart"))))}))))}};l.style=o;export{l as sc_product_pills_variant_option};
//# sourceMappingURL=p-c435132b.entry.js.map