import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as k}from"./clsx-B-dksMZM.js";import"./index-GiUgBvb1.js";const s=({direction:a="row",justify:n="flex-start",align:S="stretch",wrap:F="nowrap",gap:T=0,grow:R,shrink:W,basis:C,inline:q=!1,children:P,className:D,...I})=>{const V={flexDirection:a,justifyContent:n,alignItems:S,flexWrap:F,gap:T,flexGrow:R,flexShrink:W,flexBasis:C};return e.jsx("div",{className:k(q?"inline-flex":"flex",D),style:V,...I,children:P})};s.__docgenInfo={description:"",methods:[],displayName:"Flexbox",props:{direction:{required:!1,tsType:{name:"ReactCSSProperties['flexDirection']",raw:"React.CSSProperties['flexDirection']"},description:"",defaultValue:{value:"'row'",computed:!1}},justify:{required:!1,tsType:{name:"ReactCSSProperties['justifyContent']",raw:"React.CSSProperties['justifyContent']"},description:"",defaultValue:{value:"'flex-start'",computed:!1}},align:{required:!1,tsType:{name:"ReactCSSProperties['alignItems']",raw:"React.CSSProperties['alignItems']"},description:"",defaultValue:{value:"'stretch'",computed:!1}},wrap:{required:!1,tsType:{name:"ReactCSSProperties['flexWrap']",raw:"React.CSSProperties['flexWrap']"},description:"",defaultValue:{value:"'nowrap'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"0",computed:!1}},grow:{required:!1,tsType:{name:"number"},description:""},shrink:{required:!1,tsType:{name:"number"},description:""},basis:{required:!1,tsType:{name:"ReactCSSProperties['flexBasis']",raw:"React.CSSProperties['flexBasis']"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Components/Flexbox",component:s,parameters:{layout:"centered"},argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"],description:"The direction of the flex items."},justify:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"],description:"The justification of the flex items."},align:{control:"select",options:["flex-start","flex-end","center","stretch","baseline"],description:"The alignment of the flex items."},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"],description:"How flex items wrap."},gap:{control:"text",description:"The gap between flex items."},grow:{control:"number",description:"The grow factor of the flex item."},shrink:{control:"number",description:"The shrink factor of the flex item."},basis:{control:"text",description:"The initial main size of a flex item."},inline:{control:"boolean",description:"Whether to display as an inline-flex container."},children:{control:!1},className:{control:"text"}}},l=({label:a,size:n=50})=>e.jsx("div",{className:"bg-blue-500 text-white flex items-center justify-center rounded-md",style:{width:n,height:n,minWidth:n,minHeight:n},children:a}),r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"})]}),gap:"8px",className:"bg-gray-200 p-4 rounded-lg"},render:a=>e.jsxs(s,{...a,children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-2 font-medium text-center",children:"row"}),e.jsx("div",{style:{width:"200px",height:"200px"},className:"flex justify-center items-center",children:e.jsxs(s,{direction:"row",gap:"8px",className:"bg-gray-200 p-4 rounded-lg",children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-2 font-medium text-center",children:"row-reverse"}),e.jsx("div",{style:{width:"200px",height:"200px"},className:"flex justify-center items-center",children:e.jsxs(s,{direction:"row-reverse",gap:"8px",className:"bg-gray-200 p-4 rounded-lg",children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-2 font-medium text-center",children:"column"}),e.jsx("div",{style:{width:"200px",height:"200px"},className:"flex justify-center items-center",children:e.jsxs(s,{direction:"column",gap:"8px",className:"bg-gray-200 p-4 rounded-lg",children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-2 font-medium text-center",children:"column-reverse"}),e.jsx("div",{style:{width:"200px",height:"200px"},className:"flex justify-center items-center",children:e.jsxs(s,{direction:"column-reverse",gap:"8px",className:"bg-gray-200 p-4 rounded-lg",children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"})]})})]})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold mb-3 capitalize",children:"nowrap"}),e.jsxs(s,{wrap:"nowrap",gap:"8px",className:"bg-gray-200 p-4 rounded-lg w-48",children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"}),e.jsx(l,{label:"4"}),e.jsx(l,{label:"5"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold mb-3 capitalize",children:"wrap"}),e.jsxs(s,{wrap:"wrap",gap:"8px",className:"bg-gray-200 p-4 rounded-lg w-48",children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"}),e.jsx(l,{label:"4"}),e.jsx(l,{label:"5"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold mb-3 capitalize",children:"wrap-reverse"}),e.jsxs(s,{wrap:"wrap-reverse",gap:"8px",className:"bg-gray-200 p-4 rounded-lg w-48",children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"}),e.jsx(l,{label:"4"}),e.jsx(l,{label:"5"})]})]})]})},o={args:{...r.args},render:a=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-2 font-medium",children:"inline : false"}),e.jsxs("div",{children:["Some text before.",e.jsxs(s,{...a,children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"})]}),"Some text after."]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-2 font-medium",children:"inline : true"}),e.jsxs("div",{children:["Some text before.",e.jsxs(s,{...a,inline:!0,children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"})]}),"Some text after."]})]})]})},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold mb-3",children:"Without Flexbox"}),e.jsxs("div",{className:"bg-gray-200 p-4 rounded-lg",children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold mb-3",children:"With Flexbox"}),e.jsxs(s,{gap:"8px",className:"bg-gray-200 p-4 rounded-lg",children:[e.jsx(l,{label:"1"}),e.jsx(l,{label:"2"}),e.jsx(l,{label:"3"})]})]})]})};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <>
        <Box label='1' />
        <Box label='2' />
        <Box label='3' />
      </>,
    gap: '8px',
    className: 'bg-gray-200 p-4 rounded-lg'
  },
  render: args => <Flexbox {...args}>
      <Box label='1' />
      <Box label='2' />
      <Box label='3' />
    </Flexbox>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,b,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className='flex flex-row gap-4'>
      <div>
        <div className='text-sm mb-2 font-medium text-center'>row</div>
        <div style={{
        width: '200px',
        height: '200px'
      }} className='flex justify-center items-center'>
          <Flexbox direction='row' gap='8px' className='bg-gray-200 p-4 rounded-lg'>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
        </div>
      </div>
      <div>
        <div className='text-sm mb-2 font-medium text-center'>row-reverse</div>
        <div style={{
        width: '200px',
        height: '200px'
      }} className='flex justify-center items-center'>
          <Flexbox direction='row-reverse' gap='8px' className='bg-gray-200 p-4 rounded-lg'>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
        </div>
      </div>
      <div>
        <div className='text-sm mb-2 font-medium text-center'>column</div>
        <div style={{
        width: '200px',
        height: '200px'
      }} className='flex justify-center items-center'>
          <Flexbox direction='column' gap='8px' className='bg-gray-200 p-4 rounded-lg'>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
        </div>
      </div>
      <div>
        <div className='text-sm mb-2 font-medium text-center'>column-reverse</div>
        <div style={{
        width: '200px',
        height: '200px'
      }} className='flex justify-center items-center'>
          <Flexbox direction='column-reverse' gap='8px' className='bg-gray-200 p-4 rounded-lg'>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
        </div>
      </div>
    </div>
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var u,g,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-8'>
      <div>
        <h3 className='text-base font-semibold mb-3 capitalize'>nowrap</h3>
        <Flexbox wrap='nowrap' gap='8px' className='bg-gray-200 p-4 rounded-lg w-48'>
          <Box label='1' />
          <Box label='2' />
          <Box label='3' />
          <Box label='4' />
          <Box label='5' />
        </Flexbox>
      </div>
      <div>
        <h3 className='text-base font-semibold mb-3 capitalize'>wrap</h3>
        <Flexbox wrap='wrap' gap='8px' className='bg-gray-200 p-4 rounded-lg w-48'>
          <Box label='1' />
          <Box label='2' />
          <Box label='3' />
          <Box label='4' />
          <Box label='5' />
        </Flexbox>
      </div>
      <div>
        <h3 className='text-base font-semibold mb-3 capitalize'>wrap-reverse</h3>
        <Flexbox wrap='wrap-reverse' gap='8px' className='bg-gray-200 p-4 rounded-lg w-48'>
          <Box label='1' />
          <Box label='2' />
          <Box label='3' />
          <Box label='4' />
          <Box label='5' />
        </Flexbox>
      </div>
    </div>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var j,v,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <div className='space-y-10'>
      {/* inline: false */}
      <div>
        <div className='text-sm mb-2 font-medium'>inline : false</div>
        <div>
          Some text before.
          <Flexbox {...args}>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
          Some text after.
        </div>
      </div>
      {/* inline: true */}
      <div>
        <div className='text-sm mb-2 font-medium'>inline : true</div>
        <div>
          Some text before.
          <Flexbox {...args} inline={true}>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
          Some text after.
        </div>
      </div>
    </div>
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var N,y,B;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-8 w-96'>
      <div>
        <h3 className='text-base font-semibold mb-3'>Without Flexbox</h3>
        <div className='bg-gray-200 p-4 rounded-lg'>
          <Box label='1' />
          <Box label='2' />
          <Box label='3' />
        </div>
      </div>
      <div>
        <h3 className='text-base font-semibold mb-3'>With Flexbox</h3>
        <Flexbox gap='8px' className='bg-gray-200 p-4 rounded-lg'>
          <Box label='1' />
          <Box label='2' />
          <Box label='3' />
        </Flexbox>
      </div>
    </div>
}`,...(B=(y=x.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const H=["Default","Direction","Wrapping","Inline","WithAndWithoutFlexbox"];export{r as Default,t as Direction,o as Inline,x as WithAndWithoutFlexbox,i as Wrapping,H as __namedExportsOrder,E as default};
