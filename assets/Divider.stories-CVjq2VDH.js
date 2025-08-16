import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as i}from"./clsx-B-dksMZM.js";import"./index-GiUgBvb1.js";const C=(n,p)=>n?p==="horizontal"?{marginTop:`${n}px`,marginBottom:`${n}px`}:{marginLeft:`${n}px`,marginRight:`${n}px`}:{},r=({orientation:n="horizontal",spacing:p,className:l,children:x,...d})=>{const m=C(p,n);return x?e.jsxs("div",{className:i("flex items-center",n==="vertical"?"flex-col h-full":"w-full",l),style:m,...d,children:[e.jsx("div",{className:i("border-horizon-neutral-300",n==="horizontal"?"flex-1 border-t":"flex-1 border-l")}),e.jsx("div",{className:i("px-4",n==="vertical"&&"py-4 px-0"),children:x}),e.jsx("div",{className:i("border-horizon-neutral-300",n==="horizontal"?"flex-1 border-t":"flex-1 border-l")})]}):n==="vertical"?e.jsx("div",{className:i("h-full border-l border-horizon-neutral-300",l),style:m,role:"separator","aria-orientation":"vertical",tabIndex:-1,...d}):e.jsx("hr",{className:i("border-t border-horizon-neutral-300 w-full",l),style:m,...d})};r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const H={title:"Components/Divider",component:r,parameters:{layout:"padded",docs:{description:{component:"Simple divider component for visual separation with horizontal/vertical orientation, spacing options, and text content support."}}},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Orientation of the divider",defaultValue:"horizontal"},spacing:{control:{type:"number"},description:"Spacing around the divider in pixels"}}},s={args:{orientation:"horizontal",spacing:16}},a={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Content above"}),e.jsx(r,{}),e.jsx("p",{children:"Content below"})]})},t={render:()=>e.jsxs("div",{className:"flex items-center h-24 space-x-4",children:[e.jsx("p",{children:"Left content"}),e.jsx(r,{orientation:"vertical"}),e.jsx("p",{children:"Right content"})]})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Content"}),e.jsx(r,{}),e.jsx("p",{children:"No spacing"}),e.jsx(r,{spacing:8}),e.jsx("p",{children:"8px spacing"}),e.jsx(r,{spacing:16}),e.jsx("p",{children:"16px spacing"}),e.jsx(r,{spacing:24}),e.jsx("p",{children:"24px spacing"}),e.jsx(r,{spacing:32}),e.jsx("p",{children:"32px spacing"}),e.jsx(r,{spacing:48}),e.jsx("p",{children:"48px spacing"})]})},c={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-4",children:"Horizontal with Text"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Section 1"}),e.jsx(r,{children:"OR"}),e.jsx("p",{children:"Section 2"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-4",children:"Vertical with Text"}),e.jsxs("div",{className:"flex items-center h-24",children:[e.jsx("p",{children:"Left section"}),e.jsx(r,{orientation:"vertical",children:"|"}),e.jsx("p",{children:"Right section"})]})]})]})};var h,v,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    spacing: 16
  }
}`,...(u=(v=s.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var g,j,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className='space-y-4'>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
}`,...(f=(j=a.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var N,y,b;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className='flex items-center h-24 space-x-4'>
      <p>Left content</p>
      <Divider orientation='vertical' />
      <p>Right content</p>
    </div>
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var z,D,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className='space-y-4'>
      <p>Content</p>
      <Divider />
      <p>No spacing</p>

      <Divider spacing={8} />
      <p>8px spacing</p>

      <Divider spacing={16} />
      <p>16px spacing</p>

      <Divider spacing={24} />
      <p>24px spacing</p>

      <Divider spacing={32} />
      <p>32px spacing</p>

      <Divider spacing={48} />
      <p>48px spacing</p>
    </div>
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var R,T,w;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className='space-y-8'>
      <div>
        <h4 className='font-medium mb-4'>Horizontal with Text</h4>
        <div className='space-y-4'>
          <p>Section 1</p>
          <Divider>OR</Divider>
          <p>Section 2</p>
        </div>
      </div>

      <div>
        <h4 className='font-medium mb-4'>Vertical with Text</h4>
        <div className='flex items-center h-24'>
          <p>Left section</p>
          <Divider orientation='vertical'>|</Divider>
          <p>Right section</p>
        </div>
      </div>
    </div>
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const O=["Default","Horizontal","Vertical","Spacing","WithText"];export{s as Default,a as Horizontal,o as Spacing,t as Vertical,c as WithText,O as __namedExportsOrder,H as default};
