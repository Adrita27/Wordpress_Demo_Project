const isValidURL=t=>{let o;try{o=new URL(t)}catch(t){return!1}return"http:"===o.protocol||"https:"===o.protocol},getValueFromUrl=t=>{const o=window.location.search;return new URLSearchParams(o).get(t)},sortByArray=(t,o,r)=>(t||[]).sort(((t,n)=>-1===r.indexOf(null==t?void 0:t[o])?1:-1===r.indexOf(null==n?void 0:n[o])?-1:r.indexOf(null==t?void 0:t[o])-r.indexOf(null==n?void 0:n[o]))),getVariantFromValues=({variants:t,values:o})=>{const r=Object.keys(o);for(const n of t){const t=["option_1","option_2","option_3"].map((t=>n[t])).filter((t=>null!=t));if((null==t?void 0:t.length)===(null==r?void 0:r.length)&&r.every((r=>t.includes(o[r]))))return n}return null};export{getValueFromUrl as a,getVariantFromValues as g,isValidURL as i,sortByArray as s};