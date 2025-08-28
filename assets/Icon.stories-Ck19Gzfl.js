import{I as t}from"./index-tJulI_bx.js";import{R as e}from"./index-GiUgBvb1.js";import"./jsx-runtime-CDt2p4po.js";const k={title:"Components/Icon",component:t,parameters:{layout:"centered",docs:{description:{component:`
Material Symbols 기반 아이콘 컴포넌트입니다. 2000+ 아이콘을 지원하며, 크기와 스타일을 세밀하게 제어할 수 있습니다.

## 주요 기능

- **Material Symbols**: Google의 최신 아이콘 시스템 사용
- **5가지 크기 변형**: XS(16px), SM(20px), MD(24px), LG(32px), XL(40px)
- **최적화된 렌더링**: 크기별 font-weight, optical-size 자동 조정
- **유연한 스타일링**: 색상, 크기, filled/outlined 스타일
- **접근성**: 적절한 aria 속성과 시맨틱 마크업
- **TypeScript**: 완전한 타입 지원과 자동 완성
        `}}},tags:["autodocs"],argTypes:{name:{control:"text",description:"Material Symbols icon name (e.g. 'home', 'star', 'settings')"},variant:{control:"select",options:["XS","SM","MD","LG","XL"],description:"Icon size variant with optimized font-weight and optical-size"},filled:{control:"boolean",description:"Whether icon should be filled (solid) or outlined"},size:{control:{type:"range",min:12,max:80,step:2},description:"Custom icon size in pixels (overrides variant size)"},color:{control:"color",description:"Icon color (CSS color value)"}}},n={args:{name:"home",variant:"MD",filled:!1},parameters:{docs:{source:{code:'<Icon name="home" variant="MD" filled={false} />'}}}},i={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"24px"}},e.createElement("div",{style:{display:"flex",gap:"24px",alignItems:"flex-end"}},e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"star",variant:"XS"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"XS (16px)")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"star",variant:"SM"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"SM (20px)")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"star",variant:"MD"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"MD (24px)")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"star",variant:"LG"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"LG (32px)")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"star",variant:"XL"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"XL (40px)"))),e.createElement("div",{style:{fontSize:"14px",color:"#6b7280"}},"💡 각 variant는 크기에 맞게 최적화된 font-weight와 optical-size를 사용합니다")),parameters:{docs:{source:{code:`<Icon name="star" variant="XS" />  {/* 16px, light weight */}
<Icon name="star" variant="SM" />  {/* 20px, regular weight */}
<Icon name="star" variant="MD" />  {/* 24px, regular weight */}
<Icon name="star" variant="LG" />  {/* 32px, medium weight */}
<Icon name="star" variant="XL" />  {/* 40px, semibold weight */}`}}}},r={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"favorite",filled:!1}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"Outline")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"favorite",filled:!0}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"Filled"))),e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"star",filled:!1}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"Outline")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"star",filled:!0}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"Filled")))),parameters:{docs:{source:{code:`{/* Outline icons */}
<Icon name="favorite" filled={false} />
<Icon name="star" filled={false} />

{/* Filled icons */}
<Icon name="favorite" filled={true} />
<Icon name="star" filled={true} />`}}}},o={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"24px"}},e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"8px",fontWeight:"500"}},"Custom Sizes"),e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"settings",size:16}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"16px")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"settings",size:24}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"24px")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"settings",size:32}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"32px")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"settings",size:48}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"48px")))),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"8px",fontWeight:"500"}},"String Sizes"),e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"settings",size:"1rem"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"1rem")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"settings",size:"1.5rem"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"1.5rem")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"settings",size:"2rem"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px"}},"2rem"))))),parameters:{docs:{source:{code:`{/* Number sizes (converts to px) */}
<Icon name="settings" size={16} />
<Icon name="settings" size={24} />
<Icon name="settings" size={32} />

