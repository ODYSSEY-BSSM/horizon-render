import{B as t}from"./index-amt3la56.js";import{R as e}from"./index-GiUgBvb1.js";import"./jsx-runtime-CDt2p4po.js";const K={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"버튼의 크기"},iconPosition:{control:"select",options:["none","left","right","only"],description:"아이콘 위치"},variant:{control:"select",options:["contained","outlined"],description:"시각적 스타일 변형"},rounded:{control:"boolean",description:"둥근 모서리 사용 여부 (알약 모양)"},disabled:{control:"boolean",description:"적절한 접근성 속성이 있는 비활성화 상태"},iconName:{control:"text",description:"Material Symbol 아이콘 이름. 아이콘 전용 버튼의 aria-label로 사용됨"},iconFilled:{control:"boolean",description:"아이콘의 채워진 버전 사용 여부"},type:{control:"select",options:["button","submit","reset"],description:"폼 상호작용을 위한 버튼 타입"},as:{control:"text",description:"다른 HTML 요소로 렌더링 (예: a)"}}},n={args:{children:"버튼 텍스트 입력",size:"medium",variant:"contained"},parameters:{docs:{source:{code:'<Button size="medium" variant="contained">버튼 텍스트 입력</Button>'}}}},i={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{size:"small"},"사이즈 스몰"),e.createElement(t,{size:"medium"},"사이즈 미디움"),e.createElement(t,{size:"large"},"사이즈 라지")),parameters:{docs:{source:{code:`<Button size="small">사이즈 스몰</Button>
<Button size="medium">사이즈 미디움</Button>
<Button size="large">사이즈 라지</Button>`}}}},a={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{variant:"contained"},"채워진 버튼"),e.createElement(t,{variant:"outlined"},"테두리 버튼")),parameters:{docs:{source:{code:`<Button variant="contained">채워진 버튼</Button>
<Button variant="outlined">테두리 버튼</Button>`}}}},r={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{iconPosition:"left",iconName:"add"},"아이템 추가"),e.createElement(t,{iconPosition:"right",iconName:"arrow_forward"},"다음"),e.createElement(t,{iconPosition:"only",iconName:"search"})),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{variant:"outlined",iconPosition:"left",iconName:"download"},"다운로드"),e.createElement(t,{variant:"outlined",iconPosition:"right",iconName:"send"},"전송"),e.createElement(t,{variant:"outlined",iconPosition:"only",iconName:"favorite"})),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{iconPosition:"left",iconName:"star",iconFilled:!0},"즐겨찾기 (Filled)"),e.createElement(t,{iconPosition:"left",iconName:"star"},"즐겨찾기 (Outlined)"),e.createElement(t,{iconPosition:"only",iconName:"favorite",iconFilled:!0}),e.createElement(t,{iconPosition:"only",iconName:"favorite"}))),parameters:{docs:{description:{story:"iconFilled prop을 사용하여 아이콘을 채워진 또는 테두리 스타일로 설정할 수 있습니다. 아이콘 전용 버튼은 접근성을 위해 iconName에서 자동으로 aria-label을 받습니다."},source:{code:`<Button iconPosition="left" iconName="add">아이템 추가</Button>
<Button iconPosition="right" iconName="arrow_forward">다음</Button>
<Button iconPosition="only" iconName="search" />
<Button iconPosition="left" iconName="star" iconFilled>즐겨찾기 (Filled)</Button>`}}}},l={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{rounded:!1},"각진 모서리"),e.createElement(t,{rounded:!0},"둥근 모서리"),e.createElement(t,{rounded:!0,iconPosition:"only",iconName:"favorite"})),parameters:{docs:{source:{code:`<Button rounded={false}>각진 모서리</Button>
<Button rounded={true}>둥근 모서리</Button>
<Button rounded={true} iconPosition="only" iconName="favorite" />`}}}},s={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,null,"기본 상태"),e.createElement(t,{disabled:!0},"비활성화")),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{variant:"outlined"},"기본 상태"),e.createElement(t,{variant:"outlined",disabled:!0},"비활성화")),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{iconPosition:"left",iconName:"download"},"다운로드"),e.createElement(t,{iconPosition:"left",iconName:"download",disabled:!0},"비활성화"))),parameters:{docs:{source:{code:`<Button>기본 상태</Button>
<Button disabled>비활성화</Button>
<Button variant="outlined">기본 상태</Button>
<Button variant="outlined" disabled>비활성화</Button>`}}}},d={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"24px"}},e.createElement("div",null,e.createElement("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"}},"채워진 버튼"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},["small","medium","large"].map(o=>e.createElement("div",{key:o,style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement("span",{style:{width:"64px",fontSize:"14px"}},o==="small"?"작음":o==="medium"?"보통":"큼"),e.createElement(t,{size:o},"텍스트"),e.createElement(t,{size:o,iconPosition:"left",iconName:"add"},"아이콘 왼쪽"),e.createElement(t,{size:o,iconPosition:"right",iconName:"arrow_forward"},"아이콘 오른쪽"),e.createElement(t,{size:o,iconPosition:"only",iconName:"search"}))))),e.createElement("div",null,e.createElement("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"}},"테두리 버튼"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},["small","medium","large"].map(o=>e.createElement("div",{key:o,style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement("span",{style:{width:"64px",fontSize:"14px"}},o==="small"?"작음":o==="medium"?"보통":"큼"),e.createElement(t,{size:o,variant:"outlined"},"텍스트"),e.createElement(t,{size:o,variant:"outlined",iconPosition:"left",iconName:"add"},"아이콘 왼쪽"),e.createElement(t,{size:o,variant:"outlined",iconPosition:"right",iconName:"arrow_forward"},"아이콘 오른쪽"),e.createElement(t,{size:o,variant:"outlined",iconPosition:"only",iconName:"search"})))))),parameters:{docs:{source:{code:`// 모든 크기와 아이콘 조합
<Button size="small">텍스트</Button>
<Button size="small" iconPosition="left" iconName="add">아이콘 왼쪽</Button>
<Button size="small" iconPosition="right" iconName="arrow_forward">아이콘 오른쪽</Button>
<Button size="small" iconPosition="only" iconName="search" />

// 테두리 변형
<Button size="medium" variant="outlined">텍스트</Button>
<Button size="medium" variant="outlined" iconPosition="left" iconName="add">아이콘 왼쪽</Button>`}}}},c={render:()=>e.createElement("form",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px",border:"1px solid #e5e5e5",borderRadius:"8px",maxWidth:"384px"}},e.createElement("div",null,e.createElement("label",{htmlFor:"email",style:{display:"block",fontSize:"14px",fontWeight:"500",marginBottom:"4px"}},"이메일"),e.createElement("input",{id:"email",type:"email",style:{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px"},placeholder:"example@email.com"})),e.createElement("div",{style:{display:"flex",gap:"8px"}},e.createElement(t,{type:"submit",iconPosition:"right",iconName:"send"},"제출"),e.createElement(t,{type:"reset",variant:"outlined"},"초기화"),e.createElement(t,{type:"button",variant:"outlined",onClick:()=>alert("취소를 클릭했습니다")},"취소"))),parameters:{docs:{description:{story:"폼 상호작용을 위한 다양한 버튼 타입을 보여줍니다. Submit과 reset 버튼은 폼 동작과 연동됩니다."},source:{code:`<Button type="submit">제출</Button>
<Button type="reset" variant="outlined">초기화</Button>
<Button type="button" variant="outlined">취소</Button>`}}}},u={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,null,"일반 버튼"),e.createElement(t,{as:"a",href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},"GitHub 링크")),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(t,{variant:"outlined",iconPosition:"left",iconName:"download"},"일반 다운로드"),e.createElement(t,{variant:"outlined",iconPosition:"left",iconName:"download",as:"a",href:"/files/sample.pdf",download:!0},"파일 다운로드"))),parameters:{docs:{description:{story:"asChild prop을 사용하면 앵커 같은 다른 요소에 버튼 스타일을 적용할 수 있습니다. 모든 버튼 기능(아이콘 등)이 asChild와 함께 작동합니다."},source:{code:`<Button asChild>
  <a href="/page">버튼으로 표시된 링크</a>
</Button>
<Button variant="outlined" iconPosition="left" iconName="download" as="a">
  <a href="/file.pdf" download>파일 다운로드</a>
</Button>`}}}},m={args:{children:"클릭해보세요!",size:"medium",iconPosition:"none",variant:"contained",rounded:!1,disabled:!1,iconName:"add",iconFilled:!1,type:"button",asChild:!1},parameters:{docs:{source:{code:`<Button 
  size="medium"
  iconPosition="none"
  variant="contained"
  rounded={false}
  disabled={false}
  iconName="add"
  type="button"
  asChild={false}
>
  클릭해보세요!
</Button>`}}}};var p,B,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(B=n.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,x,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,h,N;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(N=(h=a.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var P,E,b;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        <Button iconPosition='left' iconName='add'>
          아이템 추가
        </Button>
        <Button iconPosition='right' iconName='arrow_forward'>
          다음
        </Button>
        <Button iconPosition='only' iconName='search' />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button variant='outlined' iconPosition='left' iconName='download'>
          다운로드
        </Button>
        <Button variant='outlined' iconPosition='right' iconName='send'>
          전송
        </Button>
        <Button variant='outlined' iconPosition='only' iconName='favorite' />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button iconPosition='left' iconName='star' iconFilled>
          즐겨찾기 (Filled)
        </Button>
        <Button iconPosition='left' iconName='star'>
          즐겨찾기 (Outlined)
        </Button>
        <Button iconPosition='only' iconName='favorite' iconFilled />
        <Button iconPosition='only' iconName='favorite' />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'iconFilled prop을 사용하여 아이콘을 채워진 또는 테두리 스타일로 설정할 수 있습니다. 아이콘 전용 버튼은 접근성을 위해 iconName에서 자동으로 aria-label을 받습니다.'
      },
      source: {
        code: \`<Button iconPosition="left" iconName="add">아이템 추가</Button>
<Button iconPosition="right" iconName="arrow_forward">다음</Button>
<Button iconPosition="only" iconName="search" />
<Button iconPosition="left" iconName="star" iconFilled>즐겨찾기 (Filled)</Button>\`
      }
    }
  }
}`,...(b=(E=r.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var z,w,I;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <Button rounded={false}>각진 모서리</Button>
      <Button rounded={true}>둥근 모서리</Button>
      <Button rounded={true} iconPosition='only' iconName='favorite' />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button rounded={false}>각진 모서리</Button>
<Button rounded={true}>둥근 모서리</Button>
<Button rounded={true} iconPosition="only" iconName="favorite" />\`
      }
    }
  }
}`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var S,F,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        <Button iconPosition='left' iconName='download'>
          다운로드
        </Button>
        <Button iconPosition='left' iconName='download' disabled>
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
}`,...(C=(F=s.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var D,_,k;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
              <Button size={size} iconPosition='left' iconName='add'>
                아이콘 왼쪽
              </Button>
              <Button size={size} iconPosition='right' iconName='arrow_forward'>
                아이콘 오른쪽
              </Button>
              <Button size={size} iconPosition='only' iconName='search' />
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
              <Button size={size} variant='outlined' iconPosition='left' iconName='add'>
                아이콘 왼쪽
              </Button>
              <Button size={size} variant='outlined' iconPosition='right' iconName='arrow_forward'>
                아이콘 오른쪽
              </Button>
              <Button size={size} variant='outlined' iconPosition='only' iconName='search' />
            </div>)}
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`// 모든 크기와 아이콘 조합
<Button size="small">텍스트</Button>
<Button size="small" iconPosition="left" iconName="add">아이콘 왼쪽</Button>
<Button size="small" iconPosition="right" iconName="arrow_forward">아이콘 오른쪽</Button>
<Button size="small" iconPosition="only" iconName="search" />

// 테두리 변형
<Button size="medium" variant="outlined">텍스트</Button>
<Button size="medium" variant="outlined" iconPosition="left" iconName="add">아이콘 왼쪽</Button>\`
      }
    }
  }
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var R,W,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        <Button type='submit' iconPosition='right' iconName='send'>
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
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var T,H,M;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        <Button as='a' href='https://github.com' target='_blank' rel='noopener noreferrer'>
          GitHub 링크
        </Button>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Button variant='outlined' iconPosition='left' iconName='download'>
          일반 다운로드
        </Button>
        <Button variant='outlined' iconPosition='left' iconName='download' as='a' href='/files/sample.pdf' download>
          파일 다운로드
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
<Button variant="outlined" iconPosition="left" iconName="download" as="a">
  <a href="/file.pdf" download>파일 다운로드</a>
</Button>\`
      }
    }
  }
}`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,G,L;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: '클릭해보세요!',
    size: 'medium',
    iconPosition: 'none',
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
  iconPosition="none"
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
}`,...(L=(G=m.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const Q=["Default","Sizes","Types","WithIcons","Rounded","Disabled","AllCombinations","FormButtons","AsChild","Playground"];export{d as AllCombinations,u as AsChild,n as Default,s as Disabled,c as FormButtons,m as Playground,l as Rounded,i as Sizes,a as Types,r as WithIcons,Q as __namedExportsOrder,K as default};
