import { r as registerInstance, h, c as createEvent, a as getElement, H as Host } from './index-644f5478.js';
import { i as isRtl } from './page-align-8602c4c7.js';
import { m as maybeConvertAmount } from './currency-728311ef.js';
import { F as FormSubmitController } from './form-data-dd63c61f.js';
import { s as state } from './google-cb3a19c3.js';
import { l as lockCheckout, u as unLockCheckout } from './mutations-39aa07b2.js';
import { c as createOrUpdateCheckout } from './index-d8b1c389.js';
import { c as checkoutIsLocked } from './getters-fe6648a2.js';
import { c as createErrorNotice } from './mutations-79f42351.js';
import { s as speak } from './index-b0f661a7.js';
import { g as getFormattedPrice } from './price-12416e4b.js';
import './add-query-args-f4c5962b.js';
import './index-1046c77e.js';
import './get-query-arg-cb6b8763.js';
import './utils-f20e895e.js';
import './mutations-bde8c32d.js';
import './store-b85bbb50.js';
import './fetch-2525e763.js';

const scBlockUiCss = ":host{display:block;position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;overflow:hidden;display:flex;align-items:center;justify-content:center}:host>*{z-index:1}:host:after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;cursor:wait;background:var(--sc-block-ui-background-color, var(--sc-color-white));opacity:var(--sc-block-ui-opacity, 0.15)}:host.transparent:after{background:transparent}.overlay__content{font-size:var(--sc-font-size-large);font-weight:var(--sc-font-weight-semibold);display:grid;gap:0.5em;text-align:center}";

const ScBlockUi = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.zIndex = 1;
    this.transparent = undefined;
    this.spinner = undefined;
  }
  render() {
    return (h("div", { part: "base", class: { overlay: true, transparent: this.transparent }, style: { 'z-index': this.zIndex.toString() } }, h("div", { class: "overlay__content", part: "content" }, h("slot", { name: "spinner" }, !this.transparent && this.spinner && h("sc-spinner", null)), h("slot", null))));
  }
};
ScBlockUi.style = scBlockUiCss;

/**
 * Serializes a form and returns a plain object. If a form control with the same name appears more than once, the
 * property will be converted to an array.
 */
function serialize(form) {
  const formData = new FormData(form);
  const object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  return object;
}

const scFormCss = "sc-form{display:block}:host{display:block}::slotted(*:not(:last-child)),sc-form form>*:not(:last-child){margin-bottom:var(--sc-form-row-spacing, 0.75em)}::slotted(*:not(:last-child)).wp-block-spacer,sc-form form>*:not(:last-child).wp-block-spacer{margin-bottom:0}";

const ScForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scSubmit = createEvent(this, "scSubmit", 7);
    this.scFormSubmit = createEvent(this, "scFormSubmit", 7);
    this.scFormChange = createEvent(this, "scFormChange", 7);
    this.novalidate = false;
  }
  /** Serializes all form controls elements and returns a `FormData` object. */
  async getFormData() {
    return new FormData(this.formElement);
  }
  async getFormJson() {
    return serialize(this.formElement);
  }
  async handleChange() {
    this.scFormChange.emit(serialize(this.formElement));
  }
  async submit() {
    return this.submitForm();
  }
  /** Gets all form control elements (native and custom). */
  getFormControls() {
    return [...this.form.querySelectorAll('*')];
  }
  async validate() {
    const formControls = this.getFormControls();
    const formControlsThatReport = formControls.filter((el) => typeof el.reportValidity === 'function');
    if (!this.novalidate) {
      for (const el of formControlsThatReport) {
        // element is hidden, don't client-side validate.
        if (!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)) {
          continue;
        }
        const isValid = await el.reportValidity();
        if (!isValid) {
          return false;
        }
      }
    }
    return true;
  }
  submitForm() {
    // Calling form.submit() seems to bypass the submit event and constraint validation. Instead, we can inject a
    // native submit button into the form, click it, then remove it to simulate a standard form submission.
    const button = document.createElement('button');
    if (this.formElement) {
      button.type = 'submit';
      button.style.position = 'absolute';
      button.style.width = '0';
      button.style.height = '0';
      button.style.clip = 'rect(0 0 0 0)';
      button.style.clipPath = 'inset(50%)';
      button.style.overflow = 'hidden';
      button.style.whiteSpace = 'nowrap';
      this.formElement.append(button);
      button.click();
      button.remove();
    }
  }
  render() {
    return (h("div", { part: "base", class: "form", role: "form" }, h("form", { part: "form", ref: el => (this.formElement = el), class: "test", onSubmit: async (e) => {
        e.preventDefault();
        const isValid = await this.validate();
        if (!isValid) {
          return false;
        }
        this.scSubmit.emit();
        this.scFormSubmit.emit();
      }, novalidate: this.novalidate }, h("slot", null))));
  }
  get form() { return getElement(this); }
};
ScForm.style = scFormCss;

