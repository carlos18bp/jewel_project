import{q as d,f as u,g as _,r as p,o as s,c as o,b as t,F as g,z as x,A as m,w as h,e as f,y as c,x as v}from"./index-zH1NbQJ6.js";const w={class:"xl:mx-auto w-full px-4 lg:max-w-7xl lg:px-8"},y=t("h2",{class:"text-center text-6xl font-mayan text-blue"},"Popular",-1),b=t("p",{class:"text-center text-3xl font-italic mt-4"},"Indulge in what we offer.",-1),k={class:"mt-6 p-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},P={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"},B=["src"],C={class:"mt-4 grid justify-between"},N={class:"text-2xl font-regular text-black"},j=t("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1),L={class:"text-xl font-regular text-gray-400"},F={__name:"ProductCarousel",props:{top:Number},setup(r){const n=r,a=d(),l=u([]);return _(async()=>{await a.fetchProductsData(),l.value=a.products.slice(0,n.top)}),(S,V)=>{const i=p("RouterLink");return s(),o("div",w,[y,b,t("div",k,[(s(!0),o(g,null,x(l.value,e=>(s(),o("div",{key:e.id,class:"group relative"},[t("div",P,[t("img",{src:`${e.images[0].image_url}`,class:"h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,B)]),t("div",C,[t("div",null,[t("h3",N,[e.id?(s(),m(i,{key:0,to:{name:"product",params:{product_id:e.id}}},{default:h(()=>[j,f(" "+c(e.title),1)]),_:2},1032,["to"])):v("",!0)])]),t("p",L,"$ "+c(e.price),1)])]))),128))])])}}};export{F as _};
