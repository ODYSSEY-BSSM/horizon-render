import{j as e}from"./jsx-runtime-CDt2p4po.js";import{T as n}from"./Text-b1ln3Vwd.js";import{c as i}from"./size-BFO4AdcO.js";import"./index-GiUgBvb1.js";const C=(r,d)=>r?d==="horizontal"?{marginTop:`${r}px`,marginBottom:`${r}px`}:{marginLeft:`${r}px`,marginRight:`${r}px`}:{},t=({orientation:r="horizontal",spacing:d,className:x,children:h,...p})=>{const m=C(d,r);return h?e.jsxs("div",{className:i("flex items-center",r==="vertical"?"flex-col h-full":"w-full",x),style:m,...p,children:[e.jsx("div",{className:i("border-horizon-neutral-300",r==="horizontal"?"flex-1 border-t":"flex-1 border-l")}),e.jsx("div",{className:i("px-4",r==="vertical"&&"py-4 px-0"),children:h}),e.jsx("div",{className:i("border-horizon-neutral-300",r==="horizontal"?"flex-1 border-t":"flex-1 border-l")})]}):r==="vertical"?e.jsx("div",{className:i("h-full border-l border-horizon-neutral-300",x),style:m,role:"separator","aria-orientation":"vertical",tabIndex:-1,...p}):e.jsx("hr",{className:i("border-t border-horizon-neutral-300 w-full",x),style:m,...p})};t.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _={title:"Components/Divider",component:t,parameters:{layout:"padded",docs:{description:{component:"Simple divider component for visual separation with horizontal/vertical orientation, spacing options, and text content support."}}},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Orientation of the divider",defaultValue:"horizontal"},spacing:{control:{type:"number"},description:"Spacing around the divider in pixels"}}},a={args:{orientation:"horizontal",spacing:16}},s={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{children:"Content above"}),e.jsx(t,{}),e.jsx(n,{children:"Content below"})]})},c={render:()=>e.jsxs("div",{className:"flex items-center h-24 space-x-4",children:[e.jsx(n,{children:"Left content"}),e.jsx(t,{orientation:"vertical"}),e.jsx(n,{children:"Right content"})]})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{children:"Content"}),e.jsx(t,{}),e.jsx(n,{children:"No spacing"}),e.jsx(t,{spacing:8}),e.jsx(n,{children:"8px spacing"}),e.jsx(t,{spacing:16}),e.jsx(n,{children:"16px spacing"}),e.jsx(t,{spacing:24}),e.jsx(n,{children:"24px spacing"}),e.jsx(t,{spacing:32}),e.jsx(n,{children:"32px spacing"}),e.jsx(t,{spacing:48}),e.jsx(n,{children:"48px spacing"})]})},l={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"H3",as:"h4",className:"mb-4",children:"Horizontal with Text"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{children:"Section 1"}),e.jsx(t,{children:"OR"}),e.jsx(n,{children:"Section 2"})]})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"H3",as:"h4",className:"mb-4",children:"Vertical with Text"}),e.jsxs("div",{className:"flex items-center h-24",children:[e.jsx(n,{children:"Left section"}),e.jsx(t,{orientation:"vertical",children:"|"}),e.jsx(n,{children:"Right section"})]})]})]})};var v,u,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    spacing: 16
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var T,j,f;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className='space-y-4'>
      <Text>Content above</Text>
      <Divider />
      <Text>Content below</Text>
    </div>
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var N,y,b;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className='flex items-center h-24 space-x-4'>
      <Text>Left content</Text>
      <Divider orientation='vertical' />
      <Text>Right content</Text>
    </div>
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var z,D,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className='space-y-4'>
      <Text>Content</Text>
      <Divider />
      <Text>No spacing</Text>

      <Divider spacing={8} />
      <Text>8px spacing</Text>

      <Divider spacing={16} />
      <Text>16px spacing</Text>

      <Divider spacing={24} />
      <Text>24px spacing</Text>

      <Divider spacing={32} />
      <Text>32px spacing</Text>

      <Divider spacing={48} />
      <Text>48px spacing</Text>
    </div>
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var R,w,H;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className='space-y-8'>
      <div>
        <Text variant='H3' as='h4' className='mb-4'>
          Horizontal with Text
        </Text>
        <div className='space-y-4'>
          <Text>Section 1</Text>
          <Divider>OR</Divider>
          <Text>Section 2</Text>
        </div>
      </div>

      <div>
        <Text variant='H3' as='h4' className='mb-4'>
          Vertical with Text
        </Text>
        <div className='flex items-center h-24'>
          <Text>Left section</Text>
          <Divider orientation='vertical'>|</Divider>
          <Text>Right section</Text>
        </div>
      </div>
    </div>
}`,...(H=(w=l.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};const $=["Default","Horizontal","Vertical","Spacing","WithText"];export{a as Default,s as Horizontal,o as Spacing,c as Vertical,l as WithText,$ as __namedExportsOrder,_ as default};