const scFormControlCss = ".form-control{font-family:var(--sc-font-sans);font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-normal);display:flex;flex-direction:column;gap:var(--sc-input-label-margin)}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control--has-label .form-control__label{display:inline-block;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0)}.form-control--has-label.form-control--small .form-control__label{font-size:var(--sc-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--sc-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--sc-input-label-font-size-large)}::slotted(.control--errors){margin-top:var(--sc-spacing-small);color:var(--sc-color-danger-500)}::slotted([slot=label-end]){float:right}.form-control--is-required .required{color:var(--sc-color-danger-500)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--sc-input-help-text-color)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--sc-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--sc-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--sc-input-help-text-font-size-large)}.form-control--has-error .form-control__error-text{display:block;color:var(--sc-input-error-text-color)}.form-control--has-error.form-control--small .form-control__error-text{font-size:var(--sc-input-error-text-font-size-small)}.form-control--has-error.form-control--medium .form-control__error-text{font-size:var(--sc-input-error-text-font-size-medium)}.form-control--has-error.form-control--large .form-control__error-text{font-size:var(--sc-input-error-text-font-size-large)}.form-control--has-error ::part(base){border-color:rgb(var(--sl-color-danger-500))}.form-control--is-rtl.form-control--has-label .form-control__label{text-align:right}";

const ScFormControl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = 'medium';
    this.name = undefined;
    this.showLabel = true;
    this.label = undefined;
    this.labelId = undefined;
    this.inputId = undefined;
    this.required = false;
    this.help = undefined;
    this.helpId = undefined;
  }
  render() {
    return (h("div", { part: "form-control", class: {
        'form-control': true,
        'form-control--small': this.size === 'small',
        'form-control--medium': this.size === 'medium',
        'form-control--large': this.size === 'large',
        'form-control--has-label': !!this.label && this.showLabel,
        'form-control--has-help-text': !!this.help,
        'form-control--is-required': !!this.required,
        'form-control--is-rtl': isRtl(),
      } }, h("label", { part: "label", id: this.labelId, class: "form-control__label", htmlFor: this.inputId, "aria-hidden": !!this.label ? 'false' : 'true' }, h("slot", { name: "label" }, this.label), h("slot", { name: "label-end" }), !!this.required && (h("span", { "aria-hidden": "true", class: "required" }, ' ', "*")), h("sc-visually-hidden", null, !!this.required ? wp.i18n.__('required', 'surecart') : '')), h("div", { part: "input", class: "form-control__input" }, h("slot", null)), this.help && (h("div", { part: "help-text", id: this.helpId, class: "form-control__help-text" }, h("slot", { name: "help-text" }, this.help)))));
  }
  get el() { return getElement(this); }
};
ScFormControl.style = scFormControlCss;

const UNIT_TYPES = {
  kg: 'kilogram',
  lb: 'pound',
  g: 'gram',
  oz: 'ounce',
};
const ScFormatNumber = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = 0;
    this.locale = undefined;
    this.type = 'decimal';
    this.noGrouping = false;
    this.currency = 'USD';
    this.currencyDisplay = 'symbol';
    this.minimumIntegerDigits = undefined;
    this.minimumFractionDigits = null;
    this.maximumFractionDigits = undefined;
    this.minimumSignificantDigits = undefined;
    this.maximumSignificantDigits = undefined;
    this.noConvert = undefined;
    this.unit = 'lb';
  }
  render() {
    if (isNaN(this.value)) {
      return '';
    }
    const lang = navigator.language || (navigator === null || navigator === void 0 ? void 0 : navigator.browserLanguage) || (navigator.languages || ['en'])[0];
    // maybe convert zero decimal currencies.
    const value = this.noConvert || this.type !== 'currency' ? this.value : maybeConvertAmount(this.value, this.currency.toUpperCase());
    // decide how many decimal places to use.
    const minimumFractionDigits = value % 1 == 0 ? 0 : 2;
    return new Intl.NumberFormat(this.locale || lang, {
      style: this.type,
      currency: this.currency.toUpperCase(),
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits !== null ? this.minimumFractionDigits : minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits,
      unit: UNIT_TYPES[this.unit],
    }).format(value);
  }
};

