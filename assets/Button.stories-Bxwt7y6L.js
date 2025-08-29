import{B as t}from"./index-BZY4dgmr.js";import{R as e}from"./index-GiUgBvb1.js";import"./jsx-runtime-CDt2p4po.js";const K={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`
외부 의존성 없이 구축된 다용도 버튼 컴포넌트로, 포괄적인 접근성 지원을 제공합니다.

## 접근성 기능

- **자동 ARIA 속성**: \`aria-disabled\`, \`aria-label\` 자동 설정
- **아이콘 전용 버튼**: \`iconName\`에서 자동으로 \`aria-label\` 생성
- **폴리모픽**: \`asChild\`를 사용해 다양한 HTML 요소로 렌더링
- **키보드 내비게이션**: 완전한 키보드 지원
- **스크린 리더 친화적**: 모든 상태가 적절히 안내됨

## 주요 기능

- 다양한 크기와 변형
- 아이콘 위치 지정 (왼쪽, 오른쪽, 아이콘만)
- 채워진/테두리 아이콘 스타일
- 폼 통합 (submit, reset, button 타입)
- 외부 의존성 없음 (Radix 없는 구현)
        `}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"버튼의 크기"},icon:{control:"select",options:["none","left","right","only"],description:'아이콘 위치. "only"는 자동 aria-label이 있는 아이콘 전용 버튼을 생성'},variant:{control:"select",options:["contained","outlined"],description:"시각적 스타일 변형"},rounded:{control:"boolean",description:"둥근 모서리 사용 여부 (알약 모양)"},disabled:{control:"boolean",description:"적절한 접근성 속성이 있는 비활성화 상태"},iconName:{control:"text",description:"Material Symbol 아이콘 이름. 아이콘 전용 버튼의 aria-label로 사용됨"},iconFilled:{control:"boolean",description:"아이콘의 채워진 버전 사용 여부"},type:{control:"select",options:["button","submit","reset"],description:"폼 상호작용을 위한 버튼 타입"},asChild:{control:"boolean",description:"자식 요소로 렌더링 (예: <a> 태그) - 폴리모픽 패턴 사용"}}},o={args:{children:"버튼 텍스트 입력",size:"medium",variant:"contained"},parameters:{docs:{source:{code:'<Button size="medium" variant="contained">버튼 텍스트 입력</Button>'}}}},a={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{size:"small"},"사이즈 스몰"),e.createElement(t,{size:"medium"},"사이즈 미디움"),e.createElement(t,{size:"large"},"사이즈 라지")),parameters:{docs:{source:{code:`<Button size="small">사이즈 스몰</Button>
<Button size="medium">사이즈 미디움</Button>
<Button size="large">사이즈 라지</Button>`}}}},i={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{variant:"contained"},"채워진 버튼"),e.createElement(t,{variant:"outlined"},"테두리 버튼")),parameters:{docs:{source:{code:`<Button variant="contained">채워진 버튼</Button>
<Button variant="outlined">테두리 버튼</Button>`}}}},r={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{icon:"left",iconName:"add"},"아이템 추가"),e.createElement(t,{icon:"right",iconName:"arrow_forward"},"다음"),e.createElement(t,{icon:"only",iconName:"search"})),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{variant:"outlined",icon:"left",iconName:"download"},"다운로드"),e.createElement(t,{variant:"outlined",icon:"right",iconName:"send"},"전송"),e.createElement(t,{variant:"outlined",icon:"only",iconName:"favorite"})),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{icon:"left",iconName:"star",iconFilled:!0},"즐겨찾기 (Filled)"),e.createElement(t,{icon:"left",iconName:"star"},"즐겨찾기 (Outlined)"),e.createElement(t,{icon:"only",iconName:"favorite",iconFilled:!0}),e.createElement(t,{icon:"only",iconName:"favorite"}))),parameters:{docs:{description:{story:"iconFilled prop을 사용하여 아이콘을 채워진 또는 테두리 스타일로 설정할 수 있습니다. 아이콘 전용 버튼은 접근성을 위해 iconName에서 자동으로 aria-label을 받습니다."},source:{code:`<Button icon="left" iconName="add">아이템 추가</Button>
<Button icon="right" iconName="arrow_forward">다음</Button>
<Button icon="only" iconName="search" />
<Button icon="left" iconName="star" iconFilled>즐겨찾기 (Filled)</Button>`}}}},l={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{rounded:!1},"각진 모서리"),e.createElement(t,{rounded:!0},"둥근 모서리"),e.createElement(t,{rounded:!0,icon:"only",iconName:"favorite"})),parameters:{docs:{source:{code:`<Button rounded={false}>각진 모서리</Button>
<Button rounded={true}>둥근 모서리</Button>
<Button rounded={true} icon="only" iconName="favorite" />`}}}},d={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,null,"기본 상태"),e.createElement(t,{disabled:!0},"비활성화")),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{variant:"outlined"},"기본 상태"),e.createElement(t,{variant:"outlined",disabled:!0},"비활성화")),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{icon:"left",iconName:"download"},"다운로드"),e.createElement(t,{icon:"left",iconName:"download",disabled:!0},"비활성화"))),parameters:{docs:{source:{code:`<Button>기본 상태</Button>
<Button disabled>비활성화</Button>
<Button variant="outlined">기본 상태</Button>
<Button variant="outlined" disabled>비활성화</Button>`}}}},s={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"24px"}},e.createElement("div",null,e.createElement("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"}},"채워진 버튼"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},["small","medium","large"].map(n=>e.createElement("div",{key:n,style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement("span",{style:{width:"64px",fontSize:"14px"}},n==="small"?"작음":n==="medium"?"보통":"큼"),e.createElement(t,{size:n},"텍스트"),e.createElement(t,{size:n,icon:"left",iconName:"add"},"아이콘 왼쪽"),e.createElement(t,{size:n,icon:"right",iconName:"arrow_forward"},"아이콘 오른쪽"),e.createElement(t,{size:n,icon:"only",iconName:"search"}))))),e.createElement("div",null,e.createElement("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"}},"테두리 버튼"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},["small","medium","large"].map(n=>e.createElement("div",{key:n,style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement("span",{style:{width:"64px",fontSize:"14px"}},n==="small"?"작음":n==="medium"?"보통":"큼"),e.createElement(t,{size:n,variant:"outlined"},"텍스트"),e.createElement(t,{size:n,variant:"outlined",icon:"left",iconName:"add"},"아이콘 왼쪽"),e.createElement(t,{size:n,variant:"outlined",icon:"right",iconName:"arrow_forward"},"아이콘 오른쪽"),e.createElement(t,{size:n,variant:"outlined",icon:"only",iconName:"search"})))))),parameters:{docs:{source:{code:`// 모든 크기와 아이콘 조합
<Button size="small">텍스트</Button>
<Button size="small" icon="left" iconName="add">아이콘 왼쪽</Button>
<Button size="small" icon="right" iconName="arrow_forward">아이콘 오른쪽</Button>
<Button size="small" icon="only" iconName="search" />

// 테두리 변형
<Button size="medium" variant="outlined">텍스트</Button>
<Button size="medium" variant="outlined" icon="left" iconName="add">아이콘 왼쪽</Button>`}}}},c={render:()=>e.createElement("form",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px",border:"1px solid #e5e5e5",borderRadius:"8px",maxWidth:"384px"}},e.createElement("div",null,e.createElement("label",{htmlFor:"email",style:{display:"block",fontSize:"14px",fontWeight:"500",marginBottom:"4px"}},"이메일"),e.createElement("input",{id:"email",type:"email",style:{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px"},placeholder:"example@email.com"})),e.createElement("div",{style:{display:"flex",gap:"8px"}},e.createElement(t,{type:"submit",icon:"right",iconName:"send"},"제출"),e.createElement(t,{type:"reset",variant:"outlined"},"초기화"),e.createElement(t,{type:"button",variant:"outlined",onClick:()=>alert("취소를 클릭했습니다")},"취소"))),parameters:{docs:{description:{story:"폼 상호작용을 위한 다양한 버튼 타입을 보여줍니다. Submit과 reset 버튼은 폼 동작과 연동됩니다."},source:{code:`<Button type="submit">제출</Button>
<Button type="reset" variant="outlined">초기화</Button>
<Button type="button" variant="outlined">취소</Button>`}}}},u={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,null,"일반 버튼"),e.createElement(t,{asChild:!0},e.createElement("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},"GitHub 링크"))),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{variant:"outlined",icon:"left",iconName:"download"},"일반 다운로드"),e.createElement(t,{variant:"outlined",icon:"left",iconName:"download",asChild:!0},e.createElement("a",{href:"/files/sample.pdf",download:!0},"파일 다운로드")))),parameters:{docs:{description:{story:"asChild prop을 사용하면 앵커 같은 다른 요소에 버튼 스타일을 적용할 수 있습니다. 모든 버튼 기능(아이콘 등)이 asChild와 함께 작동합니다."},source:{code:`<Button asChild>
  <a href="/page">버튼으로 표시된 링크</a>
</Button>
<Button variant="outlined" icon="left" iconName="download" asChild>
  <a href="/file.pdf" download>파일 다운로드</a>
</Button>`}}}},m={args:{children:"클릭해보세요!",size:"medium",icon:"none",variant:"contained",rounded:!1,disabled:!1,iconName:"add",iconFilled:!1,type:"button",asChild:!1},parameters:{docs:{source:{code:`<Button 
  size="medium"
  icon="none"
  variant="contained"
  rounded={false}
  disabled={false}
  iconName="add"
  type="button"
  asChild={false}
>
  클릭해보세요!
</Button>`}}}};var p,B,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: '버튼 텍스트 입력',
    size: 'medium',
    variant: 'contained'
  },
  parameters: {
    docs: {
      source: {
        code: '<Button size="medium" variant="contained">버튼 텍스트 입력</Button>'
      }
    }
  }
}`,...(f=(B=o.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,x,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <Button size='small'>사이즈 스몰</Button>
      <Button size='medium'>사이즈 미디움</Button>
      <Button size='large'>사이즈 라지</Button>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button size="small">사이즈 스몰</Button>
<Button size="medium">사이즈 미디움</Button>
<Button size="large">사이즈 라지</Button>\`
      }
    }
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,h,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <Button variant='contained'>채워진 버튼</Button>
      <Button variant='outlined'>테두리 버튼</Button>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="contained">채워진 버튼</Button>
<Button variant="outlined">테두리 버튼</Button>\`
      }
    }
  }
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var N,b,z;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button icon='left' iconName='add'>
          아이템 추가
        </Button>
        <Button icon='right' iconName='arrow_forward'>
          다음
        </Button>
        <Button icon='only' iconName='search' />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button variant='outlined' icon='left' iconName='download'>
          다운로드
        </Button>
        <Button variant='outlined' icon='right' iconName='send'>
          전송
        </Button>
        <Button variant='outlined' icon='only' iconName='favorite' />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button icon='left' iconName='star' iconFilled>
          즐겨찾기 (Filled)
        </Button>
        <Button icon='left' iconName='star'>
          즐겨찾기 (Outlined)
        </Button>
        <Button icon='only' iconName='favorite' iconFilled />
        <Button icon='only' iconName='favorite' />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'iconFilled prop을 사용하여 아이콘을 채워진 또는 테두리 스타일로 설정할 수 있습니다. 아이콘 전용 버튼은 접근성을 위해 iconName에서 자동으로 aria-label을 받습니다.'
      },
      source: {
        code: \`<Button icon="left" iconName="add">아이템 추가</Button>
<Button icon="right" iconName="arrow_forward">다음</Button>
<Button icon="only" iconName="search" />
<Button icon="left" iconName="star" iconFilled>즐겨찾기 (Filled)</Button>\`
      }
    }
  }
}`,...(z=(b=r.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var w,I,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <Button rounded={false}>각진 모서리</Button>
      <Button rounded={true}>둥근 모서리</Button>
      <Button rounded={true} icon='only' iconName='favorite' />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button rounded={false}>각진 모서리</Button>
<Button rounded={true}>둥근 모서리</Button>
<Button rounded={true} icon="only" iconName="favorite" />\`
      }
    }
  }
}`,...(C=(I=l.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var S,F,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button>기본 상태</Button>
        <Button disabled>비활성화</Button>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button variant='outlined'>기본 상태</Button>
        <Button variant='outlined' disabled>
          비활성화
        </Button>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button icon='left' iconName='download'>
          다운로드
        </Button>
        <Button icon='left' iconName='download' disabled>
          비활성화
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button>기본 상태</Button>
<Button disabled>비활성화</Button>
<Button variant="outlined">기본 상태</Button>
<Button variant="outlined" disabled>비활성화</Button>\`
      }
    }
  }
}`,...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var _,k,R;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>채워진 버튼</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
              <span style={{
            width: '64px',
            fontSize: '14px'
          }}>
                {size === 'small' ? '작음' : size === 'medium' ? '보통' : '큼'}
              </span>
              <Button size={size}>텍스트</Button>
              <Button size={size} icon='left' iconName='add'>
                아이콘 왼쪽
              </Button>
              <Button size={size} icon='right' iconName='arrow_forward'>
                아이콘 오른쪽
              </Button>
              <Button size={size} icon='only' iconName='search' />
            </div>)}
        </div>
      </div>

      <div>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>테두리 버튼</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
              <span style={{
            width: '64px',
            fontSize: '14px'
          }}>
                {size === 'small' ? '작음' : size === 'medium' ? '보통' : '큼'}
              </span>
              <Button size={size} variant='outlined'>
                텍스트
              </Button>
              <Button size={size} variant='outlined' icon='left' iconName='add'>
                아이콘 왼쪽
              </Button>
              <Button size={size} variant='outlined' icon='right' iconName='arrow_forward'>
                아이콘 오른쪽
              </Button>
              <Button size={size} variant='outlined' icon='only' iconName='search' />
            </div>)}
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`// 모든 크기와 아이콘 조합
<Button size="small">텍스트</Button>
<Button size="small" icon="left" iconName="add">아이콘 왼쪽</Button>
<Button size="small" icon="right" iconName="arrow_forward">아이콘 오른쪽</Button>
<Button size="small" icon="only" iconName="search" />

// 테두리 변형
<Button size="medium" variant="outlined">텍스트</Button>
<Button size="medium" variant="outlined" icon="left" iconName="add">아이콘 왼쪽</Button>\`
      }
    }
  }
}`,...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var W,A,T;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <form style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    border: '1px solid #e5e5e5',
    borderRadius: '8px',
    maxWidth: '384px'
  }}>
      <div>
        <label htmlFor='email' style={{
        display: 'block',
        fontSize: '14px',
        fontWeight: '500',
        marginBottom: '4px'
      }}>
          이메일
        </label>
        <input id='email' type='email' style={{
        width: '100%',
        padding: '8px 12px',
        border: '1px solid #d1d5db',
        borderRadius: '6px'
      }} placeholder='example@email.com' />
      </div>
      <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Button type='submit' icon='right' iconName='send'>
          제출
        </Button>
        <Button type='reset' variant='outlined'>
          초기화
        </Button>
        <Button type='button' variant='outlined' onClick={() => alert('취소를 클릭했습니다')}>
          취소
        </Button>
      </div>
    </form>,
  parameters: {
    docs: {
      description: {
        story: '폼 상호작용을 위한 다양한 버튼 타입을 보여줍니다. Submit과 reset 버튼은 폼 동작과 연동됩니다.'
      },
      source: {
        code: \`<Button type="submit">제출</Button>
<Button type="reset" variant="outlined">초기화</Button>
<Button type="button" variant="outlined">취소</Button>\`
      }
    }
  }
}`,...(T=(A=c.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var H,O,G;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button>일반 버튼</Button>
        <Button asChild>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
            GitHub 링크
          </a>
        </Button>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button variant='outlined' icon='left' iconName='download'>
          일반 다운로드
        </Button>
        <Button variant='outlined' icon='left' iconName='download' asChild>
          <a href='/files/sample.pdf' download>
            파일 다운로드
          </a>
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'asChild prop을 사용하면 앵커 같은 다른 요소에 버튼 스타일을 적용할 수 있습니다. 모든 버튼 기능(아이콘 등)이 asChild와 함께 작동합니다.'
      },
      source: {
        code: \`<Button asChild>
  <a href="/page">버튼으로 표시된 링크</a>
</Button>
<Button variant="outlined" icon="left" iconName="download" asChild>
  <a href="/file.pdf" download>파일 다운로드</a>
</Button>\`
      }
    }
  }
}`,...(G=(O=u.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var M,P,L;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: '클릭해보세요!',
    size: 'medium',
    icon: 'none',
    variant: 'contained',
    rounded: false,
    disabled: false,
    iconName: 'add',
    iconFilled: false,
    type: 'button',
    asChild: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button 
  size="medium"
  icon="none"
  variant="contained"
  rounded={false}
  disabled={false}
  iconName="add"
  type="button"
  asChild={false}
>
  클릭해보세요!
</Button>\`
      }
    }
  }
}`,...(L=(P=m.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const Q=["Default","Sizes","Types","WithIcons","Rounded","Disabled","AllCombinations","FormButtons","AsChild","Playground"];export{s as AllCombinations,u as AsChild,o as Default,d as Disabled,c as FormButtons,m as Playground,l as Rounded,a as Sizes,i as Types,r as WithIcons,Q as __namedExportsOrder,K as default};
