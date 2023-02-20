import"./bootstrap.1adf5f09.js";import{n as f}from"./currency.ec2e3443.js";import{_ as p}from"./lang.2d0006f0.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as o,aB as n,aC as s,ap as t,z as d,aA as c,M as b,b6 as v,b8 as _,am as u}from"./runtime-core.esm-bundler.db039fbe.js";import"./runtime-dom.esm-bundler.febf7d20.js";const y={name:"ns-orders-summary",data(){return{orders:[],subscription:null,hasLoaded:!1}},mounted(){this.hasLoaded=!1,this.subscription=Dashboard.recentOrders.subscribe(a=>{this.hasLoaded=!0,this.orders=a})},methods:{__:p,nsCurrency:f},destroyed(){this.subscription.unsubscribe()}},g={id:"ns-orders-summary",class:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},k={class:"p-2 flex title items-center justify-between border-b"},w={class:"font-semibold"},C={class:"head flex-auto flex-col flex h-64 overflow-y-auto ns-scrollbar"},L={key:0,class:"h-full flex items-center justify-center"},j={key:1,class:"h-full flex items-center justify-center flex-col"},B=s("i",{class:"las la-grin-beam-sweat text-6xl"},null,-1),O={class:"text-sm"},z={class:"text-lg font-semibold"},N={class:"flex -mx-2"},V={class:"px-1"},D={class:"text-semibold text-xs"},R=s("i",{class:"lar la-user-circle"},null,-1),S=s("div",{class:"divide-y-4"},null,-1),A={class:"px-1"},E={class:"text-semibold text-xs"},F=s("i",{class:"las la-clock"},null,-1);function M(a,i,W,q,l,r){const m=_("ns-close-button"),h=_("ns-spinner");return o(),n("div",g,[s("div",k,[s("h3",w,t(r.__("Recents Orders")),1),s("div",null,[d(m,{onClick:i[0]||(i[0]=e=>a.$emit("onRemove"))})])]),s("div",C,[l.hasLoaded?c("",!0):(o(),n("div",L,[d(h,{size:"8",border:"4"})])),l.hasLoaded&&l.orders.length===0?(o(),n("div",j,[B,s("p",O,t(r.__("Well.. nothing to show for the meantime.")),1)])):c("",!0),(o(!0),n(b,null,v(l.orders,e=>(o(),n("div",{key:e.id,class:u([e.payment_status==="paid"?"paid-order":"other-order","border-b single-order p-2 flex justify-between"])},[s("div",null,[s("h3",z,t(r.__("Order"))+" : "+t(e.code),1),s("div",N,[s("div",V,[s("h4",D,[R,s("span",null,t(e.user.username),1)])]),S,s("div",A,[s("h4",E,[F,s("span",null,t(e.created_at),1)])])])]),s("div",null,[s("h2",{class:u([e.payment_status==="paid"?"paid-currency":"unpaid-currency","text-xl font-bold"])},t(r.nsCurrency(e.total)),3)])],2))),128))])])}var Q=x(y,[["render",M]]);export{Q as default};