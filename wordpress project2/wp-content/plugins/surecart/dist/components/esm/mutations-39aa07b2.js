import{s as state,c as clearCheckout$1}from"./google-cb3a19c3.js";import{u as updateFormState}from"./mutations-bde8c32d.js";import{c as createErrorNotice}from"./mutations-79f42351.js";import{u as updateLineItem,r as removeLineItem}from"./index-d8b1c389.js";const clearCheckout=()=>clearCheckout$1(state.formId,state.mode),lockCheckout=t=>state.locks=[...state.locks,t],unLockCheckout=(t="")=>state.locks=t?state.locks.filter((e=>e!==t)):[],updateCheckoutLineItem=async({id:t,data:e})=>{try{updateFormState("FETCH"),state.checkout=await updateLineItem({id:t,data:e}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}},removeCheckoutLineItem=async t=>{try{updateFormState("FETCH"),state.checkout=await removeLineItem({checkoutId:state.checkout.id,itemId:t}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}};export{updateCheckoutLineItem as a,clearCheckout as c,lockCheckout as l,removeCheckoutLineItem as r,unLockCheckout as u};