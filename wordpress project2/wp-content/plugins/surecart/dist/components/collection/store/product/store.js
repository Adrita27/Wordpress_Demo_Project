var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p;import{createStore}from"@stencil/store";import{productViewed}from"./events";const product=(null===(_b=null===(_a=null===window||void 0===window?void 0:window.scData)||void 0===_a?void 0:_a.product_data)||void 0===_b?void 0:_b.product)||null,prices=(null===(_c=null==product?void 0:product.prices)||void 0===_c?void 0:_c.data)||[],variant_options=(null===(_d=null==product?void 0:product.variant_options)||void 0===_d?void 0:_d.data)||[],variants=((null===(_e=null==product?void 0:product.variants)||void 0===_e?void 0:_e.data)||[]).sort(((o,i)=>(null==o?void 0:o.position)-(null==i?void 0:i.position))),selectedPrice=(prices||[]).sort(((o,i)=>(null==o?void 0:o.position)-(null==i?void 0:i.position))).find((o=>!(null==o?void 0:o.archived))),selectedVariant=(null==variants?void 0:variants.length)?variants.find((o=>!((null==product?void 0:product.stock_enabled)&&!(null==product?void 0:product.allow_out_of_stock_purchases))||(null==o?void 0:o.available_stock)>0)):null,adHocAmount=(null==selectedPrice?void 0:selectedPrice.amount)||null;product&&productViewed(product);const store=createStore({formId:null===(_h=null===(_g=null===(_f=null===window||void 0===window?void 0:window.scData)||void 0===_f?void 0:_f.product_data)||void 0===_g?void 0:_g.form)||void 0===_h?void 0:_h.ID,mode:(null===(_k=null===(_j=null===window||void 0===window?void 0:window.scData)||void 0===_j?void 0:_j.product_data)||void 0===_k?void 0:_k.mode)||"live",product:product,prices:prices,variant_options:variant_options,variants:variants,quantity:1,selectedPrice:selectedPrice,total:null,dialog:null,busy:!1,disabled:(null==selectedPrice?void 0:selectedPrice.archived)||(null==product?void 0:product.archived),adHocAmount:adHocAmount,error:null,checkoutUrl:null===(_m=null===(_l=null===window||void 0===window?void 0:window.scData)||void 0===_l?void 0:_l.product_data)||void 0===_m?void 0:_m.checkout_link,line_item:{price_id:null==selectedPrice?void 0:selectedPrice.id,quantity:1,...(null==selectedPrice?void 0:selectedPrice.ad_hoc)?{ad_hoc_amount:adHocAmount}:{},variant:(null==variants?void 0:variants.length)?null===(_o=variants[0])||void 0===_o?void 0:_o.id:null},selectedVariant:selectedVariant,variantValues:{...(null==selectedVariant?void 0:selectedVariant.option_1)?{option_1:null==selectedVariant?void 0:selectedVariant.option_1}:{},...(null==selectedVariant?void 0:selectedVariant.option_2)?{option_2:null==selectedVariant?void 0:selectedVariant.option_2}:{},...(null==selectedVariant?void 0:selectedVariant.option_3)?{option_3:null==selectedVariant?void 0:selectedVariant.option_3}:{}}},((o,i)=>JSON.stringify(o)!==JSON.stringify(i))),{state:state,onChange:onChange,on:on,dispose:dispose,forceUpdate:forceUpdate}=store;export default state;export{state,onChange,on,dispose,forceUpdate};(null===(_p=null===window||void 0===window?void 0:window.sc)||void 0===_p?void 0:_p.store)&&(window.sc.store.product=store);