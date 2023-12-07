import { r as registerInstance, h, H as Host } from './index-644f5478.js';
import { s as state } from './watchers-43678d50.js';
import { g as getMaxStockQuantity } from './quantity-2718ee4f.js';
import './index-1046c77e.js';
import './util-60cd51cc.js';
import './utils-f20e895e.js';
import './index-b0f661a7.js';

const scProductQuantityCss = ":host{display:block}";

let id = 0;
const ScProductQuantity = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputId = `sc-quantity-${++id}`;
    this.helpId = `sc-quantity-help-text-${id}`;
    this.labelId = `sc-quantity-label-${id}`;
    this.size = 'medium';
    this.name = undefined;
    this.errors = undefined;
    this.showLabel = true;
    this.label = undefined;
    this.required = false;
    this.help = undefined;
  }
  render() {
    var _a, _b;
    const maxStockQuantity = getMaxStockQuantity(state === null || state === void 0 ? void 0 : state.product, state === null || state === void 0 ? void 0 : state.selectedVariant);
    return (h(Host, null, h("sc-form-control", { exportparts: "label, help-text, form-control", size: this.size, required: this.required, label: this.label, showLabel: this.showLabel, help: this.help, inputId: this.inputId, helpId: this.helpId, labelId: this.labelId, name: this.name }, h("sc-quantity-select", { size: this.size, quantity: Math.max(((_a = state.selectedPrice) === null || _a === void 0 ? void 0 : _a.ad_hoc) ? 1 : state.quantity, 1), disabled: (_b = state.selectedPrice) === null || _b === void 0 ? void 0 : _b.ad_hoc, onScInput: e => (state.quantity = e.detail), ...(!!maxStockQuantity ? { max: maxStockQuantity } : {}) }))));
  }
};
ScProductQuantity.style = scProductQuantityCss;

export { ScProductQuantity as sc_product_quantity };

//# sourceMappingURL=sc-product-quantity.entry.js.map