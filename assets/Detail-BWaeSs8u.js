import{o as f,s as ne,f as te,O as R,A as U,T as re,I as ae,N as K,u as z,a as P,b as G,t as ue,i as oe,P as k,c as S,_ as ie,F as ce}from"./Footer-DqJwUf8O.js";import{f as b,g as C,h as X,i as E,j as V,k as A,p as Z,l as de,F as J,m as le,n as H,u as ve,q as pe,s as fe,c as j,a as L,b as v,w as D,t as N,v as me,x as F,y as M,d as xe,o as O,z as $,A as W,B as be}from"./index-zH1NbQJ6.js";import{_ as ge}from"./ProductCarousel-4b7eLByP.js";function ee(e,o){if(e)return e;let r=o??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function he(e,o){let r=b(ee(e.value.type,e.value.as));return C(()=>{r.value=ee(e.value.type,e.value.as)}),X(()=>{var c;r.value||f(o)&&f(o)instanceof HTMLButtonElement&&!((c=f(o))!=null&&c.hasAttribute("type"))&&(r.value="button")}),r}let Ae=E({props:{onFocus:{type:Function,required:!0}},setup(e){let o=b(!0);return()=>o.value?V(te,{as:"button",type:"button",features:ne.Focusable,onFocus(r){r.preventDefault();let c,d=50;function s(){var a;if(d--<=0){c&&cancelAnimationFrame(c);return}if((a=e.onFocus)!=null&&a.call(e)){o.value=!1,cancelAnimationFrame(c);return}c=requestAnimationFrame(s)}c=requestAnimationFrame(s)}}):null}});var ye=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ye||{}),we=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(we||{});let se=Symbol("TabsContext");function Q(e){let o=H(se,null);if(o===null){let r=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Q),r}return o}let q=Symbol("TabsSSRContext"),_e=E({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:o,attrs:r,emit:c}){var d;let s=b((d=e.selectedIndex)!=null?d:e.defaultIndex),a=b([]),n=b([]),g=A(()=>e.selectedIndex!==null),B=A(()=>g.value?e.selectedIndex:s.value);function w(t){var u;let p=R(i.tabs.value,f),l=R(i.panels.value,f),x=p.filter(_=>{var I;return!((I=f(_))!=null&&I.hasAttribute("disabled"))});if(t<0||t>p.length-1){let _=z(s.value===null?0:Math.sign(t-s.value),{[-1]:()=>1,0:()=>z(Math.sign(t),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),I=z(_,{0:()=>p.indexOf(x[0]),1:()=>p.indexOf(x[x.length-1])});I!==-1&&(s.value=I),i.tabs.value=p,i.panels.value=l}else{let _=p.slice(0,t),I=[...p.slice(t),..._].find(Y=>x.includes(Y));if(!I)return;let T=(u=p.indexOf(I))!=null?u:i.selectedIndex.value;T===-1&&(T=i.selectedIndex.value),s.value=T,i.tabs.value=p,i.panels.value=l}}let i={selectedIndex:A(()=>{var t,u;return(u=(t=s.value)!=null?t:e.defaultIndex)!=null?u:null}),orientation:A(()=>e.vertical?"vertical":"horizontal"),activation:A(()=>e.manual?"manual":"auto"),tabs:a,panels:n,setSelectedIndex(t){B.value!==t&&c("change",t),g.value||w(t)},registerTab(t){var u;if(a.value.includes(t))return;let p=a.value[s.value];a.value.push(t),a.value=R(a.value,f);let l=(u=a.value.indexOf(p))!=null?u:s.value;l!==-1&&(s.value=l)},unregisterTab(t){let u=a.value.indexOf(t);u!==-1&&a.value.splice(u,1)},registerPanel(t){n.value.includes(t)||(n.value.push(t),n.value=R(n.value,f))},unregisterPanel(t){let u=n.value.indexOf(t);u!==-1&&n.value.splice(u,1)}};Z(se,i);let m=b({tabs:[],panels:[]}),h=b(!1);C(()=>{h.value=!0}),Z(q,A(()=>h.value?null:m.value));let y=A(()=>e.selectedIndex);return C(()=>{de([y],()=>{var t;return w((t=e.selectedIndex)!=null?t:e.defaultIndex)},{immediate:!0})}),X(()=>{if(!g.value||B.value==null||i.tabs.value.length<=0)return;let t=R(i.tabs.value,f);t.some((u,p)=>f(i.tabs.value[p])!==f(u))&&i.setSelectedIndex(t.findIndex(u=>f(u)===f(i.tabs.value[B.value])))}),()=>{let t={selectedIndex:s.value};return V(J,[a.value.length<=0&&V(Ae,{onFocus:()=>{for(let u of a.value){let p=f(u);if((p==null?void 0:p.tabIndex)===0)return p.focus(),!0}return!1}}),U({theirProps:{...r,...re(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:t,slots:o,attrs:r,name:"TabGroup"})])}}}),Ie=E({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:o,slots:r}){let c=Q("TabList");return()=>{let d={selectedIndex:c.selectedIndex.value},s={role:"tablist","aria-orientation":c.orientation.value};return U({ourProps:s,theirProps:e,slot:d,attrs:o,slots:r,name:"TabList"})}}}),Pe=E({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:o,slots:r,expose:c}){var d;let s=(d=e.id)!=null?d:`headlessui-tabs-tab-${ae()}`,a=Q("Tab"),n=b(null);c({el:n,$el:n}),C(()=>a.registerTab(n)),le(()=>a.unregisterTab(n));let g=H(q),B=A(()=>{if(g.value){let l=g.value.tabs.indexOf(s);return l===-1?g.value.tabs.push(s)-1:l}return-1}),w=A(()=>{let l=a.tabs.value.indexOf(n);return l===-1?B.value:l}),i=A(()=>w.value===a.selectedIndex.value);function m(l){var x;let _=l();if(_===G.Success&&a.activation.value==="auto"){let I=(x=oe(n))==null?void 0:x.activeElement,T=a.tabs.value.findIndex(Y=>f(Y)===I);T!==-1&&a.setSelectedIndex(T)}return _}function h(l){let x=a.tabs.value.map(_=>f(_)).filter(Boolean);if(l.key===P.Space||l.key===P.Enter){l.preventDefault(),l.stopPropagation(),a.setSelectedIndex(w.value);return}switch(l.key){case P.Home:case P.PageUp:return l.preventDefault(),l.stopPropagation(),m(()=>k(x,S.First));case P.End:case P.PageDown:return l.preventDefault(),l.stopPropagation(),m(()=>k(x,S.Last))}if(m(()=>z(a.orientation.value,{vertical(){return l.key===P.ArrowUp?k(x,S.Previous|S.WrapAround):l.key===P.ArrowDown?k(x,S.Next|S.WrapAround):G.Error},horizontal(){return l.key===P.ArrowLeft?k(x,S.Previous|S.WrapAround):l.key===P.ArrowRight?k(x,S.Next|S.WrapAround):G.Error}}))===G.Success)return l.preventDefault()}let y=b(!1);function t(){var l;y.value||(y.value=!0,!e.disabled&&((l=f(n))==null||l.focus({preventScroll:!0}),a.setSelectedIndex(w.value),ue(()=>{y.value=!1})))}function u(l){l.preventDefault()}let p=he(A(()=>({as:e.as,type:o.type})),n);return()=>{var l;let x={selected:i.value},{..._}=e,I={ref:n,onKeydown:h,onMousedown:u,onClick:t,id:s,role:"tab",type:p.value,"aria-controls":(l=f(a.panels.value[w.value]))==null?void 0:l.id,"aria-selected":i.value,tabIndex:i.value?0:-1,disabled:e.disabled?!0:void 0};return U({ourProps:I,theirProps:_,slot:x,attrs:o,slots:r,name:"Tab"})}}}),Se=E({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:o,attrs:r}){let c=Q("TabPanels");return()=>{let d={selectedIndex:c.selectedIndex.value};return U({theirProps:e,ourProps:{},slot:d,attrs:r,slots:o,name:"TabPanels"})}}}),Be=E({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:o,slots:r,expose:c}){var d;let s=(d=e.id)!=null?d:`headlessui-tabs-panel-${ae()}`,a=Q("TabPanel"),n=b(null);c({el:n,$el:n}),C(()=>a.registerPanel(n)),le(()=>a.unregisterPanel(n));let g=H(q),B=A(()=>{if(g.value){let m=g.value.panels.indexOf(s);return m===-1?g.value.panels.push(s)-1:m}return-1}),w=A(()=>{let m=a.panels.value.indexOf(n);return m===-1?B.value:m}),i=A(()=>w.value===a.selectedIndex.value);return()=>{var m;let h={selected:i.value},{tabIndex:y,...t}=e,u={ref:n,id:s,role:"tabpanel","aria-labelledby":(m=f(a.tabs.value[w.value]))==null?void 0:m.id,tabIndex:i.value?y:-1};return!i.value&&e.unmount&&!e.static?V(te,{as:"span","aria-hidden":!0,...u}):U({ourProps:u,theirProps:t,slot:h,attrs:o,slots:r,features:K.Static|K.RenderStrategy,visible:i.value,name:"TabPanel"})}}});const Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAPCAYAAAC4EqxxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR3SURBVHgB3VZfaxxVFD/nzmwSH4xjMV0RxQk0palCNg8i8Q+dgi8+NYKCgtANaEB8SHwXdvcTJHl1C0m+QfIJuvvQVvAhU5BENCGTh4JawfHFTXbm3uO5d+4ku9lJW6kV2sPuzJ0795x7fufP7w4Cix/UvFKC+zz04LQQRHxtJYoa0feNCJ5yEfriplCBIrBaEHz+V0sCb8IzIAYw4Rlge4WBT7xVq8BTLq6+oMQpBmSEVAqq8+fAQnSGQJZfeZ2HYZGhiXc4GIhLfZPcDv9VK5Sb24vsxbXeOQUUOimu/PrVZPQg3ZdXd3xKYVWPXTt3nDlKOwCyO6BEPNf58IM175Ot8XhuOh5cIK4AUtA3x0EsOTjLHDEetRoxPJaI67xJX4UJwIBc4/vVB6qm3JYAAXGATEkjmolMlCzUSSbfABgZ8Upy5FqxP5kzRLCRkuuz8W/sG89JRLHOvxLysxsuKpLTfN+wL4KHahJXsBlANJhhmQwoqNFRSN6egYeIb+/h/u1vD7jEW3mboDJMDxfeqwVIWDNO8uao2wOhQgAxP4cKsbV3q7au114Kar7smrUQVz9eAUuqKknb979+Mzx/YydGgvwUMSXPwb6CiB7bbUugF3gvT0hoUJ5QxNA1vdeH7gQwDQ+DfPU16L7P/jFoI0fyLhSLscOb+RMzjQUu72pmBKLdO7W2BXszm4I8GLNWJ2KnqgJIP69nbvBadpRB1B10PLKbOCWnMtbcvs5gZ3Nb5Rvby5zxBURjLGKdQGir/JNKrghwrG8MWDngC2UBDg3B3599DsBAzfPzo/2Q2Hkd3dNI9TkOiWV6dhwwd48zB/SRmc4yq0u+vnu73tDjiXfrOgCBIlhjZxd1FnVghO434qzoYPHacvXThdwmB2ZV5KXDYAXCOtlAuuRM3/vyYmgJzhCo9rfc3DGAVTc9cHsZWp7zgF4ag0LRJSiLycGe4xYvVvNxt6Q2e8gqMO8T2hw0jSECrfFwUShcYFAme8zwV61RP/dBCaiboaLoj/nL7fPNnRqaQNLGvfmLofUhzKqdQn913+ukh14OXvfwSf8Olfod4cjrEtEGjkqddjw/Xci0KMUUk5Yexj/bHiwQretRCWucxRXU5UxZEESiDmgYNrkKFnOwuhJOjrOMEBXSxv0vLvfZZ53YZB8hGPvux4ojnZiPqyXUWeQAHaaHGZkyeH13seejQ53r+/5o/T4/OQePIiJjUDrjjLYbNtiJJdSACGdtAIz88kPD6HGJZ0HhvfOyt1LJthHRabvPlYbXOYN1tu0hOlt8TAEesyUyEZLHQdFzcQaYWzDvONkDWNmIPIooQW1ujZg9ap+1ZvdWY/nCTGNLCPAVs3Y6rO66R2IKUf2l3+ve5ahoB+JU0lx/sGDZAJaD7RDNjcf8YTEtU1rQrMx+r/EeL3JQp0TKBOiizxRVZ14wvmGvcrn509bx4c7l9dv8pRX4H0QfQZqVGRg7h9W9s9viscXtfeDG11k1mS2K5pOSRHLJEjMuYbh358mB1fIP2G3z8YmEGpAAAAAASUVORK5CYII=",Te={key:0,class:"relative isolate px-6 lg:px-8"},ke={class:"bg-white"},je={class:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8"},Le={class:"lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"},Ce={class:"mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"},Ee=v("span",{class:"sr-only"}," ----- ",-1),Re={class:"absolute inset-0 overflow-hidden rounded-md"},De=["src"],Ne=["src","onMouseenter"],Ue={key:0,class:"mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"},Qe={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg"},Ge=["src"],ze={key:1,class:"mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"},Je={class:"mt-3 grid justify-between"},Ve={class:"inline-block text-4xl font-special-regular"},Ye=v("h2",{class:"sr-only"},"Product information",-1),Fe={class:"inline-block text-4xl tracking-tight font-bold text-gray-500"},Me={class:"mt-3"},Xe={class:"mt-3"},He={class:"font-regular text-lg"},qe=v("div",{class:"mt-3"},[v("div",{class:"w-1/2 flex items-center justify-center bg-amber-400 p-4 rounded-full cursor-pointer"},[v("img",{src:Oe,alt:"PayPal Logo"})])],-1),Ke=xe('<form class="mt-6"><div class="mt-5 flex"><button type="submit" class="flex justify-center max-w-xs flex-1 items-center rounded-md border border-transparent bg-primary_p px-2 py-3 text-base font-medium text-white hover:bg-terciary_p focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terciary_p sm:w-full"><div><i class="bi bi-whatsapp text-2xl me-2.5"></i><a class="text-2xl ms-2.5">Get In Touch</a></div></button></div></form>',1),Ze={class:"py-16"},$e="",at={__name:"Detail",setup(e){const o=ve(),r=b(0),c=pe(),d=fe({});C(async()=>await c.fetchProductsData()),X(async()=>{r.value=parseInt(o.params.product_id),r.value&&Object.assign(d,c.productById(r.value))});const s=b(null),a=b(0),n=b(0),g=b(1),B=h=>{s.value=h},w=()=>{s.value=null,m()},i=h=>{if(!s.value)return;const y=h.target.getBoundingClientRect();a.value=(h.clientX-y.left-y.width/2)*-1,n.value=(h.clientY-y.top-y.height/2)*-1,g.value=4},m=()=>{a.value=0,n.value=0,g.value=1};return(h,y)=>(O(),j(J,null,[L(ie),d?(O(),j("div",Te,[v("div",ke,[v("div",je,[v("div",Le,[L(N(_e),{as:"div",class:"flex flex-col-reverse"},{default:D(()=>[v("div",Ce,[L(N(Ie),{class:"grid grid-cols-4 gap-6"},{default:D(()=>[(O(!0),j(J,null,$(d.images,t=>(O(),W(N(Pe),{key:t.id,class:"relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-black_p hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 transition-transform duration-300 transform hover:scale-110"},{default:D(()=>[Ee,v("span",Re,[v("img",{src:`${t.image_url}`,alt:"",class:"h-full w-full object-cover object-center"},null,8,De)]),v("span",{class:be([$e?"ring-primary_p":"ring-transparent","pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"]),"aria-hidden":"true"},null,2)]),_:2},1024))),128))]),_:1})]),L(N(Se),{class:"aspect-h-1 aspect-w-1 w-full"},{default:D(()=>[(O(!0),j(J,null,$(d.images,t=>(O(),W(N(Be),{key:t.id},{default:D(()=>[v("img",{src:`${t.image_url}`,alt:" ----- ",class:"h-full w-full object-cover object-center sm:rounded-lg",onMousemove:i,onMouseenter:u=>B(t),onMouseleave:w},null,40,Ne)]),_:2},1024))),128))]),_:1})]),_:1}),s.value?(O(),j("div",Ue,[v("div",Qe,[v("img",{src:`${s.value?s.value.image_url:h.image.image_url}`,alt:" ---- ",class:"h-full w-full object-cover",style:me({transform:`scale(4) translate(${a.value}px, ${n.value}px)`})},null,12,Ge)])])):F("",!0),s.value?F("",!0):(O(),j("div",ze,[v("div",Je,[v("h1",Ve,M(d.title),1),Ye,v("p",Fe,"$ "+M(d.price),1)]),v("div",Me,[v("div",Xe,[v("p",He,M(d.description),1)]),qe]),Ke]))])])])])):F("",!0),v("section",Ze,[L(ge,{top:4})]),L(ce)],64))}};export{at as default};
