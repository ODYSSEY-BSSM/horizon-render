import{j as e}from"./jsx-runtime-CDt2p4po.js";import{T as n}from"./Text-DFqJP0b-.js";import"./index-GiUgBvb1.js";import"./clsx-B-dksMZM.js";import"./size-CAyEbdpu.js";const O={title:"Components/Text",component:n,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["H1","H2","H3","ST","B1","B2","C","O"]},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div","label","li","blockquote","caption","legend","figcaption","dt","dd","small","strong","em"]},color:{control:"color"},width:{control:"text"},textAlign:{control:"select",options:["left","center","right","justify"]},whiteSpace:{control:"select",options:["normal","nowrap","pre","pre-wrap","pre-line"]},ellipsis:{control:"boolean"}}},t={args:{children:"Default text example",variant:"B1"}},a={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{variant:"H1",as:"h1",children:"H1 - 헤딩 1"}),e.jsx(n,{variant:"H2",as:"h2",children:"H2 - 헤딩 2"}),e.jsx(n,{variant:"H3",as:"h3",children:"H3 - 헤딩 3"}),e.jsx(n,{variant:"ST",as:"h4",children:"ST - 서브타이틀"}),e.jsx(n,{variant:"B1",children:"B1 - 본문 1"}),e.jsx(n,{variant:"B2",children:"B2 - 본문 2"}),e.jsx(n,{variant:"C",children:"C - 캡션"}),e.jsx(n,{variant:"O",children:"O - 오버라인"})]})},s={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{as:"label",variant:"O",children:"Label element"}),e.jsx(n,{as:"span",variant:"B2",children:"Span element"}),e.jsx(n,{as:"div",variant:"B1",children:"Div element"}),e.jsx(n,{as:"li",variant:"B2",children:"List item element"}),e.jsx(n,{as:"caption",variant:"C",children:"Table caption"}),e.jsx(n,{as:"blockquote",variant:"B1",children:"Blockquote element"})]})},r={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"ST",className:"mb-2",children:"Colors"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{color:"#3b82f6",children:"Blue text"}),e.jsx(n,{color:"#dc2626",children:"Red text"}),e.jsx(n,{color:"#059669",children:"Green text"})]})]}),e.jsxs("div",{style:{width:"300px"},children:[e.jsx(n,{variant:"ST",className:"mb-2",children:"Text Alignment"}),e.jsxs("div",{className:"space-y-2 border p-2 rounded",children:[e.jsx(n,{textAlign:"left",children:"Left aligned"}),e.jsx(n,{textAlign:"center",children:"Center aligned"}),e.jsx(n,{textAlign:"right",children:"Right aligned"})]})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"ST",className:"mb-2",children:"Width Control"}),e.jsx(n,{width:200,className:"border p-2 rounded",children:"이 텍스트는 200px 너비로 제한됩니다. 긴 텍스트가 자연스럽게 줄바꿈됩니다."})]})]})},i={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{variant:"ST",children:"Ellipsis Examples"}),e.jsx("div",{style:{width:"200px"},className:"border p-2 rounded",children:e.jsx(n,{ellipsis:!0,children:"이것은 매우 긴 텍스트로 말줄임표가 적용됩니다."})}),e.jsx("div",{style:{width:"200px"},className:"border p-2 rounded",children:e.jsx(n,{ellipsis:!1,children:"이것은 말줄임표 없이 자연스럽게 줄바꿈되는 긴 텍스트입니다."})})]})},l={args:{children:"Edit me in the controls panel!",variant:"B1",color:"#000",width:"auto",textAlign:"left",ellipsis:!1}};var c,d,o;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Default text example',
    variant: 'B1'
  }
}`,...(o=(d=t.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var x,p,m;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,v,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className='space-y-4'>
      <Text as='label' variant='O'>
        Label element
      </Text>
      <Text as='span' variant='B2'>
        Span element
      </Text>
      <Text as='div' variant='B1'>
        Div element
      </Text>
      <Text as='li' variant='B2'>
        List item element
      </Text>
      <Text as='caption' variant='C'>
        Table caption
      </Text>
      <Text as='blockquote' variant='B1'>
        Blockquote element
      </Text>
    </div>
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var u,j,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className='space-y-6'>
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

      <div>
        <Text variant='ST' className='mb-2'>
          Width Control
        </Text>
        <Text width={200} className='border p-2 rounded'>
          이 텍스트는 200px 너비로 제한됩니다. 긴 텍스트가 자연스럽게 줄바꿈됩니다.
        </Text>
      </div>
    </div>
}`,...(g=(j=r.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var b,B,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    </div>
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var N,S,f;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Edit me in the controls panel!',
    variant: 'B1',
    color: '#000',
    width: 'auto',
    textAlign: 'left',
    ellipsis: false
  }
}`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const D=["Default","AllVariants","WithCustomElements","Styling","Ellipsis","Playground"];export{a as AllVariants,t as Default,i as Ellipsis,l as Playground,r as Styling,s as WithCustomElements,D as __namedExportsOrder,O as default};