{/* String sizes (use as-is) */}
<Icon name="settings" size="1rem" />
<Icon name="settings" size="1.5rem" />
<Icon name="settings" size="2rem" />`}}}},l={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"24px"}},e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"12px",fontWeight:"500"}},"Semantic Colors"),e.createElement("div",{className:"flex gap-6 items-center"},e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"check_circle",color:"#059669"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"Success")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"error",color:"#dc2626"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"Error")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"warning",color:"#f59e0b"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"Warning")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"info",color:"#3b82f6"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"Info")))),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"12px",fontWeight:"500"}},"Brand Colors"),e.createElement("div",{className:"flex gap-6 items-center"},e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"palette",color:"#6366f1"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"Primary")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"palette",color:"#8b5cf6"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"Secondary")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"palette",color:"#10b981"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"Accent")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"palette",color:"#6b7280"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"Neutral")))),e.createElement("div",{style:{fontSize:"14px",color:"#6b7280"}},"💡 색상은 CSS color 값(hex, rgb, hsl 등)을 모두 지원합니다")),parameters:{docs:{source:{code:`{/* Semantic colors */}
<Icon name="check_circle" color="#059669" />  {/* Success */}
<Icon name="error" color="#dc2626" />        {/* Error */}
<Icon name="warning" color="#f59e0b" />      {/* Warning */}
<Icon name="info" color="#3b82f6" />         {/* Info */}

{/* Brand colors */}
<Icon name="palette" color="#6366f1" />      {/* Primary */}
<Icon name="palette" color="#8b5cf6" />      {/* Secondary */}`}}}},a={args:{name:"star",variant:"MD",filled:!1,color:"#000000"},parameters:{docs:{source:{code:`<Icon
  name="star"
  variant="MD"
  filled={false}
  color="#000000"
