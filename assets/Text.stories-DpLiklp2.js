import{j as e}from"./jsx-runtime-CDt2p4po.js";import{T as t}from"./Text-b1ln3Vwd.js";import"./index-GiUgBvb1.js";import"./size-BFO4AdcO.js";const D={title:"Components/Text",component:t,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["H1","H2","H3","ST","B1","B2","C","O"]},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div"]},color:{control:"color"},width:{control:"text"},textAlign:{control:"select",options:["left","center","right","justify"]},whiteSpace:{control:"select",options:["normal","nowrap","pre","pre-wrap","pre-line"]},ellipsis:{control:"boolean"}}},r={args:{children:"Default text example",variant:"B1"},parameters:{docs:{source:{code:'<Text variant="B1">Default text example</Text>'}}}},a={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"H1",as:"h1",children:"H1 - 헤딩 1"}),e.jsx(t,{variant:"H2",as:"h2",children:"H2 - 헤딩 2"}),e.jsx(t,{variant:"H3",as:"h3",children:"H3 - 헤딩 3"}),e.jsx(t,{variant:"ST",as:"h4",children:"ST - 서브타이틀"}),e.jsx(t,{variant:"B1",children:"B1 - 본문 1"}),e.jsx(t,{variant:"B2",children:"B2 - 본문 2"}),e.jsx(t,{variant:"C",children:"C - 캡션"}),e.jsx(t,{variant:"O",children:"O - 오버라인"})]}),parameters:{docs:{source:{code:`<Text variant="H1" as="h1">H1 - 헤딩 1</Text>
<Text variant="H2" as="h2">H2 - 헤딩 2</Text>
<Text variant="H3" as="h3">H3 - 헤딩 3</Text>
<Text variant="ST" as="h4">ST - 서브타이틀</Text>
<Text variant="B1">B1 - 본문 1</Text>
<Text variant="B2">B2 - 본문 2</Text>
<Text variant="C">C - 캡션</Text>
<Text variant="O">O - 오버라인</Text>`}}}},s={args:{children:"Edit me in the controls panel!",variant:"B1",color:"#000",width:"auto",textAlign:"left",ellipsis:!1},parameters:{docs:{source:{code:`<Text 
  variant="B1" 
  color="#000" 
  width="auto" 
  textAlign="left" 
  ellipsis={false}
>
  Edit me in the controls panel!
</Text>`}}}},i={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"ST",className:"mb-2",children:"Colors"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{color:"#3b82f6",children:"Blue text"}),e.jsx(t,{color:"#dc2626",children:"Red text"}),e.jsx(t,{color:"#059669",children:"Green text"})]})]}),e.jsxs("div",{style:{width:"300px"},children:[e.jsx(t,{variant:"ST",className:"mb-2",children:"Text Alignment"}),e.jsxs("div",{className:"space-y-2 border p-2 rounded",children:[e.jsx(t,{textAlign:"left",children:"Left aligned"}),e.jsx(t,{textAlign:"center",children:"Center aligned"}),e.jsx(t,{textAlign:"right",children:"Right aligned"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"ST",className:"mb-2",children:"Width Control"}),e.jsx(t,{width:200,className:"border p-2 rounded",children:"이 텍스트는 200px 너비로 제한됩니다. 긴 텍스트가 자연스럽게 줄바꿈됩니다."})]})]}),parameters:{docs:{source:{code:`{/* Colors */}
<Text color="#3b82f6">Blue text</Text>
<Text color="#dc2626">Red text</Text>
<Text color="#059669">Green text</Text>

{/* Text Alignment */}
<Text textAlign="left">Left aligned</Text>
<Text textAlign="center">Center aligned</Text>
<Text textAlign="right">Right aligned</Text>

{/* Width Control */}
<Text width={200}>
  이 텍스트는 200px 너비로 제한됩니다.
