import { r as registerInstance, h } from './index-644f5478.js';
import { s as state } from './google-cb3a19c3.js';
import './currency-728311ef.js';
import './add-query-args-f4c5962b.js';
import './index-1046c77e.js';
import './get-query-arg-cb6b8763.js';
import './utils-f20e895e.js';

const scCartLoaderCss = ":host{position:absolute;z-index:var(--sc-cart-z-index, 999999);font-family:var(--sc-font-sans)}";

const ScCartLoader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.template = undefined;
  }
  render() {
    var _a;
    // check for forms.
    if (document.querySelector('sc-checkout')) {
      return;
    }
    // clear the order if it's already paid.
    if (((_a = state === null || state === void 0 ? void 0 : state.checkout) === null || _a === void 0 ? void 0 : _a.status) === 'paid') {
      state.checkout = null;
      return null;
    }
    // return the loader.
    return h("div", { innerHTML: this.template || '' });
  }
};
ScCartLoader.style = scCartLoaderCss;

export { ScCartLoader as sc_cart_loader };

//# sourceMappingURL=sc-cart-loader.entry.js.map