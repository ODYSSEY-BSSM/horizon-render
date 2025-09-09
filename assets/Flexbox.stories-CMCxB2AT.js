import{F as t}from"./index-DOWKTFT2.js";import{R as e}from"./index-GiUgBvb1.js";import"./jsx-runtime-CDt2p4po.js";const _={title:"Components/Flexbox",component:t,parameters:{layout:"centered",docs:{description:{component:`
유연한 레이아웃을 위한 Flexbox 컴포넌트입니다. CSS flexbox의 모든 주요 속성을 props로 제공합니다.

## 주요 기능

- **완전한 flexbox 제어**: direction, justify-content, align-items, flex-wrap
- **반응형 간격**: gap 속성으로 아이템 간 간격 설정
- **인라인/블록 지원**: inline prop으로 display 방식 전환
- **flex 아이템 속성**: grow, shrink, basis 설정 가능
- **TypeScript 지원**: 모든 CSS flexbox 속성의 올바른 타입 정의

## 사용법

레이아웃 정렬과 간격을 정밀하게 제어할 수 있는 유연한 레이아웃을 만들 때 사용합니다.
        `}}},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"],description:"flex 아이템의 배치 방향"},justify:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"],description:"주축 방향 정렬 방식"},align:{control:"select",options:["flex-start","flex-end","center","stretch","baseline"],description:"교차축 방향 정렬 방식"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"],description:"flex 아이템 래핑 방식"},gap:{control:"text",description:"flex 아이템 간 간격"},width:{control:"text",description:"컨테이너 너비"},height:{control:"text",description:"컨테이너 높이"},grow:{control:"number",description:"flex-grow 값"},shrink:{control:"number",description:"flex-shrink 값"},basis:{control:"text",description:"flex-basis 값"},inline:{control:"boolean",description:"inline-flex 컨테이너로 표시 여부"},children:{control:!1},className:{control:"text"}}},l=({label:o})=>e.createElement("div",{style:{width:"50px",height:"50px",minWidth:"50px",minHeight:"50px",backgroundColor:"#3b82f6",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px"}},o),r={args:{children:e.createElement(e.Fragment,null,e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"})),gap:"8px"},parameters:{docs:{source:{code:`<Flexbox gap="8px">
  <Box label="1" />
  <Box label="2" />
  <Box label="3" />
</Flexbox>`}}}},a={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"row",gap:"16px"}},e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"8px",fontWeight:"500",textAlign:"center"}},"row"),e.createElement("div",{style:{width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}},e.createElement(t,{direction:"row",gap:"8px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"})))),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"8px",fontWeight:"500",textAlign:"center"}},"row-reverse"),e.createElement("div",{style:{width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}},e.createElement(t,{direction:"row-reverse",gap:"8px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"})))),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"8px",fontWeight:"500",textAlign:"center"}},"column"),e.createElement("div",{style:{width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}},e.createElement(t,{direction:"column",gap:"8px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"})))),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"8px",fontWeight:"500",textAlign:"center"}},"column-reverse"),e.createElement("div",{style:{width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}},e.createElement(t,{direction:"column-reverse",gap:"8px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"}))))),parameters:{docs:{source:{code:`<Flexbox direction="row" gap="8px">
  <Box label="1" />
  <Box label="2" />
  <Box label="3" />
</Flexbox>

<Flexbox direction="column" gap="8px">
  <Box label="1" />
  <Box label="2" />
  <Box label="3" />
</Flexbox>`}}}},x={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"24px"}},["flex-start","center","flex-end","space-between","space-around","space-evenly"].map(o=>e.createElement("div",{key:o},e.createElement("div",{style:{fontSize:"14px",marginBottom:"8px",fontWeight:"500"}},"justify: ",o),e.createElement(t,{justify:o,gap:"8px",width:"300px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"}))))),parameters:{docs:{source:{code:`<Flexbox justify="flex-start">...</Flexbox>
<Flexbox justify="center">...</Flexbox>
<Flexbox justify="space-between">...</Flexbox>`}}}},i={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"row",gap:"16px",flexWrap:"wrap"}},["flex-start","center","flex-end","stretch","baseline"].map(o=>e.createElement("div",{key:o},e.createElement("div",{style:{fontSize:"14px",marginBottom:"8px",fontWeight:"500",textAlign:"center"}},"align: ",o),e.createElement(t,{align:o,gap:"8px",height:"120px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement("div",{style:{...l({label:"1"}).props.style,height:"30px"}},"1"),e.createElement("div",{style:{...l({label:"2"}).props.style,height:"50px"}},"2"),e.createElement("div",{style:{...l({label:"3"}).props.style,height:"40px"}},"3"))))),parameters:{docs:{source:{code:`<Flexbox align="flex-start">...</Flexbox>
<Flexbox align="center">...</Flexbox>
<Flexbox align="stretch">...</Flexbox>`}}}},n={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"32px"}},e.createElement("div",null,e.createElement("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"}},"nowrap"),e.createElement(t,{wrap:"nowrap",gap:"8px",width:"200px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"}),e.createElement(l,{label:"4"}),e.createElement(l,{label:"5"}))),e.createElement("div",null,e.createElement("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"}},"wrap"),e.createElement(t,{wrap:"wrap",gap:"8px",width:"200px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"}),e.createElement(l,{label:"4"}),e.createElement(l,{label:"5"}))),e.createElement("div",null,e.createElement("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"}},"wrap-reverse"),e.createElement(t,{wrap:"wrap-reverse",gap:"8px",width:"200px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"}),e.createElement(l,{label:"4"}),e.createElement(l,{label:"5"})))),parameters:{docs:{source:{code:`<Flexbox wrap="nowrap" width="200px">
  <Box label="1" />
  <Box label="2" />
  <Box label="3" />
  <Box label="4" />
  <Box label="5" />
</Flexbox>

<Flexbox wrap="wrap" width="200px">
  <Box label="1" />
  <Box label="2" />
  <Box label="3" />
  <Box label="4" />
  <Box label="5" />
</Flexbox>`}}}},p={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"40px"}},e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"8px",fontWeight:"500"}},"inline: false (기본값)"),e.createElement("div",null,"텍스트 앞부분.",e.createElement(t,{gap:"8px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"})),"텍스트 뒷부분.")),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"8px",fontWeight:"500"}},"inline: true"),e.createElement("div",null,"텍스트 앞부분.",e.createElement(t,{inline:!0,gap:"8px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"})),"텍스트 뒷부분."))),parameters:{docs:{description:{story:"inline prop을 사용하면 flexbox 컨테이너가 인라인 요소처럼 동작합니다. 텍스트와 함께 한 줄에 배치됩니다."},source:{code:`<div>
  텍스트 앞부분.
  <Flexbox gap="8px">
    <Box label="1" />
    <Box label="2" />
    <Box label="3" />
  </Flexbox>
  텍스트 뒷부분.
</div>

<div>
  텍스트 앞부분.
  <Flexbox inline={true} gap="8px">
    <Box label="1" />
    <Box label="2" />
    <Box label="3" />
  </Flexbox>
  텍스트 뒷부분.
</div>`}}}},s={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"32px"}},e.createElement("div",null,e.createElement("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"}},"flex-grow"),e.createElement(t,{gap:"8px",width:"300px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement("div",{style:{...l({label:"1"}).props.style,flexGrow:1}},"grow: 1"),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"}))),e.createElement("div",null,e.createElement("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"}},"flex-basis"),e.createElement(t,{gap:"8px",width:"300px",style:{backgroundColor:"#e5e7eb",padding:"16px",borderRadius:"8px"}},e.createElement("div",{style:{...l({label:"1"}).props.style,flexBasis:"100px"}},"basis: 100px"),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"})))),parameters:{docs:{description:{story:"flex 아이템의 grow, shrink, basis 속성을 개별 요소에 적용한 예시입니다."},source:{code:`<Flexbox gap="8px" width="300px">
  <div style={{ flexGrow: 1 }}>grow: 1</div>
  <div>일반 아이템</div>
  <div>일반 아이템</div>
</Flexbox>

<Flexbox gap="8px" width="300px">
  <div style={{ flexBasis: '100px' }}>basis: 100px</div>
  <div>일반 아이템</div>
  <div>일반 아이템</div>
</Flexbox>`}}}},d={args:{children:e.createElement(e.Fragment,null,e.createElement(l,{label:"1"}),e.createElement(l,{label:"2"}),e.createElement(l,{label:"3"})),direction:"row",justify:"flex-start",align:"stretch",wrap:"nowrap",gap:"8px",inline:!1},parameters:{docs:{description:{story:"모든 props를 직접 테스트해볼 수 있는 인터랙티브 플레이그라운드입니다."}}}};var c,b,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <>
        <Box label='1' />
        <Box label='2' />
        <Box label='3' />
      </>,
    gap: '8px'
  },
  parameters: {
    docs: {
      source: {
        code: \`<Flexbox gap="8px">
  <Box label="1" />
  <Box label="2" />
  <Box label="3" />
</Flexbox>\`
      }
    }
  }
}`,...(m=(b=r.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var g,u,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '16px'
  }}>
      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: '500',
        textAlign: 'center'
      }}>
          row
        </div>
        <div style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <Flexbox direction='row' gap='8px' style={{
          backgroundColor: '#e5e7eb',
          padding: '16px',
          borderRadius: '8px'
        }}>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
        </div>
      </div>
      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: '500',
        textAlign: 'center'
      }}>
          row-reverse
        </div>
        <div style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <Flexbox direction='row-reverse' gap='8px' style={{
          backgroundColor: '#e5e7eb',
          padding: '16px',
          borderRadius: '8px'
        }}>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
        </div>
      </div>
      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: '500',
        textAlign: 'center'
      }}>
          column
        </div>
        <div style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <Flexbox direction='column' gap='8px' style={{
          backgroundColor: '#e5e7eb',
          padding: '16px',
          borderRadius: '8px'
        }}>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
        </div>
      </div>
      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: '500',
        textAlign: 'center'
      }}>
          column-reverse
        </div>
        <div style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <Flexbox direction='column-reverse' gap='8px' style={{
          backgroundColor: '#e5e7eb',
          padding: '16px',
          borderRadius: '8px'
        }}>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Flexbox direction="row" gap="8px">
  <Box label="1" />
  <Box label="2" />
  <Box label="3" />
