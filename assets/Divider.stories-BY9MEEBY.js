import{D as r}from"./index-D3Asy55h.js";import{R as e}from"./index-GiUgBvb1.js";import"./jsx-runtime-CDt2p4po.js";const S={title:"Components/Divider",component:r,parameters:{layout:"centered",docs:{description:{component:"Simple divider component with horizontal and vertical orientations."}}},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Divider orientation"},className:{control:"text",description:"Additional CSS class"}}},i={args:{orientation:"horizontal"}},n={render:t=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"32px"}},e.createElement("div",{style:{width:"200px"}},e.createElement(r,{...t,orientation:"horizontal"})),e.createElement("div",{style:{height:"100px",display:"flex",alignItems:"center"}},e.createElement(r,{...t,orientation:"vertical"}))),parameters:{docs:{description:{story:"가로 및 세로 방향 구분선"},source:{code:`
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
        `.trim()}}}},o={render:t=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"}},e.createElement("div",null,"Content above"),e.createElement(r,{...t}),e.createElement("div",null,"Content below")),parameters:{docs:{description:{story:"콘텐츠 사이의 구분선"},source:{code:`
<div>Content above</div>
<Divider />
<div>Content below</div>
        `.trim()}}}},a={render:t=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",null,"Content"),e.createElement(r,{...t,className:"my-2"}),e.createElement("div",null,"Content with small spacing"),e.createElement(r,{...t,className:"my-8"}),e.createElement("div",null,"Content with large spacing")),parameters:{docs:{description:{story:"className으로 여백 조정"},source:{code:`
<Divider className="my-2" />
<Divider className="my-8" />
        `.trim()}}}},s={args:{orientation:"horizontal",className:""},parameters:{docs:{description:{story:"Interactive playground to test all props"}}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var u,y,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,D,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>Content</div>
      <Divider {...args} className='my-2' />
      <div>Content with small spacing</div>
      <Divider {...args} className='my-8' />
      <div>Content with large spacing</div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'className으로 여백 조정'
      },
      source: {
        code: \`
<Divider className="my-2" />
<Divider className="my-8" />
        \`.trim()
      }
    }
  }
}`,...(h=(D=a.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var C,f,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all props'
      }
    }
  }
}`,...(E=(f=s.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};const b=["Default","Orientations","WithContent","CustomSpacing","Playground"];export{a as CustomSpacing,i as Default,n as Orientations,s as Playground,o as WithContent,b as __namedExportsOrder,S as default};
