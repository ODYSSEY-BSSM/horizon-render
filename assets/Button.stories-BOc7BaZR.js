import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as d}from"./index-GiUgBvb1.js";import{c as D}from"./clsx-B-dksMZM.js";import{t as v}from"./index-TSvnGxuV.js";function _(t,o){if(typeof t=="function")return t(o);t!=null&&(t.current=o)}function de(...t){return o=>{let n=!1;const r=t.map(a=>{const s=_(a,o);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let a=0;a<r.length;a++){const s=r[a];typeof s=="function"?s():_(t[a],null)}}}}function ce(t){const o=me(t),n=d.forwardRef((r,a)=>{const{children:s,...m}=r,c=d.Children.toArray(s),B=c.find(fe);if(B){const l=B.props.children,p=c.map(f=>f===B?d.Children.count(l)>1?d.Children.only(null):d.isValidElement(l)?l.props.children:null:f);return e.jsx(o,{...m,ref:a,children:d.isValidElement(l)?d.cloneElement(l,void 0,p):null})}return e.jsx(o,{...m,ref:a,children:s})});return n.displayName=`${t}.Slot`,n}var ue=ce("Slot");function me(t){const o=d.forwardRef((n,r)=>{const{children:a,...s}=n;if(d.isValidElement(a)){const m=ve(a),c=Be(s,a.props);return a.type!==d.Fragment&&(c.ref=r?de(r,m):m),d.cloneElement(a,c)}return d.Children.count(a)>1?d.Children.only(null):null});return o.displayName=`${t}.SlotClone`,o}var pe=Symbol("radix.slottable");function fe(t){return d.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===pe}function Be(t,o){const n={...o};for(const r in o){const a=t[r],s=o[r];/^on[A-Z]/.test(r)?a&&s?n[r]=(...c)=>{const B=s(...c);return a(...c),B}:a&&(n[r]=a):r==="style"?n[r]={...a,...s}:r==="className"&&(n[r]=[a,s].filter(Boolean).join(" "))}return{...t,...n}}function ve(t){var r,a;let o=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=o&&"isReactWarning"in o&&o.isReactWarning;return n?t.ref:(o=(a=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:a.get,n=o&&"isReactWarning"in o&&o.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}const k=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,L=D,ge=(t,o)=>n=>{var r;if((o==null?void 0:o.variants)==null)return L(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:s}=o,m=Object.keys(a).map(l=>{const p=n==null?void 0:n[l],f=s==null?void 0:s[l];if(p===null)return null;const u=k(p)||k(f);return a[l][u]}),c=n&&Object.entries(n).reduce((l,p)=>{let[f,u]=p;return u===void 0||(l[f]=u),l},{}),B=o==null||(r=o.compoundVariants)===null||r===void 0?void 0:r.reduce((l,p)=>{let{class:f,className:u,...I}=p;return Object.entries(I).every(g=>{let[x,h]=g;return Array.isArray(h)?h.includes({...s,...c}[x]):{...s,...c}[x]===h})?[...l,f,u]:l},[]);return L(t,m,B,n==null?void 0:n.class,n==null?void 0:n.className)},V={small:"text-13 font-semibold leading-[18px] tracking-normal",medium:"text-14 font-semibold leading-[20px] tracking-normal",large:"text-16 font-semibold leading-[24px] tracking-normal"},T={small:{classes:"text-16 font-regular",wght:v.fontWeight.regular,grad:v.icons.grade[0],opsz:v.icons.opticalSize[20]},medium:{classes:"text-20 font-regular",wght:v.fontWeight.regular,grad:v.icons.grade[0],opsz:v.icons.opticalSize[24]},large:{classes:"text-24 font-medium",wght:v.fontWeight.medium,grad:v.icons.grade[25],opsz:v.icons.opticalSize[40]}},he=["inline-flex items-center justify-center","font-suit select-none transition-colors","focus-visible:outline-none focus-visible:ring-2","disabled:pointer-events-none","shrink-0 py-2.5"].join(" "),xe=ge(he,{variants:{size:{small:"gap-1.5",medium:"gap-2",large:"gap-2.5"},icon:{none:"",left:"pl-2.5",right:"pr-2.5",only:"gap-0 px-2.5"},type:{contained:["bg-primary-500 text-white","hover:bg-primary-700","active:bg-primary-900","disabled:bg-neutral-200"].join(" "),outlined:["bg-transparent border border-[1.5px] border-primary-500 text-primary-500","hover:bg-primary-600 hover:text-white hover:border-none","active:bg-primary-900 active:text-white active:border-none","disabled:border-neutral-300 disabled:text-neutral-300"].join(" ")},rounded:{true:"rounded-full",false:"rounded-lg"}},compoundVariants:[{icon:["none","left","right"],size:"small",class:"px-4"},{icon:["none","left","right"],size:"medium",class:"px-5"},{icon:["none","left","right"],size:"large",class:"px-6"}],defaultVariants:{size:"medium",icon:"none",type:"contained",rounded:!1}}),Ne={small:{text:V.small,icon:T.small},medium:{text:V.medium,icon:T.medium},large:{text:V.large,icon:T.large}},i=({size:t="medium",icon:o="none",variant:n="contained",rounded:r=!1,children:a,iconName:s="check",className:m,disabled:c=!1,buttonType:B="button",asChild:l=!1,...p})=>{const f=xe({size:t,icon:o,type:n,rounded:r}),u=Ne[t],I=l?ue:"button",g=h=>!s||o==="none"||o!==h&&o!=="only"?null:e.jsx("span",{className:D("material-symbols-rounded select-none",u.icon.classes),style:{fontVariationSettings:`'FILL' 0, 'wght' ${u.icon.wght}, 'GRAD' ${u.icon.grad}, 'opsz' ${u.icon.opsz}`},children:s}),x=()=>o==="only"?g("left"):e.jsxs(e.Fragment,{children:[g("left"),a&&e.jsx("span",{className:u.text,children:a}),g("right")]});return e.jsx(I,{type:l?void 0:B,className:D(f,m),disabled:c,...p,children:x()})};i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"'none' | 'left' | 'right' | 'only'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'only'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'outlined'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'contained'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'check'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonType:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const we={title:"Components/Button",component:i,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]},icon:{control:"select",options:["none","left","right","only"]},variant:{control:"select",options:["contained","outlined"]},rounded:{control:"boolean"},disabled:{control:"boolean"},iconName:{control:"text"},asChild:{control:"boolean"}}},N={args:{children:"Button",size:"medium",variant:"contained"},parameters:{docs:{source:{code:'<Button size="medium" variant="contained">Button</Button>'}}}},y={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(i,{size:"small",children:"Small"}),e.jsx(i,{size:"medium",children:"Medium"}),e.jsx(i,{size:"large",children:"Large"})]}),parameters:{docs:{source:{code:`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}}}},b={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(i,{variant:"contained",children:"Contained"}),e.jsx(i,{variant:"outlined",children:"Outlined"})]}),parameters:{docs:{source:{code:`<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>`}}}},j={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(i,{icon:"left",iconName:"add",children:"Add Item"}),e.jsx(i,{icon:"right",iconName:"arrow_forward",children:"Next"}),e.jsx(i,{icon:"only",iconName:"search"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(i,{variant:"outlined",icon:"left",iconName:"download",children:"Download"}),e.jsx(i,{variant:"outlined",icon:"right",iconName:"send",children:"Send"}),e.jsx(i,{variant:"outlined",icon:"only",iconName:"favorite"})]})]}),parameters:{docs:{source:{code:`<Button icon="left" iconName="add">Add Item</Button>
<Button icon="right" iconName="arrow_forward">Next</Button>
<Button icon="only" iconName="search" />`}}}},z={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(i,{rounded:!1,children:"Square"}),e.jsx(i,{rounded:!0,children:"Rounded"}),e.jsx(i,{rounded:!0,icon:"only",iconName:"favorite"})]}),parameters:{docs:{source:{code:`<Button rounded={false}>Square</Button>
<Button rounded={true}>Rounded</Button>
<Button rounded={true} icon="only" iconName="favorite" />`}}}},w={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(i,{children:"Default"}),e.jsx(i,{disabled:!0,children:"Disabled"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(i,{variant:"outlined",children:"Default"}),e.jsx(i,{variant:"outlined",disabled:!0,children:"Disabled"})]})]}),parameters:{docs:{source:{code:`<Button>Default</Button>
<Button property="hover">Hover</Button>
<Button property="pressed">Pressed</Button>
<Button disabled>Disabled</Button>`}}}},C={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Contained Buttons"}),e.jsx("div",{className:"space-y-4",children:["small","medium","large"].map(t=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm capitalize",children:t}),e.jsx(i,{size:t,children:"Text"}),e.jsx(i,{size:t,icon:"left",iconName:"add",children:"Icon Left"}),e.jsx(i,{size:t,icon:"right",iconName:"arrow_forward",children:"Icon Right"}),e.jsx(i,{size:t,icon:"only",iconName:"search"})]},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Outlined Buttons"}),e.jsx("div",{className:"space-y-4",children:["small","medium","large"].map(t=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm capitalize",children:t}),e.jsx(i,{size:t,variant:"outlined",children:"Text"}),e.jsx(i,{size:t,variant:"outlined",icon:"left",iconName:"add",children:"Icon Left"}),e.jsx(i,{size:t,variant:"outlined",icon:"right",iconName:"arrow_forward",children:"Icon Right"}),e.jsx(i,{size:t,variant:"outlined",icon:"only",iconName:"search"})]},t))})]})]}),parameters:{docs:{source:{code:`// All size and icon combinations
<Button size="small">Text</Button>
<Button size="small" icon="left" iconName="add">Icon Left</Button>
<Button size="small" icon="right" iconName="arrow_forward">Icon Right</Button>
<Button size="small" icon="only" iconName="search" />

// Outlined variants
<Button size="medium" variant="outlined">Text</Button>
<Button size="medium" variant="outlined" icon="left" iconName="add">Icon Left</Button>`}}}},S={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(i,{children:"Regular Button"}),e.jsx(i,{asChild:!0,children:e.jsx("a",{href:"https://github.com",children:"Link as Button"})})]}),parameters:{docs:{source:{code:`<Button>Regular Button</Button>
<Button asChild>
  <a href="#" role="button">Link as Button</a>
</Button>`}}}},R={args:{children:"Click me!",size:"medium",property:"default",icon:"none",variant:"contained",rounded:!1,disabled:!1,iconName:"add",asChild:!1},parameters:{docs:{source:{code:`<Button 
  size="medium"
  property="default"
  icon="none"
  variant="contained"
  rounded={false}
  disabled={false}
  iconName="add"
  asChild={false}
>
  Click me!
</Button>`}}}};var O,A,q;N.parameters={...N.parameters,docs:{...(O=N.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'contained'
  },
  parameters: {
    docs: {
      source: {
        code: '<Button size="medium" variant="contained">Button</Button>'
      }
    }
  }
}`,...(q=(A=N.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var E,P,W;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
      <Button size='small'>Small</Button>
      <Button size='medium'>Medium</Button>
      <Button size='large'>Large</Button>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>\`
      }
    }
  }
}`,...(W=(P=y.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var $,F,H;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>\`
      }
    }
  }
}`,...(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var M,G,K;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button icon='left' iconName='add'>
          Add Item
        </Button>
        <Button icon='right' iconName='arrow_forward'>
          Next
        </Button>
        <Button icon='only' iconName='search' />
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined' icon='left' iconName='download'>
          Download
        </Button>
        <Button variant='outlined' icon='right' iconName='send'>
          Send
        </Button>
        <Button variant='outlined' icon='only' iconName='favorite' />
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button icon="left" iconName="add">Add Item</Button>
<Button icon="right" iconName="arrow_forward">Next</Button>
<Button icon="only" iconName="search" />\`
      }
    }
  }
}`,...(K=(G=j.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var U,Z,J;z.parameters={...z.parameters,docs:{...(U=z.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
      <Button rounded={false}>Square</Button>
      <Button rounded={true}>Rounded</Button>
      <Button rounded={true} icon='only' iconName='favorite' />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button rounded={false}>Square</Button>
<Button rounded={true}>Rounded</Button>
<Button rounded={true} icon="only" iconName="favorite" />\`
      }
    }
  }
}`,...(J=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined'>Default</Button>
        <Button variant='outlined' disabled>
          Disabled
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button>Default</Button>
<Button property="hover">Hover</Button>
<Button property="pressed">Pressed</Button>
<Button disabled>Disabled</Button>\`
      }
    }
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,te,ne;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Contained Buttons</h3>
        <div className='space-y-4'>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} className='flex items-center gap-4'>
              <span className='w-16 text-sm capitalize'>{size}</span>
              <Button size={size}>Text</Button>
              <Button size={size} icon='left' iconName='add'>
                Icon Left
              </Button>
              <Button size={size} icon='right' iconName='arrow_forward'>
                Icon Right
              </Button>
              <Button size={size} icon='only' iconName='search' />
            </div>)}
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>Outlined Buttons</h3>
        <div className='space-y-4'>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} className='flex items-center gap-4'>
              <span className='w-16 text-sm capitalize'>{size}</span>
              <Button size={size} variant='outlined'>
                Text
              </Button>
              <Button size={size} variant='outlined' icon='left' iconName='add'>
                Icon Left
              </Button>
              <Button size={size} variant='outlined' icon='right' iconName='arrow_forward'>
                Icon Right
              </Button>
              <Button size={size} variant='outlined' icon='only' iconName='search' />
            </div>)}
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`// All size and icon combinations
<Button size="small">Text</Button>
<Button size="small" icon="left" iconName="add">Icon Left</Button>
<Button size="small" icon="right" iconName="arrow_forward">Icon Right</Button>
<Button size="small" icon="only" iconName="search" />

// Outlined variants
<Button size="medium" variant="outlined">Text</Button>
<Button size="medium" variant="outlined" icon="left" iconName="add">Icon Left</Button>\`
      }
    }
  }
}`,...(ne=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
      <Button>Regular Button</Button>
      <Button asChild>
        <a href='https://github.com'>Link as Button</a>
      </Button>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button>Regular Button</Button>
<Button asChild>
  <a href="#" role="button">Link as Button</a>
</Button>\`
      }
    }
  }
}`,...(ie=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,se,le;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    children: 'Click me!',
    size: 'medium',
    property: 'default',
    icon: 'none',
    variant: 'contained',
    rounded: false,
    disabled: false,
    iconName: 'add',
    asChild: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button 
  size="medium"
  property="default"
  icon="none"
  variant="contained"
  rounded={false}
  disabled={false}
  iconName="add"
  asChild={false}
>
  Click me!
</Button>\`
      }
    }
  }
}`,...(le=(se=R.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const Ce=["Default","Sizes","Types","WithIcons","Rounded","Disabled","AllCombinations","AsChild","Playground"];export{C as AllCombinations,S as AsChild,N as Default,w as Disabled,R as Playground,z as Rounded,y as Sizes,b as Types,j as WithIcons,Ce as __namedExportsOrder,we as default};
