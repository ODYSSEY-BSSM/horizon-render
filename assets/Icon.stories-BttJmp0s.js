import{j as e}from"./jsx-runtime-CDt2p4po.js";import{g as A,c as O}from"./size-BFO4AdcO.js";import"./index-GiUgBvb1.js";var E={grade:{0:"0"},opticalSize:{20:"20",24:"24",40:"40",48:"48"}},P={semibold:600,medium:500,regular:400,light:300},t={fontWeight:P,icons:E};const B={XS:{classes:"text-16 font-light",wght:t.fontWeight.light,grad:t.icons.grade[0],opsz:t.icons.opticalSize[20]},SM:{classes:"text-20 font-regular",wght:t.fontWeight.regular,grad:t.icons.grade[0],opsz:t.icons.opticalSize[24]},MD:{classes:"text-24 font-regular",wght:t.fontWeight.regular,grad:t.icons.grade[0],opsz:t.icons.opticalSize[24]},LG:{classes:"text-32 font-medium",wght:t.fontWeight.medium,grad:t.icons.grade[0],opsz:t.icons.opticalSize[40]},XL:{classes:"text-40 font-semibold",wght:t.fontWeight.semibold,grad:t.icons.grade[0],opsz:t.icons.opticalSize[48]}},s=({name:C,variant:X="MD",filled:G=!1,size:F,color:T,className:W,...q})=>{const a=B[X],V={fontSize:A(F),color:T,fontVariationSettings:`'FILL' ${G?"1":"0"}, 'wght' ${a.wght}, 'GRAD' ${a.grad}, 'opsz' ${a.opsz}`};return e.jsx("span",{className:O("material-symbols-outlined select-none",a.classes,W),style:V,...q,children:C})};s.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof iconVariants",elements:[{name:"literal",value:"XS"},{name:"literal",value:"SM"},{name:"literal",value:"MD"},{name:"literal",value:"LG"},{name:"literal",value:"XL"}]},description:"",defaultValue:{value:"'MD'",computed:!1}},filled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"string"},description:""}}};const K={title:"Components/Icon",component:s,parameters:{layout:"centered"},argTypes:{name:{control:"text",description:"Material Symbols icon name (e.g. 'home', 'star', 'settings')"},variant:{control:"select",options:["XS","SM","MD","LG","XL"],description:"Icon size variant with optimized font-weight and optical-size"},filled:{control:"boolean",description:"Whether icon should be filled (solid) or outlined"},size:{control:{type:"range",min:12,max:80,step:2},description:"Custom icon size in pixels (overrides variant size)"},color:{control:"color",description:"Icon color (CSS color value)"}}},i={args:{name:"home",variant:"MD",filled:!1},parameters:{docs:{source:{code:'<Icon name="home" variant="MD" filled={false} />'}}}},c={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex gap-6 items-end",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"star",variant:"XS"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"XS (16px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"star",variant:"SM"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"SM (20px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"star",variant:"MD"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"MD (24px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"star",variant:"LG"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"LG (32px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"star",variant:"XL"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"XL (40px)"})]})]}),e.jsx("div",{className:"text-sm text-gray-500",children:"💡 각 variant는 크기에 맞게 최적화된 font-weight와 optical-size를 사용합니다"})]}),parameters:{docs:{source:{code:`<Icon name="star" variant="XS" />  {/* 16px, light weight */}
<Icon name="star" variant="SM" />  {/* 20px, regular weight */}
<Icon name="star" variant="MD" />  {/* 24px, regular weight */}
<Icon name="star" variant="LG" />  {/* 32px, medium weight */}
<Icon name="star" variant="XL" />  {/* 40px, semibold weight */}`}}}},r={args:{name:"star",variant:"MD",filled:!1,color:"#000",size:void 0},parameters:{docs:{source:{code:`<Icon 
  name="star" 
  variant="MD" 
  filled={false} 
  color="#000"
/>`}}}},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"favorite",filled:!1}),e.jsx("div",{className:"text-xs mt-1",children:"Outline"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"favorite",filled:!0}),e.jsx("div",{className:"text-xs mt-1",children:"Filled"})]})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"star",filled:!1}),e.jsx("div",{className:"text-xs mt-1",children:"Outline"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"star",filled:!0}),e.jsx("div",{className:"text-xs mt-1",children:"Filled"})]})]})]}),parameters:{docs:{source:{code:`{/* Outline icons */}
<Icon name="favorite" filled={false} />
<Icon name="star" filled={false} />

{/* Filled icons */}
<Icon name="favorite" filled={true} />
<Icon name="star" filled={true} />`}}}},l={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-2 font-medium",children:"Custom Sizes"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"settings",size:16}),e.jsx("div",{className:"text-xs mt-1",children:"16px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"settings",size:24}),e.jsx("div",{className:"text-xs mt-1",children:"24px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"settings",size:32}),e.jsx("div",{className:"text-xs mt-1",children:"32px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"settings",size:48}),e.jsx("div",{className:"text-xs mt-1",children:"48px"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-2 font-medium",children:"String Sizes"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"settings",size:"1rem"}),e.jsx("div",{className:"text-xs mt-1",children:"1rem"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"settings",size:"1.5rem"}),e.jsx("div",{className:"text-xs mt-1",children:"1.5rem"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"settings",size:"2rem"}),e.jsx("div",{className:"text-xs mt-1",children:"2rem"})]})]})]})]}),parameters:{docs:{source:{code:`{/* Number sizes (converts to px) */}
<Icon name="settings" size={16} />
<Icon name="settings" size={24} />
<Icon name="settings" size={32} />

{/* String sizes (use as-is) */}
<Icon name="settings" size="1rem" />
<Icon name="settings" size="1.5rem" />
<Icon name="settings" size="2rem" />`}}}},m={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-3 font-medium",children:"Semantic Colors"}),e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"check_circle",color:"#059669"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Success"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"error",color:"#dc2626"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Error"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"warning",color:"#f59e0b"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Warning"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"info",color:"#3b82f6"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Info"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-3 font-medium",children:"Brand Colors"}),e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"palette",color:"#6366f1"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Primary"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"palette",color:"#8b5cf6"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Secondary"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"palette",color:"#10b981"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Accent"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"palette",color:"#6b7280"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Neutral"})]})]})]}),e.jsx("div",{className:"text-sm text-gray-500",children:"💡 색상은 CSS color 값(hex, rgb, hsl 등)을 모두 지원합니다"})]}),parameters:{docs:{source:{code:`{/* Semantic colors */}
<Icon name="check_circle" color="#059669" />  {/* Success */}
<Icon name="error" color="#dc2626" />        {/* Error */}
<Icon name="warning" color="#f59e0b" />      {/* Warning */}
<Icon name="info" color="#3b82f6" />         {/* Info */}

{/* Brand colors */}
<Icon name="palette" color="#6366f1" />      {/* Primary */}
<Icon name="palette" color="#8b5cf6" />      {/* Secondary */}`}}}},d={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-3 font-medium",children:"Navigation Icons"}),e.jsxs("div",{className:"grid grid-cols-6 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"home"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"home"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"search"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"search"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"menu"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"menu"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"close"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"close"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"arrow_back"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"arrow_back"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"arrow_forward"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"arrow_forward"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-3 font-medium",children:"Action Icons"}),e.jsxs("div",{className:"grid grid-cols-6 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"settings"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"settings"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"favorite"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"favorite"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"notifications"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"notifications"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"account_circle"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"account_circle"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"edit"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"edit"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"delete"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"delete"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm mb-3 font-medium",children:"Status Icons"}),e.jsxs("div",{className:"grid grid-cols-6 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"check_circle",color:"#059669"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"check_circle"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"error",color:"#dc2626"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"error"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"warning",color:"#f59e0b"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"warning"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"info",color:"#3b82f6"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"info"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"help",color:"#6b7280"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"help"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{name:"visibility"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"visibility"})]})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 mt-4",children:["💡 Material Symbols에서 제공하는 2000+ 아이콘을 모두 사용할 수 있습니다.",e.jsx("br",{}),"전체 아이콘 목록은"," ",e.jsx("a",{href:"https://fonts.google.com/icons",target:"_blank",className:"text-blue-600 hover:underline",rel:"noreferrer",children:"Google Fonts Icons"}),"에서 확인하세요."]})]}),parameters:{docs:{source:{code:`{/* Navigation */}
<Icon name="home" />
<Icon name="search" />
<Icon name="menu" />
<Icon name="close" />
<Icon name="arrow_back" />
<Icon name="arrow_forward" />

{/* Actions */}
<Icon name="settings" />
<Icon name="favorite" />
<Icon name="edit" />
<Icon name="delete" />

{/* Status with colors */}
<Icon name="check_circle" color="#059669" />
<Icon name="error" color="#dc2626" />
<Icon name="warning" color="#f59e0b" />
<Icon name="info" color="#3b82f6" />`}}}};var o,x,v;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: 'home',
    variant: 'MD',
    filled: false
  },
  parameters: {
    docs: {
      source: {
        code: '<Icon name="home" variant="MD" filled={false} />'
      }
    }
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,N,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className='space-y-6'>
      <div className='flex gap-6 items-end'>
        <div className='text-center'>
          <Icon name='star' variant='XS' />
          <div className='text-xs mt-1 text-gray-600'>XS (16px)</div>
        </div>
        <div className='text-center'>
          <Icon name='star' variant='SM' />
          <div className='text-xs mt-1 text-gray-600'>SM (20px)</div>
        </div>
        <div className='text-center'>
          <Icon name='star' variant='MD' />
          <div className='text-xs mt-1 text-gray-600'>MD (24px)</div>
        </div>
        <div className='text-center'>
          <Icon name='star' variant='LG' />
          <div className='text-xs mt-1 text-gray-600'>LG (32px)</div>
        </div>
        <div className='text-center'>
          <Icon name='star' variant='XL' />
          <div className='text-xs mt-1 text-gray-600'>XL (40px)</div>
        </div>
      </div>

      <div className='text-sm text-gray-500'>
        💡 각 variant는 크기에 맞게 최적화된 font-weight와 optical-size를 사용합니다
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Icon name="star" variant="XS" />  {/* 16px, light weight */}
<Icon name="star" variant="SM" />  {/* 20px, regular weight */}
<Icon name="star" variant="MD" />  {/* 24px, regular weight */}
<Icon name="star" variant="LG" />  {/* 32px, medium weight */}
<Icon name="star" variant="XL" />  {/* 40px, semibold weight */}\`
      }
    }
  }
}`,...(h=(N=c.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var p,f,j;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'star',
    variant: 'MD',
    filled: false,
    color: '#000',
    size: undefined
  },
  parameters: {
    docs: {
      source: {
        code: \`<Icon 
  name="star" 
  variant="MD" 
  filled={false} 
  color="#000"
/>\`
      }
    }
  }
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var u,I,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className='space-y-4'>
      <div className='flex gap-4 items-center'>
        <div className='text-center'>
          <Icon name='favorite' filled={false} />
          <div className='text-xs mt-1'>Outline</div>
        </div>
        <div className='text-center'>
          <Icon name='favorite' filled={true} />
          <div className='text-xs mt-1'>Filled</div>
        </div>
      </div>

      <div className='flex gap-4 items-center'>
        <div className='text-center'>
          <Icon name='star' filled={false} />
          <div className='text-xs mt-1'>Outline</div>
        </div>
        <div className='text-center'>
          <Icon name='star' filled={true} />
          <div className='text-xs mt-1'>Filled</div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`{/* Outline icons */}
<Icon name="favorite" filled={false} />
<Icon name="star" filled={false} />

{/* Filled icons */}
<Icon name="favorite" filled={true} />
<Icon name="star" filled={true} />\`
      }
    }
  }
}`,...(y=(I=n.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var b,S,z;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className='space-y-6'>
      {/* Custom sizes */}
      <div>
        <div className='text-sm mb-2 font-medium'>Custom Sizes</div>
        <div className='flex gap-4 items-center'>
          <div className='text-center'>
            <Icon name='settings' size={16} />
            <div className='text-xs mt-1'>16px</div>
          </div>
          <div className='text-center'>
            <Icon name='settings' size={24} />
            <div className='text-xs mt-1'>24px</div>
          </div>
          <div className='text-center'>
            <Icon name='settings' size={32} />
            <div className='text-xs mt-1'>32px</div>
          </div>
          <div className='text-center'>
            <Icon name='settings' size={48} />
            <div className='text-xs mt-1'>48px</div>
          </div>
        </div>
      </div>

      {/* String sizes */}
      <div>
        <div className='text-sm mb-2 font-medium'>String Sizes</div>
        <div className='flex gap-4 items-center'>
          <div className='text-center'>
            <Icon name='settings' size='1rem' />
            <div className='text-xs mt-1'>1rem</div>
          </div>
          <div className='text-center'>
            <Icon name='settings' size='1.5rem' />
            <div className='text-xs mt-1'>1.5rem</div>
          </div>
          <div className='text-center'>
            <Icon name='settings' size='2rem' />
            <div className='text-xs mt-1'>2rem</div>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`{/* Number sizes (converts to px) */}
<Icon name="settings" size={16} />
<Icon name="settings" size={24} />
<Icon name="settings" size={32} />

{/* String sizes (use as-is) */}
<Icon name="settings" size="1rem" />
<Icon name="settings" size="1.5rem" />
<Icon name="settings" size="2rem" />\`
      }
    }
  }
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,_,M;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className='space-y-6'>
      <div>
        <div className='text-sm mb-3 font-medium'>Semantic Colors</div>
        <div className='flex gap-6 items-center'>
          <div className='text-center'>
            <Icon name='check_circle' color='#059669' />
            <div className='text-xs mt-1 text-gray-600'>Success</div>
          </div>
          <div className='text-center'>
            <Icon name='error' color='#dc2626' />
            <div className='text-xs mt-1 text-gray-600'>Error</div>
          </div>
          <div className='text-center'>
            <Icon name='warning' color='#f59e0b' />
            <div className='text-xs mt-1 text-gray-600'>Warning</div>
          </div>
          <div className='text-center'>
            <Icon name='info' color='#3b82f6' />
            <div className='text-xs mt-1 text-gray-600'>Info</div>
          </div>
        </div>
      </div>

      <div>
        <div className='text-sm mb-3 font-medium'>Brand Colors</div>
        <div className='flex gap-6 items-center'>
          <div className='text-center'>
            <Icon name='palette' color='#6366f1' />
            <div className='text-xs mt-1 text-gray-600'>Primary</div>
          </div>
          <div className='text-center'>
            <Icon name='palette' color='#8b5cf6' />
            <div className='text-xs mt-1 text-gray-600'>Secondary</div>
          </div>
          <div className='text-center'>
            <Icon name='palette' color='#10b981' />
            <div className='text-xs mt-1 text-gray-600'>Accent</div>
          </div>
          <div className='text-center'>
            <Icon name='palette' color='#6b7280' />
            <div className='text-xs mt-1 text-gray-600'>Neutral</div>
          </div>
        </div>
      </div>

      <div className='text-sm text-gray-500'>
        💡 색상은 CSS color 값(hex, rgb, hsl 등)을 모두 지원합니다
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`{/* Semantic colors */}
<Icon name="check_circle" color="#059669" />  {/* Success */}
<Icon name="error" color="#dc2626" />        {/* Error */}
<Icon name="warning" color="#f59e0b" />      {/* Warning */}
<Icon name="info" color="#3b82f6" />         {/* Info */}

{/* Brand colors */}
<Icon name="palette" color="#6366f1" />      {/* Primary */}
<Icon name="palette" color="#8b5cf6" />      {/* Secondary */}\`
      }
    }
  }
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var D,k,L;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className='space-y-8'>
      <div>
        <div className='text-sm mb-3 font-medium'>Navigation Icons</div>
        <div className='grid grid-cols-6 gap-4'>
          <div className='text-center'>
            <Icon name='home' />
            <div className='text-xs mt-1 text-gray-600'>home</div>
          </div>
          <div className='text-center'>
            <Icon name='search' />
            <div className='text-xs mt-1 text-gray-600'>search</div>
          </div>
          <div className='text-center'>
            <Icon name='menu' />
            <div className='text-xs mt-1 text-gray-600'>menu</div>
          </div>
          <div className='text-center'>
            <Icon name='close' />
            <div className='text-xs mt-1 text-gray-600'>close</div>
          </div>
          <div className='text-center'>
            <Icon name='arrow_back' />
            <div className='text-xs mt-1 text-gray-600'>arrow_back</div>
          </div>
          <div className='text-center'>
            <Icon name='arrow_forward' />
            <div className='text-xs mt-1 text-gray-600'>arrow_forward</div>
          </div>
        </div>
      </div>

      <div>
        <div className='text-sm mb-3 font-medium'>Action Icons</div>
        <div className='grid grid-cols-6 gap-4'>
          <div className='text-center'>
            <Icon name='settings' />
            <div className='text-xs mt-1 text-gray-600'>settings</div>
          </div>
          <div className='text-center'>
            <Icon name='favorite' />
            <div className='text-xs mt-1 text-gray-600'>favorite</div>
          </div>
          <div className='text-center'>
            <Icon name='notifications' />
            <div className='text-xs mt-1 text-gray-600'>notifications</div>
          </div>
          <div className='text-center'>
            <Icon name='account_circle' />
            <div className='text-xs mt-1 text-gray-600'>account_circle</div>
          </div>
          <div className='text-center'>
            <Icon name='edit' />
            <div className='text-xs mt-1 text-gray-600'>edit</div>
          </div>
          <div className='text-center'>
            <Icon name='delete' />
            <div className='text-xs mt-1 text-gray-600'>delete</div>
          </div>
        </div>
      </div>

      <div>
        <div className='text-sm mb-3 font-medium'>Status Icons</div>
        <div className='grid grid-cols-6 gap-4'>
          <div className='text-center'>
            <Icon name='check_circle' color='#059669' />
            <div className='text-xs mt-1 text-gray-600'>check_circle</div>
          </div>
          <div className='text-center'>
            <Icon name='error' color='#dc2626' />
            <div className='text-xs mt-1 text-gray-600'>error</div>
          </div>
          <div className='text-center'>
            <Icon name='warning' color='#f59e0b' />
            <div className='text-xs mt-1 text-gray-600'>warning</div>
          </div>
          <div className='text-center'>
            <Icon name='info' color='#3b82f6' />
            <div className='text-xs mt-1 text-gray-600'>info</div>
          </div>
          <div className='text-center'>
            <Icon name='help' color='#6b7280' />
            <div className='text-xs mt-1 text-gray-600'>help</div>
          </div>
          <div className='text-center'>
            <Icon name='visibility' />
            <div className='text-xs mt-1 text-gray-600'>visibility</div>
          </div>
        </div>
      </div>

      <div className='text-xs text-gray-500 mt-4'>
        💡 Material Symbols에서 제공하는 2000+ 아이콘을 모두 사용할 수 있습니다.
        <br />
        전체 아이콘 목록은{' '}
        <a href='https://fonts.google.com/icons' target='_blank' className='text-blue-600 hover:underline' rel='noreferrer'>
          Google Fonts Icons
        </a>
        에서 확인하세요.
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`{/* Navigation */}
<Icon name="home" />
<Icon name="search" />
<Icon name="menu" />
<Icon name="close" />
<Icon name="arrow_back" />
<Icon name="arrow_forward" />

{/* Actions */}
<Icon name="settings" />
<Icon name="favorite" />
<Icon name="edit" />
<Icon name="delete" />

{/* Status with colors */}
<Icon name="check_circle" color="#059669" />
<Icon name="error" color="#dc2626" />
<Icon name="warning" color="#f59e0b" />
<Icon name="info" color="#3b82f6" />\`
      }
    }
  }
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const Q=["Default","AllVariants","Playground","Filled","CustomSizing","Colors","CommonIcons"];export{c as AllVariants,m as Colors,d as CommonIcons,l as CustomSizing,i as Default,n as Filled,r as Playground,Q as __namedExportsOrder,K as default};
