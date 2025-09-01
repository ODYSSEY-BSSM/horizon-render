import{P as r}from"./index-7M7lxx1R.js";import{R as e}from"./index-GiUgBvb1.js";import"./jsx-runtime-CDt2p4po.js";const R={title:"Components/PasswordField",component:r,parameters:{layout:"centered",docs:{description:{component:"비밀번호 입력을 위한 특수 텍스트 필드 컴포넌트입니다. 가시성 토글 기능과 보안성을 제공합니다."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"비밀번호 필드의 라벨"},placeholder:{control:"text",description:"플레이스홀더 텍스트"},error:{control:"boolean",description:"에러 상태 여부"},disabled:{control:"boolean",description:"비활성화 여부"},errorMessage:{control:"text",description:"에러 메시지"},value:{control:"text",description:"제어된 컴포넌트의 값"},defaultValue:{control:"text",description:"비제어 컴포넌트의 기본값"},width:{control:"text",description:'필드 너비 (예: "100%", "20rem", 숫자는 px)'}},args:{label:"비밀번호",placeholder:"비밀번호를 입력하세요",error:!1,disabled:!1}},a={args:{label:"비밀번호",placeholder:"비밀번호를 입력하세요",width:"400px"}},l={args:{label:"비밀번호",placeholder:"8자 이상 입력",defaultValue:"mypassword123",width:"400px"}},t={args:{label:"비밀번호",defaultValue:"123",error:!0,errorMessage:"비밀번호는 8자 이상이어야 합니다",width:"400px"}},o={render:()=>e.createElement("div",{style:{display:"grid",gap:"16px",maxWidth:"400px"}},e.createElement(r,{label:"기본",placeholder:"비밀번호 입력",width:"400px"}),e.createElement(r,{label:"값 입력됨",placeholder:"8자 이상",defaultValue:"mypassword123",width:"400px"}),e.createElement(r,{label:"에러 상태",defaultValue:"123",error:!0,errorMessage:"너무 짧습니다",width:"400px"}),e.createElement(r,{label:"비활성화",placeholder:"입력 불가",disabled:!0,width:"400px"}))},s={render:()=>e.createElement("div",{style:{maxWidth:"400px",padding:"24px",borderRadius:"8px",border:"1px solid #dbeafe"}},e.createElement("h3",{style:{fontSize:"20px",fontWeight:600,marginBottom:"16px"}},"로그인"),e.createElement("div",{style:{display:"grid",gap:"16px"}},e.createElement(r,{label:"비밀번호",placeholder:"비밀번호 입력",width:"100%"}),e.createElement(r,{label:"비밀번호 확인",placeholder:"비밀번호 재입력",width:"100%"})))},d={args:{label:"비밀번호",placeholder:"비밀번호를 입력하세요",error:!1,errorMessage:"",disabled:!1,width:"400px"}};var n,p,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    width: '400px'
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,m,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: '비밀번호',
    placeholder: '8자 이상 입력',
    defaultValue: 'mypassword123',
    width: '400px'
  }
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,x,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: '비밀번호',
    defaultValue: '123',
    error: true,
    errorMessage: '비밀번호는 8자 이상이어야 합니다',
    width: '400px'
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,w,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    maxWidth: '400px'
  }}>
      <PasswordField label='기본' placeholder='비밀번호 입력' width='400px' />
      <PasswordField label='값 입력됨' placeholder='8자 이상' defaultValue='mypassword123' width='400px' />
      <PasswordField label='에러 상태' defaultValue='123' error errorMessage='너무 짧습니다' width='400px' />
      <PasswordField label='비활성화' placeholder='입력 불가' disabled width='400px' />
    </div>
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var y,E,V;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px',
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #dbeafe'
  }}>
      <h3 style={{
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '16px'
    }}>로그인</h3>
      <div style={{
      display: 'grid',
      gap: '16px'
    }}>
        <PasswordField label='비밀번호' placeholder='비밀번호 입력' width='100%' />
        <PasswordField label='비밀번호 확인' placeholder='비밀번호 재입력' width='100%' />
      </div>
    </div>
}`,...(V=(E=s.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var P,v,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    error: false,
    errorMessage: '',
    disabled: false,
    width: '400px'
  }
}`,...(F=(v=d.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const z=["Default","WithValue","ErrorState","Variations","FormExample","Playground"];export{a as Default,t as ErrorState,s as FormExample,d as Playground,o as Variations,l as WithValue,z as __namedExportsOrder,R as default};
