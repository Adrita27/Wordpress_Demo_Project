import{r as e,h as o}from"./p-cc7ce8c7.js";const s=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--border-radius:var(--sc-border-radius-pill);--color:var(--sc-skeleton-color, var(--sc-color-gray-300));--sheen-color:var(--sc-skeleton-sheen-color, var(--sc-color-gray-400));display:block;position:relative}.skeleton{display:flex;width:100%;height:100%;min-height:1rem}.skeleton__indicator{flex:1 1 auto;background:var(--color);border-radius:var(--border-radius)}.skeleton--sheen .skeleton__indicator{background:linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));background-size:400% 100%;background-size:400% 100%;animation:sheen 3s ease-in-out infinite}.skeleton--pulse .skeleton__indicator{animation:pulse 2s ease-in-out 0.5s infinite}@keyframes sheen{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}";const r=class{constructor(o){e(this,o);this.effect="sheen"}render(){return o("div",{part:"base",class:{skeleton:true,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"},"aria-busy":"true","aria-live":"polite"},o("div",{part:"indicator",class:"skeleton__indicator"}))}};r.style=s;export{r as sc_skeleton};
//# sourceMappingURL=p-49235061.entry.js.map