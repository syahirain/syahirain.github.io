import{ah as u,d as n,Q as h,o as i,i as l,w as c,f as d,v as f,x as g,u as s,ai as m,h as v,m as _,g as w,aj as y}from"./index-DXkLAY99.js";const C=u("apiData",{state:()=>({data:null,data_length:0,loading:!1,error:null,overview_data:null}),actions:{async fetchData(){try{this.loading=!0;const a=await(await fetch("https://alphv-shapes.vercel.app/api/shapes")).json();this.data=a,this.data_length=a.length,this.error=null}catch(e){this.error=e.message}finally{this.loading=!1}},async fetchOverviewData(){try{if(localStorage.token){const a=await(await fetch("https://alphv-shapes.vercel.app/api/overview",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.token}})).json();this.overview_data=a}}catch(e){this.error=e.message}}},getters:{shapes:e=>e.data,shapesLength:e=>e.data_length,overviewData:e=>e.overview_data,isLoading:e=>e.loading,getError:e=>e.error}}),S=n({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(e,{emit:a}){const t=h(e,a);return(p,b)=>(i(),l(s(m),f(g(s(t))),{default:c(()=>[d(p.$slots,"default")]),_:3},16))}}),k=n({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(e){const a=e,r=v(()=>{const{class:o,...t}=a;return t});return(o,t)=>(i(),l(s(y),_({class:s(w)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a.class)},r.value),{default:c(()=>[d(o.$slots,"default")]),_:3},16,["class"]))}});export{k as _,S as a,C as u};
