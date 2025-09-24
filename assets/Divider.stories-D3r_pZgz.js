import{D as n}from"./index-1_VD4Vik.js";import{R as e}from"./react-vendor-Bu5f_IQm.js";import"./emotion-vendor-Bvh8OGvP.js";import"./vendor-BtKA1E4s.js";import"./storybook-vendor-Dr8OGHIp.js";const b={title:"Components/Divider",component:n,parameters:{layout:"centered",docs:{description:{component:"Simple divider component with horizontal and vertical orientations."}}},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Divider orientation"},length:{control:"text",description:"Divider length"}}},r={args:{orientation:"horizontal",length:"300px"},render:t=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(n,{...t}))},i={render:t=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"32px"}},e.createElement("div",{style:{width:"200px"}},e.createElement(n,{...t,orientation:"horizontal"})),e.createElement("div",{style:{height:"100px",display:"flex",alignItems:"center"}},e.createElement(n,{...t,orientation:"vertical"}))),parameters:{docs:{description:{story:"가로 및 세로 방향 구분선"},source:{code:`
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
        `.trim()}}}},o={render:t=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"}},e.createElement("div",null,"Content above"),e.createElement(n,{...t}),e.createElement("div",null,"Content below")),parameters:{docs:{description:{story:"콘텐츠 사이의 구분선"},source:{code:`
<div>Content above</div>
<Divider />
<div>Content below</div>
        `.trim()}}}},a={args:{...r.args},parameters:{docs:{description:{story:"Interactive playground to test all props"}}}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    length: '300px'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Divider {...args} />
    </div>
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div style={{
      width: '200px'
    }}>
        <Divider {...args} orientation='horizontal' />
      </div>
      <div style={{
      height: '100px',
      display: 'flex',
      alignItems: 'center'
    }}>
        <Divider {...args} orientation='vertical' />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '가로 및 세로 방향 구분선'
      },
      source: {
        code: \`
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
        \`.trim()
      }
    }
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,g,u;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <div>Content above</div>
      <Divider {...args} />
      <div>Content below</div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '콘텐츠 사이의 구분선'
      },
      source: {
        code: \`
<div>Content above</div>
<Divider />
<div>Content below</div>
        \`.trim()
      }
    }
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,y,D;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all props'
      }
    }
  }
}`,...(D=(y=a.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const z=["Default","Orientations","WithContent","Playground"];export{r as Default,i as Orientations,a as Playground,o as WithContent,z as __namedExportsOrder,b as default};
