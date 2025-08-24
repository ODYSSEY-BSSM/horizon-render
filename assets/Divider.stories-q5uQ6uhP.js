import{j as e}from"./jsx-runtime-CDt2p4po.js";import{T as r}from"./Text-BigymCks.js";import{c as a,D as P}from"./clsx-C0pa3r6B.js";import"./index-GiUgBvb1.js";const W=n=>{if(n)return typeof n=="string"?P.SPACING[n]:`${n}px`},k=(n,t)=>{if(!n)return{};const s=W(n);return s?t==="horizontal"?{marginTop:s,marginBottom:s}:{marginLeft:s,marginRight:s}:{}},i=({orientation:n="horizontal",spacing:t,className:s,children:u,...m})=>{const h=k(t,n);return u?e.jsxs("div",{className:a("flex items-center",n==="vertical"?"flex-col h-full":"w-full",s),style:h,...m,children:[e.jsx("div",{className:a("border-horizon-neutral-300",n==="horizontal"?"flex-1 border-t":"flex-1 border-l")}),e.jsx("div",{className:a(n==="horizontal"?"px-4":"py-4 px-0"),children:u}),e.jsx("div",{className:a("border-horizon-neutral-300",n==="horizontal"?"flex-1 border-t":"flex-1 border-l")})]}):n==="vertical"?e.jsx("div",{className:a("h-full border-l border-horizon-neutral-300",s),style:h,role:"separator","aria-orientation":"vertical",tabIndex:-1,...m}):e.jsx("hr",{className:a("border-t border-horizon-neutral-300 w-full",s),style:h,...m})};i.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"keyof typeof DIVIDER_CONSTANTS.SPACING | number",elements:[{name:"unknown"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const F={title:"Components/Divider",component:i,parameters:{layout:"padded",docs:{description:{component:`
시각적 구분을 위한 간단한 구분선 컴포넌트입니다. 수평/수직 방향, 간격 옵션, 텍스트 콘텐츠를 지원합니다.

## 주요 기능

- **양방향 지원**: 수평(horizontal) 및 수직(vertical) 방향
- **간격 제어**: spacing prop으로 주변 여백 조정
- **텍스트 지원**: children으로 구분선에 텍스트 표시
- **유연한 스타일링**: CSS 변수와 Tailwind 클래스 호환
- **접근성**: 적절한 시맨틱 마크업과 스크린 리더 지원
        `}}},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"구분선의 방향",defaultValue:"horizontal"},spacing:{control:{type:"number"},description:"구분선 주변 여백 (픽셀)"},children:{control:"text",description:"구분선에 표시할 텍스트"}}},c={args:{orientation:"horizontal",spacing:16},parameters:{docs:{source:{code:'<Divider orientation="horizontal" spacing={16} />'}}}},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{children:"위 콘텐츠"}),e.jsx(i,{}),e.jsx(r,{children:"아래 콘텐츠"})]}),parameters:{docs:{description:{story:"수평 구분선은 콘텐츠를 위아래로 구분합니다."},source:{code:`<div className="space-y-4">
  <Text>위 콘텐츠</Text>
  <Divider />
  <Text>아래 콘텐츠</Text>
</div>`}}}},o={render:()=>e.jsxs("div",{className:"flex items-center h-24 space-x-4",children:[e.jsx(r,{children:"왼쪽 콘텐츠"}),e.jsx(i,{orientation:"vertical"}),e.jsx(r,{children:"오른쪽 콘텐츠"})]}),parameters:{docs:{description:{story:"수직 구분선은 콘텐츠를 좌우로 구분합니다. flex 레이아웃과 함께 사용합니다."},source:{code:`<div className="flex items-center h-24 space-x-4">
  <Text>왼쪽 콘텐츠</Text>
  <Divider orientation="vertical" />
  <Text>오른쪽 콘텐츠</Text>
</div>`}}}},l={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{variant:"B2",color:"#6b7280",children:"기본 간격 (0px)"}),e.jsx(r,{children:"콘텐츠"}),e.jsx(i,{}),e.jsx(r,{children:"콘텐츠"}),e.jsx(r,{variant:"B2",color:"#6b7280",className:"mt-6",children:"8px 간격"}),e.jsx(r,{children:"콘텐츠"}),e.jsx(i,{spacing:8}),e.jsx(r,{children:"콘텐츠"}),e.jsx(r,{variant:"B2",color:"#6b7280",className:"mt-6",children:"16px 간격"}),e.jsx(r,{children:"콘텐츠"}),e.jsx(i,{spacing:16}),e.jsx(r,{children:"콘텐츠"}),e.jsx(r,{variant:"B2",color:"#6b7280",className:"mt-6",children:"24px 간격"}),e.jsx(r,{children:"콘텐츠"}),e.jsx(i,{spacing:24}),e.jsx(r,{children:"콘텐츠"}),e.jsx(r,{variant:"B2",color:"#6b7280",className:"mt-6",children:"32px 간격"}),e.jsx(r,{children:"콘텐츠"}),e.jsx(i,{spacing:32}),e.jsx(r,{children:"콘텐츠"})]}),parameters:{docs:{description:{story:"spacing prop으로 구분선 주변의 여백을 조정할 수 있습니다."},source:{code:`<Divider />                {/* 기본 간격 */}
<Divider spacing={8} />     {/* 8px 간격 */}
<Divider spacing={16} />    {/* 16px 간격 */}
<Divider spacing={24} />    {/* 24px 간격 */}
<Divider spacing={32} />    {/* 32px 간격 */}`}}}},x={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"H3",as:"h3",className:"mb-4",children:"수평 구분선 + 텍스트"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{children:"로그인 옵션"}),e.jsx(i,{children:"또는"}),e.jsx(r,{children:"소셜 로그인"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{children:"기본 옵션"}),e.jsx(i,{spacing:16,children:"고급 옵션"}),e.jsx(r,{children:"프리미엄 기능"})]})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"H3",as:"h3",className:"mb-4",children:"수직 구분선 + 텍스트"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center h-16 space-x-4",children:[e.jsx(r,{children:"홈"}),e.jsx(i,{orientation:"vertical",children:"·"}),e.jsx(r,{children:"제품"}),e.jsx(i,{orientation:"vertical",children:"·"}),e.jsx(r,{children:"서비스"}),e.jsx(i,{orientation:"vertical",children:"·"}),e.jsx(r,{children:"문의"})]}),e.jsxs("div",{className:"flex items-center h-12 space-x-3 text-sm",children:[e.jsx(r,{children:"2024년 3월 15일"}),e.jsx(i,{orientation:"vertical",children:"|"}),e.jsx(r,{children:"작성자: 홍길동"}),e.jsx(i,{orientation:"vertical",children:"|"}),e.jsx(r,{children:"조회수: 1,234"})]})]})]})]}),parameters:{docs:{description:{story:"children을 통해 구분선에 텍스트를 표시할 수 있습니다. 네비게이션, 메타데이터, 또는 옵션 구분에 유용합니다."},source:{code:`{/* 수평 구분선에 텍스트 */}
<Divider>또는</Divider>
<Divider spacing={16}>고급 옵션</Divider>

