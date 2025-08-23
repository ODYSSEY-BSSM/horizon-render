import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as h}from"./clsx-B-dksMZM.js";import{r as s}from"./index-GiUgBvb1.js";import{I as X}from"./Icon-DyDOuPRb.js";import{T as Y}from"./Text-DFqJP0b-.js";import"./size-CAyEbdpu.js";const Z={default:"flex h-10 w-[400px] items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-14 font-light leading-[22px] font-suit text-black placeholder:text-neutral-400 focus:border-2 focus:border-primary-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",holding:"flex h-10 w-[400px] items-center gap-2 rounded-lg border-2 border-primary-500 bg-white px-3 py-2.5 text-14 font-light leading-[22px] font-suit text-black placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",filled:"flex h-10 w-[400px] items-center gap-2 rounded-lg border border-primary-500 bg-white px-3 py-2.5 text-14 font-light leading-[22px] font-suit text-black placeholder:text-neutral-400 focus:border-2 focus:border-primary-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",error:"flex h-10 w-[400px] items-center gap-2 rounded-lg border border-warning-200 bg-white px-3 py-2.5 text-14 font-light leading-[22px] font-suit text-black placeholder:text-neutral-400 focus:border-2 focus:border-warning-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"},$={base:"flex flex-col gap-1"},r=s.forwardRef(({variant:x,label:m,icon:f,error:B=!1,className:L,containerClassName:R,labelClassName:M,value:o,defaultValue:b,...a},z)=>{const[G,g]=s.useState(!1),[H,y]=s.useState(o??b??""),v=s.useId();s.useEffect(()=>{o!==void 0&&y(o)},[o]);const J=String(H).length>0,K=B?"error":x||(G?"holding":J?"filled":"default"),Q=Z[K],U=$.base;return e.jsxs("div",{className:h(U,R),children:[m&&e.jsx(Y,{as:"label",variant:"O",htmlFor:v,className:h("text-neutral-400",M),children:m}),e.jsxs("div",{className:"relative",children:[f&&e.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center",children:e.jsx(X,{name:f,variant:"SM",color:"rgb(163 163 163)"})}),e.jsx("input",{id:m?v:void 0,ref:z,value:o,defaultValue:b,className:h(Q,f&&"pl-11",L),onFocus:t=>{var l;g(!0),(l=a.onFocus)==null||l.call(a,t)},onBlur:t=>{var l;g(!1),(l=a.onBlur)==null||l.call(a,t)},onChange:t=>{var l;y(t.target.value),(l=a.onChange)==null||l.call(a,t)},...a})]})]})});r.displayName="TextField";r.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{variant:{required:!1,tsType:{name:"union",raw:"keyof typeof textFieldVariants",elements:[{name:"literal",value:"default"},{name:"literal",value:"holding"},{name:"literal",value:"filled"},{name:"literal",value:"error"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const ne={title:"Components/TextField",component:r,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","holding","filled","error"]},label:{control:"text"},placeholder:{control:"text"},icon:{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{label:"Label",placeholder:"Enter text..."}},i={args:{label:"Search",placeholder:"검색어를 입력하세요",icon:"search"}},d={render:()=>e.jsxs("div",{className:"space-y-4 ",children:[e.jsx(r,{label:"Default",placeholder:"기본 상태"}),e.jsx(r,{label:"With Value",placeholder:"값이 있는 상태",defaultValue:"입력된 값"}),e.jsx(r,{label:"Focused",placeholder:"포커스 상태",variant:"holding"}),e.jsx(r,{label:"Error",placeholder:"에러 상태",error:!0,defaultValue:"잘못된 값"}),e.jsx(r,{label:"Disabled",placeholder:"비활성 상태",disabled:!0})]})},c={args:{variant:"error"},render:()=>e.jsxs("div",{className:"space-y-4 ",children:[e.jsx(r,{label:"Search",placeholder:"검색어 입력",icon:"search"}),e.jsx(r,{label:"Email",placeholder:"이메일 입력",icon:"mail",type:"email"}),e.jsx(r,{label:"Password",placeholder:"비밀번호 입력",icon:"lock",type:"password"}),e.jsx(r,{label:"Phone",placeholder:"전화번호 입력",icon:"phone",type:"tel"})]})},u={render:()=>e.jsxs("div",{className:"space-y-4 ",children:[e.jsx(r,{label:"Error without icon",placeholder:"에러 상태",error:!0,defaultValue:"잘못된 값"}),e.jsx(r,{label:"Error with icon",placeholder:"에러 상태",error:!0,icon:"mail",defaultValue:"invalid@email"})]})},p={args:{label:"Playground",placeholder:"Try different props...",variant:"default",error:!1,disabled:!1}};var T,w,F;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Enter text...'
  }
}`,...(F=(w=n.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var j,V,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: '검색어를 입력하세요',
    icon: 'search'
  }
}`,...(S=(V=i.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var E,N,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className='space-y-4 '>
      <TextField label='Default' placeholder='기본 상태' />
      <TextField label='With Value' placeholder='값이 있는 상태' defaultValue='입력된 값' />
      <TextField label='Focused' placeholder='포커스 상태' variant='holding' />
      <TextField label='Error' placeholder='에러 상태' error defaultValue='잘못된 값' />
      <TextField label='Disabled' placeholder='비활성 상태' disabled />
    </div>
}`,...(I=(N=d.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var C,P,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'error'
  },
  render: () => <div className='space-y-4 '>
      <TextField label='Search' placeholder='검색어 입력' icon='search' />
      <TextField label='Email' placeholder='이메일 입력' icon='mail' type='email' />
      <TextField label='Password' placeholder='비밀번호 입력' icon='lock' type='password' />
      <TextField label='Phone' placeholder='전화번호 입력' icon='phone' type='tel' />
    </div>
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var q,D,W;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className='space-y-4 '>
      <TextField label='Error without icon' placeholder='에러 상태' error defaultValue='잘못된 값' />
      <TextField label='Error with icon' placeholder='에러 상태' error icon='mail' defaultValue='invalid@email' />
    </div>
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var _,O,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Playground',
    placeholder: 'Try different props...',
    variant: 'default',
    error: false,
    disabled: false
  }
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const ie=["Default","WithIcon","AllStates","WithIcons","ErrorStates","Playground"];export{d as AllStates,n as Default,u as ErrorStates,p as Playground,i as WithIcon,c as WithIcons,ie as __namedExportsOrder,ne as default};
