import{D as t,T as e}from"./index-tJulI_bx.js";import"./index-GiUgBvb1.js";import"./jsx-runtime-CDt2p4po.js";const _={title:"Components/Divider",component:t,parameters:{layout:"padded",docs:{description:{component:`
시각적 구분을 위한 간단한 구분선 컴포넌트입니다. 수평/수직 방향, 간격 옵션, 텍스트 콘텐츠를 지원합니다.

## 주요 기능

- **양방향 지원**: 수평(horizontal) 및 수직(vertical) 방향
- **간격 제어**: spacing prop으로 주변 여백 조정
- **텍스트 지원**: children으로 구분선에 텍스트 표시
- **유연한 스타일링**: CSS 변수와 Tailwind 클래스 호환
- **접근성**: 적절한 시맨틱 마크업과 스크린 리더 지원
        `}}},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"구분선의 방향",defaultValue:"horizontal"},spacing:{control:{type:"number"},description:"구분선 주변 여백 (픽셀)"},children:{control:"text",description:"구분선에 표시할 텍스트"}}},a={args:{orientation:"horizontal",spacing:16},parameters:{docs:{source:{code:'<Divider orientation="horizontal" spacing={16} />'}}}},r={render:()=>React.createElement("div",{className:"space-y-4"},React.createElement(e,null,"위 콘텐츠"),React.createElement(t,null),React.createElement(e,null,"아래 콘텐츠")),parameters:{docs:{description:{story:"수평 구분선은 콘텐츠를 위아래로 구분합니다."},source:{code:`<div className="space-y-4">
  <Text>위 콘텐츠</Text>
  <Divider />
  <Text>아래 콘텐츠</Text>
</div>`}}}},n={render:()=>React.createElement("div",{className:"flex items-center h-24 space-x-4"},React.createElement(e,null,"왼쪽 콘텐츠"),React.createElement(t,{orientation:"vertical"}),React.createElement(e,null,"오른쪽 콘텐츠")),parameters:{docs:{description:{story:"수직 구분선은 콘텐츠를 좌우로 구분합니다. flex 레이아웃과 함께 사용합니다."},source:{code:`<div className="flex items-center h-24 space-x-4">
  <Text>왼쪽 콘텐츠</Text>
  <Divider orientation="vertical" />
  <Text>오른쪽 콘텐츠</Text>
</div>`}}}},c={render:()=>React.createElement("div",{className:"space-y-2"},React.createElement(e,{variant:"B2",color:"#6b7280"},"기본 간격 (0px)"),React.createElement(e,null,"콘텐츠"),React.createElement(t,null),React.createElement(e,null,"콘텐츠"),React.createElement(e,{variant:"B2",color:"#6b7280",className:"mt-6"},"8px 간격"),React.createElement(e,null,"콘텐츠"),React.createElement(t,{spacing:8}),React.createElement(e,null,"콘텐츠"),React.createElement(e,{variant:"B2",color:"#6b7280",className:"mt-6"},"16px 간격"),React.createElement(e,null,"콘텐츠"),React.createElement(t,{spacing:16}),React.createElement(e,null,"콘텐츠"),React.createElement(e,{variant:"B2",color:"#6b7280",className:"mt-6"},"24px 간격"),React.createElement(e,null,"콘텐츠"),React.createElement(t,{spacing:24}),React.createElement(e,null,"콘텐츠"),React.createElement(e,{variant:"B2",color:"#6b7280",className:"mt-6"},"32px 간격"),React.createElement(e,null,"콘텐츠"),React.createElement(t,{spacing:32}),React.createElement(e,null,"콘텐츠")),parameters:{docs:{description:{story:"spacing prop으로 구분선 주변의 여백을 조정할 수 있습니다."},source:{code:`<Divider />                {/* 기본 간격 */}
<Divider spacing={8} />     {/* 8px 간격 */}
<Divider spacing={16} />    {/* 16px 간격 */}
<Divider spacing={24} />    {/* 24px 간격 */}
<Divider spacing={32} />    {/* 32px 간격 */}`}}}},i={render:()=>React.createElement("div",{className:"space-y-8"},React.createElement("div",null,React.createElement(e,{variant:"H3",as:"h3",className:"mb-4"},"수평 구분선 + 텍스트"),React.createElement("div",{className:"space-y-6"},React.createElement("div",{className:"space-y-4"},React.createElement(e,null,"로그인 옵션"),React.createElement(t,null,"또는"),React.createElement(e,null,"소셜 로그인")),React.createElement("div",{className:"space-y-4"},React.createElement(e,null,"기본 옵션"),React.createElement(t,{spacing:16},"고급 옵션"),React.createElement(e,null,"프리미엄 기능")))),React.createElement("div",null,React.createElement(e,{variant:"H3",as:"h3",className:"mb-4"},"수직 구분선 + 텍스트"),React.createElement("div",{className:"space-y-4"},React.createElement("div",{className:"flex items-center h-16 space-x-4"},React.createElement(e,null,"홈"),React.createElement(t,{orientation:"vertical"},"·"),React.createElement(e,null,"제품"),React.createElement(t,{orientation:"vertical"},"·"),React.createElement(e,null,"서비스"),React.createElement(t,{orientation:"vertical"},"·"),React.createElement(e,null,"문의")),React.createElement("div",{className:"flex items-center h-12 space-x-3 text-sm"},React.createElement(e,null,"2024년 3월 15일"),React.createElement(t,{orientation:"vertical"},"|"),React.createElement(e,null,"작성자: 홍길동"),React.createElement(t,{orientation:"vertical"},"|"),React.createElement(e,null,"조회수: 1,234"))))),parameters:{docs:{description:{story:"children을 통해 구분선에 텍스트를 표시할 수 있습니다. 네비게이션, 메타데이터, 또는 옵션 구분에 유용합니다."},source:{code:`{/* 수평 구분선에 텍스트 */}
<Divider>또는</Divider>
<Divider spacing={16}>고급 옵션</Divider>

{/* 수직 구분선에 텍스트 */}
<Divider orientation="vertical">·</Divider>
<Divider orientation="vertical">|</Divider>`}}}},s={render:()=>React.createElement("div",{className:"space-y-8"},React.createElement("div",null,React.createElement(e,{variant:"H3",className:"mb-4"},"로그인 폼"),React.createElement("div",{className:"max-w-sm mx-auto p-6 border rounded-lg"},React.createElement("div",{className:"space-y-4"},React.createElement("input",{className:"w-full p-3 border rounded",placeholder:"이메일 주소"}),React.createElement("input",{className:"w-full p-3 border rounded",placeholder:"비밀번호",type:"password"}),React.createElement("button",{type:"button",className:"w-full bg-blue-500 text-white p-3 rounded"},"로그인")),React.createElement(t,{spacing:16},"또는"),React.createElement("div",{className:"space-y-3"},React.createElement("button",{type:"button",className:"w-full border p-3 rounded"},"구글 계정으로 로그인"),React.createElement("button",{type:"button",className:"w-full border p-3 rounded"},"카카오 계정으로 로그인")))),React.createElement("div",null,React.createElement(e,{variant:"H3",className:"mb-4"},"브레드크럼 네비게이션"),React.createElement("div",{className:"flex items-center space-x-2 text-sm"},React.createElement(e,null,"홈"),React.createElement(t,{orientation:"vertical"},"›"),React.createElement(e,null,"카테고리"),React.createElement(t,{orientation:"vertical"},"›"),React.createElement(e,null,"전자제품"),React.createElement(t,{orientation:"vertical"},"›"),React.createElement(e,{color:"#3b82f6"},"스마트폰"))),React.createElement("div",null,React.createElement(e,{variant:"H3",className:"mb-4"},"카드 목록"),React.createElement("div",{className:"space-y-0 border rounded-lg overflow-hidden"},["첫 번째 아이템","두 번째 아이템","세 번째 아이템"].map((o,W,V)=>React.createElement("div",{key:o},React.createElement("div",{className:"p-4 hover:bg-gray-50"},React.createElement(e,null,o)),W<V.length-1&&React.createElement(t,null)))))),parameters:{docs:{description:{story:"실제 애플리케이션에서 Divider가 사용되는 다양한 시나리오들입니다."},source:{code:`{/* 로그인 폼에서 옵션 구분 */}
<Divider spacing={16}>또는</Divider>

{/* 브레드크럼 네비게이션 */}
<Divider orientation="vertical">›</Divider>

{/* 리스트 아이템 구분 */}
<Divider />`}}}},l={args:{orientation:"horizontal",spacing:16,children:""},parameters:{docs:{source:{code:`<Divider
  orientation="horizontal"
  spacing={16}
>
  콘텐츠 입력
</Divider>`}}}};var d,m,v;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    spacing: 16
  },
  parameters: {
    docs: {
      source: {
        code: '<Divider orientation="horizontal" spacing={16} />'
      }
    }
  }
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var p,x,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className='space-y-4'>
      <Text>위 콘텐츠</Text>
      <Divider />
      <Text>아래 콘텐츠</Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '수평 구분선은 콘텐츠를 위아래로 구분합니다.'
      },
      source: {
        code: \`<div className="space-y-4">
  <Text>위 콘텐츠</Text>
  <Divider />
  <Text>아래 콘텐츠</Text>
</div>\`
      }
    }
  }
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var T,E,R;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className='flex items-center h-24 space-x-4'>
      <Text>왼쪽 콘텐츠</Text>
      <Divider orientation='vertical' />
      <Text>오른쪽 콘텐츠</Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '수직 구분선은 콘텐츠를 좌우로 구분합니다. flex 레이아웃과 함께 사용합니다.'
      },
      source: {
        code: \`<div className="flex items-center h-24 space-x-4">
  <Text>왼쪽 콘텐츠</Text>
  <Divider orientation="vertical" />
  <Text>오른쪽 콘텐츠</Text>
</div>\`
      }
    }
  }
}`,...(R=(E=n.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var D,N,g;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className='space-y-2'>
      <Text variant='B2' color='#6b7280'>
        기본 간격 (0px)
      </Text>
      <Text>콘텐츠</Text>
      <Divider />
      <Text>콘텐츠</Text>

      <Text variant='B2' color='#6b7280' className='mt-6'>
        8px 간격
      </Text>
      <Text>콘텐츠</Text>
      <Divider spacing={8} />
      <Text>콘텐츠</Text>

      <Text variant='B2' color='#6b7280' className='mt-6'>
        16px 간격
      </Text>
      <Text>콘텐츠</Text>
      <Divider spacing={16} />
      <Text>콘텐츠</Text>

      <Text variant='B2' color='#6b7280' className='mt-6'>
        24px 간격
      </Text>
      <Text>콘텐츠</Text>
      <Divider spacing={24} />
      <Text>콘텐츠</Text>

      <Text variant='B2' color='#6b7280' className='mt-6'>
        32px 간격
      </Text>
      <Text>콘텐츠</Text>
      <Divider spacing={32} />
      <Text>콘텐츠</Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'spacing prop으로 구분선 주변의 여백을 조정할 수 있습니다.'
      },
      source: {
        code: \`<Divider />                {/* 기본 간격 */}
<Divider spacing={8} />     {/* 8px 간격 */}
<Divider spacing={16} />    {/* 16px 간격 */}
<Divider spacing={24} />    {/* 24px 간격 */}
<Divider spacing={32} />    {/* 32px 간격 */}\`
      }
    }
  }
}`,...(g=(N=c.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};var b,y,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className='space-y-8'>
      <div>
        <Text variant='H3' as='h3' className='mb-4'>
          수평 구분선 + 텍스트
        </Text>
        <div className='space-y-6'>
          <div className='space-y-4'>
            <Text>로그인 옵션</Text>
            <Divider>또는</Divider>
            <Text>소셜 로그인</Text>
          </div>

          <div className='space-y-4'>
            <Text>기본 옵션</Text>
            <Divider spacing={16}>고급 옵션</Divider>
            <Text>프리미엄 기능</Text>
          </div>
        </div>
      </div>

      <div>
        <Text variant='H3' as='h3' className='mb-4'>
          수직 구분선 + 텍스트
        </Text>
        <div className='space-y-4'>
          <div className='flex items-center h-16 space-x-4'>
            <Text>홈</Text>
            <Divider orientation='vertical'>·</Divider>
            <Text>제품</Text>
            <Divider orientation='vertical'>·</Divider>
            <Text>서비스</Text>
            <Divider orientation='vertical'>·</Divider>
            <Text>문의</Text>
          </div>

          <div className='flex items-center h-12 space-x-3 text-sm'>
            <Text>2024년 3월 15일</Text>
            <Divider orientation='vertical'>|</Divider>
            <Text>작성자: 홍길동</Text>
            <Divider orientation='vertical'>|</Divider>
            <Text>조회수: 1,234</Text>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'children을 통해 구분선에 텍스트를 표시할 수 있습니다. 네비게이션, 메타데이터, 또는 옵션 구분에 유용합니다.'
      },
      source: {
        code: \`{/* 수평 구분선에 텍스트 */}
<Divider>또는</Divider>
<Divider spacing={16}>고급 옵션</Divider>

{/* 수직 구분선에 텍스트 */}
<Divider orientation="vertical">·</Divider>
<Divider orientation="vertical">|</Divider>\`
      }
    }
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,w,z;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className='space-y-8'>
      <div>
        <Text variant='H3' className='mb-4'>
          로그인 폼
        </Text>
        <div className='max-w-sm mx-auto p-6 border rounded-lg'>
          <div className='space-y-4'>
            <input className='w-full p-3 border rounded' placeholder='이메일 주소' />
            <input className='w-full p-3 border rounded' placeholder='비밀번호' type='password' />
            <button type='button' className='w-full bg-blue-500 text-white p-3 rounded'>
              로그인
            </button>
          </div>

          <Divider spacing={16}>또는</Divider>

          <div className='space-y-3'>
            <button type='button' className='w-full border p-3 rounded'>
              구글 계정으로 로그인
            </button>
            <button type='button' className='w-full border p-3 rounded'>
              카카오 계정으로 로그인
            </button>
          </div>
        </div>
      </div>

      <div>
        <Text variant='H3' className='mb-4'>
          브레드크럼 네비게이션
        </Text>
        <div className='flex items-center space-x-2 text-sm'>
          <Text>홈</Text>
          <Divider orientation='vertical'>›</Divider>
          <Text>카테고리</Text>
          <Divider orientation='vertical'>›</Divider>
          <Text>전자제품</Text>
          <Divider orientation='vertical'>›</Divider>
          <Text color='#3b82f6'>스마트폰</Text>
        </div>
      </div>

      <div>
        <Text variant='H3' className='mb-4'>
          카드 목록
        </Text>
        <div className='space-y-0 border rounded-lg overflow-hidden'>
          {['첫 번째 아이템', '두 번째 아이템', '세 번째 아이템'].map((item, index, arr) => <div key={item}>
              <div className='p-4 hover:bg-gray-50'>
                <Text>{item}</Text>
              </div>
              {index < arr.length - 1 && <Divider />}
            </div>)}
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '실제 애플리케이션에서 Divider가 사용되는 다양한 시나리오들입니다.'
      },
      source: {
        code: \`{/* 로그인 폼에서 옵션 구분 */}
<Divider spacing={16}>또는</Divider>

{/* 브레드크럼 네비게이션 */}
<Divider orientation="vertical">›</Divider>

{/* 리스트 아이템 구분 */}
<Divider />\`
      }
    }
  }
}`,...(z=(w=s.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var H,S,B;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    spacing: 16,
    children: ''
  },
  parameters: {
    docs: {
      source: {
        code: \`<Divider
  orientation="horizontal"
  spacing={16}
>
  콘텐츠 입력
</Divider>\`
      }
    }
  }
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const O=["Default","Horizontal","Vertical","Spacing","WithText","RealWorldExamples","Playground"];export{a as Default,r as Horizontal,l as Playground,s as RealWorldExamples,c as Spacing,n as Vertical,i as WithText,O as __namedExportsOrder,_ as default};
