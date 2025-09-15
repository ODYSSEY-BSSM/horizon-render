import{T as t}from"./index-BZPJ4Sv_.js";import{R as e}from"./react-vendor-Bu5f_IQm.js";import"./emotion-vendor-Bvh8OGvP.js";import"./vendor-BtKA1E4s.js";import"./storybook-vendor-Dr8OGHIp.js";const _={title:"Components/Text",component:t,parameters:{layout:"centered",docs:{description:{component:"Typography component with variant-based styling."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["H1","H2","H3","ST","B1","B2","C","O"],description:"Typography variant"},as:{control:"select",options:["h1","h2","h3","h4","p","span","div","label"],description:"HTML element to render"},color:{control:"text",description:"Text color"},textAlign:{control:"select",options:["left","center","right","justify"],description:"Text alignment"},ellipsis:{control:"boolean",description:"Enable text ellipsis"}}},n={args:{children:"기본 텍스트",variant:"B1"}},a={render:r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(t,{...r,variant:"H1"},"H1 - 헤딩 1"),e.createElement(t,{...r,variant:"H2"},"H2 - 헤딩 2"),e.createElement(t,{...r,variant:"H3"},"H3 - 헤딩 3"),e.createElement(t,{...r,variant:"ST"},"ST - 서브타이틀"),e.createElement(t,{...r,variant:"B1"},"B1 - 본문 1"),e.createElement(t,{...r,variant:"B2"},"B2 - 본문 2"),e.createElement(t,{...r,variant:"C"},"C - 캡션"),e.createElement(t,{...r,variant:"O"},"O - 오버라인")),parameters:{docs:{description:{story:"모든 타이포그래피 변형 예시"},source:{code:`
<Text variant="H1">H1 - 헤딩 1</Text>
<Text variant="H2">H2 - 헤딩 2</Text>
<Text variant="H3">H3 - 헤딩 3</Text>
<Text variant="ST">ST - 서브타이틀</Text>
<Text variant="B1">B1 - 본문 1</Text>
<Text variant="B2">B2 - 본문 2</Text>
<Text variant="C">C - 캡션</Text>
<Text variant="O">O - 오버라인</Text>
        `.trim()}}}},i={render:r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},e.createElement(t,{...r,color:"#3b82f6"},"파란색 텍스트"),e.createElement(t,{...r,color:"#dc2626"},"빨간색 텍스트"),e.createElement(t,{...r,color:"#059669"},"초록색 텍스트"),e.createElement(t,{...r,color:"#7c3aed"},"보라색 텍스트")),parameters:{docs:{description:{story:"커스텀 텍스트 색상"},source:{code:`
<Text color="#3b82f6">파란색 텍스트</Text>
<Text color="#dc2626">빨간색 텍스트</Text>
<Text color="#059669">초록색 텍스트</Text>
<Text color="#7c3aed">보라색 텍스트</Text>
        `.trim()}}}},s={render:r=>e.createElement("div",{style:{width:"300px",border:"1px solid #e5e7eb",padding:"16px"}},e.createElement(t,{...r,textAlign:"left"},"왼쪽 정렬 텍스트"),e.createElement(t,{...r,textAlign:"center"},"가운데 정렬 텍스트"),e.createElement(t,{...r,textAlign:"right"},"오른쪽 정렬 텍스트"),e.createElement(t,{...r,textAlign:"justify"},"여러 줄로 표시되는 텍스트로, 양쪽 정렬(Justify) 동작을 보여줍니다.")),parameters:{docs:{description:{story:"텍스트 정렬 옵션"},source:{code:`
<Text textAlign="left">왼쪽 정렬 텍스트</Text>
<Text textAlign="center">가운데 정렬 텍스트</Text>
<Text textAlign="right">오른쪽 정렬 텍스트</Text>
<Text textAlign="justify">여러 줄로 표시되는 텍스트로, 양쪽 정렬(Justify) 동작을 보여줍니다.</Text>
        `.trim()}}}},o={render:r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",{style:{width:"200px",border:"1px solid #e5e7eb",padding:"8px"}},e.createElement(t,{...r,ellipsis:!0},"너무 긴 텍스트는 말줄임표로 잘립니다")),e.createElement("div",{style:{width:"200px",border:"1px solid #e5e7eb",padding:"8px"}},e.createElement(t,{...r},"너무 긴 텍스트는 여러 줄로 자동 줄바꿈됩니다"))),parameters:{docs:{description:{story:"말줄임표(ellipsis) 텍스트 오버플로우 처리"},source:{code:`
<Text ellipsis>너무 긴 텍스트는 말줄임표로 잘립니다</Text>
<Text>너무 긴 텍스트는 여러 줄로 자동 줄바꿈됩니다</Text>
        `.trim()}}}},l={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},e.createElement(t,{as:"h1",variant:"H1"},"Heading as h1"),e.createElement(t,{as:"label",variant:"O",htmlFor:"input"},"Label for input"),e.createElement(t,{as:"span",variant:"B2"},"Inline span text"),e.createElement(t,{as:"div",variant:"B1"},"Block div text")),parameters:{docs:{description:{story:"Different HTML elements with typography variants"}}}},c={args:{children:"Edit me in the controls panel!",variant:"B1",color:"#000000",textAlign:"left",ellipsis:!1},parameters:{docs:{description:{story:"Interactive playground to test all props"}}}};var x,d,p;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: '기본 텍스트',
    variant: 'B1'
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var T,m,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Text {...args} variant='H1'>
        H1 - 헤딩 1
      </Text>
      <Text {...args} variant='H2'>
        H2 - 헤딩 2
      </Text>
      <Text {...args} variant='H3'>
        H3 - 헤딩 3
      </Text>
      <Text {...args} variant='ST'>
        ST - 서브타이틀
      </Text>
      <Text {...args} variant='B1'>
        B1 - 본문 1
      </Text>
      <Text {...args} variant='B2'>
        B2 - 본문 2
      </Text>
      <Text {...args} variant='C'>
        C - 캡션
      </Text>
      <Text {...args} variant='O'>
        O - 오버라인
      </Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '모든 타이포그래피 변형 예시'
      },
      source: {
        code: \`
<Text variant="H1">H1 - 헤딩 1</Text>
<Text variant="H2">H2 - 헤딩 2</Text>
<Text variant="H3">H3 - 헤딩 3</Text>
<Text variant="ST">ST - 서브타이틀</Text>
<Text variant="B1">B1 - 본문 1</Text>
<Text variant="B2">B2 - 본문 2</Text>
<Text variant="C">C - 캡션</Text>
<Text variant="O">O - 오버라인</Text>
        \`.trim()
      }
    }
  }
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,u,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Text {...args} color='#3b82f6'>
        파란색 텍스트
      </Text>
      <Text {...args} color='#dc2626'>
        빨간색 텍스트
      </Text>
      <Text {...args} color='#059669'>
        초록색 텍스트
      </Text>
      <Text {...args} color='#7c3aed'>
        보라색 텍스트
      </Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '커스텀 텍스트 색상'
      },
      source: {
        code: \`
<Text color="#3b82f6">파란색 텍스트</Text>
<Text color="#dc2626">빨간색 텍스트</Text>
<Text color="#059669">초록색 텍스트</Text>
<Text color="#7c3aed">보라색 텍스트</Text>
        \`.trim()
      }
    }
  }
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,E,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '300px',
    border: '1px solid #e5e7eb',
    padding: '16px'
  }}>
      <Text {...args} textAlign='left'>
        왼쪽 정렬 텍스트
      </Text>
      <Text {...args} textAlign='center'>
        가운데 정렬 텍스트
      </Text>
      <Text {...args} textAlign='right'>
        오른쪽 정렬 텍스트
      </Text>
      <Text {...args} textAlign='justify'>
        여러 줄로 표시되는 텍스트로, 양쪽 정렬(Justify) 동작을 보여줍니다.
      </Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '텍스트 정렬 옵션'
      },
      source: {
        code: \`
<Text textAlign="left">왼쪽 정렬 텍스트</Text>
<Text textAlign="center">가운데 정렬 텍스트</Text>
<Text textAlign="right">오른쪽 정렬 텍스트</Text>
<Text textAlign="justify">여러 줄로 표시되는 텍스트로, 양쪽 정렬(Justify) 동작을 보여줍니다.</Text>
        \`.trim()
      }
    }
  }
}`,...(h=(E=s.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var H,B,b;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      width: '200px',
      border: '1px solid #e5e7eb',
      padding: '8px'
    }}>
        <Text {...args} ellipsis>
          너무 긴 텍스트는 말줄임표로 잘립니다
        </Text>
      </div>
      <div style={{
      width: '200px',
      border: '1px solid #e5e7eb',
      padding: '8px'
    }}>
        <Text {...args}>너무 긴 텍스트는 여러 줄로 자동 줄바꿈됩니다</Text>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '말줄임표(ellipsis) 텍스트 오버플로우 처리'
      },
      source: {
        code: \`
<Text ellipsis>너무 긴 텍스트는 말줄임표로 잘립니다</Text>
<Text>너무 긴 텍스트는 여러 줄로 자동 줄바꿈됩니다</Text>
        \`.trim()
      }
    }
  }
}`,...(b=(B=o.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var A,S,C;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Text as='h1' variant='H1'>
        Heading as h1
      </Text>
      <Text as='label' variant='O' htmlFor='input'>
        Label for input
      </Text>
      <Text as='span' variant='B2'>
        Inline span text
      </Text>
      <Text as='div' variant='B1'>
        Block div text
      </Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different HTML elements with typography variants'
      }
    }
  }
}`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,O,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Edit me in the controls panel!',
    variant: 'B1',
    color: '#000000',
    textAlign: 'left',
    ellipsis: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all props'
      }
    }
  }
}`,...(w=(O=c.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const k=["Default","Variants","Colors","Alignment","Ellipsis","SemanticElements","Playground"];export{s as Alignment,i as Colors,n as Default,o as Ellipsis,c as Playground,l as SemanticElements,a as Variants,k as __namedExportsOrder,_ as default};
