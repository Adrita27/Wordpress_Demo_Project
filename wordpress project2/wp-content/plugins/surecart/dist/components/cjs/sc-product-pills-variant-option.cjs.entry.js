'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');
const watchers = require('./watchers-2abdd0cb.js');
require('./index-00f0fc21.js');
require('./util-9c366e9f.js');
require('./utils-45815a15.js');
require('./index-13ba9385.js');

const scProductPillsVariantOptionCss = ".sc-product-pills-variant-option__wrapper{display:flex;flex-wrap:wrap;gap:var(--sc-spacing-x-small)}";

const ScProductPillsVariantOption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.label = undefined;
    this.optionNumber = 1;
  }
  render() {
    return (index.h("sc-form-control", { label: this.label }, index.h("span", { slot: "label" }, this.label), index.h("div", { class: "sc-product-pills-variant-option__wrapper" }, (watchers.state.variant_options[this.optionNumber - 1].values || []).map(value => {
      const isUnavailable = watchers.isOptionSoldOut(this.optionNumber, value) || watchers.isOptionMissing(this.optionNumber, value);
      return (index.h("sc-pill-option", { isUnavailable: isUnavailable, isSelected: watchers.state.variantValues[`option_${this.optionNumber}`] === value, onClick: () => (watchers.state.variantValues = {
          ...watchers.state.variantValues,
          [`option_${this.optionNumber}`]: value,
        }) }, index.h("span", { "aria-hidden": "true" }, value), index.h("sc-visually-hidden", null, wp.i18n.sprintf(wp.i18n.__('Select %s: %s.', 'surecart'), this.label, value), isUnavailable && index.h(index.Fragment, null, " ", wp.i18n.__('(option unavailable)', 'surecart')), watchers.state.variantValues[`option_${this.optionNumber}`] === value && index.h(index.Fragment, null, " ", wp.i18n.__('This option is currently selected.', 'surecart')))));
    }))));
  }
};
ScProductPillsVariantOption.style = scProductPillsVariantOptionCss;

exports.sc_product_pills_variant_option = ScProductPillsVariantOption;

//# sourceMappingURL=sc-product-pills-variant-option.cjs.entry.js.map