const scRadioCss = ":host{display:inline-block}.radio{display:inline-flex;align-items:flex-start;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;gap:var(--sc-spacing-xx-small)}.radio:not(.radio--editing){cursor:pointer}.radio__icon{display:inline-flex;width:var(--sc-radio-size);height:var(--sc-radio-size)}.radio__icon svg{width:100%;height:100%}.radio__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--sc-radio-size);height:var(--sc-radio-size);border:solid var(--sc-input-border-width) var(--sc-input-border-color);border-radius:50%;background-color:var(--sc-input-background-color);color:transparent;transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) opacity, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.radio__control input[type=radio]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover{border-color:var(--sc-input-border-color-hover);background-color:var(--sc-input-background-color-hover)}.radio.radio--focused:not(.radio--checked):not(.radio--disabled) .radio__control{border-color:var(--sc-input-border-color-focus);background-color:var(--sc-input-background-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.radio--checked .radio__control{color:var(--var-sc-checked-radio-background-color, var(--sc-input-background-color));border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.radio.radio--checked:not(.radio--disabled) .radio__control:hover{opacity:0.8}.radio.radio--checked:not(.radio--disabled).radio--focused .radio__control{border-color:var(--var-sc-checked-radio-border-color, var(--sc-input-background-color));background-color:var(--sc-color-primary-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.radio--disabled{opacity:0.5;cursor:not-allowed}.radio:not(.radio--checked) svg circle{opacity:0}.radio__label{line-height:var(--sc-radio-size);margin-left:0.5em;user-select:none}";

let id = 0;
const ScRadio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scBlur = createEvent(this, "scBlur", 7);
    this.scChange = createEvent(this, "scChange", 7);
    this.scFocus = createEvent(this, "scFocus", 7);
    this.inputId = `radio-${++id}`;
    this.labelId = `radio-label-${id}`;
    this.hasFocus = false;
    this.name = undefined;
    this.value = undefined;
    this.disabled = false;
    this.checked = false;
    this.required = false;
    this.invalid = false;
    this.edit = undefined;
  }
  /** Simulates a click on the radio. */
  async ceClick() {
    this.input.click();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  async reportValidity() {
    this.invalid = !this.input.checkValidity();
    return this.input.reportValidity();
  }
  handleCheckedChange() {
    if (!this.input)
      return;
    if (this.checked) {
      this.getSiblingRadios().map(radio => (radio.checked = false));
    }
    this.input.checked = this.checked;
    this.scChange.emit();
  }
  handleClick() {
    this.checked = true;
  }
  handleBlur() {
    this.hasFocus = false;
    this.scBlur.emit();
  }
  handleFocus() {
    this.hasFocus = true;
    this.scFocus.emit();
  }
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  getAllRadios() {
    const radioGroup = this.el.closest('sc-radio-group');
    // Radios must be part of a radio group
    if (!radioGroup) {
      return [];
    }
    return [...radioGroup.querySelectorAll('sc-radio')];
  }
  getSiblingRadios() {
    return this.getAllRadios().filter(radio => radio !== this.el);
  }
  handleKeyDown(event) {
    if (this.edit)
      return true;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      const radios = this.getAllRadios().filter(radio => !radio.disabled);
      const incr = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
      let index = radios.indexOf(this.el) + incr;
      if (index < 0)
        index = radios.length - 1;
      if (index > radios.length - 1)
        index = 0;
      this.getAllRadios().map(radio => (radio.checked = false));
      radios[index].focus();
      radios[index].checked = true;
      event.preventDefault();
    }
  }
  // Prevent clicks on the label from briefly blurring the input
  handleMouseDown(event) {
    if (this.edit)
      return true;
    event.preventDefault();
    this.input.focus();
  }
  componentDidLoad() {
    this.formController = new FormSubmitController(this.el, {
      value: (control) => (control.checked ? control.value : undefined),
    }).addFormData();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.formController) === null || _a === void 0 ? void 0 : _a.removeFormData();
  }
  render() {
    const Tag = this.edit ? 'div' : 'label';
    return (h(Tag, { part: "base", class: {
        'radio': true,
        'radio--checked': this.checked,
        'radio--disabled': this.disabled,
        'radio--focused': this.hasFocus,
        'radio--editing': this.edit,
      }, htmlFor: this.inputId, onKeyDown: e => this.handleKeyDown(e), onMouseDown: e => this.handleMouseDown(e) }, h("span", { part: "control", class: "radio__control" }, h("span", { part: "checked-icon", class: "radio__icon" }, h("svg", { viewBox: "0 0 16 16" }, h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, h("g", { fill: "currentColor" }, h("circle", { cx: "8", cy: "8", r: "3.42857143" }))))), h("input", { id: this.inputId, ref: el => (this.input = el), type: "radio", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, required: this.required, "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-labelledby": this.labelId, onClick: () => this.handleClick(), onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus() })), h("span", { part: "label", id: this.labelId, class: "radio__label" }, h("slot", null))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "checked": ["handleCheckedChange"]
  }; }
};
ScRadio.style = scRadioCss;

