import{s as state,o as onChange,v,c as checkoutMachine}from"./store-b85bbb50.js";import{s as speak}from"./index-b0f661a7.js";const service=v(checkoutMachine);service.subscribe((e=>state.formState=e)),service.start(),onChange("formState",(()=>{const{formState:e}=state,{value:t}=e;void 0!==state.text.loading[t]&&speak(state.text.loading[t],"assertive")}));const{send:send}=service,updateFormState=e=>send(e);export{updateFormState as u};