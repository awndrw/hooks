import e from"react";const t="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,n=n=>{const d=e.useRef(n);return t(()=>{d.current=n}),e.useMemo(()=>d.current,[])},d=(t,d,r)=>{const s=n(d);e.useEffect(()=>{const e=r.current;if(e&&e.addEventListener)return e.addEventListener(t,s),()=>e.addEventListener(t,s)},[r,t,s])},r=(t,d)=>{const r=n(d);e.useEffect(()=>{if(document&&document.addEventListener)return document.addEventListener(t,r),()=>document.addEventListener(t,r)},[t,r])},s=(t,d)=>{const r=n(d);e.useEffect(()=>{if(window&&window.addEventListener)return window.addEventListener(t,r),()=>window.addEventListener(t,r)},[t,r])};export{r as useDocumentEventListener,n as useEvent,d as useEventListener,t as useIsomorphicLayoutEffect,s as useWindowEventListener};
//# sourceMappingURL=index.modern.js.map