</Text>`}}}},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"ST",children:"Ellipsis Examples"}),e.jsx("div",{style:{width:"200px"},className:"border p-2 rounded",children:e.jsx(t,{ellipsis:!0,children:"이것은 매우 긴 텍스트로 말줄임표가 적용됩니다."})}),e.jsx("div",{style:{width:"200px"},className:"border p-2 rounded",children:e.jsx(t,{ellipsis:!1,children:"이것은 말줄임표 없이 자연스럽게 줄바꿈되는 긴 텍스트입니다."})})]}),parameters:{docs:{source:{code:`{/* With ellipsis */}
<Text ellipsis>매우 긴 텍스트로 말줄임표가 적용됩니다.</Text>

{/* Without ellipsis */}
<Text ellipsis={false}>자연스럽게 줄바꿈되는 긴 텍스트입니다.</Text>`}}}},l={render:()=>e.jsxs("div",{className:"space-y-4",style:{width:"250px"},children:[e.jsx(t,{variant:"ST",children:"White Space Options"}),e.jsx("div",{className:"border p-2 rounded",children:e.jsxs(t,{variant:"C",whiteSpace:"normal",children:["Normal: 여러 공백과",`
`,"줄바꿈이 있는 텍스트"]})}),e.jsx("div",{className:"border p-2 rounded",children:e.jsx(t,{variant:"C",whiteSpace:"nowrap",children:"Nowrap: 아무리 길어도 줄바꿈되지 않는 텍스트"})}),e.jsx("div",{className:"border p-2 rounded",children:e.jsxs(t,{variant:"C",whiteSpace:"pre",children:["Pre: 여러 공백과",`
`,"줄바꿈이 보존되는 텍스트"]})})]}),parameters:{docs:{source:{code:`<Text whiteSpace="normal">Normal: 자동 줄바꿈</Text>
<Text whiteSpace="nowrap">Nowrap: 줄바꿈 안됨</Text>
<Text whiteSpace="pre">Pre: 공백과 줄바꿈 보존</Text>`}}}},o={args:{variant:"B1",children:"Screen reader friendly text","aria-label":"Alternative text for screen readers",role:"status"},parameters:{docs:{source:{code:`<Text 
  variant="B1" 
  aria-label="Alternative text for screen readers" 
  role="status"
>
  Screen reader friendly text
