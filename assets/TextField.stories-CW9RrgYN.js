import{a as l}from"./index-D3Asy55h.js";import{R as e}from"./index-GiUgBvb1.js";import"./jsx-runtime-CDt2p4po.js";const _={title:"Components/TextField",component:l,parameters:{layout:"centered",docs:{description:{component:`
텍스트 입력을 위한 기본 컴포넌트입니다. 레이블, 아이콘, 에러 상태 등을 지원합니다.

## 주요 기능

- **자동 ID 생성**: useId를 통한 레이블-입력 필드 연결
- **아이콘 지원**: 왼쪽에 Material Symbol 아이콘 표시
- **에러 상태**: 보더 색상과 에러 메시지 표시
- **Filled 상태**: value나 defaultValue가 있을 때 primary 색상 적용
- **접근성**: 레이블과 입력 필드의 적절한 연결
- **TypeScript**: 완전한 타입 지원과 HTML input 속성 상속
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the text field."},placeholder:{control:"text",description:"The placeholder text."},icon:{control:"text",description:"The name of the icon to display."},error:{control:"boolean",description:"Whether the text field is in an error state."},disabled:{control:"boolean",description:"Whether the text field is disabled."},errorMessage:{control:"text",description:"The error message to display."},value:{control:"text",description:"The value of the text field (for controlled components)."},defaultValue:{control:"text",description:"The default value of the text field (for uncontrolled components)."}},args:{label:"라벨",placeholder:"내용을 입력하세요",error:!1,disabled:!1}},a={args:{label:"이름",placeholder:"이름을 입력하세요"},parameters:{docs:{source:{code:'<TextField label="이름" placeholder="이름을 입력하세요" />'}}}},r={render:()=>e.createElement("div",{className:"flex flex-col gap-4 w-[400px]"},e.createElement(l,{icon:"search",label:"검색",placeholder:"검색어를 입력하세요"}),e.createElement(l,{icon:"mail",label:"이메일",placeholder:"example@email.com",type:"email"}),e.createElement(l,{icon:"lock",label:"비밀번호",placeholder:"비밀번호를 입력하세요",type:"password"}),e.createElement(l,{icon:"person",label:"사용자명",placeholder:"사용자명을 입력하세요"}),e.createElement(l,{icon:"phone",label:"전화번호",placeholder:"010-1234-5678",type:"tel"})),parameters:{docs:{description:{story:"다양한 Material Symbol 아이콘을 사용할 수 있습니다. 아이콘은 입력 필드 왼쪽에 12px 간격으로 표시됩니다."},source:{code:`<TextField icon="search" label="검색" placeholder="검색어를 입력하세요" />
<TextField icon="mail" label="이메일" placeholder="example@email.com" type="email" />
<TextField icon="lock" label="비밀번호" type="password" />`}}}},t={render:()=>e.createElement("div",{className:"flex flex-col gap-4 w-[400px]"},e.createElement(l,{label:"이메일",defaultValue:"잘못된이메일",error:!0,errorMessage:"올바른 이메일 형식이 아닙니다"}),e.createElement(l,{icon:"warning",label:"필수 입력",error:!0,errorMessage:"필수 입력 항목입니다"}),e.createElement(l,{icon:"lock",label:"비밀번호",defaultValue:"123",error:!0,errorMessage:"비밀번호는 최소 8자 이상이어야 합니다",type:"password"})),parameters:{docs:{description:{story:"에러 상태일 때 보더가 빨간색으로 변경되고 하단에 에러 메시지가 표시됩니다."},source:{code:`<TextField
  label="이메일"
  defaultValue="잘못된이메일"
  error
  errorMessage="올바른 이메일 형식이 아닙니다"
/>`}}}},o={render:()=>e.createElement("div",{className:"flex flex-col gap-4 w-[400px]"},e.createElement(l,{label:"빈 상태",placeholder:"내용을 입력하세요"}),e.createElement(l,{label:"입력된 상태",defaultValue:"입력된 내용"}),e.createElement(l,{label:"제어된 상태",value:"제어된 값",onChange:()=>{}}),e.createElement(l,{icon:"person",label:"사용자",defaultValue:"홍길동"})),parameters:{docs:{description:{story:"value나 defaultValue가 있을 때 보더가 primary-500 색상으로 변경됩니다."},source:{code:`<TextField label="입력된 상태" defaultValue="입력된 내용" />
<TextField label="제어된 상태" value="제어된 값" onChange={handleChange} />`}}}},d={render:()=>e.createElement("div",{className:"flex flex-col gap-4 w-[400px]"},e.createElement(l,{label:"비활성화",placeholder:"입력할 수 없습니다",disabled:!0}),e.createElement(l,{label:"값이 있는 비활성화",defaultValue:"수정할 수 없음",disabled:!0}),e.createElement(l,{icon:"lock",label:"잠긴 필드",defaultValue:"읽기 전용",disabled:!0})),parameters:{docs:{source:{code:`<TextField label="비활성화" placeholder="입력할 수 없습니다" disabled />
<TextField label="값이 있는 비활성화" defaultValue="수정할 수 없음" disabled />`}}}},s={render:()=>e.createElement("div",{className:"space-y-8"},e.createElement("div",null,e.createElement("h3",{className:"font-semibold text-lg mb-4"},"기본 상태"),e.createElement("div",{className:"space-y-4 w-[400px]"},e.createElement(l,{label:"기본",placeholder:"내용을 입력하세요"}),e.createElement(l,{label:"값이 있음",defaultValue:"입력된 내용"}),e.createElement(l,{icon:"search",label:"아이콘 포함",placeholder:"검색어 입력"}))),e.createElement("div",null,e.createElement("h3",{className:"font-semibold text-lg mb-4"},"에러 상태"),e.createElement("div",{className:"space-y-4 w-[400px]"},e.createElement(l,{label:"에러",placeholder:"필수 입력",error:!0,errorMessage:"필수 입력 항목입니다"}),e.createElement(l,{label:"잘못된 값",defaultValue:"invalid@",error:!0,errorMessage:"올바른 이메일을 입력하세요"}),e.createElement(l,{icon:"warning",label:"경고",defaultValue:"잘못된 값",error:!0,errorMessage:"형식이 올바르지 않습니다"}))),e.createElement("div",null,e.createElement("h3",{className:"font-semibold text-lg mb-4"},"비활성화 상태"),e.createElement("div",{className:"space-y-4 w-[400px]"},e.createElement(l,{label:"비활성화",placeholder:"입력 불가",disabled:!0}),e.createElement(l,{label:"값 포함 비활성화",defaultValue:"읽기 전용",disabled:!0}),e.createElement(l,{icon:"lock",label:"잠금",defaultValue:"변경 불가",disabled:!0})))),parameters:{docs:{source:{code:`// 모든 상태의 시각적 비교
<TextField label="기본" placeholder="내용을 입력하세요" />
<TextField label="에러" error errorMessage="필수 입력 항목입니다" />
<TextField label="비활성화" disabled />`}}}},c={render:()=>e.createElement("div",{className:"max-w-md p-6 border rounded-lg"},e.createElement("h3",{className:"text-lg font-semibold mb-4"},"회원가입 폼"),e.createElement("div",{className:"space-y-4"},e.createElement(l,{icon:"person",label:"이름",placeholder:"홍길동"}),e.createElement(l,{icon:"mail",label:"이메일",placeholder:"example@email.com",type:"email"}),e.createElement(l,{icon:"lock",label:"비밀번호",placeholder:"8자 이상 입력하세요",type:"password"}),e.createElement(l,{icon:"phone",label:"전화번호",placeholder:"010-1234-5678",type:"tel"}),e.createElement(l,{label:"주소",placeholder:"서울시 강남구..."}),e.createElement(l,{label:"자기소개",placeholder:"간단한 자기소개를 작성해주세요",defaultValue:"안녕하세요"}))),parameters:{docs:{description:{story:"실제 폼에서 사용되는 TextField의 예시입니다. 다양한 입력 타입과 아이콘을 조합하여 사용할 수 있습니다."},source:{code:`<TextField icon="person" label="이름" placeholder="홍길동" />
<TextField icon="mail" label="이메일" type="email" />
<TextField icon="lock" label="비밀번호" type="password" />`}}}},i={args:{label:"라벨",placeholder:"내용을 입력하세요",icon:"",error:!1,errorMessage:"",disabled:!1,defaultValue:""},parameters:{docs:{source:{code:`<TextField
  label="라벨"
  placeholder="내용을 입력하세요"
  icon=""
  error={false}
  errorMessage=""
  disabled={false}
/>`}}}};var p,n,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요'
  },
  parameters: {
    docs: {
      source: {
        code: '<TextField label="이름" placeholder="이름을 입력하세요" />'
      }
    }
  }
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var u,b,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4 w-[400px]'>
      <TextField icon='search' label='검색' placeholder='검색어를 입력하세요' />
      <TextField icon='mail' label='이메일' placeholder='example@email.com' type='email' />
      <TextField icon='lock' label='비밀번호' placeholder='비밀번호를 입력하세요' type='password' />
      <TextField icon='person' label='사용자명' placeholder='사용자명을 입력하세요' />
      <TextField icon='phone' label='전화번호' placeholder='010-1234-5678' type='tel' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '다양한 Material Symbol 아이콘을 사용할 수 있습니다. 아이콘은 입력 필드 왼쪽에 12px 간격으로 표시됩니다.'
      },
      source: {
        code: \`<TextField icon="search" label="검색" placeholder="검색어를 입력하세요" />
<TextField icon="mail" label="이메일" placeholder="example@email.com" type="email" />
<TextField icon="lock" label="비밀번호" type="password" />\`
      }
    }
  }
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,f,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4 w-[400px]'>
      <TextField label='이메일' defaultValue='잘못된이메일' error errorMessage='올바른 이메일 형식이 아닙니다' />
      <TextField icon='warning' label='필수 입력' error errorMessage='필수 입력 항목입니다' />
      <TextField icon='lock' label='비밀번호' defaultValue='123' error errorMessage='비밀번호는 최소 8자 이상이어야 합니다' type='password' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '에러 상태일 때 보더가 빨간색으로 변경되고 하단에 에러 메시지가 표시됩니다.'
      },
      source: {
        code: \`<TextField
  label="이메일"
  defaultValue="잘못된이메일"
  error
  errorMessage="올바른 이메일 형식이 아닙니다"
/>\`
      }
    }
  }
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var F,g,y;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4 w-[400px]'>
      <TextField label='빈 상태' placeholder='내용을 입력하세요' />
      <TextField label='입력된 상태' defaultValue='입력된 내용' />
      <TextField label='제어된 상태' value='제어된 값' onChange={() => {}} />
      <TextField icon='person' label='사용자' defaultValue='홍길동' />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'value나 defaultValue가 있을 때 보더가 primary-500 색상으로 변경됩니다.'
      },
      source: {
        code: \`<TextField label="입력된 상태" defaultValue="입력된 내용" />
<TextField label="제어된 상태" value="제어된 값" onChange={handleChange} />\`
      }
    }
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var E,v,V;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4 w-[400px]'>
      <TextField label='비활성화' placeholder='입력할 수 없습니다' disabled />
      <TextField label='값이 있는 비활성화' defaultValue='수정할 수 없음' disabled />
      <TextField icon='lock' label='잠긴 필드' defaultValue='읽기 전용' disabled />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<TextField label="비활성화" placeholder="입력할 수 없습니다" disabled />
<TextField label="값이 있는 비활성화" defaultValue="수정할 수 없음" disabled />\`
      }
    }
  }
}`,...(V=(v=d.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var w,N,M;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className='space-y-8'>
      <div>
        <h3 className='font-semibold text-lg mb-4'>기본 상태</h3>
        <div className='space-y-4 w-[400px]'>
          <TextField label='기본' placeholder='내용을 입력하세요' />
          <TextField label='값이 있음' defaultValue='입력된 내용' />
          <TextField icon='search' label='아이콘 포함' placeholder='검색어 입력' />
        </div>
      </div>

      <div>
        <h3 className='font-semibold text-lg mb-4'>에러 상태</h3>
        <div className='space-y-4 w-[400px]'>
          <TextField label='에러' placeholder='필수 입력' error errorMessage='필수 입력 항목입니다' />
          <TextField label='잘못된 값' defaultValue='invalid@' error errorMessage='올바른 이메일을 입력하세요' />
          <TextField icon='warning' label='경고' defaultValue='잘못된 값' error errorMessage='형식이 올바르지 않습니다' />
        </div>
      </div>

      <div>
        <h3 className='font-semibold text-lg mb-4'>비활성화 상태</h3>
        <div className='space-y-4 w-[400px]'>
          <TextField label='비활성화' placeholder='입력 불가' disabled />
          <TextField label='값 포함 비활성화' defaultValue='읽기 전용' disabled />
          <TextField icon='lock' label='잠금' defaultValue='변경 불가' disabled />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`// 모든 상태의 시각적 비교
<TextField label="기본" placeholder="내용을 입력하세요" />
<TextField label="에러" error errorMessage="필수 입력 항목입니다" />
<TextField label="비활성화" disabled />\`
      }
    }
  }
}`,...(M=(N=s.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var S,k,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className='max-w-md p-6 border rounded-lg'>
      <h3 className='text-lg font-semibold mb-4'>회원가입 폼</h3>
      <div className='space-y-4'>
        <TextField icon='person' label='이름' placeholder='홍길동' />
        <TextField icon='mail' label='이메일' placeholder='example@email.com' type='email' />
        <TextField icon='lock' label='비밀번호' placeholder='8자 이상 입력하세요' type='password' />
        <TextField icon='phone' label='전화번호' placeholder='010-1234-5678' type='tel' />
        <TextField label='주소' placeholder='서울시 강남구...' />
        <TextField label='자기소개' placeholder='간단한 자기소개를 작성해주세요' defaultValue='안녕하세요' />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '실제 폼에서 사용되는 TextField의 예시입니다. 다양한 입력 타입과 아이콘을 조합하여 사용할 수 있습니다.'
      },
      source: {
        code: \`<TextField icon="person" label="이름" placeholder="홍길동" />
<TextField icon="mail" label="이메일" type="email" />
<TextField icon="lock" label="비밀번호" type="password" />\`
      }
    }
  }
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var D,I,W;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: '라벨',
    placeholder: '내용을 입력하세요',
    icon: '',
    error: false,
    errorMessage: '',
    disabled: false,
    defaultValue: ''
  },
  parameters: {
    docs: {
      source: {
        code: \`<TextField
  label="라벨"
  placeholder="내용을 입력하세요"
  icon=""
  error={false}
  errorMessage=""
  disabled={false}
/>\`
      }
    }
  }
}`,...(W=(I=i.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const H=["Default","WithIcon","ErrorState","FilledState","Disabled","AllStates","FormExample","Playground"];export{s as AllStates,a as Default,d as Disabled,t as ErrorState,o as FilledState,c as FormExample,i as Playground,r as WithIcon,H as __namedExportsOrder,_ as default};