</Flexbox>

<Flexbox direction="column" gap="8px">
  <Box label="1" />
  <Box label="2" />
  <Box label="3" />
</Flexbox>\`
      }
    }
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,y,B;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      {['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map(justify => <div key={justify}>
            <div style={{
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: '500'
      }}>
              justify: {justify}
            </div>
            <Flexbox justify={justify} gap='8px' width='300px' style={{
        backgroundColor: '#e5e7eb',
        padding: '16px',
        borderRadius: '8px'
      }}>
              <Box label='1' />
              <Box label='2' />
              <Box label='3' />
            </Flexbox>
          </div>)}
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Flexbox justify="flex-start">...</Flexbox>
<Flexbox justify="center">...</Flexbox>
<Flexbox justify="space-between">...</Flexbox>\`
      }
    }
  }
}`,...(B=(y=x.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var h,w,E;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      {['flex-start', 'center', 'flex-end', 'stretch', 'baseline'].map(align => <div key={align}>
          <div style={{
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: '500',
        textAlign: 'center'
      }}>
            align: {align}
          </div>
          <Flexbox align={align} gap='8px' height='120px' style={{
        backgroundColor: '#e5e7eb',
        padding: '16px',
        borderRadius: '8px'
      }}>
            <div style={{
          ...Box({
            label: '1'
          }).props.style,
          height: '30px'
        }}>1</div>
            <div style={{
          ...Box({
            label: '2'
          }).props.style,
          height: '50px'
        }}>2</div>
            <div style={{
          ...Box({
            label: '3'
          }).props.style,
          height: '40px'
        }}>3</div>
          </Flexbox>
        </div>)}
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Flexbox align="flex-start">...</Flexbox>
<Flexbox align="center">...</Flexbox>
<Flexbox align="stretch">...</Flexbox>\`
      }
    }
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var F,C,S;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '12px'
      }}>nowrap</h3>
        <Flexbox wrap='nowrap' gap='8px' width='200px' style={{
        backgroundColor: '#e5e7eb',
        padding: '16px',
        borderRadius: '8px'
      }}>
          <Box label='1' />
          <Box label='2' />
          <Box label='3' />
          <Box label='4' />
          <Box label='5' />
        </Flexbox>
      </div>
      <div>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '12px'
      }}>wrap</h3>
        <Flexbox wrap='wrap' gap='8px' width='200px' style={{
        backgroundColor: '#e5e7eb',
        padding: '16px',
        borderRadius: '8px'
      }}>
          <Box label='1' />
          <Box label='2' />
          <Box label='3' />
          <Box label='4' />
          <Box label='5' />
        </Flexbox>
      </div>
      <div>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '12px'
      }}>wrap-reverse</h3>
        <Flexbox wrap='wrap-reverse' gap='8px' width='200px' style={{
        backgroundColor: '#e5e7eb',
        padding: '16px',
        borderRadius: '8px'
      }}>
          <Box label='1' />
          <Box label='2' />
          <Box label='3' />
          <Box label='4' />
          <Box label='5' />
        </Flexbox>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Flexbox wrap="nowrap" width="200px">
  <Box label="1" />
  <Box label="2" />
  <Box label="3" />
  <Box label="4" />
  <Box label="5" />
</Flexbox>

<Flexbox wrap="wrap" width="200px">
  <Box label="1" />
  <Box label="2" />
  <Box label="3" />
  <Box label="4" />
  <Box label="5" />
</Flexbox>\`
      }
    }
  }
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var k,W,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  }}>
      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: '500'
      }}>
          inline: false (기본값)
        </div>
        <div>
          텍스트 앞부분.
          <Flexbox gap='8px' style={{
          backgroundColor: '#e5e7eb',
          padding: '16px',
          borderRadius: '8px'
        }}>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
          텍스트 뒷부분.
        </div>
      </div>
      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: '500'
      }}>inline: true</div>
        <div>
          텍스트 앞부분.
          <Flexbox inline={true} gap='8px' style={{
          backgroundColor: '#e5e7eb',
          padding: '16px',
          borderRadius: '8px'
        }}>
            <Box label='1' />
            <Box label='2' />
            <Box label='3' />
          </Flexbox>
          텍스트 뒷부분.
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'inline prop을 사용하면 flexbox 컨테이너가 인라인 요소처럼 동작합니다. 텍스트와 함께 한 줄에 배치됩니다.'
      },
      source: {
        code: \`<div>
  텍스트 앞부분.
  <Flexbox gap="8px">
    <Box label="1" />
    <Box label="2" />
    <Box label="3" />
  </Flexbox>
  텍스트 뒷부분.
</div>

<div>
  텍스트 앞부분.
  <Flexbox inline={true} gap="8px">
    <Box label="1" />
    <Box label="2" />
    <Box label="3" />
  </Flexbox>
  텍스트 뒷부분.
</div>\`
      }
    }
  }
}`,...(R=(W=p.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var z,j,D;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '12px'
      }}>flex-grow</h3>
        <Flexbox gap='8px' width='300px' style={{
        backgroundColor: '#e5e7eb',
        padding: '16px',
        borderRadius: '8px'
      }}>
          <div style={{
          ...Box({
            label: '1'
          }).props.style,
          flexGrow: 1
        }}>grow: 1</div>
          <Box label='2' />
          <Box label='3' />
        </Flexbox>
      </div>
      <div>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '12px'
      }}>flex-basis</h3>
        <Flexbox gap='8px' width='300px' style={{
        backgroundColor: '#e5e7eb',
        padding: '16px',
        borderRadius: '8px'
      }}>
          <div style={{
          ...Box({
            label: '1'
          }).props.style,
          flexBasis: '100px'
        }}>basis: 100px</div>
          <Box label='2' />
          <Box label='3' />
        </Flexbox>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'flex 아이템의 grow, shrink, basis 속성을 개별 요소에 적용한 예시입니다.'
      },
      source: {
        code: \`<Flexbox gap="8px" width="300px">
  <div style={{ flexGrow: 1 }}>grow: 1</div>
  <div>일반 아이템</div>
  <div>일반 아이템</div>
</Flexbox>

<Flexbox gap="8px" width="300px">
  <div style={{ flexBasis: '100px' }}>basis: 100px</div>
  <div>일반 아이템</div>
  <div>일반 아이템</div>
</Flexbox>\`
      }
    }
  }
}`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,A,G;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: <>
        <Box label='1' />
        <Box label='2' />
        <Box label='3' />
      </>,
    direction: 'row',
    justify: 'flex-start',
    align: 'stretch',
    wrap: 'nowrap',
    gap: '8px',
    inline: false
  },
  parameters: {
    docs: {
      description: {
        story: '모든 props를 직접 테스트해볼 수 있는 인터랙티브 플레이그라운드입니다.'
      }
    }
  }
}`,...(G=(A=d.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const H=["Default","Direction","Justify","Align","Wrapping","Inline","FlexItemProperties","Playground"];export{i as Align,r as Default,a as Direction,s as FlexItemProperties,p as Inline,x as Justify,d as Playground,n as Wrapping,H as __namedExportsOrder,_ as default};