/>`}}}},c={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"32px"}},e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"12px",fontWeight:"500"}},"Navigation Icons"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"16px"}},e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"home"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"home")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"search"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"search")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"menu"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"menu")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"close"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"close")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"arrow_back"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"arrow_back")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"arrow_forward"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"arrow_forward")))),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"12px",fontWeight:"500"}},"Action Icons"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"16px"}},e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"settings"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"settings")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"favorite"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"favorite")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"notifications"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"notifications")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"account_circle"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"account_circle")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"edit"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"edit")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"delete"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"delete")))),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",marginBottom:"12px",fontWeight:"500"}},"Status Icons"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"16px"}},e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"check_circle",color:"#059669"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"check_circle")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"error",color:"#dc2626"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"error")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"warning",color:"#f59e0b"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"warning")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"info",color:"#3b82f6"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"info")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"help",color:"#6b7280"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"help")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(t,{name:"visibility"}),e.createElement("div",{style:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}},"visibility")))),e.createElement("div",{style:{fontSize:"12px",color:"#6b7280",marginTop:"16px"}},"💡 Material Symbols에서 제공하는 2000+ 아이콘을 모두 사용할 수 있습니다.",e.createElement("br",null),"전체 아이콘 목록은"," ",e.createElement("a",{href:"https://fonts.google.com/icons",target:"_blank",style:{color:"#3b82f6",textDecoration:"none"},rel:"noreferrer"},"Google Fonts Icons"),"에서 확인하세요.")),parameters:{docs:{source:{code:`{/* Navigation */}
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
<Icon name="info" color="#3b82f6" />`}}}};var s,m,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,v,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'flex-end'
    }}>
        <div style={{
        textAlign: 'center'
      }}>
          <Icon name='star' variant='XS' />
          <div style={{
          fontSize: '12px',
          marginTop: '4px',
          color: '#6b7280'
        }}>XS (16px)</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <Icon name='star' variant='SM' />
          <div style={{
          fontSize: '12px',
          marginTop: '4px',
          color: '#6b7280'
        }}>SM (20px)</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <Icon name='star' variant='MD' />
          <div style={{
          fontSize: '12px',
          marginTop: '4px',
          color: '#6b7280'
        }}>MD (24px)</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <Icon name='star' variant='LG' />
          <div style={{
          fontSize: '12px',
          marginTop: '4px',
          color: '#6b7280'
        }}>LG (32px)</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <Icon name='star' variant='XL' />
          <div style={{
          fontSize: '12px',
          marginTop: '4px',
          color: '#6b7280'
        }}>XL (40px)</div>
        </div>
      </div>

      <div style={{
      fontSize: '14px',
      color: '#6b7280'
    }}>
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
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,f,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <div style={{
        textAlign: 'center'
      }}>
          <Icon name='favorite' filled={false} />
          <div style={{
          fontSize: '12px',
          marginTop: '4px'
        }}>Outline</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <Icon name='favorite' filled={true} />
          <div style={{
          fontSize: '12px',
          marginTop: '4px'
        }}>Filled</div>
        </div>
      </div>

      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <div style={{
        textAlign: 'center'
      }}>
          <Icon name='star' filled={false} />
          <div style={{
          fontSize: '12px',
          marginTop: '4px'
        }}>Outline</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <Icon name='star' filled={true} />
          <div style={{
          fontSize: '12px',
          marginTop: '4px'
        }}>Filled</div>
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
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var E,S,z;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: '500'
      }}>Custom Sizes</div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='settings' size={16} />
            <div style={{
            fontSize: '12px',
            marginTop: '4px'
          }}>16px</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='settings' size={24} />
            <div style={{
            fontSize: '12px',
            marginTop: '4px'
          }}>24px</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='settings' size={32} />
            <div style={{
            fontSize: '12px',
            marginTop: '4px'
          }}>32px</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='settings' size={48} />
            <div style={{
            fontSize: '12px',
            marginTop: '4px'
          }}>48px</div>
          </div>
        </div>
      </div>

      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: '500'
      }}>String Sizes</div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='settings' size='1rem' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px'
          }}>1rem</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='settings' size='1.5rem' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px'
          }}>1.5rem</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='settings' size='2rem' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px'
          }}>2rem</div>
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
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var I,b,u;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '12px',
        fontWeight: '500'
      }}>
          Semantic Colors
        </div>
        <div className='flex gap-6 items-center'>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='check_circle' color='#059669' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>Success</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='error' color='#dc2626' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>Error</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='warning' color='#f59e0b' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>Warning</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='info' color='#3b82f6' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>Info</div>
          </div>
        </div>
      </div>

      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '12px',
        fontWeight: '500'
      }}>
          Brand Colors
        </div>
        <div className='flex gap-6 items-center'>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='palette' color='#6366f1' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>Primary</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='palette' color='#8b5cf6' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>Secondary</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='palette' color='#10b981' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>Accent</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='palette' color='#6b7280' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>Neutral</div>
          </div>
        </div>
      </div>

      <div style={{
      fontSize: '14px',
      color: '#6b7280'
    }}>
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
}`,...(u=(b=l.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var T,A,h;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'star',
    variant: 'MD',
    filled: false,
    color: '#000000'
  },
  parameters: {
    docs: {
      source: {
        code: \`<Icon
  name="star"
  variant="MD"
  filled={false}
  color="#000000"
/>\`
      }
    }
  }
}`,...(h=(A=a.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var w,D,_;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '12px',
        fontWeight: '500'
      }}>
          Navigation Icons
        </div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '16px'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='home' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>home</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='search' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>search</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='menu' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>menu</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='close' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>close</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='arrow_back' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>arrow_back</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='arrow_forward' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>
              arrow_forward
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '12px',
        fontWeight: '500'
      }}>
          Action Icons
        </div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '16px'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='settings' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>settings</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='favorite' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>favorite</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='notifications' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>
              notifications
            </div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='account_circle' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>
              account_circle
            </div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='edit' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>edit</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='delete' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>delete</div>
          </div>
        </div>
      </div>

      <div>
        <div style={{
        fontSize: '14px',
        marginBottom: '12px',
        fontWeight: '500'
      }}>
          Status Icons
        </div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '16px'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='check_circle' color='#059669' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>check_circle</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='error' color='#dc2626' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>error</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='warning' color='#f59e0b' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>warning</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='info' color='#3b82f6' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>info</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='help' color='#6b7280' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>help</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Icon name='visibility' />
            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#6b7280'
          }}>visibility</div>
          </div>
        </div>
      </div>

      <div style={{
      fontSize: '12px',
      color: '#6b7280',
      marginTop: '16px'
    }}>
        💡 Material Symbols에서 제공하는 2000+ 아이콘을 모두 사용할 수 있습니다.
        <br />
        전체 아이콘 목록은{' '}
        <a href='https://fonts.google.com/icons' target='_blank' style={{
        color: '#3b82f6',
        textDecoration: 'none'
      }} rel='noreferrer'>
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
}`,...(_=(D=c.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const B=["Default","AllVariants","Filled","CustomSizing","Colors","Playground","CommonIcons"];export{i as AllVariants,l as Colors,c as CommonIcons,o as CustomSizing,n as Default,r as Filled,a as Playground,B as __namedExportsOrder,k as default};
