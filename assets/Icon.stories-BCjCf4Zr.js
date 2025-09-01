import{I as a}from"./index-CVK6zkMZ.js";import{R as e}from"./index-GiUgBvb1.js";import"./jsx-runtime-CDt2p4po.js";const _={title:"Components/Icon",component:a,parameters:{layout:"centered",docs:{description:{component:"Icon component with Material Symbols support."}}},tags:["autodocs"],argTypes:{name:{control:"text",description:"Icon name"},variant:{control:"select",options:["XS","SM","MD","LG","XL"],description:"Icon size variant"},filled:{control:"boolean",description:"Filled or outlined style"},size:{control:"text",description:"Custom size"},color:{control:"text",description:"Icon color"}}},n={args:{name:"home",variant:"MD"}},t={render:r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(a,{...r,name:"star",variant:"XS"}),e.createElement(a,{...r,name:"star",variant:"SM"}),e.createElement(a,{...r,name:"star",variant:"MD"}),e.createElement(a,{...r,name:"star",variant:"LG"}),e.createElement(a,{...r,name:"star",variant:"XL"})),parameters:{docs:{description:{story:"모든 아이콘 크기 변형 예시"},source:{code:`
<Icon name="star" variant="XS" />
<Icon name="star" variant="SM" />
<Icon name="star" variant="MD" />
<Icon name="star" variant="LG" />
<Icon name="star" variant="XL" />
        `.trim()}}}},o={render:r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},e.createElement(a,{...r,name:"favorite",filled:!1}),e.createElement(a,{...r,name:"favorite",filled:!0}),e.createElement(a,{...r,name:"star",filled:!1}),e.createElement(a,{...r,name:"star",filled:!0})),parameters:{docs:{description:{story:"아이콘 채움 스타일"},source:{code:`
<Icon name="favorite" filled={false} />
<Icon name="favorite" filled={true} />
<Icon name="star" filled={false} />
<Icon name="star" filled={true} />
        `.trim()}}}},s={render:r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},e.createElement(a,{...r,name:"settings",size:16}),e.createElement(a,{...r,name:"settings",size:24}),e.createElement(a,{...r,name:"settings",size:"1rem"}),e.createElement(a,{...r,name:"settings",size:"2rem"})),parameters:{docs:{description:{story:"커스텀 사이즈 지정"},source:{code:`
<Icon name="settings" size={16} />
<Icon name="settings" size={24} />
<Icon name="settings" size="1rem" />
<Icon name="settings" size="2rem" />
        `.trim()}}}},c={render:r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},e.createElement(a,{...r,name:"check_circle",color:"#3b82f6"}),e.createElement(a,{...r,name:"error",color:"#dc2626"}),e.createElement(a,{...r,name:"warning",color:"#059669"}),e.createElement(a,{...r,name:"info",color:"#7c3aed"})),parameters:{docs:{description:{story:"커스텀 아이콘 색상"},source:{code:`
<Icon name="check_circle" color="#3b82f6" />
<Icon name="error" color="#dc2626" />
<Icon name="warning" color="#059669" />
<Icon name="info" color="#7c3aed" />
        `.trim()}}}},i={args:{name:"star",variant:"MD",filled:!1,color:"#000000"},parameters:{docs:{description:{story:"Interactive playground to test all props"}}}};var l,m,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'home',
    variant: 'MD'
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,f,I;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Icon {...args} name='star' variant='XS' />
      <Icon {...args} name='star' variant='SM' />
      <Icon {...args} name='star' variant='MD' />
      <Icon {...args} name='star' variant='LG' />
      <Icon {...args} name='star' variant='XL' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '모든 아이콘 크기 변형 예시'
      },
      source: {
        code: \`
<Icon name="star" variant="XS" />
<Icon name="star" variant="SM" />
<Icon name="star" variant="MD" />
<Icon name="star" variant="LG" />
<Icon name="star" variant="XL" />
        \`.trim()
      }
    }
  }
}`,...(I=(f=t.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var u,g,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Icon {...args} name='favorite' filled={false} />
      <Icon {...args} name='favorite' filled={true} />
      <Icon {...args} name='star' filled={false} />
      <Icon {...args} name='star' filled={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '아이콘 채움 스타일'
      },
      source: {
        code: \`
<Icon name="favorite" filled={false} />
<Icon name="favorite" filled={true} />
<Icon name="star" filled={false} />
<Icon name="star" filled={true} />
        \`.trim()
      }
    }
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,x,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Icon {...args} name='settings' size={16} />
      <Icon {...args} name='settings' size={24} />
      <Icon {...args} name='settings' size='1rem' />
      <Icon {...args} name='settings' size='2rem' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '커스텀 사이즈 지정'
      },
      source: {
        code: \`
<Icon name="settings" size={16} />
<Icon name="settings" size={24} />
<Icon name="settings" size="1rem" />
<Icon name="settings" size="2rem" />
        \`.trim()
      }
    }
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var z,D,S;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Icon {...args} name='check_circle' color='#3b82f6' />
      <Icon {...args} name='error' color='#dc2626' />
      <Icon {...args} name='warning' color='#059669' />
      <Icon {...args} name='info' color='#7c3aed' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '커스텀 아이콘 색상'
      },
      source: {
        code: \`
<Icon name="check_circle" color="#3b82f6" />
<Icon name="error" color="#dc2626" />
<Icon name="warning" color="#059669" />
<Icon name="info" color="#7c3aed" />
        \`.trim()
      }
    }
  }
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var M,L,X;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'star',
    variant: 'MD',
    filled: false,
    color: '#000000'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all props'
      }
    }
  }
}`,...(X=(L=i.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};const w=["Default","Variants","Filled","CustomSize","Colors","Playground"];export{c as Colors,s as CustomSize,n as Default,o as Filled,i as Playground,t as Variants,w as __namedExportsOrder,_ as default};