const scRadioGroupCss = ":host{display:block}.radio-group{border:none;padding:0;margin:0;min-width:0}.radio-group .radio-group__label{display:inline-block;padding:0;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0);margin-bottom:var(--sc-input-label-margin)}.radio-group__hidden-input{position:absolute;opacity:0;padding:0px;margin:0px;pointer-events:none}.radio-group--is-required .radio-group__label:after{content:\" *\";color:var(--sc-color-danger-500)}::slotted(sc-radio:not(:last-of-type)){display:block;margin-bottom:var(--sc-spacing-x-small)}.radio-group--is-rtl.radio-group,.radio-group--is-rtl.radio-group .radio-group__label{text-align:right}";

const ScRadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scChange = createEvent(this, "scChange", 7);
    this.label = '';
    this.invalid = undefined;
    this.value = '';
    this.required = undefined;
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  async reportValidity() {
    this.invalid = !this.input.checkValidity();
    return this.input.reportValidity();
  }
  handleRadioClick(event) {
    if (event.target.tagName !== 'SC-RADIO')
      return;
    event.stopImmediatePropagation();
    const target = event.target;
    if (target.disabled) {
      return;
    }
    if (target.checked) {
      this.value = target.value;
      this.scChange.emit(target.value);
    }
  }
  render() {
    return (h("fieldset", { part: "base", class: {
        'radio-group': true,
        'radio-group--invalid': this.invalid,
        'radio-group--is-required': this.required,
        'radio-group--is-rtl': isRtl(),
      }, "aria-invalid": this.invalid, role: "radiogroup" }, h("legend", { part: "label", class: "radio-group__label" }, h("slot", { name: "label" }, this.label)), h("input", { type: "text", class: "radio-group__hidden-input", ref: el => (this.input = el), required: this.required, value: this.value, tabindex: "-1" }), h("div", { part: "items", class: "radio-group__items" }, h("slot", null))));
  }
};
ScRadioGroup.style = scRadioGroupCss;

const scShippingChoicesCss = ":host{display:block}.shipping-choice{width:100%;padding:var(--sc-spacing-medium);margin:0;box-sizing:border-box;border-bottom:var(--sc-input-border, 1px solid var(--sc-color-gray-300))}.shipping-choice__empty{background:var(--sc-alert-background-color, var(--sc-color-gray-100));opacity:0.75;padding:var(--sc-spacing-large);border-radius:var(--sc-input-border-radius-medium);line-height:var(--sc-line-height-dense);font-size:var(--sc-font-size-small);border:solid 1px var(--sc-input-border-color, var(--sc-input-border))}.shipping-choice:last-child{border-bottom-width:0}.shipping-choice__text{display:flex;flex-direction:column;gap:var(--sc-spacing-xx-small)}.shipping-choice__price{color:var(--sc-input-label-color);font-weight:var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));white-space:nowrap}.shipping-choice__name{display:inline-block;color:var(--sc-price-choice-name-color, var(--sc-input-label-color));font-size:var(--sc-price-choice-name-size, var(--sc-input-label-font-size-medium));font-weight:var(--sc-price-choice-name-font-weight, var(--sc-font-weight-bold));text-transform:var(--sc-price-choice-text-transform, var(--sc-input-label-text-transform, none));line-height:var(--sc-shipping-name-line-height, 1)}.shipping-choice__description{color:var(--sc-input-label-color);font-weight:var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));line-height:var(--sc-shipping-description-line-height, 1.2)}sc-radio-group::part(items){border:var(--sc-input-border, 1px solid var(--sc-color-gray-300));border-radius:var(--sc-shipping-choice-border-radius, var(--sc-input-border-radius-medium));box-shadow:var(--sc-shipping-box-shadow, var(--sc-input-box-shadow));overflow:hidden;position:relative}sc-radio::part(base){width:100%}sc-radio::part(label){width:100%;display:flex;justify-content:space-between;gap:var(--sc-spacing-small)}sc-radio-group::slotted(sc-radio:not(:last-of-type)){margin-bottom:0}";

