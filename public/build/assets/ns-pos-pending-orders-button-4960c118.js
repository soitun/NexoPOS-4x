import{b as $,n as P,p as C,v as T,w as F,a as j,P as S}from"./bootstrap-ffaf6d09.js";import{n as V}from"./ns-prompt-popup-24cc8d6f.js";import{_,n as L}from"./currency-feccde3d.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{r as v,o as d,c as i,a as s,i as h,t as n,e as O,f as u,F as y,b as w,w as x,B as A}from"./runtime-core.esm-bundler-414a078a.js";import"./chart-2ccf8ff7.js";const B={data(){return{products:[],isLoading:!1}},props:["popup"],computed:{order(){return this.popup.params.order}},mounted(){this.loadProducts()},methods:{__:_,nsCurrency:L,close(){this.popup.params.reject(!1),this.popup.close()},loadProducts(){this.isLoading=!0;const r=this.popup.params.order.id;$.get(`/api/orders/${r}/products`).subscribe(e=>{this.isLoading=!1,this.products=e})},openOrder(){this.popup.close(),this.popup.params.resolve(this.order)}}},H={class:"shadow-lg ns-box w-6/7-screen md:w-3/5-screen lg:w-2/5-screen h-6/7-screen flex flex-col overflow-hidden"},N={class:"p-2 flex justify-between text-primary items-center border-b ns-box-header"},U={class:"font-semibold"},D={key:0},q={class:"flex-auto p-2 overflow-y-auto ns-box-body"},K={key:0,class:"flex-auto relative"},E={class:"h-full w-full flex items-center justify-center"},M={class:"flex-col border-b border-info-primary py-2"},R={class:"title font-semibold text-primary flex justify-between"},Y={class:"text-sm text-primary"},z={class:"flex justify-end p-2 border-t ns-box-footer"},G={class:"px-1"},I={class:"-mx-2 flex"},J={class:"px-1"},Q={class:"px-1"};function W(r,e,a,b,p,t){const l=v("ns-close-button"),c=v("ns-spinner"),f=v("ns-button");return d(),i("div",H,[s("div",N,[s("h3",U,[h(n(t.__("Products"))+" — "+n(t.order.code)+" ",1),t.order.title?(d(),i("span",D,"("+n(t.order.title)+")",1)):O("",!0)]),s("div",null,[u(l,{onClick:e[0]||(e[0]=m=>t.close())})])]),s("div",q,[p.isLoading?(d(),i("div",K,[s("div",E,[u(c)])])):O("",!0),p.isLoading?O("",!0):(d(!0),i(y,{key:1},w(p.products,m=>(d(),i("div",{class:"item",key:m.id},[s("div",M,[s("div",R,[s("span",null,n(m.name)+" (x"+n(m.quantity)+")",1),s("span",null,n(t.nsCurrency(r.price)),1)]),s("div",Y,[s("ul",null,[s("li",null,n(t.__("Unit"))+" : "+n(m.unit.name),1)])])])]))),128))]),s("div",z,[s("div",G,[s("div",I,[s("div",J,[u(f,{onClick:e[1]||(e[1]=m=>t.openOrder()),type:"info"},{default:x(()=>[h(n(t.__("Open")),1)]),_:1})]),s("div",Q,[u(f,{onClick:e[2]||(e[2]=m=>t.close()),type:"error"},{default:x(()=>[h(n(t.__("Close")),1)]),_:1})])])])])])}const X=g(B,[["render",W]]),Z={props:["orders"],data(){return{searchField:"",columns:{rightColumn:[],leftColumn:[]}}},watch:{orders(){this.$nextTick(()=>{P.doAction("ns-pos-pending-orders-refreshed",this.orders.map(r=>({order:r,dom:document.querySelector(`[data-order-id="${r.id}"]`)})))})}},mounted(){this.columns.leftColumn=P.applyFilters("ns-pending-orders-left-column",[{label:_("Code"),value:r=>r.code},{label:_("Cashier"),value:r=>r.user_username},{label:_("Total"),value:r=>r.total},{label:_("Tendered"),value:r=>r.tendered}]),this.columns.rightColumn=P.applyFilters("ns-pending-orders-right-column",[{label:_("Customer"),value:r=>`${r.customer_first_name} ${r.customer_last_name}`},{label:_("Date"),value:r=>r.created_at},{label:_("Type"),value:r=>r.type}]),this.popupCloser()},name:"ns-pos-pending-order",methods:{__:_,popupCloser:C,previewOrder(r){this.$emit("previewOrder",r)},proceedOpenOrder(r){this.$emit("proceedOpenOrder",r)},searchOrder(){this.$emit("searchOrder",this.searchField)},printOrder(r){this.$emit("printOrder",r)}}},ee={class:"flex flex-auto flex-col overflow-hidden"},se={class:"p-1"},re={class:"flex rounded border-2 input-group info"},te=s("i",{class:"las la-search"},null,-1),oe={class:"mr-1 hidden md:visible"},ne={class:"overflow-y-auto flex flex-auto"},le={class:"flex p-2 flex-auto flex-col overflow-y-auto"},de=["data-order-id"],ie={class:"text-primary"},ae={class:"px-2"},pe={class:"flex flex-wrap -mx-4"},ce={class:"w-full md:w-1/2 px-2"},ue={class:"w-full md:w-1/2 px-2"},_e={class:"flex justify-end w-full mt-2"},fe={class:"flex rounded-lg overflow-hidden ns-buttons"},me=["onClick"],he=s("i",{class:"las la-lock-open"},null,-1),ve=["onClick"],xe=s("i",{class:"las la-eye"},null,-1),be=["onClick"],Oe=s("i",{class:"las la-print"},null,-1),ye={key:0,class:"h-full v-full items-center justify-center flex"},we={class:"text-semibold text-primary"};function ge(r,e,a,b,p,t){return d(),i("div",ee,[s("div",se,[s("div",re,[A(s("input",{onKeyup:e[0]||(e[0]=F(l=>t.searchOrder(),["enter"])),"onUpdate:modelValue":e[1]||(e[1]=l=>p.searchField=l),type:"text",class:"p-2 outline-none flex-auto"},null,544),[[T,p.searchField]]),s("button",{onClick:e[2]||(e[2]=l=>t.searchOrder()),class:"w-16 md:w-24"},[te,s("span",oe,n(t.__("Search")),1)])])]),s("div",ne,[s("div",le,[(d(!0),i(y,null,w(a.orders,l=>(d(),i("div",{"data-order-id":l.id,class:"border-b ns-box-body w-full py-2 ns-order-line",key:l.id},[s("h3",ie,n(l.title||"Untitled Order"),1),s("div",ae,[s("div",pe,[s("div",ce,[(d(!0),i(y,null,w(p.columns.leftColumn,(c,f)=>(d(),i("p",{key:f,class:"text-sm text-primary"},[s("strong",null,n(c.label),1),h(" : "+n(c.value(l)),1)]))),128))]),s("div",ue,[(d(!0),i(y,null,w(p.columns.rightColumn,(c,f)=>(d(),i("p",{key:f,class:"text-sm text-primary"},[s("strong",null,n(c.label),1),h(" : "+n(c.value(l)),1)]))),128))])])]),s("div",_e,[s("div",fe,[s("button",{onClick:c=>t.proceedOpenOrder(l),class:"info outline-none px-2 py-1"},[he,h(" "+n(t.__("Open")),1)],8,me),s("button",{onClick:c=>t.previewOrder(l),class:"success outline-none px-2 py-1"},[xe,h(" "+n(t.__("Products")),1)],8,ve),s("button",{onClick:c=>t.printOrder(l),class:"warning outline-none px-2 py-1"},[Oe,h(" "+n(t.__("Print")),1)],8,be)])])],8,de))),128)),a.orders.length===0?(d(),i("div",ye,[s("h3",we,n(t.__("Nothing to display...")),1)])):O("",!0)])])])}const Pe=g(Z,[["render",ge]]),Ce={props:["popup"],components:{nsPosPendingOrders:Pe},methods:{__:_,popupResolver:j,popupCloser:C,searchOrder(r){nsHttpClient.get(`/api/crud/${this.active}?search=${r}`).subscribe(e=>{this.orders=e.data})},setActiveTab(r){this.active=r,this.loadOrderFromType(r)},openOrder(r){POS.loadOrder(r.id),this.popup.close()},loadOrderFromType(r){nsHttpClient.get(`/api/crud/${r}`).subscribe(e=>{this.orders=e.data})},previewOrder(r){new Promise((a,b)=>{Popup.show(X,{order:r,resolve:a,reject:b})}).then(a=>{this.proceedOpenOrder(r)},a=>a)},printOrder(r){POS.print.process(r.id,"sale")},proceedOpenOrder(r){if(POS.products.getValue().length>0)return Popup.show(V,{title:_("Confirm Your Action"),message:_("The cart is not empty. Opening an order will clear your cart would you proceed ?"),onAction:a=>{a&&this.openOrder(r)}});this.openOrder(r)}},data(){return{active:"ns.hold-orders",searchField:"",orders:[]}},mounted(){this.loadOrderFromType(this.active),this.popupCloser()}},ke={class:"shadow-lg ns-box w-6/7-screen md:w-3/5-screen lg:w-2/5-screen h-6/7-screen flex flex-col overflow-hidden"},$e={class:"p-2 flex justify-between text-primary items-center ns-box-header border-b"},Te={class:"font-semibold"},Fe={class:"p-2 flex overflow-hidden flex-auto ns-box-body"},je={class:"p-2 flex justify-between ns-box-footer border-t"},Se=s("div",null,null,-1);function Ve(r,e,a,b,p,t){const l=v("ns-close-button"),c=v("ns-pos-pending-orders"),f=v("ns-tabs-item"),m=v("ns-tabs"),k=v("ns-button");return d(),i("div",ke,[s("div",$e,[s("h3",Te,n(t.__("Orders")),1),s("div",null,[u(l,{onClick:e[0]||(e[0]=o=>a.popup.close())})])]),s("div",Fe,[u(m,{active:p.active,onChangeTab:e[13]||(e[13]=o=>t.setActiveTab(o))},{default:x(()=>[u(f,{identifier:"ns.hold-orders",label:t.__("On Hold"),padding:"p-0",class:"flex flex-col overflow-hidden"},{default:x(()=>[u(c,{orders:p.orders,onSearchOrder:e[1]||(e[1]=o=>t.searchOrder(o)),onPreviewOrder:e[2]||(e[2]=o=>t.previewOrder(o)),onPrintOrder:e[3]||(e[3]=o=>t.printOrder(o)),onProceedOpenOrder:e[4]||(e[4]=o=>t.proceedOpenOrder(o))},null,8,["orders"])]),_:1},8,["label"]),u(f,{identifier:"ns.unpaid-orders",label:t.__("Unpaid"),padding:"p-0",class:"flex flex-col overflow-hidden"},{default:x(()=>[u(c,{orders:p.orders,onSearchOrder:e[5]||(e[5]=o=>t.searchOrder(o)),onPreviewOrder:e[6]||(e[6]=o=>t.previewOrder(o)),onPrintOrder:e[7]||(e[7]=o=>t.printOrder(o)),onProceedOpenOrder:e[8]||(e[8]=o=>t.proceedOpenOrder(o))},null,8,["orders"])]),_:1},8,["label"]),u(f,{identifier:"ns.partially-paid-orders",label:t.__("Partially Paid"),padding:"p-0",class:"flex flex-col overflow-hidden"},{default:x(()=>[u(c,{orders:p.orders,onSearchOrder:e[9]||(e[9]=o=>t.searchOrder(o)),onPreviewOrder:e[10]||(e[10]=o=>t.previewOrder(o)),onPrintOrder:e[11]||(e[11]=o=>t.printOrder(o)),onProceedOpenOrder:e[12]||(e[12]=o=>t.proceedOpenOrder(o))},null,8,["orders"])]),_:1},8,["label"])]),_:1},8,["active"])]),s("div",je,[Se,s("div",null,[u(k,{onClick:e[14]||(e[14]=o=>a.popup.close()),type:"info"},{default:x(()=>[h(n(t.__("Close")),1)]),_:1})])])])}const Le=g(Ce,[["render",Ve]]),Ae={name:"ns-pos-pending-orders-button",methods:{__:_,openPendingOrdersPopup(){S.show(Le)}}},Be={class:"ns-button default"},He=s("i",{class:"mr-1 text-xl lar la-hand-pointer"},null,-1);function Ne(r,e,a,b,p,t){return d(),i("div",Be,[s("button",{onClick:e[0]||(e[0]=l=>t.openPendingOrdersPopup()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[He,s("span",null,n(t.__("Orders")),1)])])}const Re=g(Ae,[["render",Ne]]);export{Re as default};