</Text>`}}}};var c,x,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Default text example',
    variant: 'B1'
  },
  parameters: {
    docs: {
      source: {
        code: '<Text variant="B1">Default text example</Text>'
      }
    }
  }
}`,...(d=(x=r.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var T,p,h;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className='space-y-4'>
      <Text variant='H1' as='h1'>
        H1 - 헤딩 1
      </Text>
      <Text variant='H2' as='h2'>
        H2 - 헤딩 2
      </Text>
      <Text variant='H3' as='h3'>
        H3 - 헤딩 3
      </Text>
      <Text variant='ST' as='h4'>
        ST - 서브타이틀
      </Text>
      <Text variant='B1'>B1 - 본문 1</Text>
      <Text variant='B2'>B2 - 본문 2</Text>
      <Text variant='C'>C - 캡션</Text>
      <Text variant='O'>O - 오버라인</Text>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Text variant="H1" as="h1">H1 - 헤딩 1</Text>
<Text variant="H2" as="h2">H2 - 헤딩 2</Text>
<Text variant="H3" as="h3">H3 - 헤딩 3</Text>
<Text variant="ST" as="h4">ST - 서브타이틀</Text>
<Text variant="B1">B1 - 본문 1</Text>
<Text variant="B2">B2 - 본문 2</Text>
<Text variant="C">C - 캡션</Text>
<Text variant="O">O - 오버라인</Text>\`
      }
    }
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,v,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Edit me in the controls panel!',
    variant: 'B1',
    color: '#000',
    width: 'auto',
    textAlign: 'left',
    ellipsis: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Text 
  variant="B1" 
  color="#000" 
  width="auto" 
  textAlign="left" 
  ellipsis={false}
>
  Edit me in the controls panel!
</Text>\`
      }
    }
  }
}`,...(u=(v=s.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var g,S,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className='space-y-6'>
      {/* Colors */}
      <div>
        <Text variant='ST' className='mb-2'>
          Colors
        </Text>
        <div className='space-y-2'>
          <Text color='#3b82f6'>Blue text</Text>
          <Text color='#dc2626'>Red text</Text>
          <Text color='#059669'>Green text</Text>
        </div>
      </div>

      {/* Text Alignment */}
      <div style={{
      width: '300px'
    }}>
        <Text variant='ST' className='mb-2'>
          Text Alignment
        </Text>
        <div className='space-y-2 border p-2 rounded'>
          <Text textAlign='left'>Left aligned</Text>
          <Text textAlign='center'>Center aligned</Text>
          <Text textAlign='right'>Right aligned</Text>
        </div>
      </div>

      {/* Width Control */}
      <div>
        <Text variant='ST' className='mb-2'>
          Width Control
        </Text>
        <Text width={200} className='border p-2 rounded'>
          이 텍스트는 200px 너비로 제한됩니다. 긴 텍스트가 자연스럽게 줄바꿈됩니다.
        </Text>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`{/* Colors */}
<Text color="#3b82f6">Blue text</Text>
<Text color="#dc2626">Red text</Text>
<Text color="#059669">Green text</Text>

{/* Text Alignment */}
<Text textAlign="left">Left aligned</Text>
<Text textAlign="center">Center aligned</Text>
<Text textAlign="right">Right aligned</Text>

{/* Width Control */}
<Text width={200}>
  이 텍스트는 200px 너비로 제한됩니다.
</Text>\`
      }
    }
  }
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var j,w,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className='space-y-4'>
      <Text variant='ST'>Ellipsis Examples</Text>

      <div style={{
      width: '200px'
    }} className='border p-2 rounded'>
        <Text ellipsis>이것은 매우 긴 텍스트로 말줄임표가 적용됩니다.</Text>
      </div>

      <div style={{
      width: '200px'
    }} className='border p-2 rounded'>
        <Text ellipsis={false}>이것은 말줄임표 없이 자연스럽게 줄바꿈되는 긴 텍스트입니다.</Text>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`{/* With ellipsis */}
<Text ellipsis>매우 긴 텍스트로 말줄임표가 적용됩니다.</Text>

{/* Without ellipsis */}
<Text ellipsis={false}>자연스럽게 줄바꿈되는 긴 텍스트입니다.</Text>\`
      }
    }
  }
}`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var B,y,b;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className='space-y-4' style={{
    width: '250px'
  }}>
      <Text variant='ST'>White Space Options</Text>

      <div className='border p-2 rounded'>
        <Text variant='C' whiteSpace='normal'>
          Normal: 여러 공백과{'\\n'}줄바꿈이 있는 텍스트
        </Text>
      </div>

      <div className='border p-2 rounded'>
        <Text variant='C' whiteSpace='nowrap'>
          Nowrap: 아무리 길어도 줄바꿈되지 않는 텍스트
        </Text>
      </div>

      <div className='border p-2 rounded'>
        <Text variant='C' whiteSpace='pre'>
          Pre: 여러 공백과{'\\n'}줄바꿈이 보존되는 텍스트
        </Text>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Text whiteSpace="normal">Normal: 자동 줄바꿈</Text>
<Text whiteSpace="nowrap">Nowrap: 줄바꿈 안됨</Text>
<Text whiteSpace="pre">Pre: 공백과 줄바꿈 보존</Text>\`
      }
    }
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var A,C,H;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'B1',
    children: 'Screen reader friendly text',
    'aria-label': 'Alternative text for screen readers',
    role: 'status'
  },
  parameters: {
    docs: {
      source: {
        code: \`<Text 
  variant="B1" 
  aria-label="Alternative text for screen readers" 
  role="status"
>
  Screen reader friendly text
</Text>\`
      }
    }
  }
}`,...(H=(C=o.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};const P=["Default","AllVariants","Playground","Styling","Ellipsis","WhiteSpace","Accessibility"];export{o as Accessibility,a as AllVariants,r as Default,n as Ellipsis,s as Playground,i as Styling,l as WhiteSpace,P as __namedExportsOrder,D as default};