{/* 수직 구분선에 텍스트 */}
<Divider orientation="vertical">·</Divider>
<Divider orientation="vertical">|</Divider>`}}}},v={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"H3",className:"mb-4",children:"로그인 폼"}),e.jsxs("div",{className:"max-w-sm mx-auto p-6 border rounded-lg",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("input",{className:"w-full p-3 border rounded",placeholder:"이메일 주소"}),e.jsx("input",{className:"w-full p-3 border rounded",placeholder:"비밀번호",type:"password"}),e.jsx("button",{type:"button",className:"w-full bg-blue-500 text-white p-3 rounded",children:"로그인"})]}),e.jsx(i,{spacing:16,children:"또는"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{type:"button",className:"w-full border p-3 rounded",children:"구글 계정으로 로그인"}),e.jsx("button",{type:"button",className:"w-full border p-3 rounded",children:"카카오 계정으로 로그인"})]})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"H3",className:"mb-4",children:"브레드크럼 네비게이션"}),e.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[e.jsx(r,{children:"홈"}),e.jsx(i,{orientation:"vertical",children:"›"}),e.jsx(r,{children:"카테고리"}),e.jsx(i,{orientation:"vertical",children:"›"}),e.jsx(r,{children:"전자제품"}),e.jsx(i,{orientation:"vertical",children:"›"}),e.jsx(r,{color:"#3b82f6",children:"스마트폰"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"H3",className:"mb-4",children:"카드 목록"}),e.jsx("div",{className:"space-y-0 border rounded-lg overflow-hidden",children:["첫 번째 아이템","두 번째 아이템","세 번째 아이템"].map((n,t,s)=>e.jsxs("div",{children:[e.jsx("div",{className:"p-4 hover:bg-gray-50",children:e.jsx(r,{children:n})}),t<s.length-1&&e.jsx(i,{})]},n))})]})]}),parameters:{docs:{description:{story:"실제 애플리케이션에서 Divider가 사용되는 다양한 시나리오들입니다."},source:{code:`{/* 로그인 폼에서 옵션 구분 */}
<Divider spacing={16}>또는</Divider>

{/* 브레드크럼 네비게이션 */}
<Divider orientation="vertical">›</Divider>

{/* 리스트 아이템 구분 */}
<Divider />`}}}},p={args:{orientation:"horizontal",spacing:16,children:""},parameters:{docs:{source:{code:`<Divider
  orientation="horizontal"
  spacing={16}
>
  콘텐츠 입력
</Divider>`}}}};var T,j,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var N,g,b;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(b=(g=d.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,f,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var z,S,H;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(S=l.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var B,R,I;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(R=x.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var V,C,E;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(C=v.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var _,q,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(q=p.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const J=["Default","Horizontal","Vertical","Spacing","WithText","RealWorldExamples","Playground"];export{c as Default,d as Horizontal,p as Playground,v as RealWorldExamples,l as Spacing,o as Vertical,x as WithText,J as __namedExportsOrder,F as default};
