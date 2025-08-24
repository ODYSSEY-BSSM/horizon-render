import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as u,I as w}from"./clsx-C0pa3r6B.js";import{r as _}from"./index-GiUgBvb1.js";import{t as o}from"./index-TSvnGxuV.js";import{c as be}from"./index-ChEMxZTj.js";const T={small:"text-13 font-semibold leading-[18px] tracking-normal",medium:"text-14 font-semibold leading-[20px] tracking-normal",large:"text-16 font-semibold leading-[24px] tracking-normal"},C={small:{classes:"text-16 font-regular",wght:o.fontWeight.regular,grad:o.icons.grade[0],opsz:o.icons.opticalSize[20]},medium:{classes:"text-20 font-regular",wght:o.fontWeight.regular,grad:o.icons.grade[0],opsz:o.icons.opticalSize[24]},large:{classes:"text-24 font-medium",wght:o.fontWeight.medium,grad:o.icons.grade[25],opsz:o.icons.opticalSize[40]}},ye=["inline-flex items-center justify-center","font-suit select-none transition-colors","focus-visible:outline-none focus-visible:ring-2","disabled:pointer-events-none","shrink-0 py-2.5"].join(" "),je=be(ye,{variants:{size:{small:"gap-1.5",medium:"gap-2",large:"gap-2.5"},icon:{none:"",left:"pl-2.5",right:"pr-2.5",only:"gap-0 px-2.5"},type:{contained:["bg-primary-500 text-white","hover:bg-primary-700","active:bg-primary-900","disabled:bg-neutral-200"].join(" "),outlined:["bg-transparent border border-[1.5px] border-primary-500 text-primary-500","hover:bg-primary-600 hover:text-white hover:border-primary-600","active:bg-primary-900 active:text-white active:border-primary-900","disabled:border-neutral-300 disabled:text-neutral-300"].join(" ")},rounded:{true:"rounded-full",false:"rounded-lg"}},compoundVariants:[{icon:["none","left","right"],size:"small",class:"px-4"},{icon:["none","left","right"],size:"medium",class:"px-5"},{icon:["none","left","right"],size:"large",class:"px-6"}],defaultVariants:{size:"medium",icon:"none",type:"contained",rounded:!1}}),ze={small:{text:T.small,icon:C.small},medium:{text:T.medium,icon:C.medium},large:{text:T.large,icon:C.large}},t=({size:n="medium",icon:i="none",variant:me="contained",rounded:pe=!1,children:s,iconName:l="check",iconFilled:fe=!1,className:Be,disabled:xe=!1,type:ge="button",asChild:F=!1,loading:r=!1,loadingText:d,...he})=>{const ve=je({size:n,icon:i,type:me,rounded:pe}),a=ze[n],S=xe||r,L={className:u(ve,Be),disabled:S,"aria-disabled":S,...r&&{"aria-busy":!0},...i==="only"&&l&&!r&&{"aria-label":l},...r&&d&&{"aria-label":d},...he},j=F?L:{...L,type:ge},z=c=>!l||i==="none"||i!==c&&i!=="only"?null:e.jsx("span",{className:u("material-symbols-rounded select-none",a.icon.classes),style:{fontVariationSettings:`'FILL' ${fe?w.FILL.FILLED:w.FILL.OUTLINED}, 'wght' ${a.icon.wght}, 'GRAD' ${a.icon.grad}, 'opsz' ${a.icon.opsz}`},"aria-hidden":i!=="only",children:l}),Ne=()=>e.jsx("span",{className:u("material-symbols-rounded select-none animate-spin",a.icon.classes),style:{fontVariationSettings:`'FILL' ${w.FILL.OUTLINED}, 'wght' ${a.icon.wght}, 'GRAD' ${a.icon.grad}, 'opsz' ${a.icon.opsz}`},"aria-hidden":"true",children:"refresh"}),V=r?e.jsxs(e.Fragment,{children:[Ne(),(d||s)&&e.jsx("span",{className:a.text,children:d||s})]}):i==="only"?z("left"):e.jsxs(e.Fragment,{children:[z("left"),s&&e.jsx("span",{className:a.text,children:s}),z("right")]});if(F){if(!s||!_.isValidElement(s))return console.warn("Button component: asChild=true requires a single valid React element as children"),null;const c=s;return _.cloneElement(c,{...j,className:u(c.props.className,j.className),children:V})}return e.jsx("button",{...j,children:V})};t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"'none' | 'left' | 'right' | 'only'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'only'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'outlined'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'contained'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'check'",computed:!1}},iconFilled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Ve={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`
외부 의존성 없이 구축된 다용도 버튼 컴포넌트로, 포괄적인 접근성 지원을 제공합니다.

## 접근성 기능

- **자동 ARIA 속성**: \`aria-disabled\`, \`aria-busy\`, \`aria-label\` 자동 설정
- **로딩 상태**: 접근성을 고려한 스피너와 상태 안내
- **아이콘 전용 버튼**: \`iconName\`에서 자동으로 \`aria-label\` 생성
- **폴리모픽**: \`asChild\`를 사용해 다양한 HTML 요소로 렌더링
- **키보드 내비게이션**: 완전한 키보드 지원
- **스크린 리더 친화적**: 모든 상태가 적절히 안내됨

## 주요 기능

- 다양한 크기와 변형
- 커스텀 텍스트가 있는 로딩 상태
- 아이콘 위치 지정 (왼쪽, 오른쪽, 아이콘만)
- 채워진/테두리 아이콘 스타일
- 폼 통합 (submit, reset, button 타입)
- 외부 의존성 없음 (Radix 없는 구현)
        `}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"버튼의 크기"},icon:{control:"select",options:["none","left","right","only"],description:'아이콘 위치. "only"는 자동 aria-label이 있는 아이콘 전용 버튼을 생성'},variant:{control:"select",options:["contained","outlined"],description:"시각적 스타일 변형"},rounded:{control:"boolean",description:"둥근 모서리 사용 여부 (알약 모양)"},disabled:{control:"boolean",description:"적절한 접근성 속성이 있는 비활성화 상태"},iconName:{control:"text",description:"Material Symbol 아이콘 이름. 아이콘 전용 버튼의 aria-label로 사용됨"},iconFilled:{control:"boolean",description:"아이콘의 채워진 버전 사용 여부"},loading:{control:"boolean",description:"로딩 상태 - 스피너를 표시하고 버튼을 비활성화"},loadingText:{control:"text",description:"로딩 시 표시할 텍스트 (기본값은 children 텍스트)"},type:{control:"select",options:["button","submit","reset"],description:"폼 상호작용을 위한 버튼 타입"},asChild:{control:"boolean",description:"자식 요소로 렌더링 (예: <a> 태그) - 폴리모픽 패턴 사용"}}},m={args:{children:"버튼 텍스트 입력",size:"medium",variant:"contained"},parameters:{docs:{source:{code:'<Button size="medium" variant="contained">버튼 텍스트 입력</Button>'}}}},p={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"small",children:"사이즈 스몰"}),e.jsx(t,{size:"medium",children:"사이즈 미디움"}),e.jsx(t,{size:"large",children:"사이즈 라지"})]}),parameters:{docs:{source:{code:`<Button size="small">사이즈 스몰</Button>
<Button size="medium">사이즈 미디움</Button>
<Button size="large">사이즈 라지</Button>`}}}},f={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{variant:"contained",children:"채워진 버튼"}),e.jsx(t,{variant:"outlined",children:"테두리 버튼"})]}),parameters:{docs:{source:{code:`<Button variant="contained">채워진 버튼</Button>
<Button variant="outlined">테두리 버튼</Button>`}}}},B={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{icon:"left",iconName:"add",children:"아이템 추가"}),e.jsx(t,{icon:"right",iconName:"arrow_forward",children:"다음"}),e.jsx(t,{icon:"only",iconName:"search"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{variant:"outlined",icon:"left",iconName:"download",children:"다운로드"}),e.jsx(t,{variant:"outlined",icon:"right",iconName:"send",children:"전송"}),e.jsx(t,{variant:"outlined",icon:"only",iconName:"favorite"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{icon:"left",iconName:"star",iconFilled:!0,children:"즐겨찾기 (Filled)"}),e.jsx(t,{icon:"left",iconName:"star",children:"즐겨찾기 (Outlined)"}),e.jsx(t,{icon:"only",iconName:"favorite",iconFilled:!0}),e.jsx(t,{icon:"only",iconName:"favorite"})]})]}),parameters:{docs:{description:{story:"iconFilled prop을 사용하여 아이콘을 채워진 또는 테두리 스타일로 설정할 수 있습니다. 아이콘 전용 버튼은 접근성을 위해 iconName에서 자동으로 aria-label을 받습니다."},source:{code:`<Button icon="left" iconName="add">아이템 추가</Button>
<Button icon="right" iconName="arrow_forward">다음</Button>
<Button icon="only" iconName="search" />
<Button icon="left" iconName="star" iconFilled>즐겨찾기 (Filled)</Button>`}}}},x={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{rounded:!1,children:"각진 모서리"}),e.jsx(t,{rounded:!0,children:"둥근 모서리"}),e.jsx(t,{rounded:!0,icon:"only",iconName:"favorite"})]}),parameters:{docs:{source:{code:`<Button rounded={false}>각진 모서리</Button>
<Button rounded={true}>둥근 모서리</Button>
<Button rounded={true} icon="only" iconName="favorite" />`}}}},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{children:"기본 상태"}),e.jsx(t,{disabled:!0,children:"비활성화"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{variant:"outlined",children:"기본 상태"}),e.jsx(t,{variant:"outlined",disabled:!0,children:"비활성화"})]})]}),parameters:{docs:{source:{code:`<Button>기본 상태</Button>
<Button disabled>비활성화</Button>
<Button variant="outlined">기본 상태</Button>
<Button variant="outlined" disabled>비활성화</Button>`}}}},h={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"채워진 버튼"}),e.jsx("div",{className:"space-y-4",children:["small","medium","large"].map(n=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm",children:n==="small"?"작음":n==="medium"?"보통":"큼"}),e.jsx(t,{size:n,children:"텍스트"}),e.jsx(t,{size:n,icon:"left",iconName:"add",children:"아이콘 왼쪽"}),e.jsx(t,{size:n,icon:"right",iconName:"arrow_forward",children:"아이콘 오른쪽"}),e.jsx(t,{size:n,icon:"only",iconName:"search"})]},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"테두리 버튼"}),e.jsx("div",{className:"space-y-4",children:["small","medium","large"].map(n=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm",children:n==="small"?"작음":n==="medium"?"보통":"큼"}),e.jsx(t,{size:n,variant:"outlined",children:"텍스트"}),e.jsx(t,{size:n,variant:"outlined",icon:"left",iconName:"add",children:"아이콘 왼쪽"}),e.jsx(t,{size:n,variant:"outlined",icon:"right",iconName:"arrow_forward",children:"아이콘 오른쪽"}),e.jsx(t,{size:n,variant:"outlined",icon:"only",iconName:"search"})]},n))})]})]}),parameters:{docs:{source:{code:`// 모든 크기와 아이콘 조합
<Button size="small">텍스트</Button>
<Button size="small" icon="left" iconName="add">아이콘 왼쪽</Button>
<Button size="small" icon="right" iconName="arrow_forward">아이콘 오른쪽</Button>
<Button size="small" icon="only" iconName="search" />

// 테두리 변형
<Button size="medium" variant="outlined">텍스트</Button>
<Button size="medium" variant="outlined" icon="left" iconName="add">아이콘 왼쪽</Button>`}}}},v={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{children:"정상 상태"}),e.jsx(t,{loading:!0,children:"로딩 중"}),e.jsx(t,{loading:!0,loadingText:"저장 중...",children:"저장하기"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{variant:"outlined",children:"정상 상태"}),e.jsx(t,{variant:"outlined",loading:!0,children:"로딩 중"}),e.jsx(t,{variant:"outlined",loading:!0,loadingText:"업로드 중...",children:"파일 업로드"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{icon:"left",iconName:"download",children:"다운로드"}),e.jsx(t,{icon:"left",iconName:"download",loading:!0,loadingText:"다운로드 중...",children:"다운로드"}),e.jsx(t,{icon:"only",iconName:"refresh"}),e.jsx(t,{icon:"only",iconName:"refresh",loading:!0})]})]}),parameters:{docs:{description:{story:"로딩 상태는 자동으로 버튼을 비활성화하고 스피너를 표시합니다. 접근성을 위해 aria-busy가 포함됩니다."},source:{code:`<Button loading>로딩 중</Button>
<Button loading loadingText="저장 중...">저장하기</Button>
<Button icon="left" iconName="download" loading loadingText="다운로드 중...">다운로드</Button>`}}}},N={render:()=>e.jsxs("form",{className:"space-y-4 p-4 border rounded-lg max-w-sm",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-1",children:"이메일"}),e.jsx("input",{id:"email",type:"email",className:"w-full px-3 py-2 border rounded-md",placeholder:"example@email.com"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{type:"submit",icon:"right",iconName:"send",children:"제출"}),e.jsx(t,{type:"reset",variant:"outlined",children:"초기화"}),e.jsx(t,{type:"button",variant:"outlined",onClick:()=>alert("취소를 클릭했습니다"),children:"취소"})]})]}),parameters:{docs:{description:{story:"폼 상호작용을 위한 다양한 버튼 타입을 보여줍니다. Submit과 reset 버튼은 폼 동작과 연동됩니다."},source:{code:`<Button type="submit">제출</Button>
<Button type="reset" variant="outlined">초기화</Button>
<Button type="button" variant="outlined">취소</Button>`}}}},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{children:"일반 버튼"}),e.jsx(t,{asChild:!0,children:e.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:"GitHub 링크"})})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{variant:"outlined",icon:"left",iconName:"download",children:"일반 다운로드"}),e.jsx(t,{variant:"outlined",icon:"left",iconName:"download",asChild:!0,children:e.jsx("a",{href:"/files/sample.pdf",download:!0,children:"파일 다운로드"})})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{loading:!0,loadingText:"로딩 중...",children:"로딩 버튼"}),e.jsx(t,{loading:!0,loadingText:"페이지 로딩 중...",asChild:!0,children:e.jsx("a",{href:"/loading-page",children:"링크 + 로딩"})})]})]}),parameters:{docs:{description:{story:"asChild prop을 사용하면 앵커 같은 다른 요소에 버튼 스타일을 적용할 수 있습니다. 모든 버튼 기능(로딩, 아이콘 등)이 asChild와 함께 작동합니다."},source:{code:`<Button asChild>
  <a href="/page">버튼으로 표시된 링크</a>
</Button>
<Button variant="outlined" icon="left" iconName="download" asChild>
  <a href="/file.pdf" download>파일 다운로드</a>
</Button>`}}}},y={args:{children:"클릭해보세요!",size:"medium",icon:"none",variant:"contained",rounded:!1,disabled:!1,iconName:"add",iconFilled:!1,loading:!1,loadingText:"",type:"button",asChild:!1},parameters:{docs:{source:{code:`<Button 
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
</Button>`}}}};var I,k,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var R,D,A;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
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
}`,...(A=(D=p.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var E,O,$;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
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
}`,...($=(O=f.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var W,G,P;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button icon='left' iconName='add'>
          아이템 추가
        </Button>
        <Button icon='right' iconName='arrow_forward'>
          다음
        </Button>
        <Button icon='only' iconName='search' />
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined' icon='left' iconName='download'>
          다운로드
        </Button>
        <Button variant='outlined' icon='right' iconName='send'>
          전송
        </Button>
        <Button variant='outlined' icon='only' iconName='favorite' />
      </div>
      <div className='flex items-center gap-4'>
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
}`,...(P=(G=B.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var H,M,U;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
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
}`,...(U=(M=x.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>기본 상태</Button>
        <Button disabled>비활성화</Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined'>기본 상태</Button>
        <Button variant='outlined' disabled>
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
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>채워진 버튼</h3>
        <div className='space-y-4'>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} className='flex items-center gap-4'>
              <span className='w-16 text-sm'>
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
        <h3 className='text-lg font-semibold mb-4'>테두리 버튼</h3>
        <div className='space-y-4'>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} className='flex items-center gap-4'>
              <span className='w-16 text-sm'>
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
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>정상 상태</Button>
        <Button loading>로딩 중</Button>
        <Button loading loadingText='저장 중...'>
          저장하기
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined'>정상 상태</Button>
        <Button variant='outlined' loading>
          로딩 중
        </Button>
        <Button variant='outlined' loading loadingText='업로드 중...'>
          파일 업로드
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button icon='left' iconName='download'>
          다운로드
        </Button>
        <Button icon='left' iconName='download' loading loadingText='다운로드 중...'>
          다운로드
        </Button>
        <Button icon='only' iconName='refresh' />
        <Button icon='only' iconName='refresh' loading />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '로딩 상태는 자동으로 버튼을 비활성화하고 스피너를 표시합니다. 접근성을 위해 aria-busy가 포함됩니다.'
      },
      source: {
        code: \`<Button loading>로딩 중</Button>
<Button loading loadingText="저장 중...">저장하기</Button>
<Button icon="left" iconName="download" loading loadingText="다운로드 중...">다운로드</Button>\`
      }
    }
  }
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,ie;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <form className='space-y-4 p-4 border rounded-lg max-w-sm'>
      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          이메일
        </label>
        <input id='email' type='email' className='w-full px-3 py-2 border rounded-md' placeholder='example@email.com' />
      </div>
      <div className='flex gap-2'>
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
}`,...(ie=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,re,le;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>일반 버튼</Button>
        <Button asChild>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
            GitHub 링크
          </a>
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined' icon='left' iconName='download'>
          일반 다운로드
        </Button>
        <Button variant='outlined' icon='left' iconName='download' asChild>
          <a href='/files/sample.pdf' download>
            파일 다운로드
          </a>
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button loading loadingText='로딩 중...'>
          로딩 버튼
        </Button>
        <Button loading loadingText='페이지 로딩 중...' asChild>
          <a href='/loading-page'>링크 + 로딩</a>
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'asChild prop을 사용하면 앵커 같은 다른 요소에 버튼 스타일을 적용할 수 있습니다. 모든 버튼 기능(로딩, 아이콘 등)이 asChild와 함께 작동합니다.'
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
}`,...(le=(re=b.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var de,ce,ue;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    children: '클릭해보세요!',
    size: 'medium',
    icon: 'none',
    variant: 'contained',
    rounded: false,
    disabled: false,
    iconName: 'add',
    iconFilled: false,
    loading: false,
    loadingText: '',
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
}`,...(ue=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const _e=["Default","Sizes","Types","WithIcons","Rounded","Disabled","AllCombinations","LoadingStates","FormButtons","AsChild","Playground"];export{h as AllCombinations,b as AsChild,m as Default,g as Disabled,N as FormButtons,v as LoadingStates,y as Playground,x as Rounded,p as Sizes,f as Types,B as WithIcons,_e as __namedExportsOrder,Ve as default};
