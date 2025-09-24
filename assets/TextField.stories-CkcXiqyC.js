import{a as l}from"./index-1_VD4Vik.js";import{R as e}from"./react-vendor-Bu5f_IQm.js";import"./emotion-vendor-Bvh8OGvP.js";import"./vendor-BtKA1E4s.js";import"./storybook-vendor-Dr8OGHIp.js";const U={title:"Components/TextField",component:l,parameters:{layout:"centered",docs:{description:{component:`
Text input component with consistent styles and a11y. Supports labels, helper text, icons (left/right),
and password visibility toggle.

## Features
- Smart labeling: auto-linked label and input id for a11y
- Clear states: filled, focus, disabled, and error
- Icons: leftIcon and rightIcon as Material Symbols names
- Flexible width: support number (px) or any CSS width string
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Field label"},placeholder:{control:"text",description:"Placeholder text"},type:{control:{type:"select"},options:["text","email","password","number","tel","url","search"],description:"Input type"},error:{control:"boolean",description:"Error state"},disabled:{control:"boolean",description:"Disabled state"},helperText:{control:"text",description:"Helper or error message"},leftIcon:{control:"text",description:"Left icon (Material Symbols name)"},rightIcon:{control:"text",description:"Right icon (Material Symbols name)"},value:{control:"text",description:"Controlled value"},defaultValue:{control:"text",description:"Uncontrolled default value"},width:{control:"text",description:'Width (e.g., "100%", "20rem"; number is px)'}},args:{label:"Label",placeholder:"Type something...",type:"text",error:!1,disabled:!1,helperText:""}},a={args:{label:"Name",placeholder:"Enter your name",width:"400px"},parameters:{docs:{source:{code:'<TextField label="Name" placeholder="Enter your name" />'}}}},r={render:()=>e.createElement("div",{style:{display:"grid",gap:"16px",maxWidth:"400px"}},e.createElement(l,{label:"검색",placeholder:"검색어를 입력하세요",leftIcon:"search",width:"400px"}),e.createElement(l,{label:"이메일",placeholder:"example@email.com",type:"email",leftIcon:"mail",rightIcon:"send",width:"400px"}),e.createElement(l,{label:"비밀번호",placeholder:"비밀번호 입력",type:"password",width:"400px"})),parameters:{docs:{description:{story:"Check default HTML behaviors for types like email and password."},source:{code:`
<TextField label="Search" placeholder="Search..." />
<TextField label="Email" placeholder="example@email.com" type="email" />
<TextField label="Password" placeholder="Enter password" type="password" />
        `}}}},t={render:()=>e.createElement("div",{style:{display:"grid",gap:"16px",maxWidth:"400px"}},e.createElement(l,{label:"Email",defaultValue:"invalid@email",error:!0,helperText:"Invalid email format",width:"400px"}),e.createElement(l,{label:"Required",error:!0,helperText:"This field is required",width:"400px"})),parameters:{docs:{description:{story:"Error state shows red border and a clear error message."},source:{code:`
<TextField label="Email" defaultValue="invalid@email" error helperText="Invalid email" />
        `}}}},d={render:()=>e.createElement("div",{style:{display:"grid",gap:"16px",maxWidth:"400px"}},e.createElement(l,{label:"Empty",placeholder:"Type something...",width:"400px"}),e.createElement(l,{label:"With value",defaultValue:"John Doe",width:"400px"}),e.createElement(l,{label:"Controlled",value:"Live value",onChange:()=>{},width:"400px"})),parameters:{docs:{description:{story:"Filled shows active label and highlighted border; focus increases border width."},source:{code:`
<TextField label="Empty" placeholder="Type something..." />
<TextField label="With value" defaultValue="John Doe" />
<TextField label="Controlled" value="Live value" onChange={handleChange} />
        `}}}},o={render:()=>e.createElement("div",{style:{display:"grid",gap:"16px",maxWidth:"400px"}},e.createElement(l,{label:"Disabled",placeholder:"Not allowed",disabled:!0,width:"400px"}),e.createElement(l,{label:"Disabled with value",defaultValue:"Read-only",disabled:!0,width:"400px"})),parameters:{docs:{source:{code:`
<TextField label="Disabled" placeholder="Not allowed" disabled />
<TextField label="Disabled with value" defaultValue="Read-only" disabled />
        `}}}},s={render:()=>e.createElement("div",{style:{maxWidth:"600px",padding:"24px",borderRadius:"8px",border:"1px solid #dbeafe"}},e.createElement("h3",{style:{fontSize:"20px",fontWeight:600,marginBottom:"16px"}},"Sign Up"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}},e.createElement(l,{label:"Name",placeholder:"John Doe",width:"400px"}),e.createElement(l,{label:"Email",placeholder:"example@email.com",type:"email",width:"400px"}),e.createElement(l,{label:"Password",placeholder:"At least 8 characters",type:"password",width:"400px"}),e.createElement(l,{label:"Confirm Password",placeholder:"Re-enter password",type:"password",width:"400px"})),e.createElement(l,{label:"Address",placeholder:"123 Main St, ...",width:"100%",style:{marginTop:"16px"}})),parameters:{docs:{description:{story:"Simple form example using grouping and clear labeling."},source:{code:`
<TextField label="Name" placeholder="John Doe" />
<TextField label="Email" placeholder="example@email.com" type="email" />
<TextField label="Password" placeholder="At least 8 characters" type="password" />
        `}}}},i={render:()=>e.createElement("div",{style:{display:"grid",gap:"16px",maxWidth:"600px"}},e.createElement(l,{label:"Standard (400px)",placeholder:"Standard field",width:"400px"}),e.createElement(l,{label:"Full Width",placeholder:"Full width",width:"100%"})),parameters:{docs:{description:{story:"Resize fields with the width prop. Numbers are px; strings are raw CSS values."},source:{code:`
<TextField width={250} label="Compact" placeholder="Narrow field" />
<TextField label="Standard" placeholder="Standard field" />
<TextField width="100%" label="Full Width" placeholder="Full width" />
        `}}}},p={render:()=>e.createElement("div",{style:{display:"grid",gap:"16px",maxWidth:"400px"}},e.createElement(l,{type:"password",label:"Password",placeholder:"Enter password",width:"400px"}),e.createElement(l,{type:"password",label:"With value",placeholder:"At least 8 characters",defaultValue:"mypassword123",width:"400px"}),e.createElement(l,{type:"password",label:"Error state",defaultValue:"123",error:!0,helperText:"Password must be at least 8 characters",width:"400px"}),e.createElement(l,{type:"password",label:"Disabled",placeholder:"Not allowed",disabled:!0,width:"400px"})),parameters:{docs:{description:{story:'Basic password examples using TextField with type="password".'}}}},c={args:{label:"Label",placeholder:"Type something...",error:!1,helperText:"",disabled:!1,width:"400px"},parameters:{docs:{source:{code:`
<TextField
  label="Label"
  placeholder="Type something..."
  error={false}
  helperText=""
  disabled={false}
  width="400px"
/>
        `}}}};var n,h,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    width: '400px'
  },
  parameters: {
    docs: {
      source: {
        code: '<TextField label="Name" placeholder="Enter your name" />'
      }
    }
  }
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,u,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    maxWidth: '400px'
  }}>
      <TextField label='검색' placeholder='검색어를 입력하세요' leftIcon='search' width='400px' />
      <TextField label='이메일' placeholder='example@email.com' type='email' leftIcon='mail' rightIcon='send' width='400px' />
      <TextField label='비밀번호' placeholder='비밀번호 입력' type='password' width='400px' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Check default HTML behaviors for types like email and password.'
      },
      source: {
        code: \`
<TextField label="Search" placeholder="Search..." />
<TextField label="Email" placeholder="example@email.com" type="email" />
<TextField label="Password" placeholder="Enter password" type="password" />
        \`
      }
    }
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var w,y,g;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    maxWidth: '400px'
  }}>
      <TextField label='Email' defaultValue='invalid@email' error helperText='Invalid email format' width='400px' />
      <TextField label='Required' error helperText='This field is required' width='400px' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Error state shows red border and a clear error message.'
      },
      source: {
        code: \`
<TextField label="Email" defaultValue="invalid@email" error helperText="Invalid email" />
        \`
      }
    }
  }
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var T,f,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    maxWidth: '400px'
  }}>
      <TextField label='Empty' placeholder='Type something...' width='400px' />
      <TextField label='With value' defaultValue='John Doe' width='400px' />
      <TextField label='Controlled' value='Live value' onChange={() => {
      /* no-op */
    }} width='400px' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Filled shows active label and highlighted border; focus increases border width.'
      },
      source: {
        code: \`
<TextField label="Empty" placeholder="Type something..." />
<TextField label="With value" defaultValue="John Doe" />
<TextField label="Controlled" value="Live value" onChange={handleChange} />
        \`
      }
    }
  }
}`,...(F=(f=d.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var v,E,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    maxWidth: '400px'
  }}>
      <TextField label='Disabled' placeholder='Not allowed' disabled width='400px' />
      <TextField label='Disabled with value' defaultValue='Read-only' disabled width='400px' />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
<TextField label="Disabled" placeholder="Not allowed" disabled />
<TextField label="Disabled with value" defaultValue="Read-only" disabled />
        \`
      }
    }
  }
}`,...(S=(E=o.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var W,C,D;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '600px',
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #dbeafe'
  }}>
      <h3 style={{
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '16px'
    }}>Sign Up</h3>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }}>
        <TextField label='Name' placeholder='John Doe' width='400px' />
        <TextField label='Email' placeholder='example@email.com' type='email' width='400px' />
        <TextField label='Password' placeholder='At least 8 characters' type='password' width='400px' />
        <TextField label='Confirm Password' placeholder='Re-enter password' type='password' width='400px' />
      </div>
      <TextField label='Address' placeholder='123 Main St, ...' width='100%' style={{
      marginTop: '16px'
    }} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Simple form example using grouping and clear labeling.'
      },
      source: {
        code: \`
<TextField label="Name" placeholder="John Doe" />
<TextField label="Email" placeholder="example@email.com" type="email" />
<TextField label="Password" placeholder="At least 8 characters" type="password" />
        \`
      }
    }
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var V,N,P;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    maxWidth: '600px'
  }}>
      <TextField label='Standard (400px)' placeholder='Standard field' width='400px' />
      <TextField label='Full Width' placeholder='Full width' width='100%' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Resize fields with the width prop. Numbers are px; strings are raw CSS values.'
      },
      source: {
        code: \`
<TextField width={250} label="Compact" placeholder="Narrow field" />
<TextField label="Standard" placeholder="Standard field" />
<TextField width="100%" label="Full Width" placeholder="Full width" />
        \`
      }
    }
  }
}`,...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var I,R,L;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    maxWidth: '400px'
  }}>
      <TextField type='password' label='Password' placeholder='Enter password' width='400px' />
      <TextField type='password' label='With value' placeholder='At least 8 characters' defaultValue='mypassword123' width='400px' />
      <TextField type='password' label='Error state' defaultValue='123' error helperText='Password must be at least 8 characters' width='400px' />
      <TextField type='password' label='Disabled' placeholder='Not allowed' disabled width='400px' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Basic password examples using TextField with type="password".'
      }
    }
  }
}`,...(L=(R=p.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var A,J,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Type something...',
    error: false,
    helperText: '',
    disabled: false,
    width: '400px'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<TextField
  label="Label"
  placeholder="Type something..."
  error={false}
  helperText=""
  disabled={false}
  width="400px"
/>
        \`
      }
    }
  }
}`,...(M=(J=c.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const _=["Default","Types","ErrorState","FilledState","Disabled","FormExample","WidthVariations","Password","Playground"];export{a as Default,o as Disabled,t as ErrorState,d as FilledState,s as FormExample,p as Password,c as Playground,r as Types,i as WidthVariations,_ as __namedExportsOrder,U as default};
