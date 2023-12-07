'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');
const google = require('./google-a04e0fd5.js');
require('./currency-ba038e2f.js');
require('./add-query-args-17c551b6.js');
require('./index-00f0fc21.js');
require('./get-query-arg-53bf21e2.js');
require('./utils-45815a15.js');

const scCartLoaderCss = ":host{position:absolute;z-index:var(--sc-cart-z-index, 999999);font-family:var(--sc-font-sans)}";

const ScCartLoader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.template = undefined;
  }
  render() {
    var _a;
    // check for forms.
    if (document.querySelector('sc-checkout')) {
      return;
    }
    // clear the order if it's already paid.
    if (((_a = google.state === null || google.state === void 0 ? void 0 : google.state.checkout) === null || _a === void 0 ? void 0 : _a.status) === 'paid') {
      google.state.checkout = null;
      return null;
    }
    // return the loader.
    return index.h("div", { innerHTML: this.template || '' });
  }
};
ScCartLoader.style = scCartLoaderCss;

exports.sc_cart_loader = ScCartLoader;

//# sourceMappingURL=sc-cart-loader.cjs.entry.js.map