const ScShippingChoices = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = undefined;
    this.showDescription = true;
  }
  /** Maybe update the order. */
  async updateCheckout(selectedShippingChoiceId) {
    if (!selectedShippingChoiceId)
      return;
    try {
      lockCheckout('selected_shipping_choice');
      state.checkout = (await createOrUpdateCheckout({
        id: state.checkout.id,
        data: {
          selected_shipping_choice_id: selectedShippingChoiceId,
        },
      }));
      speak(wp.i18n.__('Shipping choice updated.', 'surecart'), 'assertive');
      const { total_amount, currency } = state.checkout;
      /** translators: %1$s: formatted amount */
      speak(wp.i18n.sprintf(wp.i18n.__('Your order total has changed to: %1$s.', 'surecart'), getFormattedPrice({ amount: total_amount, currency })), 'assertive');
    }
    catch (e) {
      console.error(e);
      createErrorNotice(e);
    }
    finally {
      unLockCheckout('selected_shipping_choice');
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    // shipping choice is not rewquired.
    if (!((_a = state === null || state === void 0 ? void 0 : state.checkout) === null || _a === void 0 ? void 0 : _a.selected_shipping_choice_required)) {
      return h(Host, { style: { display: 'none' } });
    }
    // no shipping choices yet.
    if (!((_d = (_c = (_b = state === null || state === void 0 ? void 0 : state.checkout) === null || _b === void 0 ? void 0 : _b.shipping_choices) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.length)) {
      return (h("sc-form-control", { part: 'empty', label: this.label || wp.i18n.__('Shipping', 'surecart') }, h("div", { class: "shipping-choice__empty" }, wp.i18n.__('Sorry, we are not able to ship to your address.', 'surecart'))));
    }
    return (h(Host, null, h("sc-radio-group", { part: 'base', label: this.label || wp.i18n.__('Shipping', 'surecart'), class: "shipping-choices", onScChange: e => this.updateCheckout(e.detail) }, (((_f = (_e = state === null || state === void 0 ? void 0 : state.checkout) === null || _e === void 0 ? void 0 : _e.shipping_choices) === null || _f === void 0 ? void 0 : _f.data) || []).map(({ id, amount, currency, shipping_method }) => {
      var _a;
      return (h("sc-radio", { key: id, checked: ((_a = state === null || state === void 0 ? void 0 : state.checkout) === null || _a === void 0 ? void 0 : _a.selected_shipping_choice) === id, exportparts: 'base:radio__base,label:radio__label,control:radio__control,checked-icon:radio__checked-icon', class: "shipping-choice", value: id }, h("div", { class: "shipping-choice__text" }, h("div", { class: "shipping-choice__name" }, (shipping_method === null || shipping_method === void 0 ? void 0 : shipping_method.name) || wp.i18n.__('Standard Shipping', 'surecart')), this.showDescription && !!(shipping_method === null || shipping_method === void 0 ? void 0 : shipping_method.description) && (h("div", { class: "shipping-choice__description" }, shipping_method === null || shipping_method === void 0 ? void 0 : shipping_method.description))), h("div", { class: "shipping-choice__price" }, !!amount ? h("sc-format-number", { type: "currency", value: amount, currency: currency }) : wp.i18n.__('Free', 'surecart'))));
    })), checkoutIsLocked('selected_shipping_choice') && h("sc-block-ui", null)));
  }
};
ScShippingChoices.style = scShippingChoicesCss;

const scSpinnerCss = ":host{--track-color:#0d131e20;--indicator-color:var(--sc-color-primary-500);--stroke-width:2px;--spinner-size:1em;display:inline-block}.spinner{display:inline-block;width:var(--spinner-size);height:var(--spinner-size);border-radius:50%;border:solid var(--stroke-width) var(--track-color);border-top-color:var(--indicator-color);border-right-color:var(--indicator-color);animation:1s linear infinite spin}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

const ScSpinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("span", { part: "base", class: "spinner", "aria-busy": "true", "aria-live": "polite" });
  }
};
ScSpinner.style = scSpinnerCss;

const scVisuallyHiddenCss = ":host(:not(:focus-within)){position:absolute !important;width:1px !important;height:1px !important;clip:rect(0 0 0 0) !important;clip-path:inset(50%) !important;border:none !important;overflow:hidden !important;white-space:nowrap !important;padding:0 !important}";

const ScVisuallyHidden = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("slot", null);
  }
};
ScVisuallyHidden.style = scVisuallyHiddenCss;

export { ScBlockUi as sc_block_ui, ScForm as sc_form, ScFormControl as sc_form_control, ScFormatNumber as sc_format_number, ScRadio as sc_radio, ScRadioGroup as sc_radio_group, ScShippingChoices as sc_shipping_choices, ScSpinner as sc_spinner, ScVisuallyHidden as sc_visually_hidden };

//# sourceMappingURL=sc-block-ui_9.entry.js.map