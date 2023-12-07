import{r as i,c as t,h as n,H as s,a as e}from"./p-cc7ce8c7.js";import{F as r}from"./p-8617d8eb.js";const o=":host{--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary);display:block;position:relative}.input__control[type=number]{-moz-appearance:textfield}.input__control::-webkit-outer-spin-button,.input__control::-webkit-inner-spin-button{-webkit-appearance:none}.input{flex:1 1 auto;display:inline-flex;align-items:center;justify-content:start;position:relative;width:100%;box-sizing:border-box;font-family:var(--sc-input-font-family);font-weight:var(--sc-input-font-weight);letter-spacing:var(--sc-input-letter-spacing);background-color:var(--sc-input-background-color);border:solid 1px var(--sc-input-border-color, var(--sc-input-border));vertical-align:middle;box-shadow:var(--sc-input-box-shadow);transition:var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow;cursor:text}.input:hover:not(.input--disabled){background-color:var(--sc-input-background-color-hover);border-color:var(--sc-input-border-color-hover);z-index:7}.input:hover:not(.input--disabled) .input__control{color:var(--sc-input-color-hover)}.input.input--focused:not(.input--disabled){background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);box-shadow:var(--focus-ring);z-index:8}.input.input--focused:not(.input--disabled) .input__control{color:var(--sc-input-color-focus)}.input.input--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.input.input--disabled .input__control{color:var(--sc-input-color-disabled)}.input.input--disabled .input__control::placeholder{color:var(--sc-input-placeholder-color-disabled)}.input__control{flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;min-width:0;height:100%;color:var(--sc-input-color);border:none;background:none;box-shadow:none;padding:0;margin:0;cursor:inherit;-webkit-appearance:none;box-sizing:border-box;width:100%}.input__control::-webkit-search-decoration,.input__control::-webkit-search-cancel-button,.input__control::-webkit-search-results-button,.input__control::-webkit-search-results-decoration{-webkit-appearance:none}.input__control:-webkit-autofill,.input__control:-webkit-autofill:hover,.input__control:-webkit-autofill:focus,.input__control:-webkit-autofill:active{box-shadow:0 0 0 var(--sc-input-height-large) var(--sc-input-background-color-hover) inset !important;-webkit-text-fill-color:var(--sc-input-color)}.input__control::placeholder{color:var(--sc-input-placeholder-color);user-select:none}.input__control:focus{outline:none}.input__prefix,.input__suffix{display:inline-flex;flex:0 0 auto;align-items:center;color:var(--sc-input-color);cursor:default}.input__prefix ::slotted(sc-icon),.input__suffix ::slotted(sc-icon){color:var(--sc-input-icon-color)}.input--small{border-radius:var(--sc-input-border-radius-small);font-size:var(--sc-input-font-size-small);height:var(--sc-input-height-small)}.input--small .input__control{height:calc(var(--sc-input-height-small) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-small)}.input--small .input__clear,.input--small .input__password-toggle{margin-right:var(--sc-input-spacing-small)}.input--small .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-small)}.input--small .input__suffix ::slotted(*){margin-right:var(--sc-input-spacing-small)}.input--small .input__suffix ::slotted(sc-dropdown){margin:0}.input--medium{border-radius:var(--sc-input-border-radius-medium);font-size:var(--sc-input-font-size-medium);height:var(--sc-input-height-medium)}.input--medium .input__control{height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-medium)}.input--medium .input__clear,.input--medium .input__password-toggle{margin-right:var(--sc-input-spacing-medium)}.input--medium .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-medium) !important}.input--medium .input__suffix ::slotted(:not(sc-button[size=medium])){margin-right:var(--sc-input-spacing-medium) !important}.input--medium .input__suffix ::slotted(sc-tag){margin-right:var(--sc-input-spacing-small) !important}.input--medium .input__suffix ::slotted(sc-dropdown){margin:3px}.input--large{border-radius:var(--sc-input-border-radius-large);font-size:var(--sc-input-font-size-large);height:var(--sc-input-height-large)}.input--large .input__control{height:calc(var(--sc-input-height-large) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-large)}.input--large .input__clear,.input--large .input__password-toggle{margin-right:var(--sc-input-spacing-large)}.input--large .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-large)}.input--large .input__suffix ::slotted(*){margin-right:var(--sc-input-spacing-large)}.input--large .input__suffix ::slotted(sc-dropdown){margin:3px}.input--pill.input--small{border-radius:var(--sc-input-height-small)}.input--pill.input--medium{border-radius:var(--sc-input-height-medium)}.input--pill.input--large{border-radius:var(--sc-input-height-large)}.input__clear,.input__password-toggle{display:inline-flex;align-items:center;font-size:inherit;color:var(--sc-input-icon-color);border:none;background:none;padding:0;transition:var(--sc-input-transition, var(--sc-transition-medium)) color;cursor:pointer}.input__clear:hover,.input__password-toggle:hover{color:var(--sc-input-icon-color-hover)}.input__clear:focus,.input__password-toggle:focus{outline:none}.input--empty .input__clear{visibility:hidden}.input--squared{border-radius:0}.input--squared-top{border-top-left-radius:0;border-top-right-radius:0}.input--squared-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.input--squared-left{border-top-left-radius:0;border-bottom-left-radius:0}.input--squared-right{border-top-right-radius:0;border-bottom-right-radius:0}";let a=0;const u=class{constructor(n){i(this,n);this.scChange=t(this,"scChange",7);this.scClear=t(this,"scClear",7);this.scInput=t(this,"scInput",7);this.scFocus=t(this,"scFocus",7);this.scBlur=t(this,"scBlur",7);this.inputId=`input-${++a}`;this.helpId=`input-help-text-${a}`;this.labelId=`input-label-${a}`;this.squared=undefined;this.squaredBottom=undefined;this.squaredTop=undefined;this.squaredLeft=undefined;this.squaredRight=undefined;this.hidden=false;this.type="text";this.size="medium";this.name=undefined;this.value="";this.pill=false;this.label=undefined;this.showLabel=true;this.help="";this.clearable=false;this.togglePassword=false;this.placeholder=undefined;this.disabled=false;this.readonly=false;this.minlength=undefined;this.maxlength=undefined;this.min=undefined;this.max=undefined;this.step=undefined;this.pattern=undefined;this.required=false;this.invalid=false;this.autocorrect=undefined;this.autocomplete=undefined;this.autofocus=undefined;this.spellcheck=undefined;this.inputmode=undefined;this.hasFocus=undefined;this.isPasswordVisible=false}async reportValidity(){return this.input.reportValidity()}async triggerFocus(i){return this.input.focus(i)}async setCustomValidity(i){this.input.setCustomValidity(i);this.invalid=!this.input.checkValidity()}async triggerBlur(){return this.input.blur()}select(){return this.input.select()}handleBlur(){this.hasFocus=false;this.scBlur.emit()}handleFocus(){this.hasFocus=true;this.scFocus.emit()}handleChange(){this.value=this.input.value;this.scChange.emit()}handleInput(){this.value=this.input.value;this.scInput.emit()}handleClearClick(i){this.value="";this.scClear.emit();this.scInput.emit();this.scChange.emit();this.input.focus();i.stopPropagation()}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleFocusChange(){setTimeout((()=>{this.hasFocus&&this.input?this.input.focus():this.input.blur()}),0)}handleValueChange(){if(this.input){this.invalid=!this.input.checkValidity()}}componentDidLoad(){this.formController=new r(this.el).addFormData();this.handleFocusChange()}disconnectedCallback(){var i;(i=this.formController)===null||i===void 0?void 0:i.removeFormData()}render(){var i;return n(s,{hidden:this.hidden},n("sc-form-control",{exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,showLabel:this.showLabel,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId,name:this.name},n("slot",{name:"label-end",slot:"label-end"}),n("div",{part:"base",class:{input:true,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--focused":this.hasFocus,"input--invalid":this.invalid,"input--disabled":this.disabled,"input--squared":this.squared,"input--squared-bottom":this.squaredBottom,"input--squared-top":this.squaredTop,"input--squared-left":this.squaredLeft,"input--squared-right":this.squaredRight}},n("span",{part:"prefix",class:"input__prefix"},n("slot",{name:"prefix"})),n("slot",null,n("input",{part:"input",id:this.inputId,class:"input__control",ref:i=>this.input=i,type:this.type==="password"&&this.isPasswordVisible?"text":this.type,name:this.name,disabled:this.disabled,readonly:this.readonly,required:this.required,placeholder:this.placeholder,minlength:this.minlength,maxlength:this.maxlength,min:this.min,max:this.max,step:this.step,autocomplete:this.autocomplete,autocorrect:this.autocorrect,autofocus:this.autofocus,spellcheck:this.spellcheck,pattern:this.pattern,inputmode:this.inputmode,"aria-label":this.label,"aria-labelledby":this.labelId,"aria-invalid":this.invalid?true:false,value:this.value,onChange:()=>this.handleChange(),onInput:()=>this.handleInput(),onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur()})),n("span",{part:"suffix",class:"input__suffix"},n("slot",{name:"suffix"})),this.clearable&&((i=this.value)===null||i===void 0?void 0:i.length)>0&&n("button",{part:"clear-button",class:"input__clear",type:"button",onClick:i=>this.handleClearClick(i),tabindex:"-1"},n("slot",{name:"clear-icon"},n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x"},n("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n("line",{x1:"6",y1:"6",x2:"18",y2:"18"})))))))}get el(){return e(this)}static get watchers(){return{hasFocus:["handleFocusChange"],value:["handleValueChange"]}}};u.style=o;export{u as sc_input};
//# sourceMappingURL=p-0a4e0448.entry.js